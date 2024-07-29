import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import RenderWidgets from "../Components/Widgets/RenderWidgets";
import tools from "../data/tools.json";
import { isMobile, isTablet } from "react-device-detect";
import { useParams } from "react-router-dom";
import { useDataContext } from "../Context/DataContext";
const reorder = (list : any[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,
  background: isDragging ? "lightGray" : "whiteSmoke",
  ...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250,
});

function Design() {
  const {templateId} = useParams()
  const {data} =  useDataContext()
  const boardData = data?.find((item) => item.id == Number(templateId))?.data 
  const [boardItems, setBoardItems] = useState(boardData?.map((item) => ({ ...item, key: crypto.randomUUID() })) || []);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showSidebar, setShowSidebar] = useState(true);

  function onDragEnd(result) {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    // Sidebar to board drop
    if (
      source.droppableId === "sidebar" &&
      destination.droppableId === "board"
    ) {
      const item = tools[source.index];
      setBoardItems((prev) => {
        const newArray = [...prev];
        newArray.splice(destination.index, 0, {
          ...item,
          key: crypto.randomUUID(),
        });
        return newArray;
      });
    } else if (
      source.droppableId === "board" &&
      destination.droppableId === "board"
    ) {
      const items = reorder(boardItems, source.index, destination.index);
      setBoardItems(items);
    }
  }

  const mutationProps =  {setBoardItems, boardItems, templateId}

  return (
    <Box w={"full"} style={{ paddingBlock: "5px" }} p={4}>
      <Text fontWeight={"bold"} fontSize="40px">
        Design
      </Text>
        <Button onClick={()=>{
          setShowSidebar(!showSidebar)
        }}>
          {showSidebar ? "Hide Sidebar" : "Show Sidebar"}
        </Button>
      <Flex justifyContent={"start"} flexDir={isMobile || isTablet ? "column" : "row"} marginTop={4}>
        <DragDropContext onDragEnd={onDragEnd}>
          {/* Sidebar */}
          {
            showSidebar && ( <Box width={"20%"}>
              <Droppable droppableId="sidebar" isDropDisabled={true}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}
                    {...provided.droppableProps}
                  >
                    {tools.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={getItemStyle(
                              snapshot.isDragging,
                              provided.draggableProps.style
                            )}
                          >
                            {item?.name}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </Box>)

          }
         

          {/* Main Board */}
          <Box display={"flex"}  justifyContent={"center"}>
            <Droppable  droppableId="board">
              {(provided, snapshot) => (
                <Box
               
                  bgColor={"white"}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {boardItems?.map((item, index) => (
                    <Draggable
                      key={item.key}
                      draggableId={item.key}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Box
                            padding={2}
                            border={
                              selectedItem?.key === item?.key
                                ? "2px dashed lightGray"
                                : "2px dashed transparent"
                            }
                            borderRadius={"lg"}
                            onClick={() => {
                              setSelectedItem(item);
                            }}
                            position={"relative"}
                            width={"80%"}
                            mx={10}
                          >
                            <Button
                              display={
                                item?.key == selectedItem?.key
                                  ? "block"
                                  : "none"
                              }
                              borderRadius={"full"}
                              size={"xs"}
                              position={"absolute"}
                              right={-5}
                              top={-5}
                              onClick={() =>
                                setBoardItems((prev) =>
                                  prev.filter((i) => i.key !== item.key)
                                )
                              }
                            >
                              x
                            </Button>

                            <RenderWidgets
                              gap={4}
                              id={item?.id}
                              key={item?.key}
                              mutationProps={mutationProps}
                              property={boardItems}
                            />
                          </Box>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </Box>
              )}
            </Droppable>
          </Box>
        </DragDropContext>
      </Flex>
    </Box>
  );
}

export default Design;
