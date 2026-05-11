let currentTheme = "green";

function changeTheme() {
    let link = document.getElementById("theme-style");
    let btn = document.getElementById("themeBtn");

    if (currentTheme === "green") {
        link.href = "red.css";
        btn.style.background = "#8b2e2e";
        btn.style.color = "white";
        currentTheme = "red";
    } else {
        link.href = "green.css";
        btn.style.background = "#2e8b57";
        btn.style.color = "white";
        currentTheme = "green";
    }
}

function toggleProjects() {
    let projects = document.getElementById("projects");

    if (projects.style.display === "none") {
        projects.style.display = "block";
    } else {
        projects.style.display = "none";
    }
}



fetch('data.json')
    .then(response => response.json())
    .then(data => {

        const skillsList = document.getElementById("skillsList");
        data.skills.forEach(skill => {
            const li = document.createElement("li");
            li.textContent = skill;
            skillsList.appendChild(li);
        });

        const projectsList = document.getElementById("projectsList");
        if (!localStorage.getItem("projects")) {
        localStorage.setItem("projects", JSON.stringify(data.projects));
        };

    })
    .catch(error => console.error("Błąd JSON:", error));

document.addEventListener("DOMContentLoaded", loadProjects);

function loadProjects() {
    const projects = JSON.parse(localStorage.getItem("projects")) || [];
    const list = document.getElementById("projectsList");

    list.innerHTML = "";

    projects.forEach((project, index) => {
        const li = document.createElement("li");
        li.textContent = project;

        const btn = document.createElement("button");
        btn.textContent = "❌";
        btn.style.marginLeft = "10px";
        btn.onclick = () => deleteProject(index);

        li.appendChild(btn);
        list.appendChild(li);
    });
}

function addProject() {
    const input = document.getElementById("newProject");
    const value = input.value.trim();

    if (value === "") return;

    const projects = JSON.parse(localStorage.getItem("projects")) || [];

    projects.push(value);
    localStorage.setItem("projects", JSON.stringify(projects));

    input.value = "";
    loadProjects();
}

function deleteProject(index) {
    const projects = JSON.parse(localStorage.getItem("projects")) || [];

    projects.splice(index, 1);
    localStorage.setItem("projects", JSON.stringify(projects));

    loadProjects();
}