// Main.js

let participating = sk_website_participating();

if (participating) {
	console.log(
		browser.runtime.getManifest().short_name + ": participating site detected"
	);
	dispatch(participating);
}
