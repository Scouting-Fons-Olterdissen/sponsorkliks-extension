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
            document.cookie = "SponsorKliksSO1=" + StateEnum.SPONSORED;
			browser.runtime.sendMessage({
				type: "autoforward",
				name: "SponsorKliksSO1",
				value: "sponsored",
				url: shop_url,
			});
		}

		if (getState() == StateEnum.UNVISITED) {
			$("body").append(notification(shop_url));
		} else if (getState() == StateEnum.SPONSORED) {
			$("body").append(smallnotification());
		}
	});
}
