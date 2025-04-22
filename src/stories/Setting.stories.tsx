import type { Meta, StoryObj } from "@storybook/react";

import { Setting } from "./Setting";
import clsx from "clsx";
import { Switch } from "./Switch";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Setting> = {
  title: "Example/Setting",
  component: Setting,
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
type Story = StoryObj<typeof Setting>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: "Roman to numerical",
    description:
      "When enabled, this setting will translate game titles with Roman numerals to modern day numbers, e.g. Final Fantasy VII becomes Final Fantasy 7.",
    children: <Switch />,
  },
};
