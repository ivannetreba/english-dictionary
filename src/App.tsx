import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <Grid templateAreas={`"nav" "search" "keyword" "noun" "verb" "source"`}>
      <GridItem area="nav">nav</GridItem>
      <GridItem area="search">search</GridItem>
      <GridItem area="keyword">word</GridItem>
      <GridItem area="noun">noun</GridItem>
      <GridItem area="verb">verb</GridItem>
      <GridItem area="source">source</GridItem>
    </Grid>
  );
}

export default App;
