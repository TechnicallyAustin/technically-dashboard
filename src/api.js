function dashBoard(){
    const dash = document.body.appendChild(document.createElement("div"))
    dash.setAttribute("class", "dash")
    function sidebar(){
        const sidebar = dash.appendChild(document.createElement("div"))
        sidebar.setAttribute("class", "container side-bar")

        function logo(){
            const logo = sidebar.appendChild(document.createElement("div"));
            logo.setAttribute("class", "side-bar-item logo-container" )

            function logoIcon(){
                const iconContainer = logo.appendChild(document.createElement("div"));
                iconContainer.setAttribute("class", "icon-container")
                const icon = iconContainer.appendChild(document.createElement("img"));
                icon.setAttribute("src", "./assets/laptop.svg");
                icon.setAttribute("alt", "dashboard logo")
                icon.setAttribute("class", " logo-item logo-icon")
            }; logoIcon()

            function logoText(){
                const textContainer = logo.appendChild(document.createElement("div"));
                textContainer.setAttribute("class", "logo-item logo-text-container")


                const text = textContainer.appendChild(document.createElement("h2"));
                text.setAttribute("class", "logo-text-item logo-text")
                text.textContent = "Technically Dashboard"
            }; logoText()

        }; logo()
          
        function menu(){
            const menu = sidebar.appendChild(document.createElement("div"));
            menu.setAttribute("class", "side-bar-item menu-container");

            function home(){
                const home = menu.appendChild(document.createElement("div"));
                home.setAttribute("class", "menu-item home-container");

                function homeIcon(){
                    const iconContainer = home.appendChild(document.createElement("div"))
                    iconContainer.setAttribute("class", "icon-container");
                    const icon = iconContainer.appendChild(document.createElement("img"))
                    icon.setAttribute("src", "./assets/home.svg");
                    icon.setAttribute("alt", "menu-logo")
                    icon.setAttribute("class", "menu-icon")
                }; homeIcon()

                function homeText(){
                    const textContainer = home.appendChild(document.createElement("div"));
                    textContainer.setAttribute("class", "text-container");

                    const text = textContainer.appendChild(document.createElement("h3"));
                    text.setAttribute("class"," menu-text")
                    text.textContent = "Home"
                }; homeText()

            }; home(

            )
            function profile(){
                const profile = menu.appendChild(document.createElement("div"));
                profile.setAttribute("class", "menu-item profile-container");

                function profileIcon(){
                    const iconContainer = profile.appendChild(document.createElement("div"));
                    iconContainer.setAttribute("class", "icon-container");
                    const icon = iconContainer.appendChild(document.createElement("img"));
                    icon.setAttribute("src", "./assets/profile.svg");
                    icon.setAttribute("alt", "menu-logo");
                    icon.setAttribute("class", "menu-icon");
                }; profileIcon()

                function profileText(){
                    const textContainer = profile.appendChild(document.createElement("div"));
                    textContainer.setAttribute("class", "text-container");

                    const text = textContainer.appendChild(document.createElement("h3"));
                    text.setAttribute("class"," menu-text")
                    text.textContent = "Profile"

                }; profileText()


            }; profile()

            function messages(){
                const messages = menu.appendChild(document.createElement("div"));
                messages.setAttribute("class", "menu-item messages-container");

                function messagesIcon(){
                    const iconContainer = messages.appendChild(document.createElement("div"));
                    iconContainer.setAttribute("class", "icon-container");
                    const icon = iconContainer.appendChild(document.createElement("img"))
                    icon.setAttribute("src", "./assets/message.svg");
                    icon.setAttribute("alt", "menu-logo")
                    icon.setAttribute("class", "menu-icon")
                }; messagesIcon()

                function messagesText(){
                    const textContainer = messages.appendChild(document.createElement("div"));
                    textContainer.setAttribute("class", "text-container");

                    const text = textContainer.appendChild(document.createElement("h3"));
                    text.setAttribute("class"," menu-text")
                    text.textContent = "Messages"
                }; messagesText()

            }; messages()

            function history(){
                const history = menu.appendChild(document.createElement("div"));
                history.setAttribute("class", "menu-item history-container");

                function historyIcon(){
                    const iconContainer = history.appendChild(document.createElement("div"))
                    iconContainer.setAttribute("class", "icon-container");
                    const icon = iconContainer.appendChild(document.createElement("img"))
                    icon.setAttribute("src", "./assets/history.svg");
                    icon.setAttribute("alt", "menu-logo")
                    icon.setAttribute("class", "menu-icon")
                }; historyIcon()

                function historyText(){
                    const textContainer = history.appendChild(document.createElement("div"));
                    textContainer.setAttribute("class", "text-container");

                    const text = textContainer.appendChild(document.createElement("h3"));
                    text.setAttribute("class"," menu-text")
                    text.textContent = "History"
                }; historyText()

            }; history()

            function tasks(){
                const tasks = menu.appendChild(document.createElement("div"));
                tasks.setAttribute("class", "menu-item tasks-container");

                function tasksIcon(){
                    const iconContainer = tasks.appendChild(document.createElement("div"))
                    iconContainer.setAttribute("class", "icon-container");
                    const icon = iconContainer.appendChild(document.createElement("img"))
                    icon.setAttribute("src", "./assets/tasks.svg");
                    icon.setAttribute("alt", "menu-logo")
                    icon.setAttribute("class", "menu-icon")
                }; tasksIcon()

                function tasksText(){

                    const textContainer = tasks.appendChild(document.createElement("div"));
                    textContainer.setAttribute("class", "text-container");

                    const text = textContainer.appendChild(document.createElement("h3"));
                    text.setAttribute("class"," menu-text")
                    text.textContent = "Tasks"
                }; tasksText()

            }; tasks()

              function communities() {
                const community = menu.appendChild(document.createElement("div"));
                community.setAttribute("class", "menu-item community-container")
                
                function communityIcon(){
                    const iconContainer = community.appendChild(document.createElement("div"))
                    iconContainer.setAttribute("class", "icon-container");
                    const icon = iconContainer.appendChild(document.createElement("img"))
                    icon.setAttribute("src", "./assets/community.svg");
                    icon.setAttribute("alt", "menu-logo")
                    icon.setAttribute("class", "menu-icon")
                }; communityIcon()

                function communityText(){
                    const textContainer = community.appendChild(document.createElement("div"));
                    textContainer.setAttribute("class", "text-container");

                    const text = textContainer.appendChild(document.createElement("h3"));
                    text.setAttribute("class", "menu-text");
                    text.textContent = "Communities"
                }; communityText()
              }; communities()

        }; menu()

        function options(){
            const options = sidebar.appendChild(document.createElement("div"));
            options.setAttribute("class", "side-bar-item options-container");

            function settings(){
                const settings = options.appendChild(document.createElement("div"));
                settings.setAttribute("class", "menu-item settings-container")

                 function settingIcon(){
                    const iconContainer = settings.appendChild(document.createElement("div"))
                    iconContainer.setAttribute("class", "icon-container");
                    const icon = iconContainer.appendChild(document.createElement("img"))
                    icon.setAttribute("src", "./assets/settings.svg");
                    icon.setAttribute("alt", "menu-logo")
                    icon.setAttribute("class", "menu-icon")
                }; settingIcon()

                function settingText(){

                    const textContainer = settings.appendChild(document.createElement("div"));
                    textContainer.setAttribute("class", "text-container");

                    const text = textContainer.appendChild(document.createElement("h3"));
                    text.setAttribute("class", "menu-text");
                    text.textContent = "Settings"
                }; settingText()


            }; settings()

            function support(){
                const support = options.appendChild(document.createElement("div"));
                support.setAttribute("class", "menu-item  support-container");

                 function supportIcon(){
                    const iconContainer = support.appendChild(document.createElement("div"))
                    iconContainer.setAttribute("class", "icon-container");
                    const icon = iconContainer.appendChild(document.createElement("img"))
                    icon.setAttribute("src", "./assets/support 2.svg");
                    icon.setAttribute("alt", "menu-logo")
                    icon.setAttribute("class", "menu-icon")
                }; supportIcon()

                function supportText(){
                    const textContainer = support.appendChild(document.createElement("div"));
                    textContainer.setAttribute("class", "text-container");

                    const text = textContainer.appendChild(document.createElement("h3"));
                    text.setAttribute("class", "menu-text");
                    text.textContent = "Support"
                }; supportText()

            }; support()

            function privacy(){
                const privacy = options.appendChild(document.createElement("div"));
                privacy.setAttribute("class", "menu-item  privacy-container");
                
                 function privacyIcon(){
                    const iconContainer = privacy.appendChild(document.createElement("div"))
                    iconContainer.setAttribute("class", "icon-container");
                    const icon = iconContainer.appendChild(document.createElement("img"))
                    icon.setAttribute("src", "./assets/account-lock.svg");
                    icon.setAttribute("alt", "menu-logo")
                    icon.setAttribute("class", "menu-icon")
                }; privacyIcon()

                function privacyText(){
                    const textContainer = privacy.appendChild(document.createElement("div"));
                    textContainer.setAttribute("class", "text-container");

                    const text = textContainer.appendChild(document.createElement("h3"));
                    text.setAttribute("class", "menu-text");
                    text.textContent = "Privacy"
                }; privacyText()

            }; privacy()
        }; options()

    }; sidebar()

    function header(){
        const header = dash.appendChild(document.createElement("div"));
        header.setAttribute("class", "container header");

        function searchSection(){
            const searchSection = header.appendChild(document.createElement("div"));
            searchSection.setAttribute("class", "search-section")

              function searchIcon() {
                //const iconContainer = searchSection.appendChild(document.createElement("div"));
                //iconContainer.setAttribute("class", "menu-icon container");
                const icon = searchSection.appendChild(document.createElement("img"));
                icon.setAttribute("class", "search-icon menu-icon")
                icon.setAttribute("src", "./assets/search.svg")
                icon.setAttribute("alt", "search bar icon")
              }; searchIcon()

              function searchBar() {
                const searchBarContainer = searchSection.appendChild(document.createElement("div"));
                searchBarContainer.setAttribute("class", "search-bar-container");
                const searchBar = searchBarContainer.appendChild(document.createElement("input"));
                searchBar.setAttribute("type", "text");
                searchBar.setAttribute("class", "search-input")
            }; searchBar()
        }; searchSection()
            
        

        function profileSettings(){
            const profileSettings = header.appendChild(document.createElement("div"));
            profileSettings.setAttribute("class", "header-profile");

            function notifications(){
                const notifications = profileSettings.appendChild(document.createElement("img"))
                notifications.setAttribute("class", "profile-notify-icon")
                notifications.setAttribute("src", "./assets/bell-ring.svg")
                notifications.setAttribute("alt", "profile notifications icon")

            }; notifications()

            function profileIcon(){
                const iconContainer = profileSettings.appendChild(document.createElement("div"));
                iconContainer.setAttribute("class", "profile-icon-container")
                const icon = iconContainer.appendChild(document.createElement("img"));
                icon.setAttribute("class","profile-icon");
                icon.setAttribute("src","./assets/brain.svg")
                icon.setAttribute("alt", "profile image of a brain")
            }; profileIcon()

            function profileName(){
                const profileNameContainer = profileSettings.appendChild(document.createElement("h3"));
                profileNameContainer.setAttribute("class", "profile-name-container");
                const profile = profileNameContainer.appendChild(document.createElement("h3"));
                profile.setAttribute("class", "profile-name")
                profile.textContent = "Austin Johnson"
            };profileName()
        }; profileSettings()

        function welcome(){
            const welcome = header.appendChild(document.createElement("div"));
            welcome.setAttribute("class", "welcome-container");

            function welcomeIcon(){
                const iconContainer = welcome.appendChild(document.createElement("div"));
                iconContainer.setAttribute("class", "welcome-icon-container")
                const icon = iconContainer.appendChild(document.createElement("img"));
                icon.setAttribute("class","welcome-icon");
                icon.setAttribute("src","./assets/brain.svg")
                icon.setAttribute("alt", "profile image of a brain")
            }; welcomeIcon()

            function welcomeMessage(){
                const messageContainer = welcome.appendChild(document.createElement("div"));
                messageContainer.setAttribute("class", "welcome-message");
                const message = messageContainer.appendChild(document.createElement("p"));
                message.setAttribute("class", "message-text");
                message.textContent = "Hi there,"

                const profile = messageContainer.appendChild(document.createElement("h3"));
                profile.setAttribute("class", "welcome-profile")
                profile.textContent = "Austin Johnson (@Turtle)"

            }; welcomeMessage()
        }; welcome()

        function buttons(){
            const buttonsArray = ["new", "upload", "share"]
            const buttons = header.appendChild(document.createElement("div"));
            buttons.setAttribute("class", "buttons-container");

            function newButton(){

                for(let button of buttonsArray){
                    let name = button

                    let container = buttons.appendChild(document.createElement("div"));
                    container.setAttribute("class", `${name}-button-container`)


                    button = container.appendChild(document.createElement("button"));
                    button.setAttribute("class", `${name} header-button`)
                    button.setAttribute("type", "button")
                    button.setAttribute("value", `${name}`)
                    button.textContent = name

                }
            } ;newButton()
            function uploadButton(){};
            function shareButton(){};
        }; buttons()
    }; header()

    function main(){
        const main = dash.appendChild(document.createElement("div"));
        main.setAttribute("class", "container-main")
        function projects(){
            const projects = main.appendChild(document.createElement("div"));
            projects.setAttribute("class", "projects-container");
            const containerTitle = projects.appendChild(document.createElement("div"));
            containerTitle.setAttribute("class", "projects-title-container");
            const title = containerTitle.appendChild(document.createElement("h3"));
            title.setAttribute("class", "projects-title")
            title.textContent = "Your Projects"
            const projectArray = [
              "project-1",
              "project-2",
              "project-3",
              "project-4",
              "project-5",
              "project-6",
            ];

            for (let project of projectArray){
                const name = project
                project = projects.appendChild(document.createElement("div"));
                project.setAttribute("class", `${name} project-item`)
            }
        }; projects()

        function announcements(){
            const announcement = main.appendChild(document.createElement("div"));
            announcement.setAttribute("class", "announcement-container")
            function announce(){
                const announce = announcement.appendChild(document.createElement("div"));
                announce.setAttribute("class", "announce")
            }; announce()
            function trending(){
                const trend = announcement.appendChild(document.createElement("div"))
                trend.setAttribute("class", "trending");
            }; trending()
        }; announcements()
    }; main()

}; dashBoard()