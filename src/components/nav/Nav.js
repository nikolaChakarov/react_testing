import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
    return (
        <NavContainer>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/form"}>Form</Link>
                </li>
            </ul>
        </NavContainer>
    );
};

const NavContainer = styled.div``;

export default Nav;
