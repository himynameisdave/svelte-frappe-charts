import { cleanup } from '@testing-library/svelte';
import '@testing-library/svelte/vitest'
import '@testing-library/jest-dom/vitest'
import { beforeEach, vi } from 'vitest';

const ResizeObserverMock = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

vi.stubGlobal('ResizeObserver', ResizeObserverMock);

beforeEach(() => {
  cleanup();
})
