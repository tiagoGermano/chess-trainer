function onLoad(){
    
    const injection = {
        screen : Screen,
        pieceBuilder : PieceBuilder
    }

    const chess = new Chess(injection)
    chess.init()
}

function movePiece(){
    console.log('teste')
}

window.onload = onLoad
