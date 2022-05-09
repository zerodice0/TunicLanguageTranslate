import {
  Button,
  Center,
  Checkbox,
  Flex,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";

import { LanguageRenderer } from "../LanguageRenderer/LanguageRenderer";
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

const Consonants = () => (
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
                  intensity: 30,
                }}
                hover={{
                  distance: 3,
                  blur: 20,
                  color: "#dddddd",
                  intensity: 60,
                }}
              >
                <LanguageRenderer
                  width={50}
                  height={75}
                  consonants={[consonant + row * 3]}
                  defaultLineColor="#dddddd"
                  defaultLineWidth={1}
                  isDrawingFrame={true}
                />
                {/* <Checkbox /> */}
              </ToggleButton>
            </Center>
          </GridItem>
        ))}
      </Grid>
    ))}
  </Flex>
);

const Vowels = () => (
  <Flex direction="column" width="100%" marginTop="5">
    <Text>Vowel</Text>
    {[0, 1].map(row => (
      <Grid key={row} templateColumns="repeat(3, 1fr)" marginTop="5">
        {[0, 1, 2].map(vowel => (
          <GridItem key={vowel} width="100%">
            <Center>
              <LanguageRenderer
                width={50}
                height={75}
                vowels={[vowel + row * 3]}
                defaultLineColor="#ffffff"
                defaultLineWidth={1}
                isDrawingFrame={true}
              />
            </Center>
            <Checkbox />
          </GridItem>
        ))}
      </Grid>
    ))}
  </Flex>
);
