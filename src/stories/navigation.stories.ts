import type { Meta, StoryObj } from '@storybook/react';
import Navigation from '../features/navigation';

const meta = {
	title: 'Example/Input',
	component: Navigation,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Navigation>;

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
