const gameContentHolder = document.getElementById('gameContentHolder')
const gameContentClose = document.getElementById('gameContentClose')
const gameContentTitle = document.getElementById('gameContentTitle')

function viewGameContent(game) {
    gameContentHolder.hidden = false;

    switch (game) {
        case 'bulletsiteretold':
            gameContentTitle.src = "/files/images/games/bulletsiteretold/logo_br.png"
            break;
        case 'sgc':
            gameContentTitle.src = "/files/images/games/sgc/sgc_logo.png"
            break;
        case 'bulletsite':
            gameContentTitle.src = "/files/images/games/bulletsite/Title_banner.png"
            break;
        case 'dontfreeze':
            gameContentTitle.src = "/files/images/games/dontfreeze/logo_dt.png"
            break;
        default:
            break;
    }
}

function closeGameContent() {
    gameContentHolder.hidden = true;
}