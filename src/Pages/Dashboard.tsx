import { Box, Button, Flex, Heading, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import Resumes from "../Components/Resumes";
import CoverLetterInfo from "../Components/CoverLetter";
import Create from "./Create";

const tabItems = [
  { name: "Resume", route: "/" },
  { name: "Cover Letter", route: "/" },
];

const Dashboard = () => {
  return (
    <Box p={4}>
      <Stack marginTop={4} spacing={4}>
        <Text fontWeight={"bold"} fontSize="40px">Dashboard</Text>
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            {tabItems.map((item) => (
              <Tab fontSize={"18px"} fontWeight={"bold"} key={item.name}>{item.name}</Tab>
            ))}

           <Tab fontSize={"18px"} fontWeight={"bold"} >Create New</Tab>
           
          </TabList>
          <TabPanels>
            <TabPanel>
            <Resumes />
            </TabPanel>
            <TabPanel>
             <CoverLetterInfo />
            </TabPanel>
            <TabPanel>
             <Create />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </Box>
  );
};

export default Dashboard;
