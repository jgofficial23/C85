canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

greencar_width = 75;
greencar_height = 175;
whitecar_width = 75;
whitecar_height = 175;

background_image = "parkingLot.jpg";

greencar_image = "car2.png";
whitecar_image = "car1.png";

greencar_x = 75;
greencar_y = 25;
whitecar_x = 5;
whitecar_y= 25;

function add() {
	background_imgTag = new Image(); 				//defining a variable with a new image
	background_imgTag.onload = uploadBackground; 	// setting a function, onloading this variable
	background_imgTag.src = background_image;   	// load image

	greencar_imgTag = new Image(); 				//defining a variable with a new image
	greencar_imgTag.onload = uploadgreencar; 	// setting a function, onloading this variable
	greencar_imgTag.src = greencar_image;  		 // load image

	whitecar_imgTag = new Image(); 				//defining a variable with a new image
	whitecar_imgTag.onload = uploadwhitecar; 	// setting a function, onloading this variable
	whitecar_imgTag.src = whitecar_image;   		// load image
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, greencar_x,greencar_y, greencar_width, greencar_height);
	
}

function uploadwhitecar(){
	ctx.drawImage(whitecar_imgTag, whitecar_x,whitecar_y, whitecar_width, whitecar_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '87')
		{
			up1();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '83')
		{
			down1();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if (keyPressed == '65')
		{
			left1();
			console.log("left");
		}
	

		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		if (keyPressed == '68')
		{
			right1();
			console.log("right");
		}
		
}

function up()
{
	if(greencar_y >=0)
	{
		greencar_y = greencar_y - 10;
		console.log("When up arrow is pressed,  x = " + greencar_x + " | y = " +greencar_y);
		 uploadBackground();
		 uploadgreencar();
		 uploadwhitecar();
	}
}



function up1()
{
	if(whitecar_y >=0)
	{
		whitecar_y = whitecar_y - 10;
		console.log("When w is pressed,  x = " + whitecar_x + " | y = " +whitecar_y);
		 uploadBackground();
		 uploadwhitecar();
		 uploadgreencar();
	}
}
function down()
{
	if(greencar_y <=500)
	{
		greencar_y =greencar_y+ 10;
		console.log("When down arrow is pressed,  x = " + greencar_x + " | y = " +greencar_y);
		uploadBackground();
		uploadgreencar();
		uploadwhitecar();
	}
}
function down1()
{
	if(whitecar_y <=500)
	{
		whitecar_y = whitecar_y + 10;
		console.log("When s is pressed,  x = " + whitecar_x + " | y = " +whitecar_y);
		 uploadBackground();
		 uploadwhitecar();
		 uploadgreencar();
	}
}
function left()
{
	if(greencar_x >= 0)
	{
		greencar_x =greencar_x - 10;
		console.log("When left arrow is pressed,  x = " + greencar_x + " | y = " +greencar_y);
		uploadBackground();
		 uploadgreencar();
		 uploadwhitecar();
	}
}
function left1()
{
	if(whitecar_x >=0)
	{
		whitecar_x = whitecar_x - 10;
		console.log("When a is pressed,  x = " + whitecar_x + " | y = " +whitecar_y);
		 uploadBackground();
		 uploadwhitecar();
		 uploadgreencar();
	}
}
function right()
{
	if(greencar_x <= 700)
	{
		greencar_x =greencar_x + 10;
		console.log("When right arrow is pressed,  x = " + greencar_x + " | y = " +greencar_y);
		uploadBackground();
		uploadgreencar();
		uploadwhitecar();
   }
}
function right1()
{
   if(whitecar_x <=700)
   {
	   whitecar_x = whitecar_x + 10;
	   console.log("When d is pressed,  x = " + whitecar_x + " | y = " +whitecar_y);
		uploadBackground();
		uploadwhitecar();
		uploadgreencar();
   }
}
	