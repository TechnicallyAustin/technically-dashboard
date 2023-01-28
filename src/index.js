function dash() {
  const dash = document.querySelector("body");
  function side() {
    const side = dash.appendChild(document.createElement("div"));
    side.setAttribute("class", "side");

    function logo() {
      const logo = side.appendChild(document.createElement("div"));
      logo.setAttribute("class", "logo");
      const logoImage = logo.appendChild(document.createElement("img"));
      logoImage.setAttribute("class", "logo-image");
      logoImage.setAttribute("src", "assets_v2/logo.svg");
      logoImage.setAttribute("alt", "dashboard logo");

      const title = logo.appendChild(document.createElement("h2"));
      title.setAttribute("class", "logo-title");
      title.textContent = "Technically" + "\n" + "Dashboard";
    }
    logo();

    function menu() {
      const menu = side.appendChild(document.createElement("div"));
      menu.setAttribute("class", "menu");
      const menuArray = [
        "Home",
        "Profile",
        "Messages",
        "History",
        "Tasks",
        "Communities",
      ];

      const iconArray = [
        "assets_v2/home.svg",
        "assets_v2/profile.svg",
        "assets_v2/messages.svg",
        "assets_v2/history.svg",
        "assets_v2/tasks.svg",
        "assets_v2/groups.svg",
      ];

      for (let i = 0; i < menuArray.length; i++) {
        let menuItem = menuArray[i];
        let icon = iconArray[i];
        let container = menu.appendChild(document.createElement("div"));
        container.setAttribute("class", `${menuItem.toLowerCase()} item-box`);
        let image = container.appendChild(document.createElement("img"));
        image.setAttribute(
          "class",
          `menu-icons ${menuItem.toLowerCase()}-icon`
        );
        image.setAttribute("src", `${icon}`);
        image.setAttribute("alt", `image for the ${menuItem} menu item`);

        let item = container.appendChild(document.createElement("h3"));
        item.setAttribute("class", `menu-items ${menuItem.toLowerCase()}`);
        item.textContent = menuItem;
      }
    }
    menu();

    function options() {
      const options = side.appendChild(document.createElement("div"));
      options.setAttribute("class", "options");

      const itemArray = ["Settings", "Support", "Privacy"];
      const iconArray = [
        "assets_v2/settings.svg",
        "assets_v2/help.svg",
        "assets_v2/privacy.svg",
      ];

      for (let i = 0; i < itemArray.length; i++) {
        let menuItem = itemArray[i];
        let icon = iconArray[i];

        let container = options.appendChild(document.createElement("div"));
        container.setAttribute("class", `${menuItem.toLowerCase()} item-box`);

        let image = container.appendChild(document.createElement("img"));
        image.setAttribute(
          "class",
          `option-icons ${menuItem.toLowerCase()}-icon`
        );
        image.setAttribute("src", `${icon}`);
        image.setAttribute("alt", `image for the ${menuItem} option item`);

        let item = container.appendChild(document.createElement("h3"));
        item.setAttribute("class", `option-items ${menuItem.toLowerCase()}`);
        item.textContent = menuItem;
      }
    }
    options();
  }
  side();

  function header() {
    const header = dash.appendChild(document.createElement("header"));
    header.setAttribute("class", "header");

    function search() {
      const searchBox = header.appendChild(document.createElement("div"));
      searchBox.setAttribute("class", "search");

      function icon() {
        const icon = searchBox.appendChild(document.createElement("img"));
        icon.setAttribute("class", "search-icon");
        icon.setAttribute("src", "assets_v2/search.svg");
        icon.setAttribute("alt", "search bar icon");
      }
      icon();

      function input() {
        const input = searchBox.appendChild(document.createElement("input"));
        input.setAttribute("type", "text");
        input.setAttribute("class", "search-input");
      }
      input();
    }
    search();

    function welcome() {
      const welcome = header.appendChild(document.createElement("div"));
      welcome.setAttribute("class", "welcome");

      function icon() {
        const container = welcome.appendChild(document.createElement("div"));
        container.setAttribute("class", "welcome-icon-bg");
        const icon = container.appendChild(document.createElement("img"));
        icon.setAttribute("class", "welcome-icon");
        icon.setAttribute("src", "assets/brain.svg");
        icon.setAttribute("alt", "welcome profile icon");
      }
      icon();

      function message() {
        const container = welcome.appendChild(document.createElement("div"));
        container.setAttribute("class", "welcome-message");
        const message = container.appendChild(document.createElement("p"));
        message.setAttribute("class", "message-text");
        message.textContent = "Hi there,";

        const subText = container.appendChild(document.createElement("h2"));
        subText.setAttribute("class", "welcome-name");
        subText.textContent = "Austin Johnson (@TechnicallyAJ)";
      }
      message();
    }
    welcome();

    function profile() {
      const profile = header.appendChild(document.createElement("div"));
      profile.setAttribute("class", "profile-controls");

      function notifications() {
        const notification = profile.appendChild(document.createElement("img"));
        notification.setAttribute("class", "notify-icon");
        notification.setAttribute("src", "assets_v2/notify.svg");
        notification.setAttribute("alt", "notifications icon");
      }
      notifications();

      function icon() {
        const container = profile.appendChild(document.createElement("div"));
        container.setAttribute("class", "profile-icon-bg");
        const icon = container.appendChild(document.createElement("img"));
        icon.setAttribute("class", "profile-header-icon");
        icon.setAttribute("src", "assets/brain.svg");
        icon.setAttribute("alt", "profile icon image");
      }
      icon();

      function name() {
        const name = profile.appendChild(document.createElement("h3"));
        name.setAttribute("class", "profile-name");
        name.textContent = "Austin Johnson";
      }
      name();
    }
    profile();

    function buttons() {
      const buttonsArray = ["New", "Upload", "Share"];
      const container = header.appendChild(document.createElement("div"));
      container.setAttribute("class", "buttons");

      for (let i = 0; i < buttonsArray.length; i++) {
        let button = buttonsArray[i];
        console.log(button);
        let newButton = container.appendChild(document.createElement("button"));
        newButton.setAttribute(
          "class",
          `${button.toLowerCase()} header-button`
        );
        newButton.setAttribute("type", "");
        newButton.setAttribute("value", `${button}`);
        newButton.textContent = button;
      }
    }
    buttons();
  }
  header();

  function main() {
    const main = dash.appendChild(document.createElement("main"));
    main.setAttribute("class", "main");

    function projects() {
      const projects = main.appendChild(document.createElement("div"));
      projects.setAttribute("class", "projects");

      const title = projects.appendChild(document.createElement("h2"));
      title.setAttribute("class", "project-section-title");
      title.textContent = "Your Projects";

      const projectsArray = [
        "Project-one",
        "Project-two",
        "Project-three",
        "Project-four",
        "Project-five",
        "Project-six",
      ];

      for (let i = 0; i < projectsArray.length; i++) {
        let project = projectsArray[i];
        console.log(project);

        let card = projects.appendChild(document.createElement("div"));
        card.setAttribute("class", `${project.toLowerCase()} project-card`);

        let title = card.appendChild(document.createElement("h3"));
        title.setAttribute("class", "project-title");
        title.textContent = `${project}`;

        let description = card.appendChild(document.createElement("p"));
        description.setAttribute("class", "project-description");
        description.textContent =
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

        let share = card.appendChild(document.createElement("div"));
        share.setAttribute("class", "project-share");

        let star = share.appendChild(document.createElement("img"));
        star.setAttribute("class", "share-icons");
        star.setAttribute("src", "assets_v2/star.svg");
        star.setAttribute("alt", "share star icon");
        let eye = share.appendChild(document.createElement("img"));
        eye.setAttribute("class", "share-icons");
        eye.setAttribute("src", "assets_v2/eye.svg");
        eye.setAttribute("alt", "share eye icon");
        let network = share.appendChild(document.createElement("img"));
        network.setAttribute("class", "share-icons");
        network.setAttribute("src", "assets_v2/share.svg");
        network.setAttribute("alt", "share network icon");
      }
    }
    projects();

    function panel() {
      const panel = main.appendChild(document.createElement("div"));
      panel.setAttribute("class", "panel");

      function title() {
        const title = panel.appendChild(document.createElement("h3"));
        title.setAttribute("class", "announcement-title");
        title.textContent = "Announcements";
      }

      title();

      function announcements() {
        const announcements = panel.appendChild(document.createElement("div"));
        announcements.setAttribute("class", "announcements");

        function post() {
          const postArray = ["First", "Second", "Third"];
          for (let i = 0; i < postArray.length; i++) {
            let post = postArray[i];

            let container = announcements.appendChild(
              document.createElement("div")
            );
            container.setAttribute(
              "class",
              `${post.toLowerCase()}-container posts`
            );

            let item = container.appendChild(document.createElement("h4"));
            item.setAttribute("class", `${post.toLowerCase()} post-title`);
            item.textContent = post;

            let info = container.appendChild(document.createElement("p"));
            info.setAttribute("class", `${post.toLowerCase()} info`);
            info.textContent =
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.";
          }
        }
        post();
      }
      announcements();

      function trendingTitle() {
        const title = panel.appendChild(document.createElement("h3"));
        title.setAttribute("class", "trending-title");
        title.textContent = "Trending";
      }
      trendingTitle();

      function trending() {
        const trending = panel.appendChild(document.createElement("div"));
        trending.setAttribute("class", "trending");

        function content() {
          const userArray = [
            "TechnicallyAJ",
            "Jada",
            "Jordan",
            "Dylan",
            "Adrian",
          ];
          for (let i = 0; i < userArray.length; i++) {
            let user = userArray[i];
            let container = trending.appendChild(document.createElement("div"));
            container.setAttribute(
              "class",
              `${user.toLowerCase()}-container users`
            );

            let iconBg = container.appendChild(document.createElement("div"));
            iconBg.setAttribute("class", "user-bg");

            let icon = iconBg.appendChild(document.createElement("img"));
            icon.setAttribute("class", "user-icon");
            icon.setAttribute("src", "./assets_v2/alt-user.svg");
            icon.setAttribute("alt", "icon users profile");

            let userBox = container.appendChild(document.createElement("div"));
            userBox.setAttribute("class", "user-info");

            let name = userBox.appendChild(document.createElement("p"));
            name.setAttribute("class", "user-name");
            name.textContent = `@${user}`;

            let info = userBox.appendChild(document.createElement("p"));
            info.setAttribute("class", "info-text");
            info.textContent = "Lorem ipsum Lorem ipsum lorem";
          }
        }
        content();
      }
      trending();
    }
    panel();
  }
  main();
}
dash();
