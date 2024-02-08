import comfusedEmoji from "../assets/confused.png";
import { Box, Grid, Heading, Image, Text } from "@chakra-ui/react";

const NoDefinitionFound = () => {
  return (
    <Grid justifyItems="center">
      <Box mt="80px" mb=" 43px">
        <Image src={comfusedEmoji} w="64px" />
      </Box>
      <Heading as="h3" fontSize="20px" mb="25px">
        No Definitions Found
      </Heading>
      <Text color="gray.100">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </Text>
    </Grid>
  );
};

export default NoDefinitionFound;
