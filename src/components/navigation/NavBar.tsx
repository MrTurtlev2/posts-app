import {Link, Outlet} from "react-router-dom";
import React from "react";
import styled from "styled-components";

const NavBar = () => {
    return (
        <div>
            <NavBarWrapper>
                <ul>
                    <li>
                        <Link to="/">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/login">login</Link>
                    </li>
                    <li>
                        <Link to="/nothing-here">Nothing Here</Link>
                    </li>
                </ul>
            </NavBarWrapper>
            {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
            <Outlet/>
        </div>
    );
}
export default NavBar


const NavBarWrapper = styled.nav`
  background-color: ${({theme}) => theme.white};
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.38);
`;