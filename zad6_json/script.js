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

document.getElementById("contactForm").addEventListener("submit", function(e) {

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let surname = document.getElementById("surname").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let valid = true;

    document.getElementById("nameError").textContent = "";
    document.getElementById("surnameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    if (name === "") {
        document.getElementById("nameError").textContent = "Podaj imię";
        valid = false;
    } else if (/\d/.test(name)) {
        document.getElementById("nameError").textContent = "Imię nie może zawierać cyfr";
        valid = false;
    }

    if (surname === "") {
        document.getElementById("surnameError").textContent = "Podaj nazwisko";
        valid = false;
    } else if (/\d/.test(surname)) {
        document.getElementById("surnameError").textContent = "Nazwisko nie może zawierać cyfr";
        valid = false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        document.getElementById("emailError").textContent = "Podaj email";
        valid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Niepoprawny email";
        valid = false;
    }

    if (message === "") {
        document.getElementById("messageError").textContent = "Wpisz wiadomość";
        valid = false;
    }

    if (valid) {
        alert("Formularz wysłany poprawnie!");
    }

});

fetch('data.json')
    .then(response => response.json())
    .then(data => {

        // Skills
        const skillsList = document.getElementById("skillsList");
        data.skills.forEach(skill => {
            const li = document.createElement("li");
            li.textContent = skill;
            skillsList.appendChild(li);
        });

        // Projects
        const projectsList = document.getElementById("projectsList");
        data.projects.forEach(project => {
            const li = document.createElement("li");
            li.textContent = project;
            projectsList.appendChild(li);
        });

    })
    .catch(error => console.error("Błąd JSON:", error));

