// console.log('main.js is loaded');

// Initial assembly of the page by using IIFE
(() => {
	// let navElement = $('<navbar>', {class: 'navbar bg-dark text-white'});;
	// navElement.append($('<p>', {class: 'text-center', text: 'Earth Time'}));
	// $('#main').append(navElement);
	// let bodyElement = $('<>')
})();

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";

}

let ds = 0;

// Define two types of tickers: empty circle and filled circle
const circleEmpty = () => {	$('#decimalSeconds').append($('<ticker>', {html: '&#9898;&nbsp;'})) }
const circleFill =  () => {	$('#decimalSeconds').append($('<ticker>', {html: '&#9899;&nbsp;'})) }

const ticker = () => {
  let index = ds % 10 + 1;
  $('#decimalSeconds').html('&nbsp;');
  // construct sequence of 5 circles
  for (let i = 0; i < 5; i++) {
  	((i < index && index < 5) || !((i >= index && index < 5) || (i < index - 5 && index >= 5))) ? circleEmpty() :circleFill();
  }

  // count up to 10 and reset
  ds < 9 ? ds++ : ds = 0
}

// Update every beat, which equals 846 milliseconds
setInterval(ticker, 846);
