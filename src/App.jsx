import { useEffect } from "react";
import { changeTheme } from "./utils/themeProvider";

function App() {
  useEffect(()=>{
    const root = document.getElementById("root");
    changeTheme(root);
  },[]);

  return (
    <>
      <p className="text-red-600 bg-background">This is a test</p>
    </>
  );
}

export default App;
