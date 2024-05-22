import { createContext, useState } from "react";

const ModeContext = createContext();

const ModeProvider = ({ children }) => {

  const Mode = localStorage.getItem("mode");
  document.body.style.background = Mode === "dark" ? "#000a1c" : "#dddddd";
  document.body.style.color = Mode === "dark" ? "#fff" : "#000";
  const [mode, setMode] = useState(Mode);

  const modeToggler = (value) => {
    setMode(value);
    localStorage.setItem("mode", value);
    document.body.style.background = value === "dark" ? "#000a1c" : "#dddddd";
    document.body.style.color = value === "dark" ? "#fff" : "#000";
  };

  return (
    <ModeContext.Provider value={{ mode, modeToggler }}>
      {children}
    </ModeContext.Provider>
  );
};

export { ModeProvider, ModeContext };
