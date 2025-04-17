import type { Meta, StoryObj } from "@storybook/react";

import { TextField } from "./TextField";
import clsx from "clsx";
import { SettingsIcon } from "../frontend/components/settings-icon";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof TextField> = {
  title: "Example/TextField",
  component: TextField,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],

  decorators: [
    (Story) => {
      return (
        <div className={clsx("h-screen w-screen p-5 dark:bg-layer1-dark")}>
          <Story />
        </div>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof TextField>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: "My text field",
    isDisabled: false,
    value: "Value",
  },
};

export const Disabled: Story = {
  args: {
    value: "Disabled input",
    isDisabled: true,
  },
};

export const StartContent: Story = {
  render: () => {
    return (
      <TextField
        label="Input with start icon"
        startContent={<SettingsIcon />}
      />
    );
  },
};

export const EndContent: Story = {
  render: () => {
    return (
      <TextField label="Input with end icon" endContent={<SettingsIcon />} />
    );
  },
};
