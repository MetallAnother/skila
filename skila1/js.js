let a = 1
let b = 1

let ctOne = document.getElementById(1).id

document.querySelector('.carta').onclick = function () {
    if(a == 1){
        this.style.transform = `rotateY(${this.d = (this.d | 0) + 180}deg)`;
        document.getElementsByClassName('cl')[0].style.display = 'none';
        setTimeout(function(){
            document.getElementsByClassName('ct')[0].style.display = 'none';
        },300);
        setTimeout(function(){
            document.getElementsByClassName('t')[0].style.display = 'flex';
        },300);
        console.log(ctOne)
        a=0
    }
    else{
        this.style.transform = `rotateY(${this.d = (this.d | 0) + 180}deg)`;
        setTimeout(function(){
            document.getElementsByClassName('ct')[0].style.display = 'flex';
        },300);
        setTimeout(function(){
            document.getElementsByClassName('t')[0].style.display = 'none';
        },300);

        a=1
    }
}   


