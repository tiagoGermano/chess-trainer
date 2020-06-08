class PieceBuilder {

    static buildRook(color = 'white'){
        return {
            name : 'Rook',
            color: color,
            icon : 'fa-chess-rook'
        }
    }

    static buildKnight(color = 'white'){
        return {
            name : 'Knight',
            color: color,
            icon : 'fa-chess-knight'
        }        
    }

    static buildBishop(color = 'white'){
        return {
            name : 'Bishop',
            color: color,
            icon : 'fa-chess-bishop'
        }         
    }
    
    static buildQueen(color = 'white'){
        return {
            name : 'Queen',
            color: color,
            icon : 'fa-chess-queen'
        }         
    }
       
    static buildKing(color = 'white'){
        return {
            name : 'King',
            color: color,
            icon : 'fa-chess-king'
        }         
    } 
       
    static buildPawn(color = 'white'){
        return {
            name : 'Pawn',
            color: color,
            icon : 'fa-chess-pawn'
        }         
    }     
}