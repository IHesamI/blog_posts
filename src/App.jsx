import { useEffect } from "react";
import { changeTheme } from "./utils/themeProvider";
import Header from "./Components/Header";
import Body from "./Components/Body";

function App() {
  useEffect(() => {
    const root = document.getElementById("root");
    changeTheme(root);
  }, []);

  return (
    <div className="bg-background">
      <Header />
      <Body/>
    </div>
  );
}

export default App;
