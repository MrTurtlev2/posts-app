import {Link, Outlet} from "react-router-dom";
import React from "react";
import styled from "styled-components";
import UserDropdown from "./UserDropdown";

const NavBar = () => {
    return (
        <div>
            <NavBarWrapper>
                <NavbarList>
                    <div>
                        <Link to="/">Dashboard</Link>
                    </div>
                    <div>
                        <Link to="/login">login</Link>
                    </div>
                    <div>
                        <Link to="/nothing-here">Nothing Here</Link>
                    </div>
                </NavbarList>
                <UserDropdown/>
            </NavBarWrapper>
          
            <StyledOutlet/>
        </div>
    );
}
export default NavBar

const StyledOutlet = styled(Outlet)`
  height: 90vh;
`;

const NavBarWrapper = styled.nav`
  background-color: ${({theme}) => theme.white};
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.38);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
`;
const NavbarList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;