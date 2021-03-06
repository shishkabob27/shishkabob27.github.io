const gameContentHolder = document.getElementById('gameContentHolder')
const gameContentClose = document.getElementById('gameContentClose')
const gameContentTitle = document.getElementById('gameContentTitle')

const gameContentScreenshot1 = document.getElementById('gameContentScreenshot1')
const gameContentScreenshot2 = document.getElementById('gameContentScreenshot2')
const gameContentScreenshot3 = document.getElementById('gameContentScreenshot3')
const gameContentScreenshot4 = document.getElementById('gameContentScreenshot4')

const gameDownloadButton1 = document.getElementById('gameDownloadButton1')

const gameContentDesc = document.getElementById('gameContentDesc')

var selectedGame = null;

function viewGameContent(game) {
    gameContentHolder.hidden = false;

    selectedGame = game;

    switch (game) {
        case 'bulletsiteretold':
            gameContentTitle.src = "/files/images/games/bulletsiteretold/logo_br.png"
            gameContentDesc.innerHTML = "A remake of Bulletsite. The Squares have invaded the circle island and you must fight for it."
            gameDownloadButton1.innerHTML = "Download Demo (58.4 MB)"
            break;
        case 'sgc':
            gameContentTitle.src = "/files/images/games/sgc/sgc_logo.png"
            gameContentDesc.innerHTML = "A collection of games made by shishkabob from 2016-2020. It also contains the editable files. This Collection must be downloaded."
            gameDownloadButton1.innerHTML = "Download (v2.00) (7z) (186 MB)"
            break;
        case 'bulletsite':
            gameContentTitle.src = "/files/images/games/bulletsite/Title_banner.png"
            gameContentDesc.innerHTML = "The Squares have invaded the circle island and you must fight 1v1 for it."
            gameDownloadButton1.innerHTML = "Download (v1.1) (9.8 MB)"
            break;
        case 'dontfreeze':
            gameContentTitle.src = "/files/images/games/dontfreeze/logo_dt.png"
            gameContentDesc.innerHTML = "Oh no! your car broke down and now you have to find car parts and avoid the ice queen."
            gameDownloadButton1.innerHTML = "Download (v1.2) (6 MB)"
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

function gameDownload() {
    switch (selectedGame) {
        case 'bulletsiteretold':
            window.open('/files/games/bulletsiteretold/bulletsiteretolddemo_installer.exe')
            break;
        case 'sgc':
            window.open('https://app.box.com/s/2090gqoxr0ek4c6795r69mdo034ff8mt')
            break;
        case 'bulletsite':
            window.open('/files/games/bulletsite/Bulletsite.exe')
            break;
        case 'dontfreeze':
            window.open('/files/games/dontfreeze/dontfreezeremastered.exe')
            break;
        default:
            break;
    }
}