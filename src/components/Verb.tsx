import { Text } from "@chakra-ui/react";
import { WordDefinition } from "../types/types";
import Meaning from "./Meaning";
import PartOfSpeech from "./PartOfSpeech";

interface Props {
  wordDefinition: WordDefinition[];
}

const Verb = ({ wordDefinition }: Props) => {
  const partOfSpeech = wordDefinition[0].meanings[1].partOfSpeech;
  const definitions = wordDefinition[0].meanings[1].definitions;

  return (
    <div>
      <PartOfSpeech partOfSpeech={partOfSpeech} />
      <Meaning definitions={definitions} />
      {definitions[0].example && (
        <Text ml="46px" color="gray.100" mb="30px">
          {definitions[0].example}
        </Text>
      )}
    </div>
  );
};

export default Verb;
