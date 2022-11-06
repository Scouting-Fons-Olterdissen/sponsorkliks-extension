// Notification.js

var month = new Date();
month.setTime(month.getTime()+(30*24*60*60*1000));

function notification(shop_url) {
	let notification = document.createElement('div');
	notification.classList.add('sk-notification');
	notification.innerHTML = `<img src="${browser.extension.getURL("images/logo.svg")}">
	<span class='sk-message'>
		Je kunt gratis ${browser.runtime.getManifest().short_name} steunen met Sponsorkliks.
		<a href='#' onclick='document.cookie = "SponsorKliksSO1=${StateEnum.SPONSORED}"; window.location = "${shop_url}"; return false;'>
			Klik hier om via SponsorKliks te gaan.
		</a>
	</span>
	<div class='sk-hide'>
		<a href='#' onclick='document.getElementsByClassName("sk-notification")[0].style.display="none";return false;'>
			verberg
		</a> voor <a href='#' onclick='document.cookie = "SponsorKliksSO1=${StateEnum.HIDDEN}"; location.reload(); return false;' title='de sessie is afgelopen wanneer u de browser sluit'>
			deze sessie
		</a> | <a href='#' onclick='document.cookie = "SponsorKliksSO1=${StateEnum.HIDDEN}; expires=${month.toGMTString()}"; location.reload(); return false;'>
		een maand</a>
	</div>`;
	return notification;
}

function smallnotification() { 
	let notification = document.createElement('div');
	notification.classList.add('sk-notification', 'small');
	notification.innerHTML = `<img src='${browser.extension.getURL("images/logo.svg")}'>
	<div class='sk-message'>
		Bedankt!
		<div class='sk-message-hidden'>
			Je steunt ${browser.runtime.getManifest().short_name} met Sponsorkliks.
			<a class='sk-info' target='_blank' href='${earningsURL}'>Bekijk de opbrengsten</a>
			<a href='#' onclick='document.cookie = "SponsorKliksSO1=${StateEnum.HIDDEN}"; location.reload(); return false;' class='sk-hide'>
				verberg
			</a>
		</div>
	</div>`;
	return notification;
}