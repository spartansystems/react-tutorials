import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, select } from '@kadira/storybook-addon-knobs';
import SiteHeader from './component'

const stories = storiesOf('SiteHeader', module);

stories.addDecorator(withKnobs)

stories.add('with text', () => (
  <SiteHeader
    title={text('Title', 'Hello SiteHeader')}
  />
));
