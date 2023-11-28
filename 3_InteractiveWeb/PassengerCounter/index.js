let counter = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("saved-el")

function increment() {
    counter += 1
    countEl.textContent  = counter
}

function save() {
    let countStr = counter + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    counter = 0
}