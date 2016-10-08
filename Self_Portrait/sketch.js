var width, height;


function setup() {

	width = 600;
	height = 600;
	createCanvas(width,height);
	// background en blanc
	// dans setup car celui-ci na besoin detre initialise 1X
	background(204,229,255);
	
}

function draw() {
	
	//-----------------------------VISAGE--------------------------------
	fill(255,229,204);
	noStroke();
	ellipse(width*0.5,height*0.46,width * 0.37,height*0.35);
	
	//-----------------------------BRAS--------------------------------
	stroke(255,229,204);
	strokeWeight(15);
	line(width*0.65, height*0.7, width*0.8, height*0.5);
	line(width*0.35, height*0.7, width*0.2, height*0.5);

	//-----------------------------LUNETTES--------------------------------
	strokeWeight(1);
	noFill();
	stroke(0, 0, 0);
	//lunette gauche
	ellipse(width* 0.4, height *0.45 ,width * 0.2,height*0.2);
	//lunette droite
	ellipse(width* 0.6 ,height * 0.45 ,width * 0.2,height*0.2);
	//ce qui relie les lunettes
	arc(width * 0.5, height * 0.41, width*0.09, width*0.09, 5*Math.PI/4,7*Math.PI/4) ;

	//-----------------------------YEUX + CILS--------------------------------
	//oeil gauche
	strokeWeight(3);
	arc(width * 0.4, height * 0.52, width*0.15, width*0.15, 5*Math.PI/4,7*Math.PI/4) ;
	//cils gauches
	arc(width * 0.37, height * 0.44, width*0.06, width*0.06, 3*Math.PI/4,Math.PI) ;
	arc(width * 0.38, height * 0.435, width*0.06, width*0.06, 3*Math.PI/4,Math.PI) ;
	// oeil droit
	arc(width * 0.6, height * 0.52, width*0.15, width*0.15, 5*Math.PI/4,7*Math.PI/4) ;
	//cils droits
	arc(width * 0.63, height * 0.44, width*0.06, width*0.06, 0, Math.PI/4) ;
	arc(width * 0.62, height * 0.435, width*0.06, width*0.06, 0,Math.PI/4) ;
	
	
	//-----------------------------BOUCHE--------------------------------
	stroke("red");
	arc(width * 0.5, height*0.43, width * 0.3, height* 0.3, Math.PI/4, (Math.PI/4)*3);

	//-----------------------------NEZ--------------------------------
	strokeWeight(1);
	stroke(0);
	line(width*0.5,height*0.5,width*0.52,height*0.52);
	line(width*0.52,height*0.52,width*0.5,height*0.53);

	//-----------------------------JOUES ROUGES--------------------------------
	noStroke();
	fill(255, 54, 54,50);
	ellipse(width* 0.6, height *0.5 ,width * 0.12,height*0.06);
	ellipse(width* 0.4, height *0.5 ,width * 0.12,height*0.06);
	noFill();
	
	
	//------------------ CHEVEUX -----------------------------------------------
	stroke(0, 0, 0);
	//meche cheveux
		fill(189,143,38);
		//dessus droit
		arc(width* 0.45 ,height * 0.435 ,width * 0.5,height*0.55,13*Math.PI/9,0,OPEN);
		// dessus gauche
		arc(width* 0.53 ,height * 0.42 ,width * 0.5,height*0.6,Math.PI,8*Math.PI/5,OPEN);
		//dessous gauche
		arc(width * 0.25, height*0.17, width * 0.5, height* 0.5, Math.PI/9, Math.PI/2,OPEN);
		//mèche droite
		arc(width * 0.62, height*0.18, width * 0.4, height* 0.5, 2*Math.PI/5, 100*Math.PI/101, OPEN);
		//arc(width* 0.48 ,height * 0.42 ,width * 0.5,height*0.6,7*Math.PI/4,0,OPEN);

	//chignon 
		arc(width* 0.63 ,height * 0.20 ,width * 0.23,height*0.23,40*Math.PI/41,Math.PI/2,OPEN);

		

		noFill();

	//boucle droite
	strokeWeight(4);
		
		//line(width*0.7, height*0.5, width*0.80, height*0.58);
		//line(width*0.65, height*0.60, width*0.77, height*0.7);
		stroke(189,143,38);

		bezier(width*0.7, height*0.5, width*0.80, height*0.58,width*0.65, height*0.60, width*0.77, height*0.7);

		
	//boucle gauche
		
		//line(width*0.3, height*0.5, width*0.2, height*0.6);
		//line( width*0.35, height*0.6, width*0.25, height*0.70);
		
		bezier(width*0.3, height*0.5, width*0.2, height*0.6, width*0.35, height*0.6,width*0.25, height*0.70);
			
		fill('red');
	// elastique 
	stroke(0, 0, 0);
	strokeWeight(1);
	ellipse(width* 0.62 ,height * 0.27 ,width * 0.05,height*0.05);
	ellipse(width* 0.65 ,height * 0.30 ,width * 0.05,height*0.05);


	//tee-shirt
	fill(255);
	quad(width*0.40, height*0.665, width*0.60, height* 0.665, width*0.68, height*0.94, width*0.32, height*0.94);
	//rayures
	
	stroke(0,128,155);

	strokeWeight(15);
	//line(width*0.42, height*0.665, width*0.58, height*0.665);
	line(width*0.42, height*0.7, width*0.58, height*0.7);
	line(width*0.41, height*0.75, width*0.59, height*0.75);
	line(width*0.39, height*0.80, width*0.61, height*0.80);
	line(width*0.37, height*0.85, width*0.63, height*0.85);
	line(width*0.35, height*0.9, width*0.65, height*0.9);
	// line(width*0.70, height*0.95, width*0.30, height*0.95);
	
	

	
}