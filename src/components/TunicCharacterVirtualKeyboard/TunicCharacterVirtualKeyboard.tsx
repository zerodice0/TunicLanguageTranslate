import { Center, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { useAtom } from "jotai";

import { CurrentTunicCharacter } from "../../atom/TunicLanguageAtom/TunicLanguageAtom";
import { ToggleButton } from "../ToggleButton/ToggleButton";
import { ToggleButtonPropsState } from "../ToggleButton/ToggleButton.model";

export const TunicCharacterVirtualKeyboard = () => {
  const [currentTunicCharacter, setCurrentTunicCharacter] = useAtom(
    CurrentTunicCharacter
  );

  const normalProps: ToggleButtonPropsState = {
    distance: 4,
    blur: 10,
    color: "#1A202C",
    lineColor: "#D5D5D5",
    intensity: 30,
  };

  const hoveredProps = {
    distance: 3,
    blur: 20,
    color: "#D5D5D5",
    lineColor: "#1A202C",
    intensity: 60,
  };

  const toggledProps = {
    ...hoveredProps,
    distance: 1,
    blur: 10,
    intensity: 10,
    isReverseShadow: true,
  };

  return (
    <form>
      <Flex direction="row">
        <Consonants
          normalProps={normalProps}
          hoveredProps={hoveredProps}
          toggledProps={toggledProps}
        />
        <Vowels
          normalProps={normalProps}
          hoveredProps={hoveredProps}
          toggledProps={toggledProps}
        />
      </Flex>
      <Center>
        <ToggleButton
          normal={normalProps}
          hovered={hoveredProps}
          toggled={toggledProps}
          isToggled={currentTunicCharacter.isReverse}
          isReversePoint={true}
          onClick={isToggled => {
            setCurrentTunicCharacter({
              ...currentTunicCharacter,
              isReverse: !isToggled,
            });
          }}
        />
      </Center>
    </form>
  );
};

const Consonants = ({
  normalProps,
  hoveredProps,
  toggledProps,
}: {
  normalProps: ToggleButtonPropsState;
  hoveredProps: ToggleButtonPropsState;
  toggledProps: ToggleButtonPropsState;
}) => {
  const [current, setCurrent] = useAtom(CurrentTunicCharacter);

  const clickToggleButton = (isToggled: boolean, consonantStroke: number) => {
    const newConsonants = isToggled
      ? current.consonants.filter(_consonant => _consonant !== consonantStroke)
      : [...current.consonants, consonantStroke];

    setCurrent({
      consonants: newConsonants,
      vowels: current.vowels,
      isReverse: current.isReverse,
    });
  };

  return (
    <Flex direction="column" width="100%" marginTop="5">
      <Text>Consonants</Text>
      {[0, 1].map(row => {
        return (
          <Grid key={row} templateColumns="repeat(3, 1fr)" marginTop="5">
            {[0, 1, 2].map(consonant => {
              const isToggled = current.consonants.includes(
                consonant + row * 3
              );

              const consonantStroke = consonant + row * 3;

              return (
                <GridItem key={consonant} width="100%">
                  <Center padding={5}>
                    <ToggleButton
                      normal={normalProps}
                      hovered={hoveredProps}
                      toggled={toggledProps}
                      consonants={[consonantStroke]}
                      isToggled={current.consonants.includes(consonantStroke)}
                      onClick={() =>
                        clickToggleButton(isToggled, consonantStroke)
                      }
                    />
                  </Center>
                </GridItem>
              );
            })}
          </Grid>
        );
      })}
    </Flex>
  );
};

const Vowels = ({
  normalProps,
  hoveredProps,
  toggledProps,
}: {
  normalProps: ToggleButtonPropsState;
  hoveredProps: ToggleButtonPropsState;
  toggledProps: ToggleButtonPropsState;
}) => {
  const [current, setCurrent] = useAtom(CurrentTunicCharacter);

  const clickToggleButton = (isToggled: boolean, vowelStroke: number) => {
    const newVowels = isToggled
      ? current.vowels.filter(_vowel => _vowel !== vowelStroke)
      : [...current.vowels, vowelStroke];

    setCurrent({
      consonants: current.consonants,
      vowels: newVowels,
      isReverse: current.isReverse,
    });
  };

  return (
    <Flex direction="column" width="100%" marginTop="5">
      <Text>Vowels</Text>
      {[0, 1].map(row => (
        <Grid key={row} templateColumns="repeat(3, 1fr)" marginTop="5">
          {[0, 1, 2].map(vowel => {
            const vowelStroke = vowel + row * 3;
            const isToggled = current.vowels.includes(vowelStroke);

            return (
              <GridItem key={vowel} width="100%">
                <Center padding={5}>
                  <ToggleButton
                    normal={normalProps}
                    hovered={hoveredProps}
                    toggled={toggledProps}
                    vowels={[vowelStroke]}
                    isToggled={isToggled}
                    onClick={() => clickToggleButton(isToggled, vowelStroke)}
                  />
                </Center>
              </GridItem>
            );
          })}
        </Grid>
      ))}
    </Flex>
  );
};
