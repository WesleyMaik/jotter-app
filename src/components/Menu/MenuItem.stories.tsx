import type { Meta, StoryObj } from "@storybook/react";

import MenuItem from "./MenuItem";

const meta: Meta<typeof MenuItem> = {
  component: MenuItem,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MenuItem>;

export const Default: Story = {
  args: {
    label: "Item 1",
  },
  argTypes: {
    action: { action: "clicked" },
  },
};
