function hamClose(){
	document.getElementsByClassName("hamburger")[0].style.left = "-110vw";
}

function hamOpen(){
	document.getElementsByClassName("hamburger")[0].style.left = "-10vw";
}

document.getElementsByClassName("menu")[0].addEventListener("click", hamOpen);
document.getElementsByClassName("arrow")[0].addEventListener("click", hamClose);

var botTop = document.getElementsByClassName("bot-nav")[0].getBoundingClientRect().top;

function rulesClick(){
	document.getElementsByClassName("home-body")[0].style.left = "100vw";
	document.getElementsByClassName("contact-body")[0].style.left = "100vw";
	// document.getElementsByClassName("faq-body")[0].style.left = "100vw";
	// document.getElementsByClassName("overview-body")[0].style.left = "100vw";
	document.getElementsByClassName("problem-body")[0].style.left = "100vw";
	
	document.getElementsByClassName("bot-nav")[0].style.top = botTop+"px";

	setTimeout(function(){
		document.getElementsByClassName("rules-body")[0].style.left = "0vw";
		document.getElementsByClassName("home-body")[0].style.left = "100vw";
		document.getElementsByClassName("contact-body")[0].style.left = "100vw";
		// document.getElementsByClassName("faq-body")[0].style.left = "100vw";
		// document.getElementsByClassName("overview-body")[0].style.left = "100vw";
		document.getElementsByClassName("problem-body")[0].style.left = "100vw";

		document.getElementsByClassName("bot-nav")[0].style.top = botTop+"px";
	}, 500);	
}

function contactClick(){
	document.getElementsByClassName("home-body")[0].style.left = "100vw";
	document.getElementsByClassName("rules-body")[0].style.left = "100vw";
	// document.getElementsByClassName("faq-body")[0].style.left = "100vw";
	// document.getElementsByClassName("overview-body")[0].style.left = "100vw";
	document.getElementsByClassName("problem-body")[0].style.left = "100vw";
	
	document.getElementsByClassName("bot-nav")[0].style.top = botTop+"px";

	setTimeout(function(){
		document.getElementsByClassName("contact-body")[0].style.left = "0vw";
		document.getElementsByClassName("home-body")[0].style.left = "100vw";
		document.getElementsByClassName("rules-body")[0].style.left = "100vw";
		// document.getElementsByClassName("faq-body")[0].style.left = "100vw";
		// document.getElementsByClassName("overview-body")[0].style.left = "100vw";
		document.getElementsByClassName("problem-body")[0].style.left = "100vw";

		document.getElementsByClassName("bot-nav")[0].style.top = botTop+"px";
	}, 500);	
}

// function overviewClick(){
// 	document.getElementsByClassName("home-body")[0].style.left = "100vw";
// 	document.getElementsByClassName("rules-body")[0].style.left = "100vw";
	// document.getElementsByClassName("faq-body")[0].style.left = "100vw";
// 	document.getElementsByClassName("contact-body")[0].style.left = "100vw";
// 	document.getElementsByClassName("problem-body")[0].style.left = "100vw";
	
// 	document.getElementsByClassName("bot-nav")[0].style.top = botTop+"px";

// 	setTimeout(function(){
// 		document.getElementsByClassName("overview-body")[0].style.left = "0vw";
// 		document.getElementsByClassName("home-body")[0].style.left = "100vw";
// 		document.getElementsByClassName("rules-body")[0].style.left = "100vw";
		// document.getElementsByClassName("faq-body")[0].style.left = "100vw";
// 		document.getElementsByClassName("contact-body")[0].style.left = "100vw";
// 		document.getElementsByClassName("problem-body")[0].style.left = "100vw";

// 		document.getElementsByClassName("bot-nav")[0].style.top = botTop+"px";
// 	}, 500);	
//}

function homeClick(){
	document.getElementsByClassName("contact-body")[0].style.left = "100vw";
	document.getElementsByClassName("rules-body")[0].style.left = "100vw";
	// document.getElementsByClassName("faq-body")[0].style.left = "100vw";
	// document.getElementsByClassName("overview-body")[0].style.left = "100vw";
	document.getElementsByClassName("problem-body")[0].style.left = "100vw";
	
	document.getElementsByClassName("bot-nav")[0].style.top = botTop+"px";

	setTimeout(function(){
		document.getElementsByClassName("home-body")[0].style.left = "0vw";
		document.getElementsByClassName("contact-body")[0].style.left = "100vw";
		document.getElementsByClassName("rules-body")[0].style.left = "100vw";
		// document.getElementsByClassName("faq-body")[0].style.left = "100vw";
		// document.getElementsByClassName("overview-body")[0].style.left = "100vw";
		document.getElementsByClassName("problem-body")[0].style.left = "100vw";

		document.getElementsByClassName("bot-nav")[0].style.top = botTop+"px";
	}, 500);	
}

