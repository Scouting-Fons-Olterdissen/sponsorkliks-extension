// Dispatcher.js
var clubId = browser.runtime.getManifest().club_id;

function dispatch(participating) {
	console.log("dispatched");
	browser.storage.local.get({ autoForward: false }, function (items) {
		let shop_url = sk_link_url(participating.shopnr);

		if (clubId) {
			id = parseInt(items.clubId);
			console.log(
				browser.runtime.getManifest().short_name + " Sponsorkliks: " + clubId
			);
			earningsURL =
				"https://www.sponsorkliks.com/products/commissions.php?club=" + clubId;
		}

		if (items.autoForward && getState() == StateEnum.UNVISITED) {
			console.log(
				browser.runtime.getManifest().short_name +
					" Sponsorkliks: autoforward running"
			);
			browser.runtime.sendMessage({
				type: "autoforward",
				name: "SponsorKliksSFO",
				value: "sponsored",
				url: shop_url,
			});
		}

		if (getState() == StateEnum.UNVISITED) {
			$("body")
				.append(notification(shop_url))
				.append("<div class='sk-shadow'></div>")
				.addClass("sk-body");
		} else if (getState() == StateEnum.SPONSORED) {
			$("body").append(smallnotification());
		}
	});
}
