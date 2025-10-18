import styled from "@emotion/styled";
import { Header } from "../ui/Header";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

const Main = styled.main`
  width: 100vw;
  margin-top: 70px;
`;