// function faqClick(){
// 	document.getElementsByClassName("contact-body")[0].style.left = "100vw";
// 	document.getElementsByClassName("rules-body")[0].style.left = "100vw";
// 	document.getElementsByClassName("home-body")[0].style.left = "100vw";
	// document.getElementsByClassName("overview-body")[0].style.left = "100vw";
// 	document.getElementsByClassName("problem-body")[0].style.left = "100vw";
	
// 	document.getElementsByClassName("bot-nav")[0].style.top = botTop+"px";

// 	setTimeout(function(){
// 		document.getElementsByClassName("faq-body")[0].style.left = "0vw";
// 		document.getElementsByClassName("contact-body")[0].style.left = "100vw";
// 		document.getElementsByClassName("rules-body")[0].style.left = "100vw";
// 		document.getElementsByClassName("home-body")[0].style.left = "100vw";
		// document.getElementsByClassName("overview-body")[0].style.left = "100vw";
// 		document.getElementsByClassName("problem-body")[0].style.left = "100vw";

// 		document.getElementsByClassName("bot-nav")[0].style.top = botTop+"px";
// 	}, 500);	
// }

function problemClick(){
	document.getElementsByClassName("contact-body")[0].style.left = "100vw";
	document.getElementsByClassName("rules-body")[0].style.left = "100vw";
	document.getElementsByClassName("home-body")[0].style.left = "100vw";
	// document.getElementsByClassName("overview-body")[0].style.left = "100vw";
	// document.getElementsByClassName("faq-body")[0].style.left = "100vw";
		
	document.getElementsByClassName("bot-nav")[0].style.top = "100vh";

	setTimeout(function(){
		document.getElementsByClassName("problem-body")[0].style.left = "0vw";
		document.getElementsByClassName("contact-body")[0].style.left = "100vw";
		document.getElementsByClassName("rules-body")[0].style.left = "100vw";
		document.getElementsByClassName("home-body")[0].style.left = "100vw";
		// document.getElementsByClassName("overview-body")[0].style.left = "100vw";
		// document.getElementsByClassName("faq-body")[0].style.left = "100vw";

		document.getElementsByClassName("bot-nav")[0].style.top = "100vh";
	}, 500);	
}

var c=0;
function registerClick(){
	document.getElementsByClassName("register")[0].style.top = "0vh";
	c++;
}

function registerClose(){
	if(c==1)
	{
		document.getElementsByClassName("register")[0].style.top = "100vh";
		c=0;
	}
}

var membercount=0;
function addMember(){
	membercount++;
	var info = document.getElementsByClassName("member-info")[0];
	var member = document.createElement("div");
	var name = document.createElement("div");
	var nameinput = document.createElement("INPUT");
	var phone = document.createElement("div");
	var phoneinput = document.createElement("INPUT");
	var email = document.createElement("div");
	var emailinput = document.createElement("INPUT")
	var college = document.createElement("div");
	var collegeinput = document.createElement("INPUT");
	var yos = document.createElement("div");
	var yosinput = document.createElement("INPUT");
	member.innerHTML="- Member " + membercount;
	name.innerHTML="Name";
	nameinput.setAttribute("type", "text");
	phone.innerHTML="Phone";
	phoneinput.setAttribute("type", "text");
	email.innerHTML="E-mail";
	emailinput.setAttribute("type", "text");
	college.innerHTML="College";
	collegeinput.setAttribute("type", "text");
	yos.innerHTML="Year of Study";
	yosinput.setAttribute("type", "text");
	member.classList.add("member-font");
	name.classList.add("col-text");
	nameinput.classList.add("col-input");
	phone.classList.add("col-text");
	phoneinput.classList.add("col-input");
	email.classList.add("col-text");
	emailinput.classList.add("col-input");
	college.classList.add("col-text");
	collegeinput.classList.add("col-input");
	yos.classList.add("col-text");
	yosinput.classList.add("col-input");
	info.appendChild(member);
	info.appendChild(name);
	info.appendChild(nameinput);
	info.appendChild(phone);
	info.appendChild(phoneinput);
	info.appendChild(email);
	info.appendChild(emailinput);
	info.appendChild(college);
	info.appendChild(collegeinput);
	info.appendChild(yos);
	info.appendChild(yosinput);

}

