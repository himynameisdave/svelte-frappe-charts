import { test } from 'vitest';
import { cleanup, render } from '@testing-library/svelte';
import App from '../__fixtures__/Base.fixture.svelte';

test('BaseChart renders the chart without crashing', ({ expect }) => {
  const { getByText } = render(App);
  expect(getByText('Chart')).toBeDefined();
});
