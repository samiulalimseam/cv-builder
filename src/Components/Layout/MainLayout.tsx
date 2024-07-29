import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";

const MainLayout = () => {
  return (
    <Flex position={"relative"} height={"100%"} gap={4}>
      <Flex
        direction={"column"}
        width={"100%"}
        height={"100%"}
      >
        <Box 
        position={"sticky"}
        top={"0"}
        zIndex={"sticky"}
        width={"100%"}
        height={"8%"}>
          <TopBar />
        </Box>
        <Box backgroundColor={"#F5F7F8"} width={"100%"} height={"100%"}>
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  );
};

export default MainLayout;
