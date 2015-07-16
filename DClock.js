var DClock = (function() {
	var lineLength = 50;
	var lineBorder = 8;
	var marginX = 10;
	var marginY = 10;
	var strokeStyle = "#000";
	var numMarign = 3 * lineBorder + lineLength;
	var numWidth = 2 * lineBorder + lineLength;
	var numHeight = 3 * lineBorder + 2 * lineLength;
	var divPoint = 2 * lineBorder;
	var cxt, canvas;


	//	var opt={
	//		marginX:number,
	//		marginY:number,
	//		lineLength:number,
	//		lineBorder:Number,
	//		strokeStyle: String     ("#000",red)
	//	}
	function InitWithCanvas(aCanvas,opt) {
		canvas = aCanvas;
		if (canvas != null) {
			cxt = canvas.getContext("2d");
			if(opt){
				marginX=(opt.marginX&&(typeof opt.marginX==="number"))?opt.marginX:10;
				marginY=(opt.marginY&&(typeof opt.marginY==="number"))?opt.marginY:10;
				lineLength=(opt.lineLength&&(typeof opt.lineLength==="number"))?opt.lineLength:50;
				lineBorder=(opt.lineBorder&&(typeof opt.lineBorder==="number"))?opt.lineBorder:8;
				strokeStyle=(opt.strokeStyle&&(typeof opt.strokeStyle==="string"))?opt.strokeStyle:"#000";
			}
		}
	};
	//drwaH line
	function drawHorizontalLine(x, y) {
		cxt.lineWidth = lineBorder;
		cxt.strokeStyle = strokeStyle;
		cxt.beginPath();
		cxt.moveTo(x, y);
		cxt.lineTo(x + lineLength, y);
		cxt.closePath();
		cxt.stroke();
	};
	//drawV line
	function drawVerticalLine(x, y) {
		cxt.lineWidth = lineBorder;
		cxt.strokeStyle = strokeStyle;
		cxt.beginPath();
		cxt.moveTo(x, y);
		cxt.lineTo(x, y + lineLength);
		cxt.closePath();
		cxt.stroke();
	};
	//draw points
	function point(x, y) {
		cxt.lineWidth = 1;
		cxt.strokeStyle = strokeStyle;
		cxt.fillStyle = strokeStyle;
		cxt.beginPath();
		cxt.arc(x, y, lineBorder / 2, 0, 360, false);
		cxt.fill();
		cxt.closePath();
		cxt.stroke();
	};
	//get datetime and setting the number
	function showTime() {
		var time = new Date();
		var hh = time.getHours();
		var mm = time.getMinutes();
		var ss = time.getSeconds();
		var h2 = hh % 10;
		var h1 = (hh - h2) / 10;
		var m2 = mm % 10;
		var m1 = (mm - m2) / 10;
		var s2 = ss % 10;
		var s1 = (ss - s2) / 10;
		return [h1, h2, m1, m2, s1, s2];
	};
	//init a digital number on canvas by setting the x,y location.
	function digital(x, y, num) {
		function line1() {
			var _x = x + lineBorder;
			var _y = y;
			drawHorizontalLine(_x, _y)
		};

		function line1() {
			var _x = x + lineBorder;
			var _y = y + lineBorder / 2;
			drawHorizontalLine(_x, _y)
		};

		function line2() {
			var _x = x + lineBorder / 2;
			var _y = y + lineBorder;
			drawVerticalLine(_x, _y)
		};

		function line3() {
			var _x = x + lineBorder + lineBorder / 2 + lineLength;
			var _y = y + lineBorder;
			drawVerticalLine(_x, _y)
		};

		function line4() {
			var _x = x + lineBorder;
			var _y = y + lineBorder + lineLength + lineBorder / 2;
			drawHorizontalLine(_x, _y)
		};

		function line5() {
			var _x = x + lineBorder / 2;
			var _y = y + 2 * lineBorder + lineLength;
			drawVerticalLine(_x, _y)
		};

		function line6() {
			var _x = x + lineBorder + lineLength + lineBorder / 2;
			var _y = y + 2 * lineBorder + lineLength;
			drawVerticalLine(_x, _y)
		};

		function line7() {
			var _x = x + lineBorder;
			var _y = y + 2 * lineBorder + 2 * lineLength + lineBorder / 2;
			drawHorizontalLine(_x, _y)
		};
		//draw digital number 
		function one() {
			line3();
			line6();
		};

		function two() {
			line1();
			line3();
			line4();
			line5();
			line7();
		};

		function three() {
			line1();
			line3();
			line4();
			line6();
			line7();
		};

		function four() {
			line2();
			line4();
			line3();
			line6();
		};

		function five() {
			line1();
			line2();
			line4();
			line6();
			line7();
		};

		function six() {
			line1();
			line2();
			line4();
			line6();
			line7();
			line5();
		};

		function seven() {
			line1();
			line3();
			line6();
		};

		function eight() {
			line1();
			line2();
			line3();
			line4();
			line5();
			line6();
			line7();
		};

		function nine() {
			line1();
			line2();
			line3();
			line4();
			line6();
			line7();
		};

		function zero() {
			line1();
			line2();
			line3();
			line5();
			line6();
			line7();
		};

		function number(n) {
			switch (n) {
				case 0:
					zero();
					break;
				case 1:
					one();
					break;
				case 2:
					two();
					break;
				case 3:
					three();
					break;
				case 4:
					four();
					break;
				case 5:
					five();
					break;
				case 6:
					six();
					break;
				case 7:
					seven();
					break;
				case 8:
					eight();
					break;
				case 9:
					nine();
					break;
			}
		};

		cxt.clearRect(x, y, 2 * lineBorder + lineLength, 3 * lineBorder + 2 * lineLength);
		number(num);
	};

	function drawPoints() {
		point(marginX + 2 * numWidth + 3 * divPoint / 2, 0.4 * numHeight);
		point(marginX + 2 * numWidth + 3 * divPoint / 2, 0.7 * numHeight);
		point(marginX + 4 * numWidth + 7 * divPoint / 2, 0.4 * numHeight);
		point(marginX + 4 * numWidth + 7 * divPoint / 2, 0.7 * numHeight);
	};

	function Initclock() {
		var numlist = showTime();
		//console.log(numlist);
		digital(marginX, marginY, numlist[0]);
		digital(marginX + numMarign, marginY, numlist[1]);
		digital(marginX + 2 * numMarign + divPoint, marginY, numlist[2]);
		digital(marginX + 3 * numMarign + divPoint, marginY, numlist[3]);
		digital(marginX + 4 * numMarign + 2 * divPoint, marginY, numlist[4]);
		digital(marginX + 5 * numMarign + 2 * divPoint, marginY, numlist[5]);
		drawPoints();
	};

	return {
		InitWithCanvas: InitWithCanvas,
		drawHorizontalLine: drawHorizontalLine,
		drawVerticalLine: drawVerticalLine,
		point: point,
		showTime: showTime,
		digital: digital,
		drawPoints: drawPoints,
		Initclock: Initclock,
		marginX:marginX,
		marginY:marginY,
		lineLength:lineLength,
		lineBorder:lineBorder
	};
}());