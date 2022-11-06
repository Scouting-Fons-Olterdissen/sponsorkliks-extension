// Main.js


if (sk_website_participating()) {
    
    console.log(browser.runtime.getManifest().short_name + ": participating site detected");    
    dispatch();
    
}

