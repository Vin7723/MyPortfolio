fetch('./data.json')
    .then(response => response.json())
    .then(data => {

        document.getElementById("name").textContent =
            data.personal.name;

        document.getElementById("title").textContent =
            data.personal.title;

        document.getElementById("summary").textContent =
            data.personal.summary;

        document.getElementById("linkedin").href =
            data.personal.linkedin;

        document.getElementById("github").href =
            data.personal.github;

        // EDUCATION

        const educationContainer =
            document.getElementById("educationContainer");

        data.education.forEach(item => {

            educationContainer.innerHTML += `
                <div class="card">
                    <h3>${item.degree}</h3>
                    <p>${item.field || ""}</p>
                    <p>${item.institution || ""}</p>
                    <p>${item.score || ""}</p>
                    <p>${item.duration || ""}</p>
                </div>
            `;
        });

        // TECHNICAL SKILLS

        const skillContainer =
            document.getElementById("technicalSkillsContainer");

        for (let category in data.technicalSkills) {

            let skills =
                data.technicalSkills[category]
                    .map(skill => `<li>${skill}</li>`)
                    .join("");

            skillContainer.innerHTML += `
                <div class="skill-category">
                    <h3>${category}</h3>
                    <ul>${skills}</ul>
                </div>
            `;
        }

        // INTERPERSONAL

        const interpersonal =
            document.getElementById("interpersonalContainer");

        data.interpersonalSkills.forEach(skill => {

            interpersonal.innerHTML += `
                <span class="badge">${skill}</span>
            `;
        });

        // EXPERIENCE

        const experience =
            document.getElementById("experienceContainer");

        data.experience.forEach(exp => {

            let responsibilities =
                exp.responsibilities
                    .map(item => `<li>${item}</li>`)
                    .join("");

            experience.innerHTML += `
                <div class="card">
                    <h3>${exp.position}</h3>
                    <h4>${exp.company}</h4>
                    <p>${exp.duration}</p>
                    <ul>${responsibilities}</ul>
                </div>
            `;
        });

        // PROJECTS

        const projects =
            document.getElementById("projectsContainer");

        data.projects.forEach(project => {

            let tech =
                project.technologies.join(", ");

            let desc =
                project.description
                    .map(item => `<li>${item}</li>`)
                    .join("");

            projects.innerHTML += `
                <div class="card">
                    <h3>${project.title}</h3>
                    <p><strong>Technologies:</strong> ${tech}</p>
                    <ul>${desc}</ul>
                    <a target="_blank" href="${project.link}">Click Here</a>
                </div>
            `;
        });

        // LANGUAGES

        const languages =
            document.getElementById("languagesContainer");

        data.languages.forEach(language => {

            languages.innerHTML += `
                <span class="badge">${language}</span>
            `;
        });

    })
    .catch(error => {
        console.error(error);
    });