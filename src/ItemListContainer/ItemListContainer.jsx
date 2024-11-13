import { Flex } from "@chakra-ui/react";
const ItemListContainer = ({ greeting }) => {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      height={"80vh"}
      fontSize={"3rem"}
    >
      {greeting}
    </Flex>
  );
};

export default ItemListContainer;
