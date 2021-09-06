import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import Layout from "./components/Layout";
import ConnectButton from "./components/ConnectButton";
import AccountModal from "./components/AccountModal";
import Count from "./components/Count";

function App() {
  // Pull the disclosure methods
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ChakraProvider>
      <Layout>
        // Our connect button will only handle opening
        <ConnectButton handleOpenModal={onOpen} />
        // Our Account modal will handle open state & closing
        <AccountModal isOpen={isOpen} onClose={onClose} />
        <Count />
      </Layout>
    </ChakraProvider>
  );
}

export default App;