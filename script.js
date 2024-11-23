// Toggle dark mode
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Tab switching function
function openTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = 'none';
    });
    document.getElementById(tabName).style.display = 'block';
}

// Thumbnail search function
function searchThumbnails() {
    const searchTerm = document.getElementById("thumbnail-search").value.toLowerCase();
    document.querySelectorAll(".thumbnail-item").forEach(item => {
        const title = item.getAttribute("data-title").toLowerCase();
        item.style.display = title.includes(searchTerm) ? "inline-block" : "none";
    });
}

// Image download function
function downloadImage(url) {
    const a = document.createElement("a");
    a.href = url;
    a.download = url.split('/').pop();
    a.click();
}
