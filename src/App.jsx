import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/NavBar/Navbar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
function App() {
  return (
    <ChakraProvider>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a mi proyecto de React" />
    </ChakraProvider>
  );
}

export default App;
