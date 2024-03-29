import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { listAnatomy as parts } from "@chakra-ui/anatomy";
import { mode } from "@chakra-ui/theme-tools";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle((props) => ({
  container: {
    listStylePos: "inside",
  },
  item: {
    "&::marker": {
      color: mode("purple.100", "purple.100")(props),
    },
  },
}));

export const listTheme = defineMultiStyleConfig({ baseStyle });
