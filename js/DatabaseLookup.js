/*global sk_info, clubId */

// DatabaseLookup.js

function sk_link_url() {
    "use strict";
    var i,
        r;
    for (i = 0; i < sk_info.length; i++) {
        r = new RegExp("\\." + sk_info[i].URL);
        if (r.test(window.location.origin)) {
            return "http://www.sponsorkliks.com/link.php?club=" + clubId + "&shop_id=" + sk_info[i].id;
        }
    }
}

function sk_website_participating() {
    "use strict";
    var i,
        r,
        participating = false;
    for (i = 0; i < sk_info.length; i++) {
        r = new RegExp("\\." + sk_info[i].URL);
        if (r.test(window.location.origin)) {
            participating = true;
        }
    }
    return participating;
}