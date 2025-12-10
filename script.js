
gsap.registerPlugin(ScrollTrigger);

const t_uno = document.getElementById("t_uno");
const t_dos = document.getElementById("t_dos");
const t_tres = document.getElementById("t_tres");
const t_cuatro = document.getElementById("t_cuatro");
const t_cinco = document.getElementById("t_cinco");
const t_seis = document.getElementById("t_seis");
const c_izquierda = document.getElementById("c_izquierda");
const c_deracha = document.getElementById("c_deracha");
const gran_boton = document.getElementById("gran_boton");


gsap.from(t_uno, {

    scrollTrigger: {
        trigger: "#t_uno",
        start: "top 100%",
        end:"bottoom 100%",
        scrub: 1,
        markers: true,
        once: true
    },
    // y:100,
    opacity: 0,
    duration: 1
});


gsap.fromTo(t_dos,
{
    x: 2000
},
{
    scrollTrigger: {
        trigger: "#t_dos",
        start: "top 100%",
        end: "bottoom 100%",
        scrub: 1,
        markers: true,
        once: true
    },
    x: 0,
    duration: 1
}
);


gsap.fromTo(t_tres,
{
    x: -2000
},
{
    scrollTrigger: {
        trigger: "#t_tres",
        start: "top 100%",
        end: "bottoom 100%",
        scrub: 1,
        markers: true,
        once: true
    },
    x: 0,
    duration: 1
}
);

gsap.fromTo(t_cuatro,
{
    x: 2000
},
{
    scrollTrigger: {
        trigger: "#t_cuatro",
        start: "top 100%",
        end: "bottoom 100%",
        scrub: 1,
        markers: true,
        once: true
    },
    x: 0,
    duration: 1
}
);


gsap.fromTo(t_cinco,
{
    x: -2000
},
{
    scrollTrigger: {
        trigger: "#t_cinco",
        start: "top 100%",
        end: "bottoom 100%",
        scrub: 1,
        markers: true,
        once: true
    },
    x: 0,
    duration: 1
}
);


gsap.from(t_seis,{
    scrollTrigger: {
        trigger: "#t_seis",
        start: "top 100%",
        end:"bottoom 100%",
        scrub: 1,
        markers: true,
        once: true
    },
    y:100,
    opacity: 0,
    duration: 1
});


gsap.fromTo(c_deracha,
{
    x: 2000,
    y: 200,
    opacity: 0
},
{
    scrollTrigger: {
        trigger: "#c_deracha",
        start: "top 100%",
        end: "bottoom 100%",
        scrub: 1,
        markers: true,
        once: true
    },
    x: 0,
    y:0,
    opacity: 1,
    duration: 1
}
);


gsap.fromTo(c_izquierda,
{
    x: -2000,
    y: 200,
    opacity: 0
},
{
    scrollTrigger: {
        trigger: "#c_izquierda",
        start: "top 100%",
        end: "bottoom 80%",
        scrub: 1,
        markers: true,
        once: true
    },
    x: 0,
    y:0,
    opacity: 1,
    duration: 1
}
);
// gran_boton.addEventListener("click")