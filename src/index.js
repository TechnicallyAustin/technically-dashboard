function dash(){
    const dash = document.querySelector("body");
    function side(){
        const side = dash.appendChild(document.createElement("div"))
        side.setAttribute("class", "side")

        function logo(){
            const logo = side.appendChild(document.createElement("img"))
            logo.setAttribute("class", "logo")
            logo.setAttribute("src", "assets_v2/logo.svg");
            logo.setAttribute("alt", "dashboard logo")

            const title = side.appendChild(document.createElement("h1"));
            title.setAttribute("class", "logo-title");
            title.textContent = "Technically Dashboard"
        }; logo()

        function menu(){
            const menuArray = [
            "Home","Profile","Messages",
            "History","Tasks","Communities",
            "Settings","Support","Privacy"]

            const iconArray = [
              "assets_v2/home.svg",
              "assets_v2/profile.svg",
              "assets_v2/messages.svg",
              "assets_v2/history.svg",
              "assets_v2/tasks.svg",
              "assets_v2/groups.svg",
              "assets_v2/settings.svg",
              "assets_v2/help.svg",
              "assets_v2/privacy.svg",
            ];

            for (let i = 0 ; i < menuArray.length; i++){
                let menu = menuArray[i];
                let icon = iconArray[i];

                let item = side.appendChild(document.createElement("h3"));
                item.setAttribute("class", `menu-items ${menu.toLowerCase()}`);
                item.textContent = menu;
    
                let image = side.appendChild(document.createElement("img"));
                image.setAttribute("class", `menu-icons ${menu.toLowerCase()}-icon`)
                image.setAttribute("src", `${icon}`)
                image.setAttribute("alt", `image for the ${menu} menu item`)

                }; 
        }; menu()

    }; side()

    function header(){
        const header = dash.appendChild(document.createElement("header"))
        header.setAttribute("class", "header");

        function search(){
            const searchBox = header.appendChild(document.createElement("div"))
            searchBox.setAttribute("class", "search")

            function icon(){
                const icon = header.appendChild(document.createElement("img"));
                icon.setAttribute("class", "search-icon")  
                icon.setAttribute("src", "assets_v2/search.svg");            
                icon.setAttribute("alt", "search bar icon")            
            }; icon()

            function input(){
                const input = searchBox.appendChild(document.createElement("input"));
                input.setAttribute("type","text")
                input.setAttribute("class", "search-input")
            }; input()

        }; search()

        function welcome(){
            const welcome = header.appendChild(document.createElement("div"));
            welcome.setAttribute("class", "welcome");

            function icon(){
                const container = header.appendChild(document.createElement("div"));
                container.setAttribute("class", "profile-background")
                const icon = container.appendChild(document.createElement("img"));
                icon.setAttribute("class", "welcome-icon")  
                icon.setAttribute("src", "assets/brain.svg");            
                icon.setAttribute("alt", "welcome profile icon")       
            }; icon()
            function message(){
                const message = welcome.appendChild(document.createElement("p"));
                message.setAttribute("class", "message-text")
                message.textContent = "Hi there, "

                const subText = welcome.appendChild(document.createElement("h2"))
                subText.setAttribute("class", "welcome-name")
                subText.textContent = "Austin Johnson (@TechnicallyAJ)"
            }; message()
        }; welcome()

        function profile(){
            function notifications(){};
            function icon(){};
            function name(){};
        };

        function buttons(){
            function add(){};
            function upload(){};
            function share(){};
        };

    }; header()

    function main(){
        const main = dash.appendChild(document.createElement("main"));
        main.setAttribute("class", "main");
        function projects(){};
        function announcements(){};
        function trending(){};
    }; main()
}; dash()