// Cursor preset objects — spread onto interactive elements instead of
// repeating raw data-cursor-* attributes across every call site.
//
// Usage:
//   <button {...cursorPresets.view}>
//   <a {...cursorPresets.nav}>

export const cursorPresets = {
  view: {
    'data-cursor': true,
    'data-cursor-content': 'view',
    'data-cursor-fill': 'primary',
    'data-cursor-text-color': 'secondary',
    'data-cursor-size': 'large',
  },
  signIn: {
    'data-cursor': true,
    'data-cursor-content': 'sign in',
    'data-cursor-fill': 'primary',
    'data-cursor-text-color': 'secondary',
    'data-cursor-size': 'large',
  },
  submit: {
    'data-cursor': true,
    'data-cursor-content': 'submit',
    'data-cursor-fill': 'primary',
    'data-cursor-text-color': 'secondary',
    'data-cursor-size': 'large',
  },
  click: {
    'data-cursor': true,
    'data-cursor-content': 'Click',
    'data-cursor-fill': 'primary',
    'data-cursor-text-color': 'secondary',
    'data-cursor-size': 'small',
  },
  email: {
    'data-cursor': true,
    'data-cursor-content': 'Email',
    'data-cursor-fill': 'primary',
    'data-cursor-text-color': 'secondary',
    'data-cursor-size': 'small',
  },
  nav: {
    'data-cursor': true,
    'data-cursor-magnetic': true,
    'data-cursor-sticky': true,
    'data-cursor-size': 'small',
  },
  read: {
    'data-cursor': true,
    'data-cursor-content': 'read',
    'data-cursor-fill': 'primary',
    'data-cursor-text-color': 'secondary',
    'data-cursor-size': 'large',
  },
  up: {
    'data-cursor': true,
    'data-cursor-content': 'UP',
    'data-cursor-fill': 'primary',
    'data-cursor-text-color': 'secondary',
    'data-cursor-size': 'small',
  },
};
