const colorsEl = document.getElementById('colors')
const colorInput = document.getElementById('color-input')
const dropDown = document.getElementById('modes')
const getBtn = document.getElementById('get-btn')

let colors = []

getBtn.addEventListener('click', function () {
	const seedColor = colorInput.value.replace('#', '')
	const mode = dropDown.value
	console.log(seedColor)
	console.log(mode)
	fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${mode}`)
		.then((res) => res.json())
		.then((data) => {
			// console.log(data)
			colors = data.colors
			renderColors()
		})
})

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
