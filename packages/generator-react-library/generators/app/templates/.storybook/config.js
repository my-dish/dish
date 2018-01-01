import { configure } from '@kadira/storybook';

function loadStories() {
  require('../stories/<%= componentname %>');
}

configure(loadStories, module);
