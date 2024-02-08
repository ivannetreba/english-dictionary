import { WordDefinition } from "../types/types";
import Keyword from "./Keyword";
import Noun from "./Noun";
import Verb from "./Verb";
import Line from "./Line";
import Source from "./Source";

interface Props {
  wordDefinition: WordDefinition[];
}

const WordDefinitionShow = ({ wordDefinition }: Props) => {
  return (
    <>
      <Keyword wordDefinition={wordDefinition} />
      <Noun wordDefinition={wordDefinition} />
      {wordDefinition[0].meanings[1] && (
        <Verb wordDefinition={wordDefinition} />
      )}
      <Line />
      <Source wordDefinition={wordDefinition} />
    </>
  );
};

export default WordDefinitionShow;