document.getElementsByClassName("nav-rules")[0].addEventListener("click", rulesClick);
document.getElementsByClassName("nav-contact")[0].addEventListener("click", contactClick);
//document.getElementsByClassName("nav-overview")[0].addEventListener("click", overviewClick);
document.getElementsByClassName("nav-home")[0].addEventListener("click", homeClick);
//document.getElementsByClassName("nav-faq")[0].addEventListener("click", faqClick);
document.getElementsByClassName("problems")[0].addEventListener("click", problemClick);
document.getElementsByClassName("register-button")[0].addEventListener("click", registerClick);
document.getElementsByClassName("register-close")[0].addEventListener("click", registerClose);
document.getElementsByClassName("addMember")[0].addEventListener("click", addMember);

document.getElementsByClassName("ham-rules")[0].addEventListener("click", function(){rulesClick(); hamClose();});
document.getElementsByClassName("ham-contact")[0].addEventListener("click", function(){contactClick(); hamClose();});
//document.getElementsByClassName("ham-overview")[0].addEventListener("click", function(){overviewClick(); hamClose();});
document.getElementsByClassName("ham-home")[0].addEventListener("click", function(){homeClick(); hamClose();});
//document.getElementsByClassName("ham-faq")[0].addEventListener("click", function(){faqClick(); hamClose();});


var counter = 0;//company count
var animationRunning = 0;

var companyWrap = document.getElementsByClassName("company-wrap");//array for company-wrap class
var companyInfo = document.getElementsByClassName("company-info");//array for company-info class
var companyLogo = document.getElementsByClassName("company-logo");//array for company-logo class
var companyFade = document.getElementsByClassName("company-fade");//array for company-fade class

function nextCompany(){
	if(animationRunning == 0){		
		animationRunning = 1;
		wrapLeft = companyWrap[counter].getBoundingClientRect().left;
		if(counter<7){
			counter++;

			companyInfo[counter-1].style.transition = "transform 0.5s, opacity 0.5s";
			companyInfo[counter-1].style.transform = "translateX(5vw)";
			companyInfo[counter-1].style.opacity = "0";

			companyLogo[counter-1].style.transition = "transform 0.5s, opacity 0.5s";
			companyLogo[counter-1].style.transform = "translateX(5vw)";
			companyLogo[counter-1].style.opacity = "0";


			companyWrap[counter].style.left = wrapLeft+"px";
			companyWrap[counter].style.transition = "transform 0.5s 0.5s, opacity 0.5s 0.5s";
			companyInfo[counter].style.transition = "transform 0.5s 0.5s, opacity 0.5s 0.5s";
			companyWrap[counter].style.opacity = "1";
			companyInfo[counter].style.opacity = "1";

			companyLogo[counter].style.transition = "transform 0.5s 0.5s, opacity 0.5s 0.5s";
			companyLogo[counter].style.opacity = "1";

			setTimeout(function(){
				animationRunning = 0;
				companyInfo[counter-1].style.transform = "";
				companyLogo[counter-1].style.transform = "";

				companyWrap[counter-1].style.left = "100vw";
			}, 800);
		}
		else if(counter==7){
			counter = 0;

			companyInfo[7].style.transition = "transform 0.5s, opacity 0.5s";
			companyInfo[7].style.transform = "translateX(5vw)";
			companyInfo[7].style.opacity = "0";

			companyLogo[7].style.transition = "transform 0.5s, opacity 0.5s";
			companyLogo[7].style.transform = "translateX(5vw)";
			companyLogo[7].style.opacity = "0";


			companyWrap[counter].style.left = wrapLeft+"px";
			companyWrap[counter].style.transition = "transform 0.5s 0.5s, opacity 0.5s 0.5s";
			companyInfo[counter].style.transition = "transform 0.5s 0.5s, opacity 0.5s 0.5s";
			companyWrap[counter].style.opacity = "1";
			companyInfo[counter].style.opacity = "1";

			companyLogo[counter].style.transition = "transform 0.5s 0.5s, opacity 0.5s 0.5s";
			companyLogo[counter].style.opacity = "1";

			setTimeout(function(){
				animationRunning = 0;
				companyInfo[7].style.transform = "";
				companyLogo[7].style.transform = "";

				companyWrap[7].style.left = "100vw";
			}, 800);
		}
	}

	else{
		return false;
	}	
}

