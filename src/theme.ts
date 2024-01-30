import { extendTheme, ThemeConfig, ComponentStyleConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false, 
};

const SwitchStyle: ComponentStyleConfig = {
  baseStyle: (props) => ({
    track: {
      bg: "gray.100",
      _checked: {
        bg: 'purple.100',
      },
    },
  }),
};

const theme = extendTheme({
  config,
  fontSizes: {
    xs: "12px", // example of a smaller size
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px" // example of a larger size
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
    sm: '30em', // 480px
    md: '48em', // 768px
    lg: '62em', // 992px
    xl: '80em', // 1280px
    '2xl': '96em', // 1536px
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
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'dark.100' : 'white',
      },
    }),
  },
  components: {
    Switch: SwitchStyle,
  },
});

export default theme;
