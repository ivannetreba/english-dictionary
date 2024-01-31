import {
  Button,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import arrow from "../assets/icon-arrow-down.svg";

interface Props {
  onSelectedFont: (font: string) => void;
  selectedFont: string;
}

const FontSelector = ({ onSelectedFont, selectedFont }: Props) => {
  const sortFonts = [
    { value: "Sans Serif", label: "Sans Serif" },
    { value: "Serif", label: "Serif" },
    { value: "Mono", label: "Mono" },
  ];

  const currentOrder = sortFonts.find((font) => font.value === selectedFont);

  return (
    <Menu>
      <MenuButton
        bg="transparent"
        _hover={{ bg: "transparent" }}
        as={Button}
        rightIcon={<Image src={arrow} boxSize={3.5} />}
      >
        {currentOrder?.label || "Sans Serif"}
      </MenuButton>
      <MenuList>
        {sortFonts.map((font) => (
          <MenuItem
            onClick={() => onSelectedFont(font.value)}
            key={font.value}
            value={font.label}
          >
            {font.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default FontSelector;
