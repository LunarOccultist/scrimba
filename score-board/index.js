// Init Vars
let homeScore = 0
let guestScore = 0
let homeScoreEl = document.getElementById("home-score-el")
let guestScoreEl = document.getElementById("guest-score-el")

// Functions
async function addHome(x) {
    homeScore += x
    homeScoreEl.textContent = homeScore
}

async function addGuest(x) {
    guestScore += x
    guestScoreEl.textContent = guestScore
}

async function newGame() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
}