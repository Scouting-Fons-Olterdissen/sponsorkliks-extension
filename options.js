// options.js

// Saves options to browser.storage.sync.
function save_options() {
	var autoForward = document.getElementById("autoForward").checked;
	browser.storage.local.set({ autoForward }, () => {
		// Update status to let user know options were saved.
		var status = document.getElementById("status");
		status.textContent = "Wijzigingen opgeslagen.";
		setTimeout(function () {
			status.textContent = "";
		}, 750);
	});
}

// Restores select box and checkbox state using the preferences
// stored in browser.storage.
function restore_options() {
	// Use default value autoForward = false.
	browser.storage.local.get({ autoForward: false }, (items) => {
		document.getElementById("autoForward").checked = items.autoForward;
	});
}
document.addEventListener("DOMContentLoaded", restore_options);
document.getElementById("save").addEventListener("click", save_options);
