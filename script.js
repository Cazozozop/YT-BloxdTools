// Activer/désactiver le mode sombre
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.querySelectorAll("header, nav").forEach(elem => {
        elem.classList.toggle("dark-mode");
    });
});

// Changer d'onglet
function openTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = 'none';
    });
    document.getElementById(tabName).style.display = 'block';
}

// Recherche d'images dans l'onglet "Thumbnail"
function searchThumbnails() {
    const searchTerm = document.getElementById("thumbnail-search").value.toLowerCase();
    document.querySelectorAll(".thumbnail-item").forEach(item => {
        const title = item.getAttribute("data-title").toLowerCase();
        item.style.display = title.includes(searchTerm) ? "inline-block" : "none";
    });
}

// Téléchargement d'image
function downloadImage(url) {
    const a = document.createElement("a");
    a.href = url;
    a.download = url.split('/').pop();
    a.click();
}
