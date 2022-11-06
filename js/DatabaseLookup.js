// DatabaseLookup.js

function sk_link_url(shopnr) {
	"use strict";

	return (
		"http://www.sponsorkliks.com/link.php?club=" + clubId + "&shop_id=" + shopnr
	);
}

function sk_website_participating() {
	"use strict";
	console.log("checking participation");
	browser.storage.local.get(["stores"], (items) => {
		let sk_stores = items.stores;
		var i, r;
		for (i = 0; i < sk_stores.length; i++) {
			r = new RegExp("\\." + sk_stores[i].url);
			if (r.test(window.location.origin)) {
				console.log(
					browser.runtime.getManifest().short_name +
						": participating site detected"
				);
				dispatch(sk_stores[i]);
			}
		}
	});
}
