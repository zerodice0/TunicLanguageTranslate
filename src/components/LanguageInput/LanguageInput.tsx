import { Button, Center, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { useContext } from "react";

import { LanguageContext } from "../../context/LanguageContext/LanguageContext";
import { ToggleButton } from "../ToggleButton/ToggleButton";

export const LanguageInput = () => {
  const enterLanguage = () => {
    console.log("Enter Language");
  };

  return (
    <form>
      <Flex direction="row">
        <Consonants />
        <Vowels />
      </Flex>
      <Center marginTop="5">
        <Button onClick={enterLanguage}>Enter</Button>
      </Center>
    </form>
  );
};

const Consonants = () => {
  const { consonants, setConsonants } = useContext(LanguageContext);

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
                    color: "#1a202c",
                    lineColor: "#dddddd",
                    intensity: 30,
                  }}
                  hover={{
                    distance: 3,
                    blur: 20,
                    color: "#dddddd",
                    lineColor: "#1a202c",
                    intensity: 60,
                  }}
                  checked={{
                    distance: 1,
                    blur: 10,
                    color: "#D5D5D5",
                    lineColor: "#1a202c",
                    intensity: 10,
                    isReverseShadow: true,
                  }}
                  consonants={[consonant + row * 3]}
                  onClick={isToggled => {
                    if (isToggled) {
                      setConsonants &&
                        setConsonants(
                          consonants.filter(
                            _consonant => _consonant !== consonant + row * 3
                          )
                        );
                    } else {
                      if (
                        setConsonants &&
                        !consonants.includes(consonant + row * 3)
                      ) {
                        setConsonants([...consonants, consonant + row * 3]);
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
  const { vowels, setVowels } = useContext(LanguageContext);

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
                    color: "#1a202c",
                    lineColor: "#dddddd",
                    intensity: 30,
                  }}
                  hover={{
                    distance: 3,
                    blur: 20,
                    color: "#dddddd",
                    lineColor: "#1a202c",
                    intensity: 60,
                  }}
                  checked={{
                    distance: 1,
                    blur: 10,
                    color: "#D5D5D5",
                    lineColor: "#1a202c",
                    intensity: 10,
                    isReverseShadow: true,
                  }}
                  vowels={[vowel + row * 3]}
                  onClick={isToggled => {
                    if (isToggled) {
                      setVowels &&
                        setVowels(
                          vowels.filter(_vowel => _vowel !== vowel + row * 3)
                        );
                    } else {
                      if (setVowels && !vowels.includes(vowel + row * 3)) {
                        setVowels([...vowels, vowel + row * 3]);
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
