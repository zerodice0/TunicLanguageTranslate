import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useAtomValue } from "jotai";

import { CurrentTunicWord } from "./atom/TunicLanguageAtom/TunicLanguageAtom";
import { CurrentTunicCharacterDisplay } from "./components/CurrentTunicCharacterDisplay/CurrentTunicCharacterDisplay";
import { TunicCharacterVirtualKeyboard } from "./components/\bTunicCharacterVirtualKeyboard/TunicCharacterVirtualKeyboard";
import {
  parsingConsonantsToIPA,
  parsingVowelsToIPA,
} from "./modules/LanguageParer/LanguageParser";

export default function App() {
  const word = useAtomValue(CurrentTunicWord);

  return (
    <Box textAlign="center">
      <Heading>Tunic Language Translator</Heading>
      <Flex align="center" justify="center">
        <Flex direction="column" width="100%">
          <CurrentTunicCharacterDisplay />
          <TunicCharacterVirtualKeyboard />
        </Flex>
        <Flex direction="column" width="100%">
          <Text>Result</Text>
          <Text>
            {word.map(character =>
              character.consonants.length === 0 && character.vowels.length === 0
                ? " "
                : parsingConsonantsToIPA(character.consonants) +
                  parsingVowelsToIPA(character.vowels)
            )}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
