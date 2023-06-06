import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DebugWindow from "./DebugWindow";

const DebugRouter = ({ children }) => {
  const location = useLocation();
  const [history, setHistory] = useState([]);
  const [showDebug, setShowDebug] = useState(false);

  useEffect(() => {
    setHistory((prevHistory) => [...prevHistory, location.pathname]);
  }, [location]);

  const toggleDebug = () => {
    setShowDebug((prevShow) => !prevShow);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <>
      {children}
      <DebugWindow
        history={history}
        clearHistory={clearHistory}
        show={showDebug}
      />
    </>
  );
};

export default DebugRouter;
