import { useState } from "react";
import {
  ChakraProvider,
  ColorModeScript,
  Grid,
  GridItem,
  HStack,
} from "@chakra-ui/react";
import "./App.css";
import ColorModeSwitch from "./components/ColorModeSwitch";
import FontSelector from "./components/FontSelector";
import Logo from "./components/Logo";
import { getDynamicTheme } from "./theme";
import SearchInput from "./components/SearchInput";
import NoDefinitionFound from "./components/NoDefinitionFound";
import WordDefinitionShow from "./components/WordDefinitionShow";
import useFetchWordDefinition from "./hooks/useFetchWordDefinition";

function App() {
  const [selectedFont, setSelectedFont] = useState<string>("Open Sans");
  const theme = getDynamicTheme(selectedFont);
  const [searchText, setSearchText] = useState<string>("");

  const { wordDefinition, isLoading, error } =
    useFetchWordDefinition(searchText);

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Grid
        templateAreas={`"nav" "search" "keyword" "noun" "verb" "source"`}
        maxWidth="761px"
        marginX="auto"
        marginY={["23px", "57px"]}
        paddingX="24px"
      >
        <GridItem area="nav" marginBottom={["24px", "51px"]}>
          <HStack justifyContent="space-between">
            <Logo />
            <HStack>
              <FontSelector
                selectedFont={selectedFont}
                onSelectedFont={(font: string) => setSelectedFont(font)}
              />
              <ColorModeSwitch />
            </HStack>
          </HStack>
        </GridItem>
        <GridItem area="search">
          <SearchInput
            onSearch={(newSearchText: string) => setSearchText(newSearchText)}
            isLoading={isLoading}
          />
        </GridItem>
        <GridItem area="keyword">
          {wordDefinition.length > 0 && (
            <WordDefinitionShow wordDefinition={wordDefinition} />
          )}
          {error && <NoDefinitionFound />}
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
