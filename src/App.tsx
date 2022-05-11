import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";

import { LanguageDisplay } from "./components/LanguageDisplay/LanguageDisplay";
import { LanguageInput } from "./components/LanguageInput/LanguageInput";
import { LanguageContextProvider } from "./context/LanguageContext/LanguageContext";

export default function App() {
  return (
    <LanguageContextProvider>
      <Box textAlign="center">
        <Heading>Tunic Language Translator</Heading>
        <Flex align="center" justify="center">
          <Flex direction="column" width="100%">
            <LanguageDisplay />
            <LanguageInput />
          </Flex>
          <Center width="100%">
            <Text>Result</Text>
          </Center>
        </Flex>
      </Box>
    </LanguageContextProvider>
  );
}
