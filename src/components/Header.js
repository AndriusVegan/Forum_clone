import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <LogoWrapper>
          <Logo
            src="https://i.ibb.co/qrBVHqz/Hpz-Vcovx-Qz28-Br7-Gk-Ryq-15289248-269068140162594-1580546814749307408-o-1.png"
            alt="CP Logo"
          />
          <LogoTitle>Vegan Forum</LogoTitle>
        </LogoWrapper>
        <SearchBarWrapper>
          <SearchBar>
            <SearchIcon src="https://img.icons8.com/ios-glyphs/200/B8B8B8/search--v1.png" />
            <SearchInput placeholder="search" />
          </SearchBar>
        </SearchBarWrapper>
        <SideIcons>
          <NotificationIcon src="https://img.icons8.com/material-outlined/200/B0B0B0/appointment-reminders--v1.png" />
          <ProfileIcon src="https://avatars.githubusercontent.com/u/61084415?v=4" />
        </SideIcons>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  background-color: white;
  border: 1px solid black;
  top: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  position: sticky;
  z-index: 1;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const ContentWrapper = styled.div`
  width: 1270px;
  height: 90%;
  display: flex;
  align-items: center;
`;

const LogoWrapper = styled.div`
  display: flex;
  height: 60%;
  width: 20%;
  justify-content: space-between;
`;
const Logo = styled.img`
  height: 100%;
  width: auto;
  object-fit: contain;
`;

const LogoTitle = styled.div`
  font-family: "bebas-neue-pro";
  font-size: 20px;
  font-weight: 600;
`;

const SearchBarWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SearchBar = styled.div`
  background-color: #f3f3f3;
  height: 100%;
  width: 40%;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
`;
const SearchIcon = styled.img`
  height: 16px;
  width: auto;
  object-fit: contain;
  margin-right: 4px;
`;
const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 14px;
  background: none;
`;

const SideIcons = styled.div`
  width: 20%;
  justify-content: flex-end;
  align-items: center;
`;

const NotificationIcon = styled.img`
  height: 24px;
  width: auto;
  object-fit: contain;
  margin: 0px 10px;
`;

const ProfileIcon = styled.img`
  height: 24px;
  width: auto;
  object-fit: contain;
  border-radius: 50%;
  padding: 2px;
  border: 2px solid #b8b8b8;
`;
