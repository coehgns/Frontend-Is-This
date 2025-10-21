import { RouterProvider } from "react-router-dom";
import { Router } from "./Router";
import { GlobalStyle } from "./design-system/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
