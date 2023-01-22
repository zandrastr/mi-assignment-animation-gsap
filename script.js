gsap.to('#svg-content', { opacity: 0.8, duration: 4, repeat: -1, yoyo: true, transformOrigin: 'center center'});

gsap.to("#letter-f", {scale:1.2, x: -70, y: 30, duration: 4, repeat: -1,  yoyo: true, ease:Bounce.easeOut})

gsap.to("#letter-r", {x: -30, y: -30, duration: 4, repeat: -1,  yoyo: true}) 

gsap.to("#letter-o", {x: -30, y: 50, duration: 4, repeat: -1, yoyo: true }) 
gsap.to("#inside-letter-o", {x: -30, y: 50, duration: 4, repeat: -1, yoyo: true}) 

gsap.to("#letter-n1", {scale: 0.9, y: -60, duration: 4, repeat: -1, yoyo: true }) 

gsap.to("#letter-t", { y: 30, duration: 4, repeat: -1, yoyo: true }) 

gsap.to("#letter-e", { y: -30, duration: 4, repeat: -1, yoyo: true }) 
gsap.to("#inside-letter-e", { y: -30, duration: 4, repeat: -1, yoyo: true}) 

gsap.to("#letter-n2", {scale: 0.9, y: 60, duration: 4, repeat: -1, yoyo: true }) 

gsap.to("#letter-d", { y: -50, duration: 4, repeat: -1, yoyo: true, ease:Bounce.easeOut})