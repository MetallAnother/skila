let winWid = window.innerWidth;


if (winWid != 415){
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

}

else{
    let a = -1065 ;

    let c = 1065;

    document.querySelector('.but2-right').addEventListener('click', () => {
        a = a + 360 ;
        if (a > 0 ) {
            a = -1065
        }
        console.log(a)
        document.querySelector('.slide-line').style.left = a + 'px' ;
    })
    document.querySelector('.but2-left').addEventListener('click', () => {
        a = a - 360 ;
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
        b = b + 790 ;
        if (b > 1580) {
            b = 0
        }
        sln1.style.left = -b + 'px' ;
        console.log(b)
    })
    document.querySelector('.but1-left').addEventListener('click', () => {
        b = b - 790 ;
        if (b < 0) {
            b = 1580
        }
        document.querySelector('.slide-line1').style.left = -b + 'px' ;
    })
}








let d = 0;


document.querySelector('.bur-but').addEventListener('click', () =>{

    if(d == 0){
        document.querySelector('.bur-men').style.display = 'flex';
        document.querySelector('.bur-men').style.height = '400px';
        document.querySelector('.hr2').style.opacity = '0';
        document.querySelector('.hr1').style.transform = `rotate(${this.g = (this.g | 0) + 45}deg)`;
        document.querySelector('.hr1').style.top = '8px';
        document.querySelector('.hr3').style.top = '-9px';
        document.querySelector('.hr3').style.transform = `rotate(${this.i = (this.i | 0) + -45}deg)`;
        d=1
    }
    else{
        document.querySelector('.bur-men').style.display = 'none';
        document.querySelector('.bur-men').style.height = '0px';
        document.querySelector('.hr2').style.opacity = '100';
        document.querySelector('.hr1').style.transform = `rotate(${this.h = (this.h | 0) + 0}deg)`;
        document.querySelector('.hr1').style.top = '0px';
        document.querySelector('.hr3').style.top = '0px';
        document.querySelector('.hr3').style.transform = `rotate(${this.l = (this.l | 0) + 0}deg)`;

        g = 0

        i = 0

        d=0
    }


})









console.log(window.innerWidth);
