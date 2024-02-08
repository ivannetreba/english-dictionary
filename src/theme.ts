import { extendTheme, ThemeConfig, ComponentStyleConfig } from "@chakra-ui/react";
import { listTheme } from "./styles/listTheme";

interface StyleFunctionProps {
  colorMode: 'light' | 'dark';
  theme: ThemeConfig;
}

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const SwitchStyle: ComponentStyleConfig = {
  baseStyle: () => ({
    track: {
      bg: "gray.100",
      _checked: {
        bg: 'purple.100',
      },
    },
  }),
};

export const getDynamicTheme = (selectedFont: string) => {
  return extendTheme({
    config,
    fonts: {
      heading: selectedFont, 
      body: selectedFont,    
    },
    fontSizes: {
      xs: "12px", 
      sm: "14px",
      md: "16px",
      lg: "18px",
      xl: "20px" 
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      dark: {
        100: '#050505',
        200: '#1F1F1F',
        300: '#2D2D2D',
        400: '#3A3A3A',
      },
      gray: {
        100: '#757575',
        200: '#E9E9E9',
        300: '#F4F4F4',
        400: '#FFF',
      },
      red: "#FF5252",
      purple: {
        100: "#A445ED",
      },
    },
    breakpoints: {
      sm: '30em',
      md: '48em',
      lg: '62em',
      xl: '80em',
      '2xl': '96em',
    },
    semanticTokens: {
      colors: {
        error: 'red',
        text: {
          default: 'dark.300',
          _dark: 'white',
        },
      },
    },
    styles: {
      global: (props: StyleFunctionProps) => ({
        body: {
          bg: props.colorMode === 'dark' ? 'dark.100' : 'white',
        },
      }),
    },
    components: {
      Switch: SwitchStyle,
      List: listTheme,
    },
  });
};
