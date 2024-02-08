import {
  Button,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";
import arrow from "../assets/icon-arrow-down.svg";

interface Props {
  onSelectedFont: (font: string) => void;
  selectedFont: string;
}

const FontSelector = ({ onSelectedFont, selectedFont }: Props) => {
  const bg = useColorModeValue("white", "dark.200");
  const boxShadow = useColorModeValue(
    "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    "#A445ED 0px 7px 29px 0px"
  );

  const sortFonts = [
    { value: "Open Sans", label: "Sans Serif" },
    { value: "Source Serif 4", label: "Serif" },
    { value: "Roboto Mono", label: "Mono" },
  ];

  const currentOrder = sortFonts.find((font) => font.value === selectedFont);

  return (
    <Menu placement="bottom-end">
      <MenuButton
        bg="transparent"
        _hover={{ bg: "transparent" }}
        as={Button}
        rightIcon={<Image src={arrow} boxSize={3.5} />}
      >
        {currentOrder?.label || "Sans Serif"}
      </MenuButton>
      <MenuList
        border="none"
        boxShadow={boxShadow}
        p="6"
        rounded="md"
        bg={bg}
        borderRadius="3xl"
      >
        {sortFonts.map((font) => (
          <MenuItem
            maxW="180px"
            onClick={() => onSelectedFont(font.value)}
            key={font.value}
            value={font.label}
            _hover={{ color: "purple.100", bg: "transparent" }}
            _focus={{
              outline: "none",
              bg: "transparent",
            }}
            fontFamily={font.value}
            fontWeight="bold"
            fontSize="18px"
          >
            {font.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default FontSelector;
