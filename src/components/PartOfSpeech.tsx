import { HStack, Heading } from "@chakra-ui/react";
import Line from "./Line";

interface Props {
  partOfSpeech: string;
}
const PartOfSpeech = ({ partOfSpeech }: Props) => {
  return (
    <HStack mb="35px">
      <Heading as="h3" mr="15px" fontStyle="italic" fontSize={["18px", "24px"]}>
        {partOfSpeech}
      </Heading>
      <Line />
    </HStack>
  );
};

export default PartOfSpeech;
