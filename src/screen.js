const ID_BOARD = 'chessBoardId'

class Screen {

    // <i class="fas fa-chess-rook"></i>

    static buildHTMLChessBoard(){

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
                    <div id='${letters[j]}${i}' class="col square ${squareStyle}">               
                    </div>
                `
                HTMLBoardContent = HTMLBoardContent.concat(square)
            }

            HTMLBoardContent = HTMLBoardContent.concat('</div>')
            
        }

        const chessBoardElem = document.getElementById(ID_BOARD)
        chessBoardElem.innerHTML = HTMLBoardContent

    }

    static positionPieces(chessBoardMap) {
        
        for (const coordinate in chessBoardMap) {
            
            const positionHTML = document.getElementById(coordinate);
            positionHTML.innerHTML = `
                <span class="piece-${chessBoardMap[coordinate].color}">
                    <i class="fas ${chessBoardMap[coordinate].icon}"></i>
                </span>
            `
        }
    }

}