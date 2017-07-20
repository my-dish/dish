import { configure } from '@kadira/storybook';

function loadStories() {
  require('../stories/hero');
}

configure(loadStories, module);
