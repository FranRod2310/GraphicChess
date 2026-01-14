let selectedPiece = null;
let prevPieceMaterial = null;
let selectedSquare = null;
let prevSquareMaterial = null;
let enPassent = noPassent;
// Initialize raycaster and mouse vector
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// Event listener for mouse clicks
renderer.domElement.addEventListener('mousedown', onMouseDown, false);

function onMouseDown(event) {
    // Calculate mouse position in normalized device coordinates (NDC)
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Raycast from camera to mouse position
    raycaster.setFromCamera(mouse, camera);

    // Find intersected objects
    const intersects = raycaster.intersectObjects(board.children, true);

    if (intersects.length > 0) {
        const clickedObject = intersects[0].object;

        // Find the parent piece group
        let parentPiece = clickedObject;
        while (parentPiece.parent && parentPiece.parent !== board) {
            parentPiece = parentPiece.parent;
        }

        // Check if clicked object is a chess piece
        const isPiece = clickedObject.material.color.getHex() === whitePieceColor || clickedObject.material.color.getHex() === blackPieceColor || clickedObject.material.color.getHex() === selectedPieceColor;

        //move the piece
        if (selectedPiece != null && clickedObject.material.color.getHex() != prevPieceMaterial && clickedObject.material.color.getHex() != selectedPieceColor) {
            let boardPosX;
            let boardPosZ;
            let piecePosX = selectedPiece.position.x / scale + 3.5;
            let piecePosZ = selectedPiece.position.z / scale + 3.5;

            //squares, convert to matrix coordinates
            if (clickedObject.material.color.getHex() == 0xFFC18B || clickedObject.material.color.getHex() == 0x8B4512 || clickedObject.material.color.getHex() == selectedSquareColor) {
                boardPosX = clickedObject.position.x / scale + 3.5;
                boardPosZ = clickedObject.position.z / scale + 3.5;
            }
            //pieces, convert to matrix coordinates
            else {
                boardPosX = parentPiece.position.x / scale + 3.5;
                boardPosZ = parentPiece.position.z / scale + 3.5;
            }

            //if clicked on the same team position
            if (piecesBoard[boardPosZ][boardPosX] != null && piecesBoard[piecePosZ][piecePosX].team == piecesBoard[boardPosZ][boardPosX].team) {
                deselectPiece();
                resetSquaresBoard(colorBoard);
            } else if (squaresBoard[boardPosZ][boardPosX].material.color.getHex() == suggestionsColor || squaresBoard[boardPosZ][boardPosX].material.color.getHex() == suggestionsColorToEat) {
                let lastEnPassent = enPassent;
                let enPassentEaten = false;
                deselectSquare();

                //update selected square
                selectedSquare = squaresBoard[boardPosZ][boardPosX];
                selectSquare();

                //if it ate a piece, remove it
                if (piecesBoard[boardPosZ][boardPosX] != null) {
                    board.remove(piecesBoard[boardPosZ][boardPosX]);
                }
                //check en passent conditions, 
                else if (piecesBoard[piecePosZ][piecePosX].name == pawnName && boardPosX == enPassent &&
                    ((boardPosZ == 2 && turn == teamWhite) || (boardPosZ == 5 && turn == teamBlack))) {
                    board.remove(piecesBoard[piecePosZ][enPassent]);
                    enPassentEaten = true;
                }

                //check if move is en passent
                if (piecesBoard[piecePosZ][piecePosX].name == pawnName && Math.abs(piecePosZ - boardPosZ) == 2)
                    enPassent = piecePosX;
                else
                    enPassent = noPassent;

                //update king position
                if (piecesBoard[piecePosZ][piecePosX].name == kingName) {
                    if (turn == teamWhite) {
                        whiteKingX = boardPosZ;
                        whiteKingY = boardPosX;
                    }
                    else {
                        blackKingX = boardPosZ;
                        blackKingY = boardPosX;
                    }
                }

                //move selected piece
                selectedPiece.position.set(selectedSquare.position.x, selectedPiece.position.y, selectedSquare.position.z);
                console.log("Moved " + selectedPiece.name + " from " + letterCoor[piecePosX] + (8 - piecePosZ) + " to " + letterCoor[boardPosX] + (8 - boardPosZ));
                deselectPiece();


                updateArrays(piecePosX, piecePosZ, boardPosX, boardPosZ, lastEnPassent, enPassentEaten);
                switchTurn();
                resetSquaresBoard(colorBoard);
                lookForCheck();
            }
            else {
                deselectPiece();
                resetSquaresBoard(colorBoard);

            }
        } else if (selectedPiece === parentPiece) { //clicked on same piece
            deselectPiece();
            resetSquaresBoard(colorBoard);
        } else if (isPiece && piecesBoard[parentPiece.position.z / scale + 3.5][parentPiece.position.x / scale + 3.5].team == turn) {//select the piece
            deselectPiece();
            resetSquaresBoard(colorBoard);
            selectedPiece = parentPiece;
            //change the color of the selected piece to red
            prevPieceMaterial = selectedPiece.children[0].material.color.getHex();
            selectedPiece.children.forEach(part => {
                part.material.color.set(selectedPieceColor);
            });
            let piecePosX = selectedPiece.position.x / scale + 3.5;
            let piecePosZ = selectedPiece.position.z / scale + 3.5;

            updateSuggestions(piecePosZ, piecePosX, piecesBoard[piecePosZ][piecePosX], enPassent);
        }
    }
}

function deselectPiece() {
    if (selectedPiece != null) {
        selectedPiece.children.forEach(part => {
            part.material.color.set(prevPieceMaterial);
        });
        selectedPiece = null;
    }
}

function deselectSquare() {
    if (selectedSquare != null) {
        selectedSquare.material.color.set(prevSquareMaterial);
    }
    resetColorBoard();
    selectedSquare = null;
}

function selectSquare() {
    prevSquareMaterial = selectedSquare.material.color.getHex();
    selectedSquare.material.color.set(selectedSquareColor);
    colorBoard[selectedSquare.position.z / scale + 3.5][selectedSquare.position.x / scale + 3.5] = selectedSquareColor;
}

function selectPiece() {
    prevPieceMaterial = selectedPiece.children[0].material.color.getHex();
    selectedPiece.children.forEach(part => {
        part.material.color.set(selectedPieceColor);
    });
}

function updateArrays(piecePosX, piecePosZ, boardPosX, boardPosZ, lastEnPassent, enPassentEaten) {
    //update array
    piecesBoard[boardPosZ][boardPosX] = piecesBoard[piecePosZ][piecePosX];
    piecesBoard[piecePosZ][piecePosX] = null;
    if (enPassentEaten)
        piecesBoard[piecePosZ][lastEnPassent] = null;
}

function switchTurn() {
    turn = turn === teamWhite ? teamBlack : teamWhite;
    if (enableRotate) {
        if (turn === teamWhite)
            rotate(rotateToWhite);
        else
            rotate(rotateToBlack);
    }
}