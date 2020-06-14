class Chess {
    constructor({screen, pieceBuilder}) {

        this.chessBoard = {}
        this.letters = ['a','b','c','d','e','f','g','h'];

        for (let i = 8; i >= 1; i--) {

            let squareLight = i % 2 === 0 ? false : true;
            for(let j = 0; j < 8; j++){
                let squareStyle = squareLight ? 'square-light': 'square-dark';
                squareLight = !squareLight;

                this.chessBoard[this.letters[j] + i] = {
                    style : squareStyle,
                    piece : null                    
                }
            }
        }

        this.screen = screen;
        this.pieceBuilder = pieceBuilder;

        this.chessBoard['a8'].piece = this.pieceBuilder.buildRook('black')
        this.chessBoard['b8'].piece = this.pieceBuilder.buildKnight('black')
        this.chessBoard['c8'].piece = this.pieceBuilder.buildBishop('black')
        this.chessBoard['d8'].piece = this.pieceBuilder.buildQueen('black')
        this.chessBoard['e8'].piece = this.pieceBuilder.buildKing('black')
        this.chessBoard['f8'].piece = this.pieceBuilder.buildBishop('black')
        this.chessBoard['g8'].piece = this.pieceBuilder.buildKnight('black')
        this.chessBoard['h8'].piece = this.pieceBuilder.buildRook('black')
        this.chessBoard['a7'].piece = this.pieceBuilder.buildPawn('black')
        this.chessBoard['b7'].piece = this.pieceBuilder.buildPawn('black')
        this.chessBoard['c7'].piece = this.pieceBuilder.buildPawn('black')
        this.chessBoard['d7'].piece = this.pieceBuilder.buildPawn('black')
        this.chessBoard['e7'].piece = this.pieceBuilder.buildPawn('black')
        this.chessBoard['f7'].piece = this.pieceBuilder.buildPawn('black')
        this.chessBoard['g7'].piece = this.pieceBuilder.buildPawn('black')
        this.chessBoard['h7'].piece = this.pieceBuilder.buildPawn('black')

        //black pieces
        this.chessBoard['a1'].piece = this.pieceBuilder.buildRook()
        this.chessBoard['b1'].piece = this.pieceBuilder.buildKnight()
        this.chessBoard['c1'].piece = this.pieceBuilder.buildBishop()
        this.chessBoard['d1'].piece = this.pieceBuilder.buildQueen()
        this.chessBoard['e1'].piece = this.pieceBuilder.buildKing()
        this.chessBoard['f1'].piece = this.pieceBuilder.buildBishop()
        this.chessBoard['g1'].piece = this.pieceBuilder.buildKnight()
        this.chessBoard['h1'].piece = this.pieceBuilder.buildRook()
        this.chessBoard['a2'].piece = this.pieceBuilder.buildPawn()
        this.chessBoard['b2'].piece = this.pieceBuilder.buildPawn()
        this.chessBoard['c2'].piece = this.pieceBuilder.buildPawn()
        this.chessBoard['d2'].piece = this.pieceBuilder.buildPawn()
        this.chessBoard['e2'].piece = this.pieceBuilder.buildPawn()
        this.chessBoard['f2'].piece = this.pieceBuilder.buildPawn()
        this.chessBoard['g2'].piece = this.pieceBuilder.buildPawn()
        this.chessBoard['h2'].piece = this.pieceBuilder.buildPawn()
    }

    init(){
        this.screen.buildHTMLChessBoard(this.chessBoard);
        this.screen.positionPieces(this.chessBoard)
        this.screen.configureMousedown(this.drag.bind(this));
        this.screen.configureDrop(this.drop.bind(this))
        this.screen.configureDragover(this.dragover.bind(this))
    }

    drag(ev){
        ev.dataTransfer.dropEffect = "move";
        ev.dataTransfer.setData("text/plain", ev.target.id);
    }

    dragover(ev){
        ev.preventDefault();
        ev.dataTransfer.dropEffect = "move";
    }

    drop(ev) {
        ev.preventDefault();
        const data = ev.dataTransfer.getData("text/plain");
        ev.target.appendChild(document.getElementById(data))
    }

}