import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useAtomValue } from "jotai";

import { CurrentTunicWord } from "./atom/TunicLanguageAtom/TunicLanguageAtom";
import { TunicCharacter } from "./atom/TunicLanguageAtom/TunicLanguageAtom.model";
import { CurrentTunicCharacterDisplay } from "./components/CurrentTunicCharacterDisplay/CurrentTunicCharacterDisplay";
import { TunicCharacterRenderer } from "./components/TunicCharacterRenderer/TunicCharacterRenderer";
import { TunicCharacterVirtualKeyboard } from "./components/\bTunicCharacterVirtualKeyboard/TunicCharacterVirtualKeyboard";
import {
  parsingConsonantsToIPA,
  parsingVowelsToIPA,
} from "./modules/LanguageParer/LanguageParser";

export default function App() {
  const word = useAtomValue(CurrentTunicWord);

  const parsingCharacter = (character: TunicCharacter) => {
    let result = "";

    if (character.consonants.length === 0 && character.vowels.length === 0) {
      result = " ";
    } else if (character.isReverse) {
      result =
        parsingVowelsToIPA(character.vowels) +
        parsingConsonantsToIPA(character.consonants);
    } else {
      result =
        parsingConsonantsToIPA(character.consonants) +
        parsingVowelsToIPA(character.vowels);
    }

    return result;
  };

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
                  isReversePoint={character.isReverse}
                  consonants={character.consonants}
                  vowels={character.vowels}
                  lineColor="#D5D5D5"
                  isDrawingFrame={false}
                />
              );
            })}
          </Flex>
          <Text>{word.map(character => parsingCharacter(character))}</Text>
        </Flex>
      </Flex>
    </Box>
  );
}
