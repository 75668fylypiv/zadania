let currentTheme = "green";

function changeTheme() {
    let link = document.querySelector("link");

    if (currentTheme === "green") {
        link.href = "red.css";
        currentTheme = "red";
    } else {
        link.href = "green.css";
        currentTheme = "green";
    }
}

function toggleProjects() {
    let sections = document.querySelectorAll("section");
    let projects = sections[sections.length - 1];

    if (projects.style.display === "none") {
        projects.style.display = "block";
    } else {
        projects.style.display = "none";
    }
}