function	init(){
	cvs	= document.getElementById("main-cvs");
	cnt	= cvs.getContext("2d");
	img	= document.getElementById("main-img");

	cnt.drawImage(img, 0, 0, 60, 22);
}
