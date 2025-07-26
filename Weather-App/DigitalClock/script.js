const clock = document.getElementById('clock')

setInterval(() => {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    clock.innerHTML = `${hour.toString().padStart(2, '0')}:
    ${minute.toString().padStart(2, '0')}:
    ${second.toString().padStart(2, '0')}`;
}, 1000);