 var canvas = document.querySelector('canvas')
 canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.fillStyle = 'rgba(444,0,0,0.5)';
c.fillRect(100,100, 100, 100);
c.fillStyle = 'rgba(0,0,255, 0.6)';
c.fillRect(400,100, 100, 100);
c.fillStyle = 'rgba(0,255,0, 0.6)';

c.fillRect(100,500, 100, 100);
c.fillRect(600,100, 100, 100);

console.log(canvas);

//Line
c.beginPath();
c.moveTo(50,300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = "red";
c.stroke();

// Arc /Circle 
// c.arc(x: Int, y : Int, r: Int, startAngle:
// Float, endAngle: Float,
// draCounterClockwise: Bool {false});
c.beginPath();
c.strokeStyle = 'blue';

c.arc(300, 300, 30,0, Math.PI *2 , false); 
c.stroke();
c.beginPath();
 
c.arc(400, 500, 30,0, Math.PI *3 , false); 
c.stroke();

c.beginPath();
 c.arc(100, 500, 30,0, Math.PI *3 , false); 

c.strokeStyle = 'blue';
c.stroke();

for (var i =0 ; i<55; i++) {
    var x= Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    c.beginPath();
 c.arc(x, y, 30,0, Math.PI *3 , false); 

c.strokeStyle = 'red';
c.stroke();
}