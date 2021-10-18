 var myCanvas = document.getElementById('c');

    myContext = myCanvas.getContext('2d');

       myCanvaswidth = myCanvas.width;

           myCanvasHight = myCanvas.height;

             myContext.fillStyle = '#ddd'; // Fill Color

               myContext.fillRect(0, 0, myCanvaswidth, myCanvasHight); // Rectangle Filled Inside Canvas

                  myContext.strokeStyle = '#00f';

                     myContext.lineWidth = 10 ;

            // Top Left Line

                    myContext.moveTo(10,10);

                      myContext.lineTo(130 , 130);

           // Top Right Line

                   myContext.moveTo(290,10);

                     myContext.lineTo(170 , 130);

                           myContext.stroke();

            // Bottom Left Line

                 myContext.moveTo(10,290);

                     myContext.lineTo(130 , 170);

                        myContext.stroke();

            // Bottom Right Line

                 myContext.moveTo(290,290);

                     myContext.lineTo(170 , 170);

                         myContext.stroke();