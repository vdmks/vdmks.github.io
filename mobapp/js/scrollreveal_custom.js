window.sr = ScrollReveal();

sr.reveal('.logo', { opacity: 0, duration: 1500});
sr.reveal('nav', { opacity: 0, duration: 1500 });

sr.reveal('.about-header', { duration: 1500, rotate: {x: 10} });
sr.reveal('.about-descr', { duration: 1500, rotate: {y: 10} });
sr.reveal('.about-images', { opacity: 0, duration: 1500 });

sr.reveal('.features-header', { duration: 1500 }); 
sr.reveal('#features', { opacity: 0, duration: 1500 });
sr.reveal('.features-descr .button', { duration: 1500 }); 

sr.reveal('.reviews-header', { opacity: 0, duration: 1500});
sr.reveal('.someuser-photo', { duration: 1500, rotate: {x: 10} });
sr.reveal('.someuser-comment', { duration: 2000, rotate: {x: 10} });
sr.reveal('#reviews .button', { opacity: 0, duration: 1500});

sr.reveal('.screenshot-header', { opacity: 0, rotate: {x: 100}, duration: 1500});
sr.reveal('.screenshot-slider', { opacity: 0, rotate: {y: 100}, duration: 1500});

sr.reveal('.demo-header', { opacity: 0, rotate: {x: 100}, duration: 1500});
sr.reveal('.demo-preview', { opacity: 0, rotate: {x: 100}, duration: 1500});
sr.reveal('.demo-char', { duration: 2000, rotate: {x: 10} });
sr.reveal('.demo-question-left', { opacity: 1, rotate: {y: 100}, duration: 1800});
sr.reveal('.demo-question-right', { opacity: 1, rotate: {y: 100}, duration: 2000});

sr.reveal('.contact-header', { duration: 1000, rotate: {y: 360} });
sr.reveal('.email-form', { opacity: 0, rotate: {x: 100}, duration: 1500});
sr.reveal('#contact .button', { opacity: 0, duration: 1500 });