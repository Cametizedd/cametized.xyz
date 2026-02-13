const fileSystem = [
    {
        name: "projects/work",
        type: "folder",
        children: [
            {
                name: "github.com account",
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
                name: "roblox account | i know, bad idea to link this in 2026 lo",
                type: "link",
                url: "https://www.roblox.com/users/7554529574/profile"
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
            }
                ]
            }
        ]

        
    },
    {
        name: "friends",
        type: "link",
        url: "https://cametized.xyz/directories"
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
        link.innerHTML = "🔗 " + item.name; // please replace with an image i beg lo, same for folder --past cam
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
