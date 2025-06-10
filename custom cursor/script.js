const main = document.querySelector(".main")
const crsr = document.querySelector(".cursor")

main.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.pageX + 'px';
    crsr.style.top = dets.pageY + 'px';
});