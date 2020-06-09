class Chess {
    constructor({screen, pieceBuilder}) {
        this.screen = screen;
        this.pieceBuilder = pieceBuilder;

        this.boardMap = {};
        this.boardMap['a8'] = this.pieceBuilder.buildRook()
        this.boardMap['b8'] = this.pieceBuilder.buildKnight()
        this.boardMap['c8'] = this.pieceBuilder.buildBishop()
        this.boardMap['d8'] = this.pieceBuilder.buildQueen()
        this.boardMap['e8'] = this.pieceBuilder.buildKing()
        this.boardMap['f8'] = this.pieceBuilder.buildBishop()
        this.boardMap['g8'] = this.pieceBuilder.buildKnight()
        this.boardMap['h8'] = this.pieceBuilder.buildRook()
        this.boardMap['a7'] = this.pieceBuilder.buildPawn()
        this.boardMap['b7'] = this.pieceBuilder.buildPawn()
        this.boardMap['c7'] = this.pieceBuilder.buildPawn()
        this.boardMap['d7'] = this.pieceBuilder.buildPawn()
        this.boardMap['e7'] = this.pieceBuilder.buildPawn()
        this.boardMap['f7'] = this.pieceBuilder.buildPawn()
        this.boardMap['g7'] = this.pieceBuilder.buildPawn()
        this.boardMap['h7'] = this.pieceBuilder.buildPawn()

        //black pieces
        this.boardMap['a1'] = this.pieceBuilder.buildRook('black')
        this.boardMap['b1'] = this.pieceBuilder.buildKnight('black')
        this.boardMap['c1'] = this.pieceBuilder.buildBishop('black')
        this.boardMap['d1'] = this.pieceBuilder.buildQueen('black')
        this.boardMap['e1'] = this.pieceBuilder.buildKing('black')
        this.boardMap['f1'] = this.pieceBuilder.buildBishop('black')
        this.boardMap['g1'] = this.pieceBuilder.buildKnight('black')
        this.boardMap['h1'] = this.pieceBuilder.buildRook('black')
        this.boardMap['a2'] = this.pieceBuilder.buildPawn('black')
        this.boardMap['b2'] = this.pieceBuilder.buildPawn('black')
        this.boardMap['c2'] = this.pieceBuilder.buildPawn('black')
        this.boardMap['d2'] = this.pieceBuilder.buildPawn('black')
        this.boardMap['e2'] = this.pieceBuilder.buildPawn('black')
        this.boardMap['f2'] = this.pieceBuilder.buildPawn('black')
        this.boardMap['g2'] = this.pieceBuilder.buildPawn('black')
        this.boardMap['h2'] = this.pieceBuilder.buildPawn('black')

    }


    init(){
        this.screen.buildHTMLChessBoard();
        this.screen.positionPieces(this.boardMap)
        this.screen.configureMousedown(this.drag.bind(this));
        this.screen.configureDrop(this.drop.bind(this))
        this.screen.configureDragover(this.dragover.bind(this))
    }

    drag(ev){
        ev.dataTransfer.dropEffect = "move";
        ev.dataTransfer.setData("text/plain", ev.target.id);
        console.log(ev.target)

    }

    dragover(ev){
        ev.preventDefault();
        ev.dataTransfer.dropEffect = "move";
    }

    drop(ev) {
        console.log(ev.dataTransfer)
        ev.preventDefault();
        // Get the id of the target and add the moved element to the target's DOM
        const data = ev.dataTransfer.getData("text/plain");
        console.log(data);
        ev.target.appendChild(document.getElementById(data))
    }

}