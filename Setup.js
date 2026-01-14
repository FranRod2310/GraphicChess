const scale = 1;
const lightX = 0;
const lightY = 10;
const lightZ = 0;
const camX = 0;//0
const camY = 10;//10
const camZ = 4;//4
const rotateToWhite = -1;
const rotateToBlack = 1;
const boarderSize = 17;
const noPassent = -1;
const blackBoarderSize = 8.3;
const whitePieceColor = 0xFFC18C;
const blackPieceColor = 0x84240C;
const whiteSquareColor = 0xFFC18B;
const blackSquareColor = 0x8B4512;
const boarderColor = 0x563232;
const blackBoarderColor = 0x000000;
const selectedSquareColor = 0x8B0000;
const selectedPieceColor = 0xFF0000;
const letterColor = 0x48120C;
const suggestionsColor = 0xFA9F42;
const suggestionsColorToEat = 0xAF3800;
const checkColor = selectedSquareColor;
const enableRotate = true;
let letterFont;
const teamWhite = "teamWhite";
const teamBlack = "teamBlack";
const letterCoor = ["A", "B", "C", "D", "E", "F", "G", "H"];
const numbersCoor = ["8", "7", "6", "5", "4", "3", "2", "1"];
const coordinates = new Array(2).fill(null).map(() => new Array(8).fill(null));
let colorBoard = new Array(8).fill(null).map(() => new Array(8).fill(null));
let turn = teamWhite;
let whiteKingX = 7;
let whiteKingY = 4;
let blackKingX = 0;
let blackKingY = 4;


// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xC2C2C2);// Set background color to white
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

// Add a light source
function createLight(x, y, z, light) {
    light.position.set(x, y, z);
    light.castShadow = true;
    light.shadow.mapSize.width = 512; // Shadow map size
    light.shadow.mapSize.height = 512;
    light.shadow.camera.near = 0.5;
    light.shadow.camera.far = 50;
    scene.add(light);
}
const light = new THREE.PointLight(0xFFFFFF);
createLight(lightX, lightY, lightZ, light);

// Camera position
camera.position.y = camY;
camera.position.z = camZ;
camera.position.x = camX;
camera.lookAt(0, 0, 0);