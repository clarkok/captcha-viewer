function	main(){
	var	cvs	= document.getElementById("main-cvs");
	var	cnt	= cvs.getContext("2d");
	var	img	= document.getElementById("main-img");

	cnt.drawImage(img, 0, 0, 60, 22);
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
				canvasData.data[idx + 0]	= gray;
				canvasData.data[idx + 1]	= gray;
				canvasData.data[idx + 2]	= gray;
				canvasData.data[idx + 3]	= 255;
			}
		}
	}

	cnt.putImageData(canvasData, 0, 22);
}
