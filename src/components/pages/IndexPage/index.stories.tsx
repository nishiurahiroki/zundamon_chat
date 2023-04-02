import React from 'react'

import IndexPage, {Props} from '.';

import { action } from '@storybook/addon-actions';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'IndexPage',
  component: IndexPage,
} as ComponentMeta<typeof IndexPage>;

const Template: ComponentStory<typeof IndexPage> = (args) => <IndexPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClickQuestionButton : action('onClickQuestionButton')
} satisfies Props;