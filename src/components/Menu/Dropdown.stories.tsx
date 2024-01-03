import type { Meta, StoryObj } from "@storybook/react";

import Dropdown from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    items: [
      { label: "Item 1", action: () => console.log("Item 1") },
      { label: "Item 2", action: () => console.log("Item 2") },
      { label: "Item 3", action: () => console.log("Item 3") },
      { label: "Item 4", action: () => console.log("Item 4") },
    ],
    label: undefined,
  },
};
