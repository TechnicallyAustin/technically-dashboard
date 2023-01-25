function dashBoard(){

    function sidebar(){
        const sidebar = document.body.appendChild(document.createElement("div"))
        sidebar.setAttribute("class", "container side-bar")

        function logo(){
            const logo = sidebar.appendChild(document.createElement("div"));
            logo.setAttribute("class", "side-bar-item logo-container" )

            function logoIcon(){
                const icon = logo.appendChild(document.createElement("div"))
                icon.setAttribute("class", " logo-item logo-icon")
            }; logoIcon()

            function logoText(){
                const text = logo.appendChild(document.createElement("h2"));
                text.setAttribute("class", "logo-item logo-text")
                text.textContent = "Technically Dashboard"
            }; logoText()

        }; logo()
          
        function menu(){
            const menu = sidebar.appendChild(document.createElement("div"));
            menu.setAttribute("class", "side-bar-item menu-container");

            function home(){
                const home = menu.appendChild(document.createElement("div"));
                home.setAttribute("class", "menu-item home-container");
            }; home(

            )
            function profile(){
                const profile = menu.appendChild(document.createElement("div"));
                profile.setAttribute("class", "menu-item profile-container");
            }; profile()

            function messages(){
                const messages = menu.appendChild(document.createElement("div"));
                messages.setAttribute("class", "menu-item messages-container");
            }; messages()

            function history(){
                const history = menu.appendChild(document.createElement("div"));
                history.setAttribute("class", "menu-item history-container");
            }; history()

            function tasks(){
                const tasks = menu.appendChild(document.createElement("div"));
                tasks.setAttribute("class", "menu-item tasks-container");
            }; tasks()
        }; menu()

        function options(){
            const options = sidebar.appendChild(document.createElement("div"));
            options.setAttribute("class", "side-bar-item options-container");

            function settings(){
                const settings = options.appendChild(document.createElement("div"));
                settings.setAttribute("class", "option-item settings-container")
            }; settings()

            function support(){
                const support = options.appendChild(document.createElement("div"));
                support.setAttribute("class", "option-item  support-container");
            }; support()

            function privacy(){
                const privacy = options.appendChild(document.createElement("div"));
                privacy.setAttribute("class", "option-item  privacy-container");                
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