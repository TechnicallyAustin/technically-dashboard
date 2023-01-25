function dashBoard(){

    function sidebar(){
        const sidebar = document.body.appendChild(document.createElement("div"))
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
        function searchSection(){
            function searchIcon(){};
            function searchBar(){};
        };

        function profileSettings(){
            function notifications(){};
            function profileIcon(){};
            function profileName(){};
        };

        function welcome(){
            function welcomeIcon(){};
            function welcomeMessage(){};
        };

        function buttons(){
            function newButton(){};
            function uploadButton(){};
            function shareButton(){};
        };
    };

    function main(){
        function projects(){};
        function announcements(){
            function announce(){};
            function trending(){};
        };
    };
}; dashBoard()