import { HStack, Text } from "@chakra-ui/react";
import { WordDefinition } from "../types/types";
import Meaning from "./Meaning";
import PartOfSpeech from "./PartOfSpeech";

interface Props {
  wordDefinition: WordDefinition[];
}

const Noun = ({ wordDefinition }: Props) => {
  const partOfSpeech = wordDefinition[0].meanings[0].partOfSpeech;
  const definitions = wordDefinition[0].meanings[0].definitions;
  const synonym = wordDefinition[0].meanings[0].synonyms[0];

  return (
    <div>
      <PartOfSpeech partOfSpeech={partOfSpeech} />
      <Meaning definitions={definitions} />
      {synonym && (
        <HStack mb="30px" fontSize="16px" spacing="22px">
          <Text color="gray.100">Synonyms</Text>
          <Text
            color="purple.100"
            fontWeight="bold"
            _hover={{ textDecoration: "underline" }}
          >
            {synonym}
          </Text>
        </HStack>
      )}
    </div>
  );
};

export default Noun;
