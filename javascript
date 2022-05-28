const canvas = document.getElementById('canva');
let c = canvas.getContext('2d');
canvas.style.backgroundColor = "black"
canvas.height = window.innerHeight
canvas.width = window.innerWidth

function Circle(x,y,vx,vy,r){
    this.x = x
    this.y = y
    this.vx = vx
    this.vy = vy
    this.r = r

    this.draw = function ddraw(){
        c.beginPath()
        c.arc(this.x,this.y,this.r, 0, Math.PI * 2, false)
        c.strokeStyle = 'blue';
        c.stroke();
    }
    this.update = function(){
        if (this.x + this.r > innerWidth || this.x - this.r <= 0){
            this.vx =  this.vx * -1 
        }
        if (this.y + this.r > innerHeight || this.y - this.r <= 0){
            this.vy =  this.vy * -1 
        }
        
        this.x += this.vx
        this.y += this.vy

        this.draw();
    }

}

let cirArr = []

for (i = 0; i < 100; i++){
    let r = 30
    let x = Math.random() * (innerWidth - r * 2) + r
    let y = Math.random() * (innerHeight - r * 2)+ r 
    let vx = (Math.random() - 0.5) * 10
    let vy = (Math.random() - 0.5) * 10
    cirArr.push(new Circle(x,y,vx,vy,r));
}

console.log(cirArr);

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth, innerHeight);

    for (i = 0; i < cirArr.length; i++){
        cirArr[i].update();
    }
}
animate();
