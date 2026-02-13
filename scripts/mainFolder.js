const fileSystem = [
    {
        name: "projects :)",
        type: "folder",
        children: [
            {
                name: "github",
                type: "link",
                url: "https://github.com/cametized"
            }
        ]
    }, // dude lowk the file system is so messy to look at probably when i add more stuff but i cannot be bothered 1 bit to clean it up 
    {  // and plus its easy to add things so like fuck off lowk :D
        name: "erm my socialers",
        type: "folder",
        children: [
            {
                name: "YouTube",
                type: "link",
                url: "https://youtube.com/@cametized"
            }
        ]
    }
];

const fileView = document.getElementById("fileView");

function createItem(item) { // god i hate my life i love js
    if (item.type === "folder") {
        const container = document.createElement("div");

        const folderHeader = document.createElement("div");
        folderHeader.className = "item folder";
        folderHeader.innerHTML = "📁 " + item.name;

        const childrenContainer = document.createElement("div");
        childrenContainer.className = "children";

        item.children.forEach(child => {
            childrenContainer.appendChild(createItem(child));
        });

        folderHeader.addEventListener("click", () => {
            childrenContainer.classList.toggle("open");
            folderHeader.classList.toggle("open");
        });

        container.appendChild(folderHeader);
        container.appendChild(childrenContainer);

        return container;
    }

    if (item.type === "link") {
        const link = document.createElement("a");
        link.href = item.url;
        link.target = "_blank";
        link.className = "item link";
        link.innerHTML = "🔗 " + item.name;
        return link;
    }
}

function render() {
    fileView.innerHTML = "";
    fileSystem.forEach(item => {
        fileView.appendChild(createItem(item));
    });
}

render();

const buttonIdk = document.getElementById("themeToggle");

buttonIdk.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        buttonIdk.textContent = "☀ light mode";
    } else { // LOOOLLL lowerecase!!!! ahheheaheahahehehehehehee :3
        buttonIdk.textContent = "🌙 dark mode";
    }
});
