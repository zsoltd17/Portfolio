const light = document.querySelector(".light");
const hexGrid = document.querySelector("#hex-grid");

hexGrid.addEventListener("mousemove", function (e) {
    light.style.left = `${e.clientX}px`;
    light.style.top = `${e.clientY}px`;
});
