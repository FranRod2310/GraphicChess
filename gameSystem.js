function rotate(sideToRotate) {
    /*for (let i = 0; i < 8; i++) {
        scene.remove(coordinates[0][i]);
        scene.remove(coordinates[1][i]);
    }
    initCoor(letterCoor, true, letterFont, 0, -sideToRotate);
    initCoor(numbersCoor, false, letterFont, 1, -sideToRotate);
*/
    for (let k = 0; k <= camZ * 2; k += camZ / 1000) {
        setTimeout(() => {
            setTimeout(() => {
                camera.position.z = sideToRotate * camZ - sideToRotate * k;
                camera.position.x = sideToRotate * Math.sqrt(16 - Math.pow(camera.position.z, 2));
                camera.lookAt(0, 0, 0);
            }, k * 60);
        }, 500);
    }
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

function showPossibleMoves(chessPiece, x, y, enPassant) {
    let copyPiecesBoard = new Array(8).fill(null).map(() => new Array(8).fill(null));
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            copyPiecesBoard[i][j] = piecesBoard[i][j];
        }
    }
    console.log(chessPiece);
    if (chessPiece.name == pawnName) {
        checkPossibleMovesPawn(chessPiece, x, y, enPassant, chessPiece.team, copyPiecesBoard);
    }
    else if (chessPiece.name == rookName) {
        checkPossibleMovesRook(x, y, chessPiece.team, copyPiecesBoard);
    }
    else if (chessPiece.name == knightName) {
        checkPossibleMovesKnight(x, y, chessPiece.team, copyPiecesBoard);
    }
    else if (chessPiece.name == bishopName) {
        checkPossibleMovesBishop(x, y, chessPiece.team, copyPiecesBoard);
    }
    else if (chessPiece.name == queenName) {
        checkPossibleMovesQueen(x, y, chessPiece.team, copyPiecesBoard);
    }
    else if (chessPiece.name == kingName) {
        checkPossibleMovesKing(x, y, chessPiece.team, copyPiecesBoard);
    }
}

function checkPossibleMovesPawn(chessPiece, x, y, enPassant, team, copyPiecesBoard) {
    chessPiece = copyPiecesBoard[x][y];

    //en passant
    //change to queen?
    let sign = chessPiece.team == teamWhite ? 1 : -1;
    //first move, 2 squares
    if (x == chessPiece.initPos && piecesBoard[x - sign * 2][y] == null) {
        copyPiecesBoard[x - sign * 2][y] = chessPiece;
        copyPiecesBoard[x][y] = null;
        console.log("can move to " + letterCoor[y] + (8 - (x - sign * 2)));
        squaresBoard[x - sign * 2][y].material.color.set(suggestionsColor);
        copyPiecesBoard[x][y] = chessPiece;
        copyPiecesBoard[x - sign * 2][y] = null;
    }
    if (x > 0 && x < 7) {
        //move 1 square
        if (piecesBoard[x - sign][y] == null) {
            copyPiecesBoard[x - sign][y] = chessPiece;
            copyPiecesBoard[x][y] = null;
            console.log("can move to " + letterCoor[y] + (8 - (x - sign)));
            squaresBoard[x - sign][y].material.color.set(suggestionsColor);
            copyPiecesBoard[x][y] = chessPiece;
            copyPiecesBoard[x - sign][y] = null;
        }
        //eat
        if (y > 0 && piecesBoard[x - sign][y - 1] != null && piecesBoard[x - sign][y - 1].team != team) {
            let enemy = piecesBoard[x - sign][y - 1];
            copyPiecesBoard[x - sign][y - 1] = chessPiece;
            copyPiecesBoard[x][y] = null;
            console.log("can eat in " + letterCoor[y - 1] + (8 - (x - sign)));
            squaresBoard[x - sign][y - 1].material.color.set(suggestionsColorToEat);
            copyPiecesBoard[x - sign][y - 1] = enemy;
            copyPiecesBoard[x][y] = chessPiece;
        }
        //eat
        if (y < 7 && piecesBoard[x - sign][y + 1] != null && piecesBoard[x - sign][y + 1].team != team) {
            let enemy = piecesBoard[x - sign][y + 1];
            copyPiecesBoard[x - sign][y + 1] = chessPiece;
            copyPiecesBoard[x][y] = null;
            console.log("can eat in " + letterCoor[y + 1] + (8 - (x - sign)));
            squaresBoard[x - sign][y + 1].material.color.set(suggestionsColorToEat);
            copyPiecesBoard[x - sign][y + 1] = enemy;
            copyPiecesBoard[x][y] = chessPiece;
        }
        //en passant
        if ((x == 3 && team == teamWhite) || (x == 4 && team == teamBlack)) {
            if (enPassant == y + 1) {
                let enemy = piecesBoard[x][y + 1];
                copyPiecesBoard[x][y + 1] = null;
                copyPiecesBoard[x - sign][y + 1] = chessPiece;
                copyPiecesBoard[x][y] = null;
                console.log("can eat in " + letterCoor[y + 1] + (8 - (x - sign)));
                squaresBoard[x - sign][y + 1].material.color.set(suggestionsColorToEat);
                copyPiecesBoard[x][y + 1] = enemy;
                copyPiecesBoard[x - sign][y + 1] = null;
                copyPiecesBoard[x][y] = chessPiece;
            }
            else if (enPassant == y - 1) {
                let enemy = piecesBoard[x][y - 1];
                copyPiecesBoard[x][y - 1] = null;
                copyPiecesBoard[x - sign][y - 1] = chessPiece;
                copyPiecesBoard[x][y] = null;
                console.log("can eat in " + letterCoor[y - 1] + (8 - (x - sign)));
                squaresBoard[x - sign][y - 1].material.color.set(suggestionsColorToEat);
                copyPiecesBoard[x][y - 1] = enemy;
                copyPiecesBoard[x - sign][y - 1] = null;
                copyPiecesBoard[x][y] = chessPiece;
            }
        }
    }

}

