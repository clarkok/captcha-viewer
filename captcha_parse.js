var	Canvas	= require('canvas'),
	canvas	= new Canvas(100, 50),
	cnt	= canvas.getContext('2d');
	
//	各个数字的点阵数据
var	NUM_DATA	= [[
	[0,0,1,1,1,1,0,0],[0,1,1,1,1,1,1,0],[1,1,1,0,0,1,1,1],[1,1,0,0,0,0,1,1],
	[1,1,0,0,0,0,1,1],[1,1,0,0,0,0,1,1],[1,1,0,0,0,0,1,1],[1,1,0,0,0,0,1,1],
	[1,1,0,0,0,0,1,1],[1,1,1,0,0,1,1,1],[0,1,1,1,1,1,1,0],[0,0,1,1,1,1,0,0]
	],[
	[0,0,0,0,1,1,0,0],[0,0,0,1,1,1,0,0],[0,0,1,1,1,1,0,0],[0,1,1,0,1,1,0,0],
	[0,1,0,0,1,1,0,0],[0,0,0,0,1,1,0,0],[0,0,0,0,1,1,0,0],[0,0,0,0,1,1,0,0],
	[0,0,0,0,1,1,0,0],[0,0,0,0,1,1,0,0],[0,0,0,0,1,1,0,0],[0,0,0,0,1,1,0,0]
	],[
	[0,0,1,1,1,1,0,0],[0,1,1,1,1,1,1,0],[1,1,1,0,0,0,1,1],[1,1,0,0,0,0,1,1],
	[0,0,0,0,0,0,1,1],[0,0,0,0,0,1,1,0],[0,0,0,0,1,1,1,0],[0,0,0,1,1,1,0,0],
	[0,0,1,1,1,0,0,0],[0,1,1,0,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1]	
	],[
	[0,0,1,1,1,1,1,0],[0,1,1,1,1,1,1,1],[1,1,0,0,0,0,1,1],[0,0,0,0,0,0,1,1],
	[0,0,0,1,1,1,1,0],[0,0,0,1,1,1,1,0],[0,0,0,0,0,1,1,1],[0,0,0,0,0,0,1,1],
	[1,1,0,0,0,0,1,1],[1,1,1,0,0,1,1,1],[0,1,1,1,1,1,1,0],[0,0,1,1,1,1,0,0]	
	],[
	[0,0,0,0,0,1,1,0],[0,0,0,0,1,1,1,0],[0,0,0,0,1,1,1,0],[0,0,0,1,1,1,1,0],
	[0,0,1,1,0,1,1,0],[0,0,1,1,0,1,1,0],[0,1,1,0,0,1,1,0],[1,1,0,0,0,1,1,0],
	[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,1,1,0],[0,0,0,0,0,1,1,0]	
	],[
	[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,0,1,1,0,0,0,0],[1,1,1,0,0,0,0,0],
	[1,1,1,1,1,1,0,0],[1,1,1,1,1,1,1,0],[1,1,0,0,0,1,1,1],[0,0,0,0,0,0,1,1],
	[1,1,0,0,0,0,1,1],[1,1,1,0,0,1,1,1],[0,1,1,1,1,1,1,0],[0,0,1,1,1,1,0,0]
	],[
	[0,0,1,1,1,1,1,0],[0,1,1,1,1,1,1,1],[0,1,1,0,0,0,1,1],[1,1,0,0,0,0,0,0],
	[1,1,0,1,1,1,0,0],[1,1,1,1,1,1,1,0],[1,1,1,0,0,1,1,1],[1,1,0,0,0,0,1,1],
	[1,1,0,0,0,0,1,1],[0,1,1,0,0,0,1,1],[0,1,1,1,1,1,1,0],[0,0,1,1,1,1,0,0]
	],[
	[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,1,1,0],[0,0,0,0,1,1,0,0],
	[0,0,0,0,1,1,0,0],[0,0,0,1,1,0,0,0],[0,0,0,1,1,0,0,0],[0,0,0,1,1,0,0,0],
	[0,0,1,1,1,0,0,0],[0,0,1,1,0,0,0,0],[0,0,1,1,0,0,0,0],[0,0,1,1,0,0,0,0]	
	],[
	[0,0,1,1,1,1,0,0],[0,1,1,1,1,1,1,0],[1,1,0,0,0,0,1,1],[1,1,0,0,0,0,1,1],
	[1,1,0,0,0,0,1,1],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[1,1,0,0,0,0,1,1],
	[1,1,0,0,0,0,1,1],[1,1,0,0,0,0,1,1],[0,1,1,1,1,1,1,0],[0,0,1,1,1,1,0,0]
	],[
	[0,0,1,1,1,1,0,0],[0,1,1,1,1,1,1,0],[1,1,0,0,0,1,1,0],[1,1,0,0,0,0,1,1],
	[1,1,0,0,0,0,1,1],[1,1,1,0,0,1,1,1],[0,1,1,1,1,1,1,1],[0,0,1,1,1,0,1,1],
	[0,0,0,0,0,0,1,1],[1,1,0,0,0,1,1,0],[1,1,1,1,1,1,1,0],[0,1,1,1,1,1,0,0]
]];

//	数字点阵大小
var	NUM_SIZE	= [8, 12];

//	验证码中数字的起始位置
var	NUM_POS_OFFSET	= [5, 5];

//	处理完的验证码的起始位置
var	IMG_START_POINT	= [0, 22];

//	从canvas的context对象中提取出左上角为x,y的数字
function	getNumData(cnt, x, y){
	return	cnt.getImageData(x, y, NUM_SIZE[0], NUM_SIZE[1]);
}

//	匹配numData中的数字
function	parseNum(/*cnt, x, y*/ numData){
	var	res	= -1;
	var	similarity	= 0;
//	var	numData	= cnt.getImageData(x, y, NUM_SIZE[0], NUM_SIZE[1]);
	cnt.putImageData(numData, 60, 0);

	for (var i=0; i<10; i++){
		var	tmpSimilarity	= 0;
		for (var ox=0; ox<NUM_SIZE[0]; ox++){
			for (var oy=0; oy<NUM_SIZE[1]; oy++){
				var	idx	= (ox + oy*NUM_SIZE[0]) * 4;
				for_debug[oy][ox]	= (numData.data[idx] == 0) ? 1 : 0;
				if ((numData.data[idx] == 0) && NUM_DATA[i][oy][ox])
					tmpSimilarity++;
				if ((numData.data[idx] != 0) && !(NUM_DATA[i][oy][ox]))
					tmpSimilarity++;
			}
		}
		if (tmpSimilarity > similarity){
			similarity	= tmpSimilarity;
			res		= i;
		}
	}

	for (var oy=0; oy<NUM_SIZE[1]; oy++){
		var	str	= '(';
		for (ox=0; ox<NUM_SIZE[0]; ox++){
			str	+= for_debug[oy][ox]+',';
		}
	}
	return	res;
}

function	grayImage(cnt){
	var	canvasData	= cnt.getImageData(0, 0, 60, 22);
	
	for (var x=0; x<60; x++){
		for (var y=0; y<22; y++){
			var	idx	= (x + y * 60) * 4;
			var	r	= canvasData.data[idx + 0],
				g	= canvasData.data[idx + 1],
				b	= canvasData.data[idx + 2];
			var	gray	= 0.299*r + 0.587*g + 0.114*b;

			if (gray > 100) {
				canvasData.data[idx + 0]	= 255;
				canvasData.data[idx + 1]	= 255;
				canvasData.data[idx + 2]	= 255;
				canvasData.data[idx + 3]	= 255;
			}
			else{
				canvasData.data[idx + 0]	= 0;
				canvasData.data[idx + 1]	= 0;
				canvasData.data[idx + 2]	= 0;
				canvasData.data[idx + 3]	= 255;
			}
		}
	}

	cnt.putImageData(canvasData, 0, 22);
}

function	main(){
	var	img	= new Image('./check_code.gif');

	cnt.drawImage(img, 0, 0, 60, 22);
/*
	var	canvasData	= cnt.getImageData(0, 0, 60, 22);
	
	for (var x=0; x<60; x++){
		for (var y=0; y<22; y++){
			var	idx	= (x + y * 60) * 4;
			var	r	= canvasData.data[idx + 0],
				g	= canvasData.data[idx + 1],
				b	= canvasData.data[idx + 2];
			var	gray	= 0.299*r + 0.587*g + 0.114*b;

			if (gray > 100) {
				canvasData.data[idx + 0]	= 255;
				canvasData.data[idx + 1]	= 255;
				canvasData.data[idx + 2]	= 255;
				canvasData.data[idx + 3]	= 255;
			}
			else{
				canvasData.data[idx + 0]	= 0;
				canvasData.data[idx + 1]	= 0;
				canvasData.data[idx + 2]	= 0;
				canvasData.data[idx + 3]	= 255;
			}
		}
	}

	cnt.putImageData(canvasData, 0, 22);
*/
	grayImage(cnt);

	for (var i=0; i<5; i++){
		console.debug(parseNum(getNumData(cnt, 9*i + IMG_START_POINT[0] + NUM_POS_OFFSET[0], IMG_START_POINT[1] + NUM_POS_OFFSET[1])));
//		console.debug(parseNum(cnt, 9*i + IMG_START_POINT[0] + NUM_POS_OFFSET[0], IMG_START_POINT[1] + NUM_POS_OFFSET[1]));
	}
}

main();
