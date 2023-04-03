import React from 'react'

import ZundamonQuestionForm, {Props} from '.';

import { action } from '@storybook/addon-actions';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'ZundamonQuestionForm',
  component: ZundamonQuestionForm,
} as ComponentMeta<typeof ZundamonQuestionForm>;

const Template: ComponentStory<typeof ZundamonQuestionForm> = (args) => <ZundamonQuestionForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClickQuestionButton : action('onClickQuestionButton')
} satisfies Props;