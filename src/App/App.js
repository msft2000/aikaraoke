import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GeneralProvider } from "../context";
import { Index } from "../pages/Index";

function App() {
    return (
        <BrowserRouter>
            <GeneralProvider>
                <Routes>
                    <Route path="/" element={<Index />} />
                </Routes>
            </GeneralProvider>
        </BrowserRouter>
    );
}
export { App };