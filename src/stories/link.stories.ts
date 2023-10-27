import type { Meta, StoryObj } from '@storybook/react';
import LinkMUI from '../shared/ui/link-mui';

const meta = {
	title: 'Example/Input',
	component: LinkMUI,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof LinkMUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		value: 'Value',
		isEnabled: true,
	},
};

export const Disable: Story = {
	args: {
		value: 'Value',
		isEnabled: false,
	},
};

export const Error: Story = {
	args: {
		value: 'Value',
		isEnabled: true,
		error: true,
	},
};
