import React, { useEffect } from "react";
import { LogBox } from "react-native";
import FlashMessage from "react-native-flash-message";
import Statusbar from "./components/Statusbar/Statusbar";
import { AuthProvider } from "./context";

import Router from "./routes/Router";

function App() {
    LogBox.ignoreAllLogs();
    return (
        <>
            <AuthProvider>
                <Statusbar />
                <Router />
            </AuthProvider>


            <FlashMessage position="bottom" />

        </>
    );
}

export default App;
