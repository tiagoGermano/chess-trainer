
class ChessBoard {

    constructor(){
        this.squares = {}
        this.letters = ['a','b','c','d','e','f','g','h'];

        for (let i = 8; i >= 1; i--) {

            let squareLight = i % 2 === 0 ? false : true;
            for(let j = 0; j < 8; j++){
                let squareStyle = squareLight ? 'square-light': 'square-dark';
                squareLight = !squareLight;

                squares.coordenate = {
                    style : squareStyle,
                    piece : null                    
                }
            }
        }        
    }

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


}