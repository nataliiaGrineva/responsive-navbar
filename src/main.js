const navToggle = document.querySelector('.nav_toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
// if (links.classList.contains('show_links')) {
//   links.classList.remove('show_links')
// } else {
//   links.classList.add('show_links')
// }
links.classList.toggle('show_links');
});
