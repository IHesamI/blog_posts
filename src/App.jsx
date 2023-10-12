import { useEffect } from "react";
import { changeTheme } from "./utils/themeProvider";
import Header from "./Components/Header";

function App() {
  useEffect(() => {
    const root = document.getElementById("root");
    changeTheme(root);
  }, []);

  return (
    <div className="bg-background">
      <Header />
    </div>
  );
}

export default App;
