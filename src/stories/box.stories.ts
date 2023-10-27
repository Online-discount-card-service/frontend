import type { Meta, StoryObj } from '@storybook/react';
import BoxMUI from '../shared/ui/box-mui';

const meta = {
	title: 'Example/Box',
	component: BoxMUI,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof BoxMUI>;

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
