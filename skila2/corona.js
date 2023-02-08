let a = 0 ;



 document.querySelector('.but2-right').addEventListener('click', () => {
    a = a + 400 ;
    if (a > 1200) {
        a = 0
    }
    document.querySelector('.slide-line').style.left = -a + 'px' ;
})
 document.querySelector('.but2-left').addEventListener('click', () => {
    a = a - 400 ;
    if (a < 0) {
        a = 1200
    }
    document.querySelector('.slide-line').style.left = -a + 'px' ;
})


