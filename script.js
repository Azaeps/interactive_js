let click = 1;
function clickFooter() {
	console.log("Clic numero " + click);
	click++;
}

function navbar() {
	document.getElementsByTagName('div')[0].classList.toggle("collapse")
}

function editRed() {
	document.getElementsByClassName('card-text')[0].style.color = 'red';
}

function editGreen() {
	if (document.getElementsByClassName('card-text')[1].style.color == 'green') {
		document.getElementsByClassName('card-text')[1].style.color = '#212529';
	}
	else {
		document.getElementsByClassName('card-text')[1].style.color = 'green';
	}
}

function disableLink() {
	if (document.querySelector('link').disabled == false) {
		document.querySelector('link').disabled = true;
	}
	else {
		document.querySelector('link').disabled = false;
	}
}

//Fonction 6
for (let index = 0; index < document.querySelectorAll('.btn-success').length; index++) {
	document.querySelectorAll('.btn-success')[index].addEventListener("mouseover", function() {
		if (document.getElementsByClassName('card-text')[index].classList == 'card-text collapse') {
			document.getElementsByClassName('card-text')[index].classList.toggle("collapse");
			document.getElementsByClassName('card-img-top')[index].style.width = '100%';
		}
		else {
			document.getElementsByClassName('card-text')[index].classList.toggle("collapse");
			document.getElementsByClassName('card-img-top')[index].style.width = '20%';
		}
	}
)}

function rotCards() {
	document.querySelectorAll('.row')[1].insertBefore(document.querySelectorAll('.col-md-4')[document.querySelectorAll('.col-md-4').length - 1], document.querySelectorAll('.col-md-4')[0]);
}

function rotCardInv(e) {
	document.querySelectorAll('.row')[1].insertBefore(document.querySelectorAll('.col-md-4')[0], document.querySelectorAll('.col-md-4')[document.querySelectorAll('.col-md-4').length]);
	e.preventDefault();
}

function bodyChange() {
	if (window.getSelection().toString().trim() === 'JS & Events') {
		addEventListener('keypress', function(e) {
			if (e.keyCode == '97') {
				document.querySelector('body').className = "";
				document.querySelector('body').classList.add("col-md-4");
			}
			else if (e.keyCode == '121') {
				document.querySelector('body').className = "";
				document.querySelector('body').classList.add("offset-4", "col-md-4");
			}
			else if (e.keyCode == '112') {
				document.querySelector('body').className = "";
				document.querySelector('body').classList.add("offset-8", "col-md-4");
			}
			else if (e.keyCode == '98') {
				document.querySelector('body').className = "";
			}
		})
	}
}

//Fontcion 1
document.querySelector('footer').addEventListener("click", clickFooter);
//Fonction 2
document.querySelector('.navbar-toggler').addEventListener("click", navbar);
//Fonction 3
document.getElementsByClassName('btn btn-sm btn-outline-secondary')[0].addEventListener("click", editRed);
//Fonction 4
document.getElementsByClassName('btn btn-sm btn-outline-secondary')[1].addEventListener("click", editGreen);
//Fonction 5
document.querySelector('header').addEventListener("dblclick", disableLink);
//Fonction 7
document.getElementsByClassName('btn btn-secondary my-2')[0].addEventListener("click", rotCards);
//Fonction 8
document.getElementsByClassName('btn btn-primary my-2')[0].addEventListener("click", rotCardInv, true);
//Fonction 9
addEventListener('mouseup', bodyChange, false);