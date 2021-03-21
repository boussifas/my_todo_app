import * as React from "react";
import styled from "@emotion/styled";
import { useRealmApp } from "../realm/RealmApp";
import Button from "@leafygreen-ui/button";


const Navbar: React.FC = () => {
  const { user, logOut } = useRealmApp();
  const profile: Realm.UserProfile | undefined = user?.profile
  const email = profile?.email;
  return (
    <Container>
      <h2>Project X</h2>
      <LoggedInUser>{email}</LoggedInUser>
      <Button size="xsmall" onClick={() => logOut()}>
        Logout
      </Button>
    </Container>
  );
};
export default Navbar;

const Container = styled.div`
  width: 100%;
  height: 64px;
  background: #2c2c6f;
  font-size: 16px;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const LoggedInUser = styled.div`
  padding-bottom: 8px;
`;
