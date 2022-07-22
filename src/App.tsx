import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useAtom, useAtomValue } from "jotai";

import {
  CurrentTunicCharacter,
  CurrentTunicWord,
} from "./atom/TunicLanguageAtom/TunicLanguageAtom";
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

  const [currentTunicWord, setCurrentTunicWord] = useAtom(CurrentTunicWord);
  const [currentTunicCharacter, setCurrentTunicCharacter] = useAtom(
    CurrentTunicCharacter
  );

  const enterCharacter = () => {
    setCurrentTunicWord([...currentTunicWord, currentTunicCharacter]);
    setCurrentTunicCharacter({
      consonants: [],
      vowels: [],
      isReverse: false,
    });
  };

  const enterSpace = () => {
    setCurrentTunicWord([...currentTunicWord, { consonants: [], vowels: [] }]);
  };

  const enterBackspace = () => {
    setCurrentTunicWord(currentTunicWord.slice(0, -1));
  };

  const linkToIpaReader = () => {
    window.open(
      `http://ipa-reader.xyz/?text=${word
        .map(character => parsingCharacter(character))
        .join("")}`
    );
  };

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
    <Flex direction="column" textAlign="center">
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
      <Flex
        direction="row"
        width="100%"
        justifyContent="center"
        align="center"
        gap={5}
        marginTop="5"
      >
        <Button onClick={enterCharacter}>Enter</Button>
        <Button onClick={enterSpace}>Space</Button>
        <Button onClick={enterBackspace}>Backspace</Button>
        <Button onClick={linkToIpaReader}>Link to ipa-reader.xyz</Button>
      </Flex>
    </Flex>
  );
}
