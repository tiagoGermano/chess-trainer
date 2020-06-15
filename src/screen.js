const ID_BOARD = 'chessBoardId'

class Screen {

    // <i class="fas fa-chess-rook"></i>

    static buildHTMLChessBoard(chessBoard){

        let HTMLBoardContent = '';
        let letters = ['a','b','c','d','e','f','g','h']
        let count = 0;
        let total = 0;

        for (const key in chessBoard) {
            total++
            if (chessBoard.hasOwnProperty(key)) {
                const square = chessBoard[key];
                
                if(count % 8 === 0){
                    HTMLBoardContent =  HTMLBoardContent.concat(`
                    <div class="row">
                    `)
                }
                
                let squareElement  = '';
                if(square.piece !== null){
                    squareElement =  `
                    <div id='${key}' class="col square ${square.style}" ondragover="window.dragover_handler(event)" ondrop="window.drop_handler(event)">  
                        <span id="p${key}" class="piece-${square.piece.color}" draggable="true" ondragstart="window.dragstart_handler(event)">
                            <i  class="piece fas ${square.piece.icon}" ></i>
                        </span>
                    </div>
                    `
                } else {
                    squareElement =  `
                    <div id='${key}' class="col square ${square.style}" ondragover="window.dragover_handler(event)" ondrop="window.drop_handler(event)">               
                    </div>
                    `
                }

                HTMLBoardContent = HTMLBoardContent.concat(squareElement)
                
                if(total === 8){
                    HTMLBoardContent = HTMLBoardContent.concat('</div>')
                    total = 0;
                }                

            }
            
            count++;
        }

        const chessBoardElem = document.getElementById(ID_BOARD)
        chessBoardElem.innerHTML = HTMLBoardContent

    }

    static configureMousedown(dragstart_handler){
        window.dragstart_handler = dragstart_handler
    }

    static configureDrop(drop_handler){
        window.drop_handler = drop_handler
    }

    static configureDragover(dragover_handler){
        window.dragover_handler = dragover_handler
    }

    static positionPieces(chessBoard) {
        
        for (const key in chessBoard) {
            if (chessBoard.hasOwnProperty(key)) {
                const piece = chessBoard[key].piece;
                
                if(piece !== null){
                    const positionHTML = document.getElementById(key);
                    positionHTML.innerHTML = `
                        <span id="p${key}" class="piece-${piece.color}" draggable="true" ondragstart="window.dragstart_handler(event)">
                            <i  class="piece fas ${piece.icon}" ></i>
                        </span>
                    `
                }
            }
        }

    }

}