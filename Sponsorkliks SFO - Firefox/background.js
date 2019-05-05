browser.runtime.onMessage.addListener(
    function(request, sender) {
        switch (request.type) {
            case "redirect":
                browser.tabs.update(sender.tab.id, {url: request.url});
                break;
            case "cookie":
                browser.cookies.set({
                    "name": request.name,
                    "url": sender.tab.url,
                    "value": request.value
                });
                break;
            
            case "autoforward":
                browser.cookies.set({
                    "name": request.name,
                    "url": sender.tab.url,
                    "value": request.value
                }, browser.tabs.update(sender.tab.id, {url: request.url}));
                break;
        }
    }
);