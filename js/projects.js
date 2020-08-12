import { ready } from './utils.js';

//
// Show desktop screenshots on devices wider than 600px
//
ready(() => {
	if (window.innerWidth < 600) {
		return;
	}
	
	let $active_screenshots = document.querySelectorAll(".screenshot.active");
	for ( const $el of $active_screenshots) {
		$el.classList.remove("active");
	}

	let $desktop_screenshots = document.querySelectorAll(".screenshot.desktop");
	for ( const $el of $desktop_screenshots) {
		$el.classList.add("active", "fadein");
	}
	
	let $active_devices = document.querySelectorAll(".device-item.active");
	for ( const $el of $active_devices) {
		$el.classList.remove("active");
	}
	
	let $desktop_devices = document.querySelectorAll(".device-item.desktop");
	for ( const $el of $desktop_devices) {
		$el.classList.add("active");
	}
});

/*
 * Toggle mobile/desktop screenshots
 *
 * @param e - onclick event object
 */
function toggleScreenshot(e)
{
	let $target = e.target;
	let classes = Array.from($target.classList);
	// console.log($target, "clicked");

	// get parent if icon clicked
	if (classes.includes("device-icon")) {
		$target = $target.parentElement;
		classes = Array.from($target.classList);
	}

	// do nothing if active one clicked
	if (classes.includes("active")) {
		return;
	}

	// get project ID from html data-pid="" attribute
	let pid = $target.dataset.pid;

	// find active screenshot
	let $active_screenshot = document.querySelector(`#${pid} .screenshot.active`);
	// find not active screenshot
	let $notactive_screenshot = document.querySelector(`#${pid} .screenshot:not(.active)`);
	
	// remove or add "active" class
	if ($active_screenshot && $notactive_screenshot
		&& 'classList' in $active_screenshot && 'classList' in $notactive_screenshot) {
		// console.log("updating screenshots");
		$active_screenshot.classList.remove("active", "fadein");
		$notactive_screenshot.classList.add("active", "fadein");
	}

	// find active device selector
	let $active_device = document.querySelector(`#${pid} .device-item.active`);
	// find not active device selector
	let $notactive_device = document.querySelector(`#${pid} .device-item:not(.active)`);

	// remove or add "active" class
	if ($active_device && $notactive_device
		&& 'classList' in $active_device && 'classList' in $notactive_device) {
		// console.log("updating device selectors");
		$active_device.classList.remove("active");
		$notactive_device.classList.add("active");
	}
}

const $btns = document.querySelectorAll(".device-item");
for (let i = 0; i < $btns.length; i++) {
	$btns[i].addEventListener("click", toggleScreenshot);
}

