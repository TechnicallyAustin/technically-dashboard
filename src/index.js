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
                const icon = searchBox.appendChild(document.createElement("img"));
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
                const container = welcome.appendChild(document.createElement("div"));
                container.setAttribute("class", "welcome-icon-background")
                const icon = container.appendChild(document.createElement("img"));
                icon.setAttribute("class", "welcome-icon")  
                icon.setAttribute("src", "assets/brain.svg");            
                icon.setAttribute("alt", "welcome profile icon")       
            }; icon()

            function message(){
                const container = welcome.appendChild(document.createElement("div"));
                container.setAttribute("class", "welcome-message")
                const message = container.appendChild(document.createElement("p"));
                message.setAttribute("class", "message-text")
                message.textContent = "Hi there,"

                const subText = container.appendChild(document.createElement("h2"))
                subText.setAttribute("class", "welcome-name")
                subText.textContent = "Austin Johnson (@TechnicallyAJ)"
            }; message()
        }; welcome()

        function profile(){
            const profile = header.appendChild(document.createElement("div"));
            profile.setAttribute("class", "profile-header");

            function notifications(){
                const notification = profile.appendChild(document.createElement("img"));
                notification.setAttribute("class", "notify-icon")
                notification.setAttribute("src", "assets_v2/notify.svg");
                notification.setAttribute("alt", "notifications icon");
            }; notifications()

            function icon(){
                const container = profile.appendChild(document.createElement("div"));
                container.setAttribute("class", "profile-icon-bg")
                const icon = container.appendChild(document.createElement("img"));
                icon.setAttribute("class", "profile-container-icon")
                icon.setAttribute("src", "assets/brain.svg");
                icon.setAttribute("alt", "profile icon image");
            }; icon()

            function name(){
                const name = profile.appendChild(document.createElement("h3"));
                name.setAttribute("class", "profile-name");
                name.textContent = "Austin Johnson"
            }; name()
        }; profile()

        function buttons(){
            const buttonsArray = ["New","Upload","Share"]
            const container = header.appendChild(document.createElement("div"));
            container.setAttribute("class", "buttons")

            for (let i = 0; i < buttonsArray.length; i++){
                let button = buttonsArray[i]
                console.log(button)
                let newButton = container.appendChild(document.createElement("button"));
                newButton.setAttribute("class", `${button.toLowerCase()} profile-button`)
                newButton.setAttribute("type", "")
                newButton.setAttribute("value", `${button}`)
                newButton.textContent = button
            }
        }; buttons()

    }; header()

    function main(){
        const main = dash.appendChild(document.createElement("main"));
        main.setAttribute("class", "main");

        function projects(){
            const projects = main.appendChild(document.createElement("div"));
            projects.setAttribute("class", "projects");

            const title = projects.appendChild(document.createElement("h2"));
            title.setAttribute("class", "project-section-title")
            title.textContent = "Your Projects"
            
            const projectsArray = [
              "Project-one",
              "Project-two",
              "Project-three",
              "Project-four",
              "Project-five",
              "Project-six",
            ];

            for (let i = 0; i < projectsArray.length; i ++){
                let project = projectsArray[i]
                console.log(project)

                let card = projects.appendChild(document.createElement("div"))
                card.setAttribute("class", `${project.toLowerCase()} project-card`)

                let title = card.appendChild(document.createElement("h3"));
                title.setAttribute("class", "project-title")
                title.textContent = `${project}`

                let description = card.appendChild(document.createElement("p"))
                description.setAttribute("class", "project-description");
                description.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"

                let share = card.appendChild(document.createElement("div"))
                share.setAttribute("class", "project-share")

                let star = share.appendChild(document.createElement("img"));
                star.setAttribute("class", "")
                star.setAttribute("src", "");
                star.setAttribute("alt", "");
                let eye = share.appendChild(document.createElement("img"));
                eye.setAttribute("class", "");
                eye.setAttribute("src", "");
                eye.setAttribute("alt", "");
                let network = share.appendChild(document.createElement("img"));
                eye.setAttribute("class", "");
                eye.setAttribute("src", "");
                eye.setAttribute("alt", "");
            }
        }; projects()

        function panel(){
            const panel = main.appendChild(document.createElement("div"));
            panel.setAttribute("class", "panel")

            function announcements(){
                const announcements = panel.appendChild(document.createElement("div"));
                announcements.setAttribute("class", "announcements");

                function title(){  
                    const title = announcements.appendChild(document.createElement("h3"));
                    title.setAttribute("class", "announcement-title");
                    title.textContent = "Announcements"
                }; title()

                  function post() {
                    const postArray = ["First", "Second", "Third"];
                    for (let i = 0; i < postArray.length; i++){
                        let post = postArray[i]
                        let item = announcements.appendChild(document.createElement("h4"));
                        item.setAttribute("class", `${post.toLowerCase()}`)
                        item.textContent = post
                    }
                  }; post()

            }; announcements()

            function trending(){
                const trending = panel.appendChild(document.createElement("div"));
                trending.setAttribute("class", "trending");

                function title(){
                    const title = trending.appendChild(document.createElement("h3"));
                    title.setAttribute("class", "trending-title");
                    title.textContent = "Trending"
                }; title()




            }; trending()
        }; panel()   

    }; main()
}; dash()