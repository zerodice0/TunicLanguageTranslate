import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useAtomValue } from "jotai";

import { CurrentTunicWord } from "./atom/TunicLanguageAtom/TunicLanguageAtom";
import { CurrentTunicCharacterDisplay } from "./components/CurrentTunicCharacterDisplay/CurrentTunicCharacterDisplay";
import { TunicCharacterRenderer } from "./components/TunicCharacterRenderer/TunicCharacterRenderer";
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
          <Flex direction="row" width="100%" justifyContent="center">
            {word.map((character, index) => {
              return (
                <TunicCharacterRenderer
                  key={index}
                  width={40}
                  height={70}
                  consonants={character.consonants}
                  vowels={character.vowels}
                  lineColor="#D5D5D5"
                  isDrawingFrame={false}
                />
              );
            })}
          </Flex>
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
