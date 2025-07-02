const btn = document.querySelector('#center')

const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    };
}

btn
    .addEventListener("mousemove",
        throttleFunction((dets) => {
            // your less repeatation code
            let div = document.createElement("div");
            div.classList.add('imagediv');
            div.style.left = dets.clientX + 'px';
            div.style.top = dets.clientY + 'px';

            let img = document.createElement("img");
            img.setAttribute("src", "https://images.unsplash.com/photo-1737441835439-c1f5657d7c7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D")
            div.appendChild(img);

            document.body.appendChild(div);

            gsap.to(img, {
                y: "0",
                ease: Power1,
                duration: .6
            });

            gsap.to(img, {
                y: "100%",
                delay: .6,
                ease: Power2,
            })

            setTimeout(() => {
                div.remove();
            }, 2000);
        }, 400)
    );