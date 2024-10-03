import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import<LifeCycles>(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === '/',
});

registerApplication({
  name: "@mc/react-single",
  app: () =>
    System.import<LifeCycles>(
      "@mc/react-single"
    ),
  activeWhen: (location) => location.pathname === '/react-single',
});
registerApplication({
  name: "@mc/react-components",
  app: () =>
    System.import<LifeCycles>(
      "@mc/react-components"
    ),
  activeWhen: (location) => location.pathname === '/react-components',
});
registerApplication({
  name: "@mc/react-multiple",
  app: () =>
    System.import<LifeCycles>(
      "@mc/react-multiple"
    ),
  activeWhen: (location) =>
    location.pathname.startsWith('/react-multiple') ||
    location.pathname.startsWith('/movies'),
});

start({
  urlRerouteOnly: true,
});
