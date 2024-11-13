import { BellIcon } from "@chakra-ui/icons";

import { Flex } from "@chakra-ui/react";
const CartWidget = () => {
  return (
    <Flex
      alignItems={"center"}
      marginRight={"40px"}
      justifyContent={"space-between"}
      width={"20px"}
    >
      <BellIcon />
      100
    </Flex>
  );
};

export default CartWidget;
