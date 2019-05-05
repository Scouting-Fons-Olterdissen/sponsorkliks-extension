chrome.runtime.onMessage.addListener(
    function(request, sender) {
        switch (request.type) {
            case "redirect":
                chrome.tabs.update(sender.tab.id, {url: request.url});
                break;
            case "cookie":
                chrome.cookies.set({
                    "name": request.name,
                    "url": sender.tab.url,
                    "value": request.value
                });
                break;
            
            case "autoforward":
                chrome.cookies.set({
                    "name": request.name,
                    "url": sender.tab.url,
                    "value": request.value
                }, chrome.tabs.update(sender.tab.id, {url: request.url}));
                break;
        }
    }
);