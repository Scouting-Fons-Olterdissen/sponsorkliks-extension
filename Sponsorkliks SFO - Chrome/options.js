// options.js

// Saves options to chrome.storage.sync.
function save_options() {
    var autoForward = document.getElementById('autoForward').checked;
    var clubId = document.getElementById('clubId').value;
    chrome.storage.sync.set({
        autoForward: autoForward, 
        clubId: clubId
    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Wijzigingen opgeslagen.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
    
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    // Use default value autoForward = false.
    chrome.storage.sync.get({
        autoForward: false, 
        clubId: 6540
    }, function(items) {
        document.getElementById('autoForward').checked = items.autoForward;
        document.getElementById('clubId').value = items.clubId;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);