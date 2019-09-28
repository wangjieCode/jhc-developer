let my2048;
// 行 列
const rows = 4;
const cols = 4;
//空隙
const spacing = 12;
//方块宽度
const squareWidth = 100;
const boardSet = []; //初始化默认小方块
const squareSet = []; //存放代数字的小方块
const valueMap = []; //存放每个位置的数字
var colorMapping = {
	"0": "#ccc0b3",
	"2": "#eee4da",
	"4": "#ede0c8",
	"8": "#f2b179",
	"16": "#f59563",
	"32": "#f67e5f",
	"64": "#f65e3b",
	"128": "#edcf72",
	"256": "#edcc61",
	"512": "#9c0",
	"1024": "#33b5e5",
	"2048": "#09c",
	"4096": "#5b67ff"
};
var directionEnum = {
	left: {
		x: -1,
		y: 0,
		key: "left"
	},
	right: {
		x: 1,
		y: 0,
		key: "left"
	},
	top: {
		x: 0,
		y: -1,
		key: "top"
	},
	down: {
		x: 0,
		y: 1,
		key: "top"
	}
};
function initBoard() {
	my2048 = document.getElementById('my2048');
	my2048.style.width = cols * squareWidth + (rows + 1) * spacing + 'px';
	my2048.style.height = rows * squareWidth + (cols + 1) * spacing + 'px';
}

function randomValue() {
	return Math.random() > 0.5 ? 2 : 4;
}
function randerSquare() {
	for (;;) {
		let randRow = Math.floor(Math.random() * rows);
		let randCol = Math.floor(Math.random() * cols);
		if (valueMap[randRow][randCol] == 0){
			let temp = createSquare(randomValue(),initSquarePostion(randRow),initSquarePostion(randCol),randRow,randCol);
			valueMap[temp.row][temp.col] = temp.num;
			squareSet[temp.row][temp.col] = temp;
			my2048.appendChild(temp);
			return true;
		}
	}
}


function generateNullMap(){
	const newValueMap = [];
	for(let i = 0; i < rows; i ++){
		newValueMap[i] = [];
		for(let j = 0; j < cols; j ++){
			newValueMap[i][j] = null;
		}
	}
	return newValueMap;
}
function getNewLocation(arr){
	if(arr.length == 0) return [];
	let temp = [];
	temp.push(arr[0]);
	for( let i = 0; i < arr.length; i ++){
		if(arr[i].num == temp[temp.length - 1])
	}
}
function analysisActions(direction){
	let newSquareSet = generateNullMap();
	if(direction = directionEnum.left){
		for(let i = 0; i < squareSet.length; i ++){
			let temp = [];
			for( let j = 0; j < squareSet[i].length; j ++){
				squareSet[i][j] !== null && temp.push(squareSet[i][j]);
				console.log(temp)
			}
			temp = getNewLocation(temp);

		}
	}
}
function move(opstion){
	let newSquareSet = analysisActions(opstion);
	
}
function createSquare(value, left, top, row, col) {
	let temp = document.createElement('div');
	temp.style.width = getpx(squareWidth);
	temp.style.height = getpx(squareWidth);
	temp.style.left = getpx(left);
	temp.style.top = getpx(top);
	temp.style.backgroundColor = colorMapping[value];
	temp.style.lineHeight = getpx(squareWidth);
	temp.style.textAlign = "center";
	temp.style.fontSize = getpx(0.4 * squareWidth);
	temp.num = value;
	temp.row = row;
	temp.col = col;
	if (value > 0) {
		temp.innerText = '' + value;
	}
	return temp;
}

function init() {
	initBoard()
	//初始化默认的小方块
	for (let i = 0; i < rows; i++) {
		boardSet[i] = [];
		squareSet[i] = [];
		valueMap[i] = [];
		for (let j = 0; j < cols; j++) {
			let tempX = initSquarePostion(i, i);
			let tempY = initSquarePostion(j, j);
			valueMap[i][j] = 0;
			boardSet[i][j] = createSquare(0, tempX, tempY, i, j)
			squareSet[i][j] = null;
			my2048.appendChild(boardSet[i][j]);
		}
	}
	randerSquare()
	randerSquare()
	document.addEventListener("keydown", function(e) {
		switch(e.key) {
			case "ArrowUp":
				move(directionEnum.top);
			break;
			case "ArrowDown":
				move(directionEnum.down);
			break;
			case "ArrowLeft":
				move(directionEnum.left);
			break;
			case "ArrowRight":
				move(directionEnum.right);
			break;
			default: {
				lock = true;
			}
		}
	})
}
window.onload = function () {
	init()
}

document.addEventListener("touchmove",function(e){
	// console.log(e)
})
function initSquarePostion(x) {
	return x * squareWidth + (x + 1) * spacing;
}

function getpx(text) {
	return text + 'px';
}