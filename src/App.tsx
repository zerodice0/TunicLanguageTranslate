import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";

import { CurrentTunicCharacterDisplay } from "./components/CurrentTunicCharacterDisplay/CurrentTunicCharacterDisplay";
import { TunicCharacterVirtualKeyboard } from "./components/\bTunicCharacterVirtualKeyboard/TunicCharacterVirtualKeyboard";

export default function App() {
  return (
    <Box textAlign="center">
      <Heading>Tunic Language Translator</Heading>
      <Flex align="center" justify="center">
        <Flex direction="column" width="100%">
          <CurrentTunicCharacterDisplay />
          <TunicCharacterVirtualKeyboard />
        </Flex>
        <Center width="100%">
          <Text>Result</Text>
        </Center>
      </Flex>
    </Box>
  );
}
