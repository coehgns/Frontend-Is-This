import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { DaedongLogo } from "./assets";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <LogoContainer onClick={() => navigate("/")}>
        <DaedongLogo />
        <LogoText>대동여지도</LogoText>
      </LogoContainer>
      <NavContainer>
        <NavServeContainer>
          <NavContent onClick={() => navigate("/notice")}>공고</NavContent>
          <NavContent onClick={() => navigate("/club")}>동아리</NavContent>
        </NavServeContainer>
        <NavContent onClick={() => navigate("/login")}>로그인</NavContent>
      </NavContainer>
    </HeaderContainer>
  );
};

const LogoText = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const LogoContainer = styled.div`
  display: flex;
  padding: 0px 0px 0px 180px;
`;

const HeaderContainer = styled.div`
  display: flex;
  padding: 20px 0px;
  border-bottom: 1px solid #9c9898;
`;

const NavContainer = styled.div`
  display: flex;
  padding: 0px 0px 0px 1000px;
  gap: 100px;
`;

const NavServeContainer = styled.div`
  display: flex;
  gap: 40px;
`;

const NavContent = styled.nav`
  font-size: 14px;
`;
