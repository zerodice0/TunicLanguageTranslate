import {
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useAtom } from "jotai";

import { CurrentTunicCharacter } from "../../atom/TunicLanguageAtom/TunicLanguageAtom";
import { ToggleButton } from "../ToggleButton/ToggleButton";

export const TunicCharacterVirtualKeyboard = () => {
  const enterLanguage = () => {
    console.log("Enter Language");
  };

  const enterSpace = () => {
    console.log("Enter Space");
  };

  return (
    <form>
      <Flex direction="row">
        <Consonants />
        <Vowels />
      </Flex>
      <Flex direction="row" marginTop="5" gap={5}>
        <Spacer />
        <Button onClick={enterLanguage}>Enter</Button>
        <Button onClick={enterSpace}>Space</Button>
        <Spacer />
      </Flex>
    </form>
  );
};

const Consonants = () => {
  const [current, setCurrent] = useAtom(CurrentTunicCharacter);

  return (
    <Flex direction="column" width="100%" marginTop="5">
      <Text>Consonants</Text>
      {[0, 1].map(row => (
        <Grid key={row} templateColumns="repeat(3, 1fr)" marginTop="5">
          {[0, 1, 2].map(consonant => (
            <GridItem key={consonant} width="100%">
              <Center padding={5}>
                <ToggleButton
                  normal={{
                    distance: 4,
                    blur: 10,
                    color: "#1A202C",
                    lineColor: "#D5D5D5",
                    intensity: 30,
                  }}
                  hovered={{
                    distance: 3,
                    blur: 20,
                    color: "#D5D5D5",
                    lineColor: "#1A202C",
                    intensity: 60,
                  }}
                  toggled={{
                    distance: 1,
                    blur: 10,
                    color: "#D5D5D5",
                    lineColor: "#1A202C",
                    intensity: 10,
                    isReverseShadow: true,
                  }}
                  consonants={[consonant + row * 3]}
                  onClick={isToggled => {
                    if (isToggled) {
                      setCurrent({
                        consonants: current.consonants.filter(
                          _consonant => _consonant !== consonant + row * 3
                        ),
                        vowels: current.vowels,
                      });
                    } else {
                      if (!current.consonants.includes(consonant + row * 3)) {
                        setCurrent({
                          consonants: [
                            ...current.consonants,
                            consonant + row * 3,
                          ],
                          vowels: current.vowels,
                        });
                      }
                    }
                  }}
                />
              </Center>
            </GridItem>
          ))}
        </Grid>
      ))}
    </Flex>
  );
};

const Vowels = () => {
  const [current, setCurrent] = useAtom(CurrentTunicCharacter);

  return (
    <Flex direction="column" width="100%" marginTop="5">
      <Text>Vowels</Text>
      {[0, 1].map(row => (
        <Grid key={row} templateColumns="repeat(3, 1fr)" marginTop="5">
          {[0, 1, 2].map(vowel => (
            <GridItem key={vowel} width="100%">
              <Center padding={5}>
                <ToggleButton
                  normal={{
                    distance: 4,
                    blur: 10,
                    color: "#1A202C",
                    lineColor: "#dddddd",
                    intensity: 30,
                  }}
                  hovered={{
                    distance: 3,
                    blur: 20,
                    color: "#dddddd",
                    lineColor: "#1A202C",
                    intensity: 60,
                  }}
                  toggled={{
                    distance: 1,
                    blur: 10,
                    color: "#D5D5D5",
                    lineColor: "#1A202C",
                    intensity: 10,
                    isReverseShadow: true,
                  }}
                  vowels={[vowel + row * 3]}
                  onClick={isToggled => {
                    if (isToggled) {
                      setCurrent({
                        consonants: current.consonants,
                        vowels: current.vowels.filter(
                          _vowel => _vowel !== vowel + row * 3
                        ),
                      });
                    } else {
                      if (!current.vowels.includes(vowel + row * 3)) {
                        setCurrent({
                          consonants: current.consonants,
                          vowels: [...current.vowels, vowel + row * 3],
                        });
                      }
                    }
                  }}
                />
              </Center>
            </GridItem>
          ))}
        </Grid>
      ))}
    </Flex>
  );
};
