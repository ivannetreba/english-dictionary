import { Box, HStack, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { Definition } from "../types/types";

interface Props {
  definitions: Definition[];
}
const Meaning = ({ definitions }: Props) => {
  return (
    <>
      <Text mb="20px" color="gray.100" fontSize="16px">
        Meaning
      </Text>
      <UnorderedList fontSize="15px" styleType="none" mb="15px">
        {definitions.slice(0, 3).map((def, index) => (
          <HStack key={index} alignItems="top">
            <Box
              mt="9px"
              mr="17px"
              w="5px"
              h="5px"
              borderRadius="50px"
              bg="purple.100"
            ></Box>
            <ListItem mb="15px">{def.definition}</ListItem>
          </HStack>
        ))}
      </UnorderedList>
    </>
  );
};

export default Meaning;
