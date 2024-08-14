let partyOn = false;

document.addEventListener("DOMContentLoaded", (event) => {

    let loader = document.querySelector(".loader");

    let tm = gsap.timeline({
        transformOrigin:"50% 50%"
    });

    tm.to(loader, {
        delay: .5,
        opacity: 0,
        duration: 1,
        onComplete: ()=> {
            loader.remove();
        }
    })
    .to(".intro-el:not(.btn)", {
        y: "-111%",
        ease: "power3.out",
        duration: .6
    })
    .to(".intro-el:not(.btn)", {
        y: "-200%",
        ease: "power3.out",
        duration: .6
    })
    .to(".intro-el:not(.btn)", {
        y: "-310%",
        ease: "power3.out",
        duration: .6
    })
    .fromTo(".intro-el.btn", {
        y: "100%",
        opacity: 0
    }, {
        y: "0%",
        opacity: 1,
        ease: "power4.out",
        duration: .4
    });


    let btn = document.querySelector(".intro-el.btn").addEventListener("click", function() {
        partyOn = true;

        document.querySelector("body").classList.add("party-on");
        console.log("click");

        gsap.timeline().to(".intro", {
            opacity: 0,
            ease: "power2.out",
            duration: 1.5
        }).from(".cup-container img", {
            scale: 20,
            rotate: 75,
            duration: 2,
            opacity: 0,
            ease: "power2.out"
        })
        .from(".bg-container", {
            scale: 0.1,
            transformOrigin:"50% 50%",
            opacity: 0,
            duration: 2,
            ease: "power1.out"
        }, "<")
        .from(".title-container div:nth-child(1)", {
            delay: 1.5,
            xPercent: -200,
            duration: 2,
            ease: "power2.out"
        }, "<")
        .from(".title-container div:nth-child(2)", {
            xPercent: 200,
            duration: 2,
            ease: "power3.out"
        }, "<")
        .from(".subtitle-container", {
            yPercent: 200,
            duration: 3,
            ease: "power3.out"
        });
    });

    console.log("Doc Loaded");
});