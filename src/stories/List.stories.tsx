import type { Meta, StoryObj } from "@storybook/react";

import { ConsoleListItem, List, ListItem, ListLabel } from "./List";
import clsx from "clsx";
import { PlusIcon } from "../frontend/components/plus-icon";
import { Button } from "./Button";
import { SettingsIcon } from "../frontend/components/settings-icon";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof List> = {
  title: "Example/List",
  component: List,
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
type Story = StoryObj<typeof List>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    selectionMode: "single",
    selectionBehavior: "toggle",
  },
  render: (args) => {
    const items: ConsoleListItem[] = [
      { name: "Playstation 1" },
      { name: "Playstation 2" },
      { name: "Super Nintendo" },
      { name: "Sega Megadrive" },
    ];

    return (
      <List
        aria-label="Console list"
        items={items}
        selectionMode={args.selectionMode}
        selectionBehavior={args.selectionBehavior}
      >
        {(item) => <ListItem id={item.name}>{item.name}</ListItem>}
      </List>
    );
  },
};

export const Labelled: Story = {
  args: {
    selectionMode: "single",
    selectionBehavior: "toggle",
  },
  render: (args) => {
    const items: ConsoleListItem[] = [
      { name: "Playstation 1" },
      { name: "Playstation 2" },
      { name: "Super Nintendo" },
      { name: "Sega Megadrive" },
    ];

    return (
      <List
        label="Consoles"
        items={items}
        selectionMode={args.selectionMode}
        selectionBehavior={args.selectionBehavior}
      >
        {(item) => <ListItem id={item.name}>{item.name}</ListItem>}
      </List>
    );
  },
};

export const CustomLabel: Story = {
  args: {
    selectionMode: "single",
    selectionBehavior: "toggle",
  },
  render: (args) => {
    const items: ConsoleListItem[] = [
      { name: "Playstation 1" },
      { name: "Playstation 2" },
      { name: "Super Nintendo" },
      { name: "Sega Megadrive" },
    ];

    return (
      <List
        label={
          <div className="flex items-center justify-between">
            Consoles
            <Button isIconOnly size="small" variant="ghost">
              <PlusIcon />
            </Button>
          </div>
        }
        aria-label="Consoles"
        items={items}
        selectionMode={args.selectionMode}
        selectionBehavior={args.selectionBehavior}
      >
        {(item) => <ListItem id={item.name}>{item.name}</ListItem>}
      </List>
    );
  },
};
