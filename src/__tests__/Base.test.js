require('@testing-library/jest-dom/extend-expect');
const { cleanup, render } = require('@testing-library/svelte');
const App = require('../__fixtures__/Base.fixture.svelte');


beforeEach(cleanup);

describe('BaseChart', () => {
  it('renders the chart without crashing', () => {
    const { getByText } = render(App);
    expect(getByText('Chart')).toBeInTheDocument();
  });
});
