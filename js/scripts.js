const light = document.querySelector(".light");
const hexGrid = document.querySelector("#hex-grid");

hexGrid.addEventListener("mousemove", function(e) {
    light.style.left = `${e.clientX}px`;
    light.style.top = `${e.clientY}px`;
    light.style.blur = `20px`;
    light.style.height = `15em`;
    light.style.width = `15em`;
});

hexGrid.addEventListener("click", function(e) {
    light.style.blur = `0px`;
    light.style.background = `linear-gradient(90deg, #3336f4 0%, #2ae9c9 100%)`;
    light.style.height = `27em`;
    light.style.width = `27em`;
});