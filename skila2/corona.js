
let a = -1200 ;

let c = 1200;

 document.querySelector('.but2-right').addEventListener('click', () => {
    a = a + 400 ;
    if (a > 0 ) {
        a = -800
    }
    console.log(a)
    document.querySelector('.slide-line').style.left = a + 'px' ;
})
 document.querySelector('.but2-left').addEventListener('click', () => {
    a = a - 400 ;
    if (a < -2400) {
        a = -400
    
    }
    console.log(a)
    document.querySelector('.slide-line').style.left = a + 'px' ;
})



let sln1 = document.querySelector('.slide-line1');




let b = 0 ;

document.querySelector('.but1-right').disabled = true;
document.querySelector('.but1-left').disabled = true;


document.querySelector('.but1-right').addEventListener('click', () => {
    b = b + 1707 ;
    if (b > 3414) {
        b = 0
    }
    sln1.style.left = -b + 'px' ;
    console.log(b)
})
document.querySelector('.but1-left').addEventListener('click', () => {
    b = b - 1707 ;
    if (b < 0) {
        b = 3414
    }
    document.querySelector('.slide-line1').style.left = -b + 'px' ;
})


let d = 0;

document.querySelector('.bur-but').addEventListener('click', () =>{

    if(d == 0){
        document.querySelector('.bur-men').style.display = 'flex';
        d=1
    }
    else{
        document.querySelector('.bur-men').style.display = 'none';
        d=0
    }


})

