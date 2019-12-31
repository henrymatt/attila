/* Article page scripts */

window.onscroll = function() { scrolling(); };

function scrolling() {
	var navHeaderElement = document.getElementById("article-header");
	var mainContentElement = document.getElementById("article-content");
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		navHeaderElement.classList.add("scrolling");
		mainContentElement.classList.add("scrolling");
	} else {
		navHeaderElement.classList.remove("scrolling");
		mainContentElement.classList.remove("scrolling");
	}
}