function checkPossibleMovesRook(x, y, team, copyPiecesBoard) {
    chessPiece = copyPiecesBoard[x][y];
    //up
    for (let i = x - 1; i >= 0; i--) {
        if (copyPiecesBoard[i][y] == null) {
            copyPiecesBoard[i][y] = chessPiece;
            copyPiecesBoard[x][y] = null;
            console.log("can move to " + letterCoor[y] + (8 - i));
            squaresBoard[i][y].material.color.set(suggestionsColor);
            copyPiecesBoard[i][y] = null;
            copyPiecesBoard[x][y] = chessPiece;
        }
        else if (copyPiecesBoard[i][y].team != team) {
            let enemy = copyPiecesBoard[i][y];
            copyPiecesBoard[i][y] = chessPiece;
            copyPiecesBoard[x][y] = null;
            console.log("can eat in " + letterCoor[y] + (8 - i));
            squaresBoard[i][y].material.color.set(suggestionsColorToEat);
            copyPiecesBoard[i][y] = enemy;
            copyPiecesBoard[x][y] = chessPiece;
            break;
        }
        else {
            break;
        }
    }
    //down
    for (let i = x + 1; i <= 7; i++) {
        if (copyPiecesBoard[i][y] == null) {
            copyPiecesBoard[i][y] = chessPiece;
            copyPiecesBoard[x][y] = null;
            console.log("can move to " + letterCoor[y] + (8 - i));
            squaresBoard[i][y].material.color.set(suggestionsColor);
            copyPiecesBoard[i][y] = null;
            copyPiecesBoard[x][y] = chessPiece;
        }
        else if (copyPiecesBoard[i][y].team != team) {
            let enemy = copyPiecesBoard[i][y];
            copyPiecesBoard[i][y] = chessPiece;
            copyPiecesBoard[x][y] = null;
            console.log("can eat in " + letterCoor[y] + (8 - i));
            squaresBoard[i][y].material.color.set(suggestionsColorToEat);
            copyPiecesBoard[i][y] = enemy;
            copyPiecesBoard[x][y] = chessPiece;
            break;
        }
        else {
            break;
        }
    }
    //left
    for (let i = y - 1; i >= 0; i--) {
        if (copyPiecesBoard[x][i] == null) {
            copyPiecesBoard[x][i] = chessPiece;
            copyPiecesBoard[x][y] = null;
            console.log("can move to " + letterCoor[i] + (8 - x));
            squaresBoard[x][i].material.color.set(suggestionsColor);
            copyPiecesBoard[x][i] = null;
            copyPiecesBoard[x][y] = chessPiece;
        }
        else if (copyPiecesBoard[x][i].team != team) {
            let enemy = copyPiecesBoard[x][i];
            copyPiecesBoard[x][i] = chessPiece;
            copyPiecesBoard[x][y] = null;
            console.log("can eat in " + letterCoor[i] + (8 - x));
            squaresBoard[x][i].material.color.set(suggestionsColorToEat);
            copyPiecesBoard[x][i] = enemy;
            copyPiecesBoard[x][y] = chessPiece;
            break;
        }
        else {
            break;
        }
    }
    //right
    for (let i = y + 1; i <= 7; i++) {
        if (copyPiecesBoard[x][i] == null) {
            copyPiecesBoard[x][i] = chessPiece;
            copyPiecesBoard[x][y] = null;
            console.log("can move to " + letterCoor[i] + (8 - x));
            squaresBoard[x][i].material.color.set(suggestionsColor);
            copyPiecesBoard[x][i] = null;
            copyPiecesBoard[x][y] = chessPiece;
        }
        else if (copyPiecesBoard[x][i].team != team) {
            let enemy = copyPiecesBoard[x][i];
            copyPiecesBoard[x][i] = chessPiece;
            copyPiecesBoard[x][y] = null;
            console.log("can eat in " + letterCoor[i] + (8 - x));
            squaresBoard[x][i].material.color.set(suggestionsColorToEat);
            copyPiecesBoard[x][i] = enemy;
            copyPiecesBoard[x][y] = chessPiece;
            break;
        }
        else {
            break;
        }
    }
}

function checkPossibleMovesKnight(x, y, team, copyPiecesBoard) {
    if (x < 6) {
        if (y < 7) {
            vertKnightMove(x, y, -1, 1, team, copyPiecesBoard);
        }
        if (y > 0) {
            vertKnightMove(x, y, -1, -1, team, copyPiecesBoard);
        }
    }
    if (x > 1) {
        if (y < 7) {
            vertKnightMove(x, y, 1, 1, team, copyPiecesBoard);
        }
        if (y > 0) {
            vertKnightMove(x, y, 1, -1, team, copyPiecesBoard);
        }
    }
    if (y < 6) {
        if (x < 7) {
            horKnightMove(x, y, -1, 1, team, copyPiecesBoard);
        }
        if (x > 0) {
            horKnightMove(x, y, 1, 1, team, copyPiecesBoard);
        }
    }
    if (y > 1) {
        if (x < 7) {
            horKnightMove(x, y, -1, -1, team, copyPiecesBoard);
        }
        if (x > 0) {
            horKnightMove(x, y, 1, -1, team, copyPiecesBoard);
        }
    }
}

function checkPossibleMovesBishop(x, y, team, copyPiecesBoard) {
    checkDiagonals(x, y, team, copyPiecesBoard);
}

function checkPossibleMovesQueen(x, y, team, copyPiecesBoard) {
    checkPossibleMovesRook(x, y, team, copyPiecesBoard);
    checkPossibleMovesBishop(x, y, team, copyPiecesBoard);
}

function checkPossibleMovesKing(x, y, team, copyPiecesBoard) {
    //king not allowed to move near other king
    //rock
    for (let k = -1; k <= 1; k++) {
        if (x + k < 0 || x + k > 7)
            continue;
        for (let l = -1; l <= 1; l++) {
            if (y + l < 0 || y + l > 7 || (k == 0 && l == 0))
                continue;
            if (piecesBoard[x + k][y + l] == null) {
                console.log("can move to " + letterCoor[y + l] + (8 - (x + k)));
                squaresBoard[x + k][y + l].material.color.set(suggestionsColor);
            } else if (piecesBoard[x + k][y + l].team != team) {
                console.log("can eat in " + letterCoor[y + l] + (8 - (x + k)));
                squaresBoard[x + k][y + l].material.color.set(suggestionsColorToEat);
            }
        }
    }
}

function checkDiagonals(x, y, team, copyPiecesBoard) {
    checkDiagonal(x, y, 1, 1, team, copyPiecesBoard); //up left
    checkDiagonal(x, y, 1, -1, team, copyPiecesBoard); //up right
    checkDiagonal(x, y, -1, 1, team, copyPiecesBoard); //down left
    checkDiagonal(x, y, -1, -1, team, copyPiecesBoard); //down right
}


function checkDiagonal(x, y, signX, signY, team, copyPiecesBoard) {
    for (let i = 1; i <= 7; i++) {
        //extreme 
        if (x - signX * i > 7 || y - signY * i > 7 || x - signX * i < 0 || y - signY * i < 0)
            break;
        //can move
        if (piecesBoard[x - signX * i][y - signY * i] == null) {
            console.log("can move to " + letterCoor[y - signY * i] + (8 - (x - signX * i)));
            squaresBoard[x - signX * i][y - signY * i].material.color.set(suggestionsColor);
        }
        //can eat and stop
        else if (piecesBoard[x - signX * i][y - signY * i].team != team) {
            console.log("can eat in " + letterCoor[y - signY * i] + (8 - (x - signX * i)));
            squaresBoard[x - signX * i][y - signY * i].material.color.set(suggestionsColorToEat);
            break;
        }
        //same team stop
        else {
            break;
        }
    }
}

