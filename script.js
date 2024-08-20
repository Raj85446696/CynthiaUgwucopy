const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstpageanim(){
    var t1 = gsap.timeline();
    t1.from("#nav",{
        y:'-10',
        opacity:0,
        duration:1.5,
        ease: Expo.easeInOut
    })
    .to(".boundinglen",{
        y:0,
        ease : Expo.easeInOut,
        duration:2,
        delay:-1,
        stagger: .2
    })
    .from("#herofooter",{
        y:10, 
        opacity:0 ,
        duration:1.5,
        delay:-1, 
        ease:Expo.easeInOut
    })
}

function circleMouseFollower(){
    window.addEventListener("mousemove",function(details){
        document.querySelector("#minicircle").style.transform = `translate(${details.clientX}px,${details.clientY})`;
    })
}

circleMouseFollower();
firstpageanim();

document.querySelectorAll(".elem").forEach(function (elem){
    var rotate = 0 ;
    var diffrot = 0 ; 
    elem.addEventListener("mouseleave",function(details){
        gsap.to(elem.querySelector('img'),{
            opacity:0, 
            ease:Power1,
        });
    });
    elem.addEventListener("mousemove",function(details){
        var diff = details.clientY-elem.getBoundingClientRect().top;
        diffrot = details.clientX - rotate  ; 
        rotate = details.clientX; 
        gsap.to(elem.querySelector('img'),{
            opacity:1, 
            ease:Power1,
            top : diff,
            left:details.clientX,
            rotate:gsap.utils.clamp(-20,20,diffrot*.8),
        });
    });
});