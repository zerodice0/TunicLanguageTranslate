import { Center, Flex, Text } from "@chakra-ui/react";
import { useAtomValue } from "jotai";

import { CurrentTunicCharacter } from "../../atom/TunicLanguageAtom/TunicLanguageAtom";
import {
  parsingConsonantsToIPA,
  parsingVowelsToIPA,
} from "../../modules/LanguageParer/LanguageParser";
import { TunicCharacterRenderer } from "../TunicCharacterRenderer/TunicCharacterRenderer";

export const CurrentTunicCharacterDisplay = () => {
  const { consonants, vowels, isReverse } = useAtomValue(CurrentTunicCharacter);

  return (
    <Flex direction="column" width="100%">
      <Center width="100%">
        <Text>Input</Text>
      </Center>
      <Center>
        <TunicCharacterRenderer
          width={100}
          height={150}
          isDrawingFrame={true}
          isReversePoint={isReverse}
          consonants={consonants}
          vowels={vowels}
          lineColor="#dddddd"
          lineWidth={2}
        />
      </Center>
      <Text>
        Current:
        {isReverse
          ? `${parsingVowelsToIPA(vowels)}${parsingConsonantsToIPA(consonants)}`
          : `${parsingConsonantsToIPA(consonants)}${parsingVowelsToIPA(
              vowels
            )}`}
      </Text>
    </Flex>
  );
};
