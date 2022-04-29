import { ComponentMeta, ComponentStory } from "@storybook/react";

import { LanguageInputCanvas } from "../components/LanguageInputCanvas/LanguageInputCanvas";

export default {
  title: "LanguageInputCanvas",
  component: LanguageInputCanvas,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof LanguageInputCanvas>;

const Template: ComponentStory<typeof LanguageInputCanvas> = args => (
  <LanguageInputCanvas {...args} />
);

export const Normal = Template.bind([]);
Normal.args = {
  width: 240,
  height: 360,
};

export const AllConsonants = Template.bind([]);
AllConsonants.args = {
  width: 240,
  height: 360,
  consonants: [0, 1, 2, 3, 4, 5],
};

export const AllVowels = Template.bind([]);
AllVowels.args = {
  width: 240,
  height: 360,
  vowels: [0, 1, 2, 3, 4, 5],
};

export const There = Template.bind([]);
There.args = {
  width: 240,
  height: 360,
  consonants: [1, 3, 4, 5],
  vowels: [0, 3, 5],
};

export const Li = Template.bind([]);
Li.args = {
  width: 240,
  height: 360,
  consonants: [1, 4],
  vowels: [4, 5],
};

export const A = Template.bind([]);
A.args = {
  width: 240,
  height: 360,
  consonants: [0, 3, 5],
  vowels: [0, 1, 2, 3, 4],
};
