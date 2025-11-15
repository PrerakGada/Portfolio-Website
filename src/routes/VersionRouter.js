import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { DEFAULT_VERSION } from "../versions/config";

// Lazy load version components for better performance
const V1 = lazy(() => import("../versions/v1"));
const V2 = lazy(() => import("../versions/v2"));

// Loading component
const Loading = () => (
  <div style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    fontSize: "1.5rem",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
  }}>
    Loading...
  </div>
);

/**
 * Version Router
 *
 * Handles routing between different portfolio versions.
 *
 * Routes:
 * - / → Redirects to the default version
 * - /v1 → Version 1 (Classic design)
 * - /v2 → Version 2 (Modern design)
 * - /* → Redirects to default version (404 fallback)
 */
const VersionRouter = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          {/* Root path - redirect to default version */}
          <Route exact path="/">
            <Redirect to={`/${DEFAULT_VERSION}`} />
          </Route>

          {/* Version 1 - Classic Design */}
          <Route path="/v1">
            <V1 />
          </Route>

          {/* Version 2 - Modern Design */}
          <Route path="/v2">
            <V2 />
          </Route>

          {/* Fallback - redirect to default version */}
          <Route path="*">
            <Redirect to={`/${DEFAULT_VERSION}`} />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default VersionRouter;
