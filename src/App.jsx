import { useEffect } from "react";
import { changeTheme } from "./utils/themeProvider";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

function App() {
  useEffect(() => {
    const root = document.getElementById("root");
    changeTheme(root);
  }, []);

  return (
    <div className="flex flex-col bg-background gap-6">
      <Header />
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
