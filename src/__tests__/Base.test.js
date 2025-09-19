import { cleanup, render } from '@testing-library/svelte';
import { beforeEach, describe, it, expect } from 'vitest';
import App from '../__fixtures__/Base.fixture.svelte';

beforeEach(cleanup);

describe('BaseChart', () => {
  it('renders the chart without crashing', () => {
    const { getByText } = render(App);
    expect(getByText('Chart')).toBeDefined();
  });
});
