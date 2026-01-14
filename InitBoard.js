const size = 8;
const divisions = 8;
const gridHelper = new THREE.GridHelper(size, divisions, 0x000000, 0x000000);
gridHelper.position.y = 0.06;
scene.add(gridHelper);

// Create chessboard squares
const squareSize = 1 * scale;
const board = new THREE.Group();
scene.add(board);

const boarder = new THREE.BoxGeometry(boarderSize, 0.05, boarderSize);
const boarderMaterial = new THREE.MeshStandardMaterial({ color: boarderColor });
const boarderMesh = new THREE.Mesh(boarder, boarderMaterial);
boarderMesh.position.set(0, 0, 0);
boarderMesh.receiveShadow = true; // Enable receiving shadows
scene.add(boarderMesh);

const blackBoarder = new THREE.BoxGeometry(blackBoarderSize, 0.09, blackBoarderSize);
const blackBoarderMaterial = new THREE.MeshStandardMaterial({ color: blackBoarderColor });
const blackBoarderMesh = new THREE.Mesh(blackBoarder, blackBoarderMaterial);
blackBoarderMesh.position.set(0, 0, 0);
blackBoarderMesh.receiveShadow = true; // Enable receiving shadows
scene.add(blackBoarderMesh);

let squaresBoard = new Array(8).fill(null).map(() => new Array(8).fill(null));

for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        const geometry = new THREE.BoxGeometry(squareSize, 0.1, squareSize);
        const material = new THREE.MeshStandardMaterial({ color: (i + j) % 2 === 0 ? whiteSquareColor : blackSquareColor }); //board colors
        colorBoard[i][j] = material.color.getHex();
        const square = new THREE.Mesh(geometry, material);
        square.position.set((i - 3.5) * scale, 0, (j - 3.5) * scale);
        square.receiveShadow = true; // Enable receiving shadows
        squaresBoard[j][i] = square;
        board.add(square);
    }
}

const loader = new THREE.FontLoader();
loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
    letterFont = font;
    initCoor(letterCoor, true, font, 0, 1);
    initCoor(numbersCoor, false, font, 1, 1);
});


function initCoor(coor, letter, font, index, sign) {
    const material = new THREE.MeshBasicMaterial({ color: letterColor });
    for (let i = 0; i < coor.length; i++) {
        const textGeometry = new THREE.TextGeometry(coor[i], {
            font: font,
            size: 0.5,
            height: 0.1,
            curveSegments: 12,
            bevelEnabled: false
        });
        const textMesh = new THREE.Mesh(textGeometry, material);
        if (letter) {
            textMesh.position.set(sign * 0.92 * i - sign * 3.5, 0, sign * 4.7); // Positioning letters
        } else {
            textMesh.position.set(-4.7 * sign, 0, sign * 0.9 * i - sign * 2.9); // Positioning numbers
        }
        textMesh.rotation.x = -Math.PI / 2; // Rotate letters to face the camera
        coordinates[index][i] = textMesh;
        scene.add(textMesh);
    }
}

function resetColorBoard() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            colorBoard[i][j] = (i + j) % 2 === 0 ? whiteSquareColor : blackSquareColor;
        }
    }
}

function resetSquaresBoard(initBoard) {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            squaresBoard[i][j].material.color.set(initBoard[i][j]);
        }
    }
}