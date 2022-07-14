import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import Form from "./components/form/Form";

const App = () => {
    return (
        <AppContainer>
            <Nav />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/form" element={<Form />} />
            </Routes>
        </AppContainer>
    );
};

const AppContainer = styled.div``;

export default App;
