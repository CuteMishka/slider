var lenta = document.getElementById('lenta')
let decrease = -100
function plus() {
	decrease = -100 + decrease
	lenta.style.left = decrease + 'px'
	if (decrease < -299) {decrease=100}
}
let increase = 100
function prev(){
	increase = 100 + increase
	lenta.style.left = increase + 'px'
	if (increase >= 0) {increase=-400}
}
