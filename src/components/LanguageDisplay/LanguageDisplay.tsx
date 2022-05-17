import { Center, Flex, Text } from "@chakra-ui/react";
import { useAtomValue } from "jotai";

import { CurrentCharacter } from "../../atom/LanguageAtom/LanguageAtom";
import {
  parsingConsonantsToIPA,
  parsingVowelsToIPA,
} from "../../modules/LanguageParer/LanguageParser";
import { LanguageRenderer } from "../LanguageRenderer/LanguageRenderer";

export const LanguageDisplay = () => {
  const { consonants, vowels } = useAtomValue(CurrentCharacter);

  return (
    <Flex direction="column" width="100%">
      <Center width="100%">
        <Text>Input</Text>
      </Center>
      <Center>
        <LanguageRenderer
          width={100}
          height={150}
          isDrawingFrame={true}
          consonants={consonants}
          vowels={vowels}
          lineColor="#dddddd"
          lineWidth={2}
        />
      </Center>
      <Text>
        Current:
        {parsingConsonantsToIPA(consonants) + parsingVowelsToIPA(vowels)}
      </Text>
    </Flex>
  );
};
