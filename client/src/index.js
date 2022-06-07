<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

=======
import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./redux/store"
>>>>>>> 5f6fd87770cfe4e7be8f35e32dfefda52f5f2948

import "./index.css"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
<<<<<<< HEAD
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


=======
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)
>>>>>>> 5f6fd87770cfe4e7be8f35e32dfefda52f5f2948