function prevCompany(){
	if(animationRunning == 0){		
		animationRunning = 1;
		wrapLeft = companyWrap[counter].getBoundingClientRect().left;
		if(counter>0){
			counter--;

			companyInfo[counter+1].style.transition = "transform 0.5s, opacity 0.5s";
			companyInfo[counter+1].style.transform = "translateX(5vw)";
			companyInfo[counter+1].style.opacity = "0";

			companyLogo[counter+1].style.transition = "transform 0.5s, opacity 0.5s";
			companyLogo[counter+1].style.transform = "translateX(5vw)";
			companyLogo[counter+1].style.opacity = "0";


			companyWrap[counter].style.left = wrapLeft+"px";
			companyWrap[counter].style.transition = "transform 0.5s 0.5s, opacity 0.5s 0.5s";
			companyInfo[counter].style.transition = "transform 0.5s 0.5s, opacity 0.5s 0.5s";
			companyWrap[counter].style.opacity = "1";
			companyInfo[counter].style.opacity = "1";

			companyLogo[counter].style.transition = "transform 0.5s 0.5s, opacity 0.5s 0.5s";
			companyLogo[counter].style.opacity = "1";

			setTimeout(function(){
				animationRunning = 0;
				companyInfo[counter+1].style.transform = "";
				companyLogo[counter+1].style.transform = "";

				companyWrap[counter+1].style.left = "100vw";
			}, 800);
		}
		else if(counter==0){
			counter = 7;

			companyInfo[0].style.transition = "transform 0.5s, opacity 0.5s";
			companyInfo[0].style.transform = "translateX(5vw)";
			companyInfo[0].style.opacity = "0";

			companyLogo[0].style.transition = "transform 0.5s, opacity 0.5s";
			companyLogo[0].style.transform = "translateX(5vw)";
			companyLogo[0].style.opacity = "0";


			companyWrap[counter].style.left = wrapLeft+"px";
			companyWrap[counter].style.transition = "transform 0.5s 0.5s, opacity 0.5s 0.5s";
			companyInfo[counter].style.transition = "transform 0.5s 0.5s, opacity 0.5s 0.5s";
			companyWrap[counter].style.opacity = "1";
			companyInfo[counter].style.opacity = "1";

			companyLogo[counter].style.transition = "transform 0.5s 0.5s, opacity 0.5s 0.5s";
			companyLogo[counter].style.opacity = "1";

			setTimeout(function(){
				animationRunning = 0;
				companyInfo[0].style.transform = "";
				companyLogo[0].style.transform = "";

				companyWrap[0].style.left = "100vw";
			}, 800);
		}
	}

	else{
		return false;
	}	
}

document.addEventListener("keydown", function(e){
	var keyCode = e.keyCode || e.which,
    arrow = {left:37, up: 38, right: 39,down: 40};

    switch(keyCode){
    	case arrow.right: nextCompany();
    		break;

    	case arrow.left: prevCompany();
    		break;

    	case arrow.up: nextCompany();
    		break;

    	case arrow.down: prevCompany();
    		break;
    }
});

document.getElementsByClassName("problem-body")[0].addEventListener("touchstart", function(e){
        window.scrollBy(0,100);
		x1 = e.changedTouches[0].pageX;
	}, false);

document.getElementsByClassName("problem-body")[0].addEventListener("touchend", function(e){
    var delta = e.changedTouches[0].pageX - x1;
    //right
    if(delta > 0) prevCompany();

    //left
    else if(delta < 0) nextCompany();
});

document.getElementsByClassName("problem-body")[0].addEventListener("DOMMouseScroll", function(e){
	console.log(e);

		if(e.target.classList.contains('company-info')) return false;

		else{
			//left
		    if(e.detail > 0) nextCompany();

		    //right
		    else if(e.detail < 0) prevCompany();
		}
});

document.getElementsByClassName("problem-body")[0].addEventListener("mousewheel", function(e){
	var inInfo = 0;
	for(i=0;i<e.path.length;i++){
		if(e.path[i].classList){
			if(e.path[i].classList.contains('company-info')){
				inInfo = 1;
				break;
			}
		}
	}

	if(inInfo == 1) return false;

	else{
		//left
	    if(e.deltaY > 0) nextCompany();

	    //right
	    else if(e.deltaY < 0) prevCompany();
	}
});

document.getElementsByClassName("up-arrow")[0].addEventListener("click", nextCompany);
document.getElementsByClassName("down-arrow")[0].addEventListener("click", prevCompany);