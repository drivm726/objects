//========================
//	City
//========================

//your sun/moon object:

function building(x,h){
	this.x = x;
	this.y = windowHeight-h;
	this.h = h;
	this.drawBuilding = function (){
		fill(105,105,105);
    rect(this.x,this.y,100,h);
		ellipse(this.x+50,this.y,100,100);
	}

};
var buildings = [];
var sun = {x:100 , y: 200 , d: 100};
function setup() {

	createCanvas(windowWidth, windowHeight);
	noStroke();
	fill(255,242,128);
	for(var i = 0; i < 10; i++){
		buildings.push(new building(i*200, random(100,400)));

	}


}


function draw(){
	background(173,216,230);
	ellipse(sun.x, sun.y, sun.d, sun.d);

	for(var i = 0; i < buildings.length;i++){
	buildings[i].drawBuilding();

	}





}
