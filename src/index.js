function dash(){
    const dash = document.querySelector("body");
    console.log(dash)

    function side(){
        const side = dash.appendChild(document.createElement("div"))
        side.setAttribute("class", "side")

        function logo(){};
        function menu(){};
        function options(){};
    }; side()

    function header(){
        const header = dash.appendChild(document.createElement("header"))
        header.setAttribute("class", "header");

        function search(){
            function icon(){};
            function search(){};
        };

        function welcome(){
            function icon(){};
            function message(){};
        };

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