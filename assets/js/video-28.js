var MyCanvas = document.getElementById('c');

myContext   = MyCanvas.getContext('2d');

myContext.fillStyle = '#FF0';

myContext.fillRect(0, 0, 900, 600);

myContext.fillStyle = '#080';

myContext.fillRect( 10 , 10 , 100 , 50 );

myContext.fillStyle = '#f00';

myContext.fillRect( 20 , 20 , 100 , 50 );

myContext.fillStyle = '#00f';

myContext.fillRect( 30 , 30 , 100 , 50 );

myContext.fillStyle = '#080';

// myContext.strokeRect( 100, 100, 100, 50);

// myContext.clearRect(10, 10, 100, 100);