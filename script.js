var lenta = document.getElementById('lenta')
let decrease = -100
function plus() {
	decrease = -100 + decrease
	lenta.style.left = decrease + 'px'
	if (decrease < -299) {decrease=100}
}
