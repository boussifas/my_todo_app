import React from "react";
import styled from "@emotion/styled";
import RealmApp, { useRealmApp } from "../realm/RealmApp";
import RealmApolloProvider from "../realm/RealmApolloProvider";
import LoginScreen from "./LoginScreen";
import Board from "./Board";

const App: React.FC = (props) => {
  return (
    <RealmApp>
      <AppContainer>
        <RequireAuthentication />
      </AppContainer>
    </RealmApp>
  );
};
export default App;

const AppContainer = styled.div`
  background: rgb(162,100,237);
  background: linear-gradient(131deg, rgba(162,100,237,1) 0%, rgba(44,44,111,1) 47%, rgba(123,164,228,1) 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

function RequireAuthentication() {
  const app = useRealmApp();
  if (!app) {
    return <div>Loading</div>;
  }
  return app.user ? (
    <RealmApolloProvider>
      <Board />
    </RealmApolloProvider>
  ) : (
    <LoginScreen />
  );
}
