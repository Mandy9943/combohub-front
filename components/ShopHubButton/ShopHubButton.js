import { Center, useDisclosure } from "@chakra-ui/react";
import BuyListModal from "./BuyListModal";

const ShopHubButton = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Center my={5}>
        <button className="default-btn" onClick={onOpen}>
          {" "}
          Hacer lista de compra
        </button>
      </Center>

      <BuyListModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ShopHubButton;
