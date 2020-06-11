function onLoad(){
    
    const injection = {
        screen : Screen,
        pieceBuilder : PieceBuilder,
        chessBoard : ChessBoard
    }

    const chess = new Chess(injection)
    chess.init()
}

function movePiece(){
    console.log('teste')
}

window.onload = onLoad
