
const buttons = document.querySelectorAll("li button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");
    })
});


function displayAboutMe() {
    var text = document.getElementById("terminal-text")
    text.innerHTML = `
    <p>ja1melesfilles@portfolio:~$ cat readme.txt</p>
    <p>~ Working with newest frameworks & technology to satisfy successful project's requirements day to day is not just work for me,<br>it is a lifestyle and passion to me</p>
    <p>~ I am a student at Glasgow Caledonian University and enthusiast in Cybersecurity & Networks with specialized knowledge in scripting and coding</p>
    <p>~ I have opened my passion when I was 9 years old, that is when I made my first website using technologies like HTML, CSS and JS.</p>
    <p>~ That is also when I first realised how important Cybersecurity is. My website got hacked by people that done it to destroy it for their entertainment.</p>
    <p>~ Even though I was just unlucky for these people to encounter my website,<br> in real world, real hackers, do it to get profit out of it, and get money while doing damage to enterprise.</p>
    <p class="prompt">ja1melesfilles@portfolio:~$ <span class="cursor"></span></p>
    `;
}


function displaySkills() {
    var text = document.getElementById("terminal-text")
    text.innerHTML = `
    <p>ja1melesfilles@portfolio:~$ sqlite3 ja1melesfilles.db</p>
    <p>SQLite version 3.46.0 2024-05-28 12:00:00</p>
    <p>Enter ".help" for usage hints.</p>
    <p>sqlite> SELECT * FROM skills</p>
    <table style="width:100%; text-align:center">
        <tr>
            <th>Coding</th>
            <th>Cybersecurity</th>
            <th>Web3</th>
        </tr>
        <tr>
            <td>Python</td>
            <td>Linux Terminal</td>
            <td>TON Blockchain Dev</td>
        </tr>
        <tr>
            <td>JavaScript</td>
            <td>Ethical Web Hacking</td>
            <td>SOL Blockchain Dev</td>
        </tr>
        <tr>
            <td>HTML, CSS</td>
            <td>Reverse Engineering</td>
            <td>4+ years of Experience in Web3</td>
        </tr>
    </table>
    <p class="prompt">sqlite> <span class="cursor"></span></p>
    `;
}

function displayContacts() {
    var text = document.getElementById("terminal-text")
    text.innerHTML = `
    <p>ja1melesfilles@portfolio:~$ curl -s https://api.ja1melesfilles.dev/contacts</p>
    <p>{</p>
    <p>  "professional": {</p>
    <p>    "email": "<a href="mailto:mykbar2580@gmail.com" style="color: #00ff66; text-decoration: underline;">mykbar2580@gmail.com</a>",</p>
    <p>    "github": "<a href="https://github.com/stopbe1nglame" style="color: #00ff66; text-decoration: underline;">github.com/stopbe1nglame</a>",</p>
    <p>    "linkedin": "<a href="https://www.linkedin.com/in/mykyta-barbakar-28a160384" style="color: #00ff66; text-decoration: underline;">linkedin.com/in/mykyta-barbakar-28a160384</a>"</p>
    <p>  },</p>
    <p>  "crypto": {</p>
    <p>    "telegram": "<a href="https://t.me/jmlsflss" style="color: #00ff66; text-decoration: underline;">@jmlsflss</a>",</p>
    <p>    "discord": "mxneydxll"</p>
    <p>  }</p>
    <p>}</p>
    <p class="prompt">ja1melesfilles@portfolio:~$ <span class="cursor"></span></p>
    `;
}