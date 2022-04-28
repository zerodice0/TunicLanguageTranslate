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
