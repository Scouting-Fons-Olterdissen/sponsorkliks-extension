// DatabaseLookup.js

function sk_link_url(shop_id) {
	"use strict";

	return (
		"http://www.sponsorkliks.com/link.php?club=" +
		clubId +
		"&shop_id=" +
		shop_id
	);
}

function sk_website_participating() {
	"use strict";
	var i,
		r,
		participating = false;
	for (i = 0; i < sk_info.length; i++) {
		r = new RegExp("\\." + sk_info[i].URL);
		if (r.test(window.location.origin)) {
			participating = sk_info[i];
		}
	}
	return participating;
}
