import { Heading, Text, Flex } from "@chakra-ui/react";
import { WordDefinition } from "../types/types";
import PlaySound from "./PlaySound";

interface Props {
  wordDefinition: WordDefinition[];
}

const Keyword = ({ wordDefinition }: Props) => {
  return (
    <Flex justifyContent="space-between" mb={["38px", "53px"]}>
      <div>
        <Heading as="h1" fontSize={["32px", "64px"]} mb="10px">
          {wordDefinition[0].word}
        </Heading>
        <Text color="purple.100">{wordDefinition[0].phonetic}</Text>
      </div>
      {wordDefinition[0].phonetics[0].audio && (
        <PlaySound wordDefinition={wordDefinition} />
      )}
    </Flex>
  );
};

export default Keyword;
