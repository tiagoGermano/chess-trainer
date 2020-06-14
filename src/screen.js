const ID_BOARD = 'chessBoardId'

class Screen {

    // <i class="fas fa-chess-rook"></i>

    static buildHTMLChessBoard(chessBoard){

        let HTMLBoardContent = '';
        const letters = ['a','b','c','d','e','f','g','h'];

        for (let i = 8; i >= 1; i--) {
            HTMLBoardContent =  HTMLBoardContent.concat(`
              <div class="row">
            `)

            let squareLight = i % 2 === 0 ? false : true;
            for(let j = 0; j < 8; j++){
                let squareStyle = squareLight ? 'square-light': 'square-dark';
                squareLight = !squareLight;

                let square =  `
                    <div id='${letters[j]}${i}' class="col square ${squareStyle}" ondragover="window.dragover_handler(event)" ondrop="window.drop_handler(event)">               
                    </div>
                `
                HTMLBoardContent = HTMLBoardContent.concat(square)
            }

            HTMLBoardContent = HTMLBoardContent.concat('</div>')
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