import React from "react";
import ReactDOM from 'react-dom/client';
import TabsComponent from "./TabsComponent";

const App = () => (
    <div>
        <TabsComponent />
    </div>
);

//ReactDOM.render(<App />, document.getElementById("app"));

const app = document.getElementById('app');

if (app) {
  const root = ReactDOM.createRoot(app);
  root.render(<App />);
}
