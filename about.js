var trigger = window.innerHeight/3 ;

window.addEventListener('scroll',()=>{


    var animation1 = document.getElementById('animation1');

    var prog = animation1.getBoundingClientRect().top;

    if(prog < trigger){

        
        var progress1 = document.getElementById("u-anim1");
        progress1.style.width = progress1.getAttribute('data-done');
        
        var progress2 = document.getElementById('u-anim2');
        progress2.style.width = progress2.getAttribute('data-done');
        
        var progress3 = document.getElementById('u-anim3');
        progress3.style.width = progress3.getAttribute('data-done');
        
        var progress4 = document.getElementById('u-anim4');
        progress4.style.width = progress4.getAttribute('data-done');
        
        var progress5 = document.getElementById('u-anim5');
        progress5.style.width = progress5.getAttribute('data-done');
        
        var progress6 = document.getElementById('u-anim6');
        progress6.style.width = progress6.getAttribute('data-done');
        
    }
} );
