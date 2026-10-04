const tl = gsap.timeline();
tl.to(
    '.login__img',   
    {
        scale: 1.08, 
        duration: 5, 
        repeat: -1,  
        yoyo: true,  
        transformOrigin: 'center center' 
    }
)
