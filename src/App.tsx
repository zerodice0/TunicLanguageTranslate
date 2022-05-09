import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";

import { LanguageInput } from "./components/LanguageInput/LanguageInput";
import { LanguageRenderer } from "./components/LanguageRenderer/LanguageRenderer";
import {
  parsingConsonantsToIPA,
  parsingVowelsToIPA,
} from "./modules/LanguageParer/LanguageParser";

export default function App() {
  const [inputLanguage, setInputLanguage] = useState<{
    consonants: number[];
    vowels: number[];
  }>({
    consonants: [],
    vowels: [],
  });

  return (
    <Box textAlign="center">
      <Heading>Tunic Language Translator</Heading>
      <Flex align="center" justify="center">
        <Flex direction="column" width="100%">
          <Center width="100%">
            <Text>Input</Text>
          </Center>
          <Center>
            <LanguageRenderer
              width={100}
              height={150}
              isDrawingFrame={true}
              consonants={inputLanguage.consonants}
              vowels={inputLanguage.vowels}
              defaultLineColor="#dddddd"
              hoverLineColor="#1a202c"
              defaultLineWidth={2}
              hoverLineWidth={2}
            />
          </Center>
          <Text>
            Current:
            {parsingConsonantsToIPA(inputLanguage.consonants) +
              parsingVowelsToIPA(inputLanguage.vowels)}
          </Text>
          <LanguageInput />
        </Flex>
        <Center width="100%">
          <Text>Result</Text>
        </Center>
      </Flex>
    </Box>
  );
}
