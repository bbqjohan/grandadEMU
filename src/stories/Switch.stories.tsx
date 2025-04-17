import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from "./Switch";
import clsx from "clsx";
import { SettingsIcon } from "../frontend/components/settings-icon";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Switch> = {
  title: "Example/Switch",
  component: Switch,
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
type Story = StoryObj<typeof Switch>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    isDisabled: false,
  },
};

// export const Disabled: Story = {
//   args: {
//     value: "Disabled input",
//     isDisabled: true,
//   },
// };
