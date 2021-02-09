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

let stepCount = 0 // equity step in one direction
let direction 

function drawBot() {
    ctx.clearReact(0,0,400,200)
   if (stepCount === 0 ){
       stepCount = Math.floor(15*Math.random())
       direction = Math.floor(8*Math.random())
   }
}