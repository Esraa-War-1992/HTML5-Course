var myCanvas = document.getElementById('c');
myContext = myCanvas.getContext('2d');


myContext.font = '65px Arial';
myContext.fillStyle = '#F00';
myContext.fillText('E', 20, 50);


myContext.font = '60px Arial';
myContext.fillStyle = '#0f0';
myContext.fillText('L', 40, 70);


myContext.font = '50px Arial';
myContext.fillStyle = '#808';
myContext.fillText('Z', 60, 90);


myContext.font = '40px Arial';
myContext.fillStyle = '#F00';
myContext.fillText('E', 80, 110);


myContext.font = '40px Arial';
myContext.fillStyle = '#002aff';
myContext.fillText('R', 100, 130);


myContext.font = '40px Arial';
myContext.fillStyle = '#ff0080';
myContext.fillText('O', 120, 150);


myContext.fillStyle = '#FF0';
myContext.strokeStyle = 'yellow';
myContext.strokeText('School', 150, 200);