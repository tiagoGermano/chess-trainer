function onLoad(){
    
    const injection = {
        screen : Screen,
        pieceBuilder : PieceBuilder
    }

    const chess = new Chess(injection)
    chess.init()
}

window.onload = onLoad
