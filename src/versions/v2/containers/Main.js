import React from "react";
import "./Main.scss";

/**
 * Version 2 - Modern Portfolio Design
 *
 * This is a placeholder for your new Figma-based design.
 * Replace this component with your actual v2 implementation.
 *
 * You can access shared portfolio data from:
 * import { greeting, workExperiences, etc } from "../../../shared/data/portfolio";
 *
 * You can use shared contexts:
 * import { StyleProvider } from "../../../shared/contexts/StyleContext";
 * import { useLocalStorage } from "../../../shared/hooks/useLocalStorage";
 */

const Main = () => {
  return (
    <div className="v2-container">
      <div className="v2-content">
        <h1>Version 2 - Coming Soon</h1>
        <p>This is a placeholder for your new Figma-based portfolio design.</p>
        <p>Start building your components here!</p>

        <div className="v2-guide">
          <h2>Getting Started:</h2>
          <ul>
            <li>Create your components in <code>src/versions/v2/components/</code></li>
            <li>Create your page sections in <code>src/versions/v2/containers/</code></li>
            <li>Add your styles in <code>src/versions/v2/styles/</code></li>
            <li>Import shared data from <code>src/shared/data/portfolio.js</code></li>
            <li>Use shared contexts from <code>src/shared/contexts/</code></li>
          </ul>
        </div>

        <div className="v2-navigation">
          <p>
            <a href="/v1">← Go to Version 1</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
