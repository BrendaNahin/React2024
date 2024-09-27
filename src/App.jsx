import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListCantainer";

const App = () => {
  return (
    <ChakraProvider>
  <NavBar/>
  <ItemListContainer greetin= "Bienvenidos a mi proyecto React"/>
    </ChakraProvider>
  );
};

export default App;
