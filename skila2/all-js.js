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
