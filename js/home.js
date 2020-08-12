import { ready } from '/js/utils.js';

ready(() => {
	let $profile_pic = document.querySelector(".profile-pic");
	$profile_pic.addEventListener("click", function() {
		this.classList.add("animate-shake");
		setTimeout(function() {
			$profile_pic.classList.remove("animate-shake");
		}, 800);
	});
})
