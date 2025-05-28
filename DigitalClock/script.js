const clock = document.getElementById('clock')

setInterval(() => {
    let date = new Date()
    clock.innerHTML = date.toLocaleDateString();
}, 1000)