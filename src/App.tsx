import './App.css';
import React from "react";
import Router from "./components/navigation/Router";
import {ThemeProvider} from "styled-components";
import theme from "./constants/theme";

const App = () => {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Router/>
            </ThemeProvider>
        </div>
    );
}

export default App;