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
              <ToggleButton distance={1} blur={15}>
                <LanguageRenderer
                  width={50}
                  height={75}
                  consonants={[consonant + row * 3]}
                  defaultLineColor="#1A202C"
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
