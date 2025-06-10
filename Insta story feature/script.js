const arr = [
    {
        dp: "https://images.unsplash.com/photo-1749390002163-0d151e3550d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1749225667069-f7d8f585fa26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1743275532265-529cb335a4fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1548777123-e216912df7d8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1738680815806-a2f7350b558d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1738680802800-2ff58864144c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D"
    },
    {
        dp: "https://plus.unsplash.com/premium_photo-1747851400022-943f7163a4a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4OXx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1748795303121-02b90e036dec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5Mnx8fGVufDB8fHx8fA%3D%3D"
    }
];

let stories = document.querySelector("#stories")
let clutter = ""
arr.forEach((elem, idx) => {
    clutter += `<div class="story">
          <img 
            id="${idx}"
            src="${elem.dp}"
            alt=""
          />
        </div>`
});

document.querySelector('#stories').innerHTML = clutter;

stories
    .addEventListener("click", (dets) => {
        document.querySelector("#full-screen").style.display = "block"
        document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

        setTimeout(() => {
            document.querySelector("#full-screen").style.display = "none"
        }, 3000);
    })