document.querySelector('#center')
    .addEventListener("mousemove", (dets) => {
        console.log(dets.clientX, dets.clientY);
    });