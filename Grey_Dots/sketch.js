
var width, height;

var xPos, yPos;

var counter = 0;


function setup() {
	width = 800;
	height = 600;
	//createCanvas(width,height);
	createCanvas(width, height);
	background(192,192,192); 
	xPos= width ;
	yPos= height;
	

	
}

function draw() {
	
	
	fill("grey");
	noStroke();


	xPos= width*0.12 ;
	yPos= height*0.15;
	y = 60;
	for(var i = 0; i < 7; i++) {

		ellipse(xPos,yPos, width*0.08, width*0.08);
		for(var j = 0; j < 4 ; j++) {
			yPos+= height*0.12 + height*0.05;
			ellipse(xPos,yPos, width*0.08, width*0.08);
		}
		yPos= height*0.15;
		xPos+= width*0.12 + width*0.01;	
	}
}