const box = document.getElementById("box");
const local = document.getElementById("local");
const btn = document.getElementById("download");

box.onclick = () => {
    box.classList.toggle("open");
};

btn.onclick = (e) => {
    e.stopPropagation();
    window.open("https://xeno.now/", "_blank");
};

local.textContent = "Your Timezone: " + new Date().toString();

if (!localStorage.getItem("visited")) {
    localStorage.setItem("visited", "1");

    fetch("https://your-worker.workers.dev", {
        method: "POST"
    });
}