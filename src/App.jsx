import React from 'react';
import React, { useState } from "react";
import { ChakraProvider } from '@chakra-ui/react';
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListCantainer';


const App = () => {

  return (
    <ChakraProvider>
      <NavBar />
      <ItemListContainer greeting = "Buenas tardes"/>
    </ChakraProvider>
  );
};
export default App
