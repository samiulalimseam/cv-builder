// CoverLetterInfo.js
import { Box, Flex, Heading, Image, List, ListItem } from '@chakra-ui/react';
import { FaThinkPeaks } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const CoverLetterInfo = () => {
  return (
    <Flex 
      direction={{ base: 'column', md: 'row' }} 
      alignItems="center" 
      justifyContent="center" 
      p={8}
      bg="gray.50"
    >
      <Box maxW="lg" mr={{ md: 8 }}>
        <Heading as="h2" size="xl" mb={4}>
          Why are cover letters needed?
        </Heading>
        <List spacing={3} textAlign="left">
          <ListItem>
            A cover letter, covering letter, motivation letter, motivational letter, or a letter of motivation is a letter of introduction attached to, or accompanying another document such as a résumé or a curriculum vitae.
          </ListItem>
          <ListItem>
            Job seekers frequently send a cover letter along with their curriculum vitae or applications for employment as a way of introducing themselves to potential employers and explaining their suitability for the desired positions. Employers may look for individualized and thoughtfully written cover letters as one method of screening out applicants who are not sufficiently interested in their positions or who lack necessary basic skills.
          </ListItem>
        </List>
      </Box>
      <Box mt={{ base: 8, md: 0 }}>
       <MdEmail size={200} />
      </Box>
    </Flex>
  );
}

export default CoverLetterInfo;
