async function fetchJSONItems (name) {
    const items = await fetch(`js/data/${name}.json`)
    .then(response => response.json())
    .then(json => json.items)
    return items;
}

async function showContact() {
    const name = "contact";
    const items = await fetchJSONItems(name);
    const list_ul = document.getElementById(`${name}_list`);
    items.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
            <div class="contact_card">
                <a href=${item.url}>${item.name}</a> 
            </div>
        `;
        list_ul.appendChild(li);
    });
}

async function showCareer() {
    const name = "career";
    const items = await fetchJSONItems(name);
    const list_ul = document.getElementById(`${name}_list`);
    items.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
            <div class="career_card">
                <p>${item.name}</p>
                <p>${item.agency}</p>
                <p>${item.date}</p>
                <p>${item.work}</p>
                <p>${item.keyword}</p>
            </div>
        `;
        list_ul.appendChild(li);
    });
}

async function showProject() {
    const name = "project";
    const items = await fetchJSONItems(name);
    const list_ul = document.getElementById(`${name}_list`);
    items.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
            <div class="project_card">
                <h3>${item.name}</h3>
                <p>${item.summary}</p>
                <div id="img_box">
                    <img src=${item.thumbnail} alt=${item.name}>
                </div>
                <ul>
                    <br>
                    <li id="${name}_date">⏰${item.date}</li>
                    <li id="${name}_scale">🗣️ ${item.scale}</li>
                    <li id="${name}_role">👩‍💻 ${item.role}</li>
                    <li id="${name}_keyword">🧩 ${item.keyword}</li>
                    <li id="${name}_work">🧾 ${item.work}</li>
                    <li id="${name}_result">🎖️ ${item.result}</li>
                    <a id="${name}_url" href = ${item.url}>🔗 ${item.url}</a>
                </ul>
            </div>
        `;
        list_ul.appendChild(li);
    });
}

async function showAward() {
    const name = "award";
    const items = await fetchJSONItems(name);
    const list_ul = document.getElementById(`${name}_list`);
    items.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
            <div class="award_card">
                <h3>${item.name}</h3>
                <p>${item.award}</p>
                <p>${item.date}</p>
                <p>${item.agency}</p>
            </div>
        `;
        list_ul.appendChild(li);
    });
}

async function showActivity() {
    const name = "activity";
    const items = await fetchJSONItems(name);
    const list_ul = document.getElementById(`${name}_list`);
    items.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
            <div class="activity_card">
                <h3>${item.name}</h3>
                <p>${item.agency}</p>
                <p>${item.date}</p>
                <p>${item.work}</p>
                <p>${item.keyword}</p>
            </div>
        `;
        list_ul.appendChild(li);
    });
}

async function showCertificate() {
    const name = "certificate";
    const items = await fetchJSONItems(name);
    const list_ul = document.getElementById(`${name}_list`);
    items.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
            <div class="certificate_card">
                <h3>${item.name}</h3>
                <p>${item.date}</p>
                <p>${item.agency}</p>
            </div>
        `;
        list_ul.appendChild(li);
    });
}

async function showEducation() {
    const name = "education";
    const items = await fetchJSONItems(name);
    const list_ul = document.getElementById(`${name}_list`);
    items.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
            <div class="education_card">
                <h3>${item.name}</h3>
                <p>${item.date}</p>
                <p>${item.major}</p>
            </div>
        `;
        list_ul.appendChild(li);
    });
}


async function show(){
    showContact();
    showCareer();
    showProject();
    showAward();
    showActivity();
    showCertificate();
    showEducation();
}

show();