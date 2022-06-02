const gameContentHolder = document.getElementById('gameContentHolder')
const gameContentClose = document.getElementById('gameContentClose')
const gameContentTitle = document.getElementById('gameContentTitle')

const gameContentScreenshot1 = document.getElementById('gameContentScreenshot1')
const gameContentScreenshot2 = document.getElementById('gameContentScreenshot2')
const gameContentScreenshot3 = document.getElementById('gameContentScreenshot3')
const gameContentScreenshot4 = document.getElementById('gameContentScreenshot4')

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

    //set screenshots
    gameContentScreenshot1.src = "/files/images/games/" + game + "/1.png"
    gameContentScreenshot2.src = "/files/images/games/" + game + "/2.png"
    gameContentScreenshot3.src = "/files/images/games/" + game + "/3.png"
    gameContentScreenshot4.src = "/files/images/games/" + game + "/4.png"
}

function closeGameContent() {
    gameContentHolder.hidden = true;
}