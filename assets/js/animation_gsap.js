
const introduction = document.getElementById("introduction");
const contactus = document.getElementById("contactus");
const services = document.getElementById("services");

//ScrollTrigger

//introduction
const intro = gsap.timeline({
    scrollTrigger: {
        trigger: "#introduction", // Dispara quando a seção introduction estiver visível
        start: "top 80%", // Inicia quando o topo da seção atingir 80% da altura da viewport
        toggleActions: "play none none reverse"
    }
});

intro.from("#introduction h2, #introduction p, #introduction img", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    stagger: 0.2,
    ease: "power3.out",
});

//contactus
const contact = gsap.timeline({
    scrollTrigger: {
        trigger: "#contactus", 
        start: "top 80%", 
        toggleActions: "play none none reverse"
    }
});

contact.from("#contactus h2, #contactus p, #contactus .contact-detail, #contactus form", {
    opacity: 0,
    y: 50,
    duration: 1.0,
    stagger: 0.2,
    ease: "power3.out",
});


//service
const service = gsap.timeline({
    scrollTrigger: {
        trigger: "#services", 
        start: "top 50%", 
        toggleActions: "play none none reverse"
    }
}); 

service.from("#services .service-box", { 
    opacity: 0,
    y: 50,
    duration: 2.0,
    stagger: 0.4, 
    ease: "power3.out",
});



