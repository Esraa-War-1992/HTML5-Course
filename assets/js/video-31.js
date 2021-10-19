// Create The Canvas On page


   var myPageCanvas = document.createElement('canvas');

// Assign Id To This Canvas

      myPageCanvas.id = 'c';

// Customize The Canvas

  myPageCanvas.width = 600 ;
    myPageCanvas.height = 100;
      myPageCanvas.style.display = 'block' ;
        myPageCanvas.style.margin ='50px auto' ;

// Add The Canvas To The page

    document.body.appendChild( myPageCanvas );

// get Canvas Information

    var myCanvas = document.getElementById('c');

      myContext = myCanvas.getContext('2d') ;

// Fill And Style option

    myContext.fillStyle ='#080' ;
      myContext.strokeStyle = '#DDD';
        myContext.lineWidth = 4 ;
          myContext.font = '60px Arial';

// Add The Text

    myContext.fillText('ELZero Web School' , 50 , 80);
       myContext.strokeText('ELZero Web School' , 50 , 80);

// Add The second Text

  myContext.strokeStyle = '#000';
     myContext.lineWidth = 2 ;
       myContext.strokeText('ELZero Web School', 50 , 80);