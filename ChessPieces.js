const whiteLine = 3.5;
const blackLine = -3.5;
const whitePawnLine = 2.5;
const blackPawnLine = -2.5;
const initPosWhitePawn = 6;
const initPosBlackPawn = 1;
const pawnName = "pawn";
const rookName = "rook";
const knightName = "knight";
const bishopName = "bishop";
const queenName = "queen";
const kingName = "king";

// Create chess pieces
const whitePawnMaterial1 = new THREE.MeshStandardMaterial({ color: whitePieceColor });
const whitePawnMaterial2 = new THREE.MeshStandardMaterial({ color: whitePieceColor });
const whitePawnMaterial3 = new THREE.MeshStandardMaterial({ color: whitePieceColor });
const whitePawnMaterial4 = new THREE.MeshStandardMaterial({ color: whitePieceColor });
const whitePawnMaterial5 = new THREE.MeshStandardMaterial({ color: whitePieceColor });
const whitePawnMaterial6 = new THREE.MeshStandardMaterial({ color: whitePieceColor });
const whitePawnMaterial7 = new THREE.MeshStandardMaterial({ color: whitePieceColor });
const whitePawnMaterial8 = new THREE.MeshStandardMaterial({ color: whitePieceColor });
const whiteQueenMaterial = new THREE.MeshStandardMaterial({ color: whitePieceColor });
const whiteKingMaterial = new THREE.MeshStandardMaterial({ color: whitePieceColor });
const whiteBishopMaterial1 = new THREE.MeshStandardMaterial({ color: whitePieceColor });
const whiteBishopMaterial2 = new THREE.MeshStandardMaterial({ color: whitePieceColor });
const whiteKnightMaterial1 = new THREE.MeshStandardMaterial({ color: whitePieceColor });
const whiteKnightMaterial2 = new THREE.MeshStandardMaterial({ color: whitePieceColor });
const whiteRookMaterial1 = new THREE.MeshStandardMaterial({ color: whitePieceColor });
const whiteRookMaterial2 = new THREE.MeshStandardMaterial({ color: whitePieceColor });

const blackPawnMaterial1 = new THREE.MeshStandardMaterial({ color: blackPieceColor });
const blackPawnMaterial2 = new THREE.MeshStandardMaterial({ color: blackPieceColor });
const blackPawnMaterial3 = new THREE.MeshStandardMaterial({ color: blackPieceColor });
const blackPawnMaterial4 = new THREE.MeshStandardMaterial({ color: blackPieceColor });
const blackPawnMaterial5 = new THREE.MeshStandardMaterial({ color: blackPieceColor });
const blackPawnMaterial6 = new THREE.MeshStandardMaterial({ color: blackPieceColor });
const blackPawnMaterial7 = new THREE.MeshStandardMaterial({ color: blackPieceColor });
const blackPawnMaterial8 = new THREE.MeshStandardMaterial({ color: blackPieceColor });
const blackQueenMaterial = new THREE.MeshStandardMaterial({ color: blackPieceColor });
const blackKingMaterial = new THREE.MeshStandardMaterial({ color: blackPieceColor });
const blackBishopMaterial1 = new THREE.MeshStandardMaterial({ color: blackPieceColor });
const blackBishopMaterial2 = new THREE.MeshStandardMaterial({ color: blackPieceColor });
const blackKnightMaterial1 = new THREE.MeshStandardMaterial({ color: blackPieceColor });
const blackKnightMaterial2 = new THREE.MeshStandardMaterial({ color: blackPieceColor });
const blackRookMaterial1 = new THREE.MeshStandardMaterial({ color: blackPieceColor });
const blackRookMaterial2 = new THREE.MeshStandardMaterial({ color: blackPieceColor });

const whitePawn1 = createPawn(whitePawnMaterial1, teamWhite, initPosWhitePawn);
const whitePawn2 = createPawn(whitePawnMaterial2, teamWhite, initPosWhitePawn);
const whitePawn3 = createPawn(whitePawnMaterial3, teamWhite, initPosWhitePawn);
const whitePawn4 = createPawn(whitePawnMaterial4, teamWhite, initPosWhitePawn);
const whitePawn5 = createPawn(whitePawnMaterial5, teamWhite, initPosWhitePawn);
const whitePawn6 = createPawn(whitePawnMaterial6, teamWhite, initPosWhitePawn);
const whitePawn7 = createPawn(whitePawnMaterial7, teamWhite, initPosWhitePawn);
const whitePawn8 = createPawn(whitePawnMaterial8, teamWhite, initPosWhitePawn);
const whiteQueen = createQueen(whiteQueenMaterial, teamWhite);
const whiteKing = createKing(whiteKingMaterial, teamWhite);
const whiteBishop1 = createBishop(whiteBishopMaterial1, teamWhite);
const whiteBishop2 = createBishop(whiteBishopMaterial2, teamWhite);
const whiteKnight1 = createKnight(whiteKnightMaterial1, -1, teamWhite);
const whiteKnight2 = createKnight(whiteKnightMaterial2, -1, teamWhite);
const whiteRook1 = createRook(whiteRookMaterial1, teamWhite);
const whiteRook2 = createRook(whiteRookMaterial2, teamWhite);

const blackPawn1 = createPawn(blackPawnMaterial1, teamBlack, initPosBlackPawn);
const blackPawn2 = createPawn(blackPawnMaterial2, teamBlack, initPosBlackPawn);
const blackPawn3 = createPawn(blackPawnMaterial3, teamBlack, initPosBlackPawn);
const blackPawn4 = createPawn(blackPawnMaterial4, teamBlack, initPosBlackPawn);
const blackPawn5 = createPawn(blackPawnMaterial5, teamBlack, initPosBlackPawn);
const blackPawn6 = createPawn(blackPawnMaterial6, teamBlack, initPosBlackPawn);
const blackPawn7 = createPawn(blackPawnMaterial7, teamBlack, initPosBlackPawn);
const blackPawn8 = createPawn(blackPawnMaterial8, teamBlack, initPosBlackPawn);
const blackQueen = createQueen(blackQueenMaterial, teamBlack);
const blackKing = createKing(blackKingMaterial, teamBlack);
const blackBishop1 = createBishop(blackBishopMaterial1, teamBlack);
const blackBishop2 = createBishop(blackBishopMaterial2, teamBlack);
const blackKnight1 = createKnight(blackKnightMaterial1, 1, teamBlack);
const blackKnight2 = createKnight(blackKnightMaterial2, 1, teamBlack);
const blackRook1 = createRook(blackRookMaterial1, teamBlack);
const blackRook2 = createRook(blackRookMaterial2, teamBlack);

addPawn(whitePawn1, -3.5, whitePawnLine);
addPawn(whitePawn2, -2.5, whitePawnLine);
addPawn(whitePawn3, -1.5, whitePawnLine);
addPawn(whitePawn4, -0.5, whitePawnLine);
addPawn(whitePawn5, 0.5, whitePawnLine);
addPawn(whitePawn6, 1.5, whitePawnLine);
addPawn(whitePawn7, 2.5, whitePawnLine);
addPawn(whitePawn8, 3.5, whitePawnLine);
addBishop(whiteBishop1, -1.5, whiteLine);
addBishop(whiteBishop2, 1.5, whiteLine);
addKnight(whiteKnight1, -2.5, whiteLine);
addKnight(whiteKnight2, 2.5, whiteLine);
addRook(whiteRook1, -3.5, whiteLine);
addRook(whiteRook2, 3.5, whiteLine);
addQueen(whiteQueen, -0.5, whiteLine);
addKing(whiteKing, 0.5, whiteLine);

addPawn(blackPawn1, -3.5, blackPawnLine);
addPawn(blackPawn2, -2.5, blackPawnLine);
addPawn(blackPawn3, -1.5, blackPawnLine);
addPawn(blackPawn4, -0.5, blackPawnLine);
addPawn(blackPawn5, 0.5, blackPawnLine);
addPawn(blackPawn6, 1.5, blackPawnLine);
addPawn(blackPawn7, 2.5, blackPawnLine);
addPawn(blackPawn8, 3.5, blackPawnLine);
addBishop(blackBishop1, -1.5, blackLine);
addBishop(blackBishop2, 1.5, blackLine);
addKnight(blackKnight1, -2.5, blackLine);
addKnight(blackKnight2, 2.5, blackLine);
addRook(blackRook1, -3.5, blackLine);
addRook(blackRook2, 3.5, blackLine);
addQueen(blackQueen, -0.5, blackLine);
addKing(blackKing, 0.5, blackLine);

let piecesBoard = [
    [blackRook1, blackKnight1, blackBishop1, blackQueen, blackKing, blackBishop2, blackKnight2, blackRook2],
    [blackPawn1, blackPawn2, blackPawn3, blackPawn4, blackPawn5, blackPawn6, blackPawn7, blackPawn8],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [whitePawn1, whitePawn2, whitePawn3, whitePawn4, whitePawn5, whitePawn6, whitePawn7, whitePawn8],
    [whiteRook1, whiteKnight1, whiteBishop1, whiteQueen, whiteKing, whiteBishop2, whiteKnight2, whiteRook2]
];


function createPawn(material, team, initPos) {
    const pawn = new THREE.Group();

    // Create the top sphere
    const sphereGeometry = new THREE.SphereGeometry(0.25 * scale, 32 * scale, 32 * scale);
    const sphere = new THREE.Mesh(sphereGeometry, material);
    sphere.position.y = 1.5 * scale;
    pawn.add(sphere);

    // Create the middle cylinder
    const middleGeometry = new THREE.CylinderGeometry(0.2 * scale, 0.3 * scale, 0.5 * scale, 32 * scale);
    const middle = new THREE.Mesh(middleGeometry, material);
    middle.position.y = 1.0 * scale;
    pawn.add(middle);

    // Create the base cylinder
    const baseGeometry = new THREE.CylinderGeometry(0.3 * scale, 0.3 * scale, 0.5 * scale, 32 * scale);
    const base = new THREE.Mesh(baseGeometry, material);
    base.position.y = 0.5 * scale;
    pawn.add(base);

    // Enable shadows
    sphere.castShadow = true;
    middle.castShadow = true;
    base.castShadow = true;
    sphere.receiveShadow = true;
    middle.receiveShadow = true;
    base.receiveShadow = true;
    pawn.name = pawnName;
    pawn.team = team;
    pawn.initPos = initPos;

    return pawn;
}

// Function to create a rook
function createRook(material,team) {
    const rook = new THREE.Group();

    // Create the base cylinder
    const baseGeometry = new THREE.CylinderGeometry(0.4 * scale, 0.4 * scale, 0.5 * scale, 32 * scale);
    const base = new THREE.Mesh(baseGeometry, material);
    base.position.y = 0.25 * scale;
    rook.add(base);

    // Create the body cylinder
    const bodyGeometry = new THREE.CylinderGeometry(0.35 * scale, 0.35 * scale, 1 * scale, 32 * scale);
    const body = new THREE.Mesh(bodyGeometry, material);
    body.position.y = 1 * scale;
    rook.add(body);

    // Create the top part
    const topGeometry = new THREE.CylinderGeometry(0.35 * scale, 0.35 * scale, 0.2 * scale, 32 * scale);
    const top = new THREE.Mesh(topGeometry, material);
    top.position.y = 1.5 * scale;
    rook.add(top);

    /*const holeGeometry = new THREE.CylinderGeometry(0.25 * scale, 0.25 * scale, 0.1 * scale, 32 * scale);
    const hole = new THREE.Mesh(holeGeometry, material);
    hole.position.y = 1.6 * scale;
    const topWHole = CSG.subtract(CSG.fromMesh(top), CSG.fromMesh(hole));
    const topWithHoleMesh = CSG.toMesh(topWHole, top.matrix);
    topWithHoleMesh.material = material;
    rook.add(topWithHoleMesh);
*/
    // Enable shadows
    base.castShadow = true;
    body.castShadow = true;
    top.castShadow = true;
    base.receiveShadow = true;
    body.receiveShadow = true;
    top.receiveShadow = true;
    rook.name= rookName;
    rook.team = team;

    return rook;
}

// Function to create a knight
function createKnight(material, sign, team) {
    const knight = new THREE.Group();

    // Create the base cylinder
    const baseGeometry = new THREE.CylinderGeometry(0.4 * scale, 0.4 * scale, 0.5 * scale, 32 * scale);
    const base = new THREE.Mesh(baseGeometry, material);
    base.position.y = 0.25 * scale;
    knight.add(base);

    // Create the body part
    const bodyGeometry = new THREE.BoxGeometry(0.35 * scale, 1 * scale, 0.5 * scale);
    const body = new THREE.Mesh(bodyGeometry, material);
    body.position.y = 1 * scale;
    knight.add(body);

    // Create the head part
    const headGeometry = new THREE.BoxGeometry(0.35 * scale, 0.5 * scale, 0.7 * scale);
    const head = new THREE.Mesh(headGeometry, material);
    head.position.y = 1.75 * scale;
    head.position.z = sign * 0.1 * scale;
    knight.add(head);

    // Enable shadows
    base.castShadow = true;
    body.castShadow = true;
    head.castShadow = true;
    base.receiveShadow = true;
    body.receiveShadow = true;
    head.receiveShadow = true;
    knight.name = knightName;
    knight.team = team;

    return knight;
}

// Function to create a bishop
function createBishop(material, team) {
    const bishop = new THREE.Group();

    // Create the base cylinder
    const baseGeometry = new THREE.CylinderGeometry(0.4 * scale, 0.4 * scale, 0.5 * scale, 32 * scale);
    const base = new THREE.Mesh(baseGeometry, material);
    base.position.y = 0.25 * scale;
    bishop.add(base);

    // Create the body part
    const bodyGeometry = new THREE.CylinderGeometry(0.3 * scale, 0.35 * scale, 1 * scale, 32 * scale);
    const body = new THREE.Mesh(bodyGeometry, material);
    body.position.y = 1 * scale;
    bishop.add(body);

    // Create the top part
    const topGeometry = new THREE.CylinderGeometry(0.2 * scale, 0.3 * scale, 0.5 * scale, 32 * scale);
    const top = new THREE.Mesh(topGeometry, material);
    top.position.y = 1.75 * scale;
    bishop.add(top);

    // Create the top sphere
    const topsphereGeometry = new THREE.SphereGeometry(0.25 * scale, 32 * scale, 32 * scale);
    const sphere = new THREE.Mesh(topsphereGeometry, material);
    sphere.position.y = 2.2 * scale;
    bishop.add(sphere);

    // Enable shadows
    base.castShadow = true;
    body.castShadow = true;
    top.castShadow = true;
    base.receiveShadow = true;
    body.receiveShadow = true;
    top.receiveShadow = true;
    bishop.name = bishopName;
    bishop.team = team;

    return bishop;
}

// Function to create a queen
function createQueen(material, team) {
    const queen = new THREE.Group();

    // Create the base cylinder
    const baseGeometry = new THREE.CylinderGeometry(0.4 * scale, 0.4 * scale, 0.5 * scale, 32 * scale);
    const base = new THREE.Mesh(baseGeometry, material);
    base.position.y = 0.25 * scale;
    queen.add(base);

    // Create the body part
    const bodyGeometry = new THREE.CylinderGeometry(0.35 * scale, 0.35 * scale, 1.5 * scale, 32 * scale);
    const body = new THREE.Mesh(bodyGeometry, material);
    body.position.y = 1.25 * scale;
    queen.add(body);

    // Create the top part
    const topGeometry = new THREE.SphereGeometry(0.25 * scale, 32 * scale, 32 * scale);
    const top = new THREE.Mesh(topGeometry, material);
    top.position.y = 2.5 * scale;
    queen.add(top);

    // Enable shadows
    base.castShadow = true;
    body.castShadow = true;
    top.castShadow = true;
    base.receiveShadow = true;
    body.receiveShadow = true;
    top.receiveShadow = true;
    queen.name = queenName;
    queen.team = team;

    return queen;
}

// Function to create a king
function createKing(material, team) {
    const king = new THREE.Group();

    // Create the base cylinder
    const baseGeometry = new THREE.CylinderGeometry(0.4 * scale, 0.4 * scale, 0.5 * scale, 32 * scale);
    const base = new THREE.Mesh(baseGeometry, material);
    base.position.y = 0.25 * scale;
    king.add(base);

    // Create the body part
    const bodyGeometry = new THREE.CylinderGeometry(0.35 * scale, 0.35 * scale, 1.5 * scale, 32 * scale);
    const body = new THREE.Mesh(bodyGeometry, material);
    body.position.y = 1.25 * scale;
    king.add(body);

    // Create the cross part
    const crossGeometry = new THREE.BoxGeometry(0.1 * scale, 0.5 * scale, 0.1 * scale);
    const cross = new THREE.Mesh(crossGeometry, material);
    cross.position.y = 2.3 * scale;
    king.add(cross);

    const crossHorizontalGeometry = new THREE.BoxGeometry(0.5 * scale, 0.1 * scale, 0.1 * scale);
    const crossHorizontal = new THREE.Mesh(crossHorizontalGeometry, material);
    crossHorizontal.position.y = 2.3 * scale;
    king.add(crossHorizontal);

    // Enable shadows
    base.castShadow = true;
    body.castShadow = true;
    top.castShadow = true;
    cross.castShadow = true;
    crossHorizontal.castShadow = true;
    base.receiveShadow = true;
    body.receiveShadow = true;
    top.receiveShadow = true;
    cross.receiveShadow = true;
    crossHorizontal.receiveShadow = true;
    king.name = kingName;
    king.team = team;

    return king;
}

function addPawn(pawn, position, teamPos) {
    pawn.position.set(position * scale, 0, teamPos * scale);
    board.add(pawn);
}

function addBishop(bishop, position, teamPos) {
    bishop.position.set(position * scale, 0, teamPos * scale);
    board.add(bishop);
}

function addRook(rook, position, teamPos) {
    rook.position.set(position * scale, 0, teamPos * scale);
    board.add(rook);
}

function addKnight(knight, position, teamPos) {
    knight.position.set(position * scale, 0, teamPos * scale);
    board.add(knight);
}

function addQueen(queen, position, teamPos) {
    queen.position.x = position * scale
    queen.position.z = teamPos * scale;
    board.add(queen);
}

function addKing(king, position, teamPos) {
    king.position.set(position * scale, 0, teamPos * scale);
    board.add(king);
}
