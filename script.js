let canvas = document.getElementById('c1');
let ctx  = canvas.getContext('2d')


//// ******** Drawn rectangle
// ctx.fillStyle = 'red'
// ctx.fillRect(100, 50, 150,75)

// ctx.fillStyle = 'blue'
// ctx.fillRect(150, 75, 50,30)
// // ctx.fillRect(x, y, width, height)

// ctx.clearRect(0,0, 400, 200)

// ctx.strokeStyle = 'green';
// ctx.lineWidth = '10'
// ctx.rect(50,25,100,100)
// ctx.stroke()
// ctx.fillStyle= 'orange'
// ctx.fill()

//// ******** Drawn lines
// ctx.beginPath()
// ctx.strokeStyle = 'red'
// ctx.lineWidth = '5'
// ctx.moveTo(100,50)   // cursor move to
// ctx.lineTo(150,150)  // coordinates linies
// ctx.stroke()

// ctx.beginPath()
// ctx.strokeStyle = 'blue'
// ctx.moveTo(200,50)
// ctx.lineTo(300,50)
// ctx.lineTo(300,100)
// ctx.lineWidth = '10'
// ctx.lineCap = 'butt'
// ctx.stroke()
// ctx.clearRect(0,0,400,200)

// ctx.beginPath()
// ctx.strokeStyle = 'blue'
// ctx.lineWidth = '4'
// ctx.moveTo(50,150)
// ctx.lineTo(150,50)
// ctx.lineTo(200,150)
 
// ctx.lineCap = 'butt'
// ctx.fillStyle = 'yellow'
// ctx.closePath()
// ctx.fill()
// ctx.stroke()


// ********// Drawn paint 
// let lineColor = 'red'
// document.getElementById('color').oninput = function() {
//       lineColor = this.value
// }

// canvas.onmousedown = function(event) {
//    canvas.onmousemove = function (event) {
//     let x = event.offsetX
//     let y = event.offsetY

//     ctx.fillRect(x,y, 5,5)
//     ctx.fillStyle = lineColor
//     ctx.fill()
//    }
//    canvas.onmouseup = function () {
//     canvas.onmousemove = null
//    }
// }

// let pi = Math.PI
// ctx.beginPath();
// ctx.lineWidth = '5'
// ctx.strokeStyle = 'red'
// ctx.fillStyle = 'yellow'
// ctx.arc(150,100,75,0, 2*pi, false)
// ctx.stroke()
// ctx.fill()

// ctx.beginPath();
// ctx.lineWidth = '5'
// ctx.strokeStyle = 'blue'
// ctx.fillStyle = 'green'
// ctx.arc(270,100,75,0, 2*pi, false)
// ctx.stroke()
// ctx.fill()
// ctx.clearRect(0,0,400,200)

// canvas.onmousemove = function(event) {

//     let x = event.offsetX;
//     let y = event.offsetY;
//     ctx.clearRect(0,0,400,200)
//     ctx.beginPath()
//     let radius = Math.pow(Math.pow(x-200 , 2) + Math.pow(y-100 , 2) ,0.5)
//     ctx.arc(200,100,radius,0 , 2*pi,false)
//     ctx.stroke()
//     ctx.fill()
// }


//***** animated Background start 
// let stepCount = 0 // equity step in one direction
// let direction 
// let x = 200
// let y = 100
// let timer  
// let myX
// let myY

// function drawDot() {
//     ctx.clearRect(0,0,400,200)
//    if (stepCount === 0 ){
//        stepCount = Math.floor(15*Math.random())
//        direction = Math.floor(8*Math.random())
//    }
//    else {
//         stepCount--
//    }
//    switch(direction) {
//        case 0:
//            //up direction
//             y = y-1
//              break;
//            case 1:
//                //right direction
//             x = x+1
//             break;
//            case 2:
//                //down direction
//             y = y+1
//             break;
//            case 3:
//                //left direction
//             x = x-1
//             break;
//            case 4:
//                //right up direction
//             x = x+1
//             y = y-1
//             break;
//            case 5:
//                //right down direction
//             x = x+1
//             y = y+1
//             break;
//            case 6:
//                //left down direction
//             x = x-1
//             y = y+1
//             break;
//            case 7:
//                //left up direction
//             x = x-1
//             y = y-1
//             break;
//            default:
//             break;

//    }
//    if(x<0 || x>400 || y<0 || y>200) {
//        stepCount = 0
//    }
//    ctx.fillRect(x-3,y-3,6,6)
//    ctx.beginPath()
//    ctx.moveTo(x,y)
//    ctx.lineTo(myX,myY)
//    ctx.stroke()
//    timer =setTimeout(drawDot,100)
// }
// drawDot()
// canvas.onmousemove = function (event) {
//     myX = event.offsetX
//     myY = event.offsetY
// }

//***** animated Background end 

//******----------- */  grafic start

// let x =0;
// let timer 


// function drawSin() {
//     y = Math.sin(x)
//     if (x>=400) {
//         x=0
//     } else {
//         x=x+0.01
//     }
//     x = x + 0.1
//     ctx.fillRect(5*x,100+ 20*y,3,3)
//     timer = setTimeout(drawSin , 50)
// }

// drawSin()
//******----------- */  grafic end



//******----------- */   start drawn spirograf
let Rad = document.querySelector('#ExtRadius') 
let rad = document.querySelector('#IntRadius') 
let dim = document.querySelector('#diametr')
let btn = document.querySelector('.btn')
 let valR =document.querySelector('.valR') 
 let valr =document.querySelector('.valr')
 let diam =document.querySelector('.diam')
   
   
 valR.textContent = Rad.value 
 valr.textContent = rad.value 
 diam.textContent = dim.value

Rad.addEventListener('input',(e) => valR.textContent = e.target.value );
rad.addEventListener('input', (e) => valr.textContent = e.target.value )
dim.addEventListener('input',(e) => diam.textContent = e.target.value);

 let  R =200
 let  r = 140
 let  d= 68
 let teta = 0
 let timer 
 
 function spiro() {
     let x= (R-r)* Math.cos(teta) + d*Math.cos( (R-r)*teta/r )
     let y=(R-r)* Math.sin(teta) - d*Math.sin( (R-r)*teta/r )
     teta = teta + 0.1
     ctx.fillRect( 300+x, 300+y,4,4)
     timer= setTimeout(spiro,30)
    } 
    console.log(R,r,d); 

    btn.addEventListener('click', update)
    function update() {  
        ctx.clearRect(0,0,600,600)
            R = Rad.value
            r = rad.value
            d =  dim.value       
    }

    spiro()





//******----------- */   start drawn spirograf