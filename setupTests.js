class ResizeObserver {
  observe() {}
  unobserve() {}
}

//  Polyfill
global.ResizeObserver = ResizeObserver;
