const fileSystem = [
    {
        name: "projects/work",
        type: "folder",
        children: [
            {
                name: "github account",
                type: "link",
                url: "https://github.com/cametized"
            },
            {
                name: "website source code",
                type: "link",
                url: "https://github.com/cametized/cametized.xyz"
            }
        ]
    }, // dude lowk the file system is so messy to look at probably when i add more stuff but i cannot be bothered 1 bit to clean it up 
    {  // and plus its easy to add things so like fuck off lowk :D
        name: "socials",
        type: "folder",
        children: [
            {
                name: "youtube channel",
                type: "link",
                url: "https://youtube.com/@cametized"
            },
            {
                name: "steam account",
                type: "link",
                url: "https://steamcommunity.com/id/Cametized"
            },
            
            {
                name: "less active stuff",
                type: "folder",
                children: [
                    {
                name: "twitter/x (barely active)",
                type: "link",
                url: "https://x.com/cametized"
            },
            {
                name: "bluesky (barely active)",
                type: "link",
                url: "https://bsky.app/profile/cametized.xyz"
            },
            {
                name: "roblox account (roblox been shitty, only play games instead of dev)",
                type: "link",
                url: "https://www.roblox.com/users/7554529574/profile"
            },
                ]
            }
        ]

        
    },
    {
        name: "friends",
        type: "link",
        url: "../directories.html"
    },
    {
        name: "the peak inc. (discord)",
        type: "link",
        url: "https://discord.gg/X8PT8eU3RP"
    }
];

const fileView = document.getElementById("fileView");

function createItem(item) { // god i hate my life i love js
    if (item.type === "folder") {
        const container = document.createElement("div");

        const folderHeader = document.createElement("div");
        folderHeader.className = "item folder";
        folderHeader.innerHTML = '<img src="../images/icons/folder24.png">' + item.name;

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
        link.innerHTML = '<img src="../images/icons/link24agai.png">' + item.name; // i did it -- present cam
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

function loadTheme() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        buttonIdk.textContent = "☀";
    } else {
        buttonIdk.textContent = "☽";
    }
}

buttonIdk.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        buttonIdk.textContent = "☀";
    } else {
        localStorage.setItem("theme", "light");
        buttonIdk.textContent = "☽";
    }
});

loadTheme();
