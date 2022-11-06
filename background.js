let shopEndpoint = "https://api.sponsorkliks.com/v1.0/get_shops.php";
sk_refresh_cache();
setInterval(sk_refresh_cache, 60 * 1000);

function sk_store_shops() {
	console.log("fetching shops");
	fetch(shopEndpoint, {
		mode: "cors",
		method: "POST",
	})
		.catch((err) => {
			if (typeof err === "string") err = new Error(err);
			console.error(err);
		})
		.then((response) => response.json())
		.then((data) => {
			let stores = data;
			console.log(stores);
			let time = new Date();
			let expiration = time.getTime() + 24 * 60 * 60 * 1000;
			browser.storage.local.set({ stores, expiration }, () =>
				console.log("fetched and stored")
			);
		});
}

function sk_refresh_cache() {
	browser.storage.local.get(["expiration"], (items) => {
		let expiration = items.expiration;
		console.log(expiration);
		if (expiration) {
			let time = new Date();
			if (time.getTime() > items.expiration) {
				console.log("cache expired");
				sk_store_shops();
			} else {
				console.log("valid cache");
			}
		} else {
			console.log("no expiration");
			sk_store_shops();
		}
	});
}

browser.runtime.onMessage.addListener(function (request, sender) {
	switch (request.type) {
		case "redirect":
			browser.tabs.update(sender.tab.id, { url: request.url });
			break;
		case "cookie":
			browser.cookies.set({
				name: request.name,
				url: sender.tab.url,
				value: request.value,
			});
			break;

		case "autoforward":
			browser.cookies.set(
				{
					name: request.name,
					url: sender.tab.url,
					value: request.value,
				},
				browser.tabs.update(sender.tab.id, { url: request.url })
			);
			break;
	}
});
