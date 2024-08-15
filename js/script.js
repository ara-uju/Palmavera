let partyOn = false;

document.addEventListener("DOMContentLoaded", (event) => {

    // howler
    var cheer = new Howl({
        html5: true,
        src: ['../media/cheer.wav']
    });

    var trumpet = new Howl({
        html5: true,
        src: ['../media/trumpet.wav']
    });

    var clap = new Howl({
        html5: true,
        src: ['../media/clap.wav']
    });

    //----

    let loader = document.querySelector(".loader");

    let tm = gsap.timeline();

    tm.to(loader, {
        delay: .5,
        opacity: 0,
        duration: 1,
        onComplete: () => {
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


    let btn = document.querySelector(".intro-el.btn");
    
    btn.addEventListener("click", function () {
        partyOn = true;

        cheer.play();
        trumpet.play();
        clap.play();

        document.querySelector("body").classList.add("party-on");

        gsap.timeline().to(".intro", {
            delay: 1,
            opacity: 0,
            duration: 1.5
        }).from(".cup-container img", {
            delay: .5,
            scale: 20,
            rotate: 75,
            duration: 2,
            opacity: 0,
            ease: "power2.out"
        }, "<")
            .from(".bg-container", {
                scale: 0.1,
                transformOrigin: "50% 50%",
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
                delay: .2,
                yPercent: 200,
                duration: 1.25,
                ease: "power1.out"
            }, "<");
    });

    document.querySelector('.cup-container img').addEventListener("click", function () {
        if (partyOn) {
            gsap.fromTo('.cup-container img', {
                rotate: 0
            }, {
                rotate: 360,
                duration: .8,
                ease: "power1.out"

            });
            cheer.play();
            trumpet.play();
            clap.play();
        }
    });

    console.log("Doc Loaded");
});