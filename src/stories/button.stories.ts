import type { Meta, StoryObj } from '@storybook/react';
import ButtonMUI from '../shared/ui/Button-mui';

const meta = {
	title: 'Example/Button',
	component: ButtonMUI,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
} satisfies Meta<typeof ButtonMUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		text: 'Войти',
		isEnabled: true,
	},
};
