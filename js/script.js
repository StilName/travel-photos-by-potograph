"use strict"
const reasonNumb = document.querySelectorAll(".reason_numb");
const menuBurger = document.querySelector(".menu-burger");
const menuBody = document.querySelector(".header ul");
const logo = document.querySelector(".logo");
const bodyActive = document.querySelector(".body");
const scroler = document.querySelectorAll(".offer__scroler");
console.log(menuBody);
let i = 0;
const current = (i) => {
	if(i + 1 < 10) {
		reasonNumb[i].innerHTML = `0${i + 1}`;
	}else{
		reasonNumb[i].innerHTML = `${i + 1}`;
	}	
}	

for (;i <= reasonNumb.length - 1; i++) {
	console.log(reasonNumb[i]);
	current(i);
}
if(1){
	menuBurger.addEventListener("click", function(){
	menuBurger.classList.toggle('active');
	menuBody.classList.toggle('active');
	logo.classList.toggle('active');
	bodyActive.classList.toggle('active');
	console.log(menuBody);
	});
}
const scrolLinks = document.querySelectorAll('.offer__scroler [data-goto]');
if(scrolLinks.length > 0){
	console.log(scrolLinks);
	scrolLinks.forEach(scrolLink => {
		scrolLink.addEventListener("click", onScrolLinkClick)
	});

	function onScrolLinkClick(e) {
		const menuLink = e.target;
		const menuLinkClass = menuLink.dataset.goto;
		if (menuLink.dataset.goto){
			const gotoBlock = document.getElementById(`${menuLink.dataset.goto}`);
			console.log(gotoBlock);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
			console.log(gotoBlockValue);
			window.scrollTo({
				top:gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}