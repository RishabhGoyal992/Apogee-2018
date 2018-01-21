
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


function ClickOnHOME(){
	document.getElementsByClassName("contact-body")[0].style.left = "100vw";
	document.getElementsByClassName("rules-body")[0].style.left = "100vw";
	setTimeout(function(){
		document.getElementsByClassName("home-body")[0].style.left = "0vw";
		document.getElementsByClassName("contact-body")[0].style.left = "100vw";
		document.getElementsByClassName("rules-body")[0].style.left = "100vw";
		}, 750);	
}
function ClickOnRULE(){
	document.getElementsByClassName("home-body")[0].style.left = "100vw";
	document.getElementsByClassName("contact-body")[0].style.left = "100vw";
    setTimeout(function(){
		document.getElementsByClassName("rules-body")[0].style.left = "0vw";
		document.getElementsByClassName("home-body")[0].style.left = "100vw";
		document.getElementsByClassName("contact-body")[0].style.left = "100vw";
		}, 750);	
}
function ClickOnCONTACT(){
	document.getElementsByClassName("home-body")[0].style.left = "100vw";
	document.getElementsByClassName("rules-body")[0].style.left = "100vw";
	setTimeout(function(){
		document.getElementsByClassName("contact-body")[0].style.left = "0vw";
		document.getElementsByClassName("home-body")[0].style.left = "100vw";
		document.getElementsByClassName("rules-body")[0].style.left = "100vw";
		}, 750);	
}
document.getElementsByClassName("rules")[0].addEventListener("click", ClickOnRULE);
document.getElementsByClassName("contact")[0].addEventListener("click", ClickOnCONTACT);
document.getElementsByClassName("home")[0].addEventListener("click", ClickOnHOME);







