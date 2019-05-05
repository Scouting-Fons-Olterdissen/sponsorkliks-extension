// Dispatcher.js


function dispatch() {
	  var id = 6540;
	  console.log("dispatched");
    browser.storage.local.get({
    	  clubId: 6540, 
        autoForward: false

    }, function(items) {

    	  if (items.clubId) {
            id = parseInt(items.clubId);
            clubId = id;
            console.log("Sponsorkliks Scouting Fons Olterdissen: " + id);
            earningsURL = "https://www.sponsorkliks.com/products/commissions.php?club="+ clubId;
        }
        
        if (items.autoForward && (getState() == StateEnum.UNVISITED)) {
            console.log("Sponsorkliks Scouting Fons Olterdissen: autoforward running");
            browser.runtime.sendMessage({type: "autoforward", name:"SponsorKliksSFO", 
                                        value: "sponsored", url: sk_link_url()});
        }
        
        if (getState() == StateEnum.UNVISITED) {
            $("body")
                .append(notification())
                .append("<div class='sk-shadow'></div>")
                .addClass("sk-body");
        
        } else if (getState() == StateEnum.SPONSORED) {
            $("body")
                .append(smallnotification());
        }
        
        
        
         
        
        
    });
    
    
}