function vertKnightMove(x, y, signX, signY, team, copyPiecesBoard) {
    if (piecesBoard[x - signX * 2][y + signY] == null) {
        console.log("can move to " + letterCoor[y + signY] + (8 - (x - signX * 2)));
        squaresBoard[x - signX * 2][y + signY].material.color.set(suggestionsColor);
    }
    else if (piecesBoard[x - signX * 2][y + signY].team != team) {
        console.log("can eat in " + letterCoor[y + signY] + (8 - (x - signX * 2)));
        squaresBoard[x - signX * 2][y + signY].material.color.set(suggestionsColorToEat);
    }
}

function horKnightMove(x, y, signX, signY, team, copyPiecesBoard) {
    if (piecesBoard[x - signX][y + signY * 2] == null) {
        console.log("can move to " + letterCoor[y + signY * 2] + (8 - (x - signX)));
        squaresBoard[x - signX][y + signY * 2].material.color.set(suggestionsColor);
    }
    else if (piecesBoard[x - signX][y + signY * 2].team != team) {
        console.log("can eat in " + letterCoor[y + signY * 2] + (8 - (x - signX)));
        squaresBoard[x - signX][y + signY * 2].material.color.set(suggestionsColorToEat);
    }
}

function updateSuggestions(x, y, chessPiece, enPassant) {
    resetSquaresBoard(colorBoard);
    showPossibleMoves(chessPiece, x, y, enPassant);
}


function checkKing(team, x, y, copyPiecesBoard) {
    let found = false;
    let copySquaresBoard = new Array(8).fill(null).map(() => new Array(8).fill(null));
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            copySquaresBoard[i][j] = squaresBoard[i][j].material.color.getHex();
        }
    }

    checkDiagonals(x, y, team, copyPiecesBoard);
    checkPossibleMovesRook(x, y, team, copyPiecesBoard);
    checkPossibleMovesKnight(x, y, team, copyPiecesBoard);
    checkBoard:
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            //if found a piece that can eat the king
            if (squaresBoard[i][j].material.color.getHex() == suggestionsColorToEat) {
                //if the piece is a queen or bishop and in the same diagonal
                if ((copyPiecesBoard[i][j].name == queenName || copyPiecesBoard[i][j].name == bishopName) && Math.abs(i - x) == Math.abs(j - y)) {
                    console.log(copyPiecesBoard[i][j].name + " " + letterCoor[j] + (8 - i) + ", " + letterCoor[y] + (8 - x));
                    found = true;
                    break checkBoard;
                }
                //if the piece is a queen or rook and in the same row or column
                else if ((copyPiecesBoard[i][j].name == queenName || copyPiecesBoard[i][j].name == rookName) && (i == x || j == y)) {
                    console.log(copyPiecesBoard[i][j].name + " " + letterCoor[j] + (8 - i) + ", " + letterCoor[y] + (8 - x));
                    found = true;
                    break checkBoard;
                }
                //if the piece is a king and is near the king
                else if (copyPiecesBoard[i][j].name == kingName && Math.abs(i - x) <= 1 && Math.abs(j - y) <= 1) {
                    console.log(copyPiecesBoard[i][j].name + " " + letterCoor[j] + (8 - i) + ", " + letterCoor[y] + (8 - x));
                    found = true;
                    break checkBoard;
                }
                else if (copyPiecesBoard[i][j].name == knightName && ((Math.abs(i - x) == 2 && Math.abs(j - y) == 1) || (Math.abs(i - x) == 1 && Math.abs(j - y) == 2))) {
                    console.log(copyPiecesBoard[i][j].name + " " + letterCoor[j] + (8 - i) + ", " + letterCoor[y] + (8 - x));
                    found = true;
                    break checkBoard;
                }
                else if (copyPiecesBoard[i][j].name == pawnName && ((i == x + 1 && j == y + 1) || (i == x + 1 && j == y - 1) || (i == x - 1 && j == y + 1) || (i == x - 1 && j == y - 1))) {
                    console.log(copyPiecesBoard[i][j].name + " " + letterCoor[j] + (8 - i) + ", " + letterCoor[y] + (8 - x));
                    found = true;
                    break checkBoard;
                }
            }
        }
    }
    resetSquaresBoard(copySquaresBoard);
    return found;
}

function lookForCheck() {
    let found = false;
    let x = turn == teamWhite ? whiteKingX : blackKingX;
    let y = turn == teamWhite ? whiteKingY : blackKingY;
    found = checkKing(turn, x, y, piecesBoard);
    squaresBoard[x][y].material.color.set(found ? checkColor : colorBoard[x][y]);
    if (found) console.log("Check");
    return found;
}

