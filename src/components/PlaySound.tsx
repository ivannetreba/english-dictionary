import { useRef } from "react";
import { Image, Box } from "@chakra-ui/react";
import iconPlay from "../assets/icon-play.svg";
import { WordDefinition } from "../types/types";

interface Props {
  wordDefinition: WordDefinition[];
}

const PlaySound = ({ wordDefinition }: Props) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <Box cursor="pointer">
      <audio
        ref={audioRef}
        src={wordDefinition[0].phonetics[0].audio}
        preload="none"
      />
      <Image src={iconPlay} onClick={playAudio} />
    </Box>
  );
};

export default PlaySound;
