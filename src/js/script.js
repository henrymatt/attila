/* Article page scripts */

window.onscroll = function() { scrolling(); };

function scrolling() {
	var dynamicHeader = document.getElementById("dynamic-sticky-header");

	if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
		dynamicHeader.classList.add("scrolling");
	} else {
		dynamicHeader.classList.remove("scrolling");
	}
}