// Mobile menu
const button = document.querySelector('.mobile-nav-toggle');
const nav = document.querySelector('.primary-navigation');

button.addEventListener('click', () => {
  // Get the data attribute on the menu to see if it is visible
  const visibility = nav.getAttribute('data-visible');

  // Get the aria-expanded attribute to see if the menu is visible
  const expanded = button.getAttribute('aria-expanded');

  // Toggle between menu visible or not
  visibility === 'false'
    ? nav.setAttribute('data-visible', true)
    : nav.setAttribute('data-visible', false);

  // Toggle the aria-expanded true or false and change the background image in the button
  expanded === 'false'
    ? button.setAttribute('aria-expanded', true)
    : button.setAttribute('aria-expanded', false);
});
