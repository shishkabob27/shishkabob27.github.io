const gameContentHolder = document.getElementById('gameContentHolder')
const gameContentClose = document.getElementById('gameContentClose')

function viewGameContent() {
    gameContentHolder.hidden = false;
}

function closeGameContent() {
    gameContentHolder.hidden = true;
}