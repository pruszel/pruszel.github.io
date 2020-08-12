/*
 * use this to do things after DOM has fully loaded
 */
let ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

export { ready };
