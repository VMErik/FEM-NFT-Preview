const img = document.getElementById("card-image");
const eye = document.getElementById("preview");
img.onmouseover = function() {
    eye.style.display = 'flex';
};
img.onmouseleave = function() {
    eye.style.display = 'none';
}