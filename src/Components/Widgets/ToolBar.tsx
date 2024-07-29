import { Box, Button, Flex, Slider, SliderFilledTrack, SliderThumb, SliderTrack } from "@chakra-ui/react";
import { Draggable, Droppable } from 'react-beautiful-dnd';
import tools from "../../data/tools.json";
const ToolBar = ({ setGap , gap, handleDownloadCv }: {
  setGap: (e: number) => void;
  gap: number;
  handleDownloadCv: () => void;
}) => {

  return (
    <Flex gap={2} direction={"column"} width={"100%"}>
      <Box mt={10} m={"auto"} width={"80%"}>
        Gap
        <Slider
          value={gap}
          step={2}
          max={10}
          min={2}
          onChange={(e) => setGap(e)}
          aria-label="slider-ex-2"
          colorScheme="pink"
          defaultValue={30}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>

      <Box display={"flex"} gap={2} flexDirection={"column"} margin={2}>
        <Droppable droppableId="toolBar" type="TOOLS">
          {(provided) => (
            <Box
              ref={provided.innerRef}
              {...provided.droppableProps}
              border="1px solid #E2E8F0"
              padding="2"
              borderRadius="lg"
            >
              {tools.map((tool, index) => (
                <Draggable key={tool.id} draggableId={tool.id} index={index}>
                  {(provided) => (
                    <Box
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      padding={2}
                      marginBottom={2}
                      cursor={"pointer"}
                      border={"1px dashed lightGray"}
                      borderRadius={"lg"}
                      bg="white"
                    >
                      <h2>{tool.name}</h2>
                      <p>{tool.description}</p>
                    </Box>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
        <Button onClick={handleDownloadCv}>Download CV</Button>
      </Box>
    </Flex>
  );
};

export default ToolBar;
