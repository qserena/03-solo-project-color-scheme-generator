const colorsEl = document.getElementById('colors')
const colorInput = document.getElementById('color-input')
const dropDown = document.getElementById('modes')
const getBtn = document.getElementById('get-btn')

let colors = []

getBtn.addEventListener('click', function () {
	const seedColor = colorInput.value.replace('#', '')
	const mode = dropDown.value
	fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${mode}`)
		.then((res) => res.json())
		.then((data) => {
			colors = data.colors
			renderColors()
		})
})

function initScreen() {
	let html = `
            <div class="color">
                <div class="color-part" style="background-color: #B4DC23"></div>
                <div class="hex-part">#B4DC23</div>
            </div>
			<div class="color">
                <div class="color-part" style="background-color: #C4E44E"></div>
                <div class="hex-part">#C4E44E</div>
            </div>
			<div class="color">
                <div class="color-part" style="background-color: #D3EC79"></div>
                <div class="hex-part">#D3EC79</div>
            </div>
			<div class="color">
                <div class="color-part" style="background-color: #CCCCCC"></div>
                <div class="hex-part">#CCCCCC</div>
            </div>
			<div class="color">
                <div class="color-part" style="background-color: #E6E6E6"></div>
                <div class="hex-part">#E6E6E6</div>
            </div>
        `
	colorsEl.innerHTML = html
}

function renderColors() {
	let html = ''
	for (let color of colors) {
		html += `
            <div class="color">
                <div class="color-part" style="background-color: ${color.hex.value}"></div>
                <div class="hex-part">${color.hex.value}</div>
            </div>
        `
	}
	colorsEl.innerHTML = html
}

initScreen()
