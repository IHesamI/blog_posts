/**
 * @param {HTMLElement} root
 * */
export function changeTheme(root) {
  if (root) {
    console.error(getTheme(root));
    root.dataset.theme = getTheme(root);
  }
}
/**
 * @param {HTMLElement} root
 * */
function getTheme(root) {
  return root.dataset.theme == "dark" ? "light" : "dark";
}
