import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import BaseChart from './base.svelte';
import data from './data.fixture.js';



export default {
  title: 'BaseChart',
  decorators: [withKnobs],
};

export const Base = () => ({
  Component: BaseChart,
  props: {
    data,
  },
});
