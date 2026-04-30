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
