var xPos = 30;
var yPos = 50;

var d;
var width, height;
var counter = 0;
var counter2 = "2";
function setup() {
	width = 300;
	height = 400;
	createCanvas(width,height);
	background(255,192,203);
	d = width/10;
	frameRate(1);
	stroke(255);
}

function draw() {
	
	//println(frameRate);
	//print(counter + counter2);
		//print(counter2);
	fill(255,0,0);
	rect(width/2, height/2 , 300, 300)
	//rect(0,0,100,100);
	
	// line(x1,y1,x2,y2)


	//line(0,0,width,height);
	line(width/2,height/2,width/2,0);
	
	//line(0,300,100,6);
	fill(255,192,203);
	ellipse(width/2,height/2,d,d);


	/*context.beginPath(); // Le cercle extérieur
	context.arc(75, 75, 50, 0, Math.PI * 2); // Ici le calcul est simplifié
	context.stroke();

	context.beginPath(); // La bouche, un arc de cercle
	context.arc(75, 75, 40, 0, Math.PI); // Ici aussi
	context.fill();*/

	//beginPath(); // L'œil gauche
	arc(55, 70, 20, (Math.PI / 180) * 220, (Math.PI / 180) * 320);


	//beginPath(); // L'œil droit
	arc(95, 70, 20, (Math.PI / 180) * 220, (Math.PI / 180) * 320);
	
}