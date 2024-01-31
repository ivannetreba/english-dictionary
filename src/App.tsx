import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import "./App.css";
import ColorModeSwitch from "./components/ColorModeSwitch";
import FontSelector from "./components/FontSelector";
import { useState } from "react";
import Logo from "./components/Logo";

function App() {
  const [selectedFont, setSelectedFont] = useState<string>("");

  return (
    <Grid templateAreas={`"nav" "search" "keyword" "noun" "verb" "source"`}>
      <GridItem area="nav">
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
      <GridItem area="search">search</GridItem>
      <GridItem area="keyword">word</GridItem>
      <GridItem area="noun">noun</GridItem>
      <GridItem area="verb">verb</GridItem>
      <GridItem area="source">source</GridItem>
    </Grid>
  );
}

export default App;
