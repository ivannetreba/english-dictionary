import { HStack, Image, Link, Text } from "@chakra-ui/react";
import { WordDefinition } from "../types/types";
import newWindow from "../assets/icon-new-window.svg";

interface Props {
  wordDefinition: WordDefinition[];
}

const Source = ({ wordDefinition }: Props) => {
  if (wordDefinition[0].sourceUrls && wordDefinition[0].sourceUrls.length > 0) {
    return (
      <HStack mt="30px">
        <Text color="gray.100" mr="22px">
          Source
        </Text>
        <Link href={wordDefinition[0].sourceUrls[0]} isExternal>
          {wordDefinition[0].sourceUrls[0]}
        </Link>
        <Image src={newWindow} />
      </HStack>
    );
  }
  return <Text>No source available.</Text>;
};

export default Source;
