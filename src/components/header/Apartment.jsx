import React from "react";
import arrow from "./logo/стрелка назад.png";
import apartment from "./logo/1225305862936203324.webp";
import { Link } from "react-router-dom";
import "./apartment.css";

function Apartment() {
  return (
    <div className="apartment">
      <h1>Apartment</h1>
      <div className="arrow">
        <Link to="/history">
          <img src={arrow} alt="arrow" />
        </Link>
      </div>
      
        <img src={apartment} alt="apartment" />
      
      <p>
        Microsoft has developed versions of Visual Studio Code not only for
        Windows, but also for Linux and macOS. VS Code includes tools for
        interacting with Git, a built-in debugger, and refactoring tools, not to
        mention such an obvious thing as syntax highlighting. The mentioned
        capabilities of VS Code at first glance seem very modest, but they can
        be significantly expanded by installing plug-ins. Since VS Code itself
        is open source, plugins for this editor are created by independent
        developers, so the choice of available extensions is quite wide. This
        arsenal includes tools for many programming languages ​​with different
        functional purposes - each VS Code user can install the extensions that
        they need, customizing the editor to optimize their own workflows. React
        Native and Flutter allow you to create native applications for Windows,
        macOS, Linux, Android, iOS, and iPadOS. At the same time, React Native
        relies on JavaScript and TypeScript, and Flutter uses the Dart language,
        created and developed by Google. You can write JavaScript, TypeScript,
        and Dart programs in VS Code with the default settings, but for
        convenience, it makes sense to connect additional extensions to support
        the React Native and Flutter frameworks, as well as plugins that open up
        even more possibilities for the developer.
      </p>
      <div className="arrow">
        <Link to="/history">
          <img src={arrow} alt="arrow" />
        </Link>
      </div>
      
    </div>
  );
}

export { Apartment };
