const start = document.getElementById("start")
const screens = document.querySelectorAll(".screen")
const timeList = document.querySelector("#time-list")
const timeEl = document.querySelector("#time")
const board = document.querySelector('#board')

let time = 0
let score = 0

start.addEventListener("click", (e) => {
	e.preventDefault()
	screens[0].classList.add("up")
})

timeList.addEventListener("click", (e) => {
	if (e.target.classList.contains("time-btn")) {
		if (parseInt(e.target.getAttribute("data-time")) === 10) {
			time = 10
		screens[1].classList.add("up")
        startGame()
		}
		if (parseInt(e.target.getAttribute("data-time")) === 20) {
			time = 20
		screens[1].classList.add("up")
        startGame()
		}
		if (parseInt(e.target.getAttribute("data-time")) === 30) {
			time = 30
		screens[1].classList.add("up")
        startGame()
		}
	}
})
board.addEventListener('click', e => {
	if (e.target.classList.contains('circle')) {
		score++
		e.target.remove()
		createRandomClick()
	}
})


function startGame() {
	setInterval(dasiTime, 1000)
	createRandomClick()
	timeEl.innerHTML = `00:${time}`
}

function dasiTime() {
    if (time === 0) {
        finishGame()
    }
	let current = --time

	if (current < 10) {
		current = `0${current}`
	}

	timeEl.innerHTML = `00:${current}`
}

function finishGame() {
	timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Ваш счет: <span class="primary">${score}<span></h1>`
}
function createRandomClick() {

	const circle = document.createElement('div')

	const size = getRandomNumber(10, 60)
	const {width, height} = board.getBoundingClientRect()
	const x = getRandomNumber(0, width - size)
	const y = getRandomNumber(0, height - size)

	circle.classList.add('circle')
	circle.style.width = `${size}px`
	circle.style.height = `${size}px`
	circle.style.top = `${x}px`
	circle.style.left = `${y}px`


	board.append(circle)
}

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min) + min)
}