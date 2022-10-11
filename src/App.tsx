import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./lib/hooks";
import { LOCAL_STORAGE_KEY } from "./lib/Immutable";
import Router from "./Routes/Router";

function App() {
  const { getLocalStorage } = useLocalStorage();
  const navigate = useNavigate();

  useEffect(() => {
    const store = getLocalStorage(LOCAL_STORAGE_KEY);
    if (store !== null && store.token) {
      navigate("/todo", { replace: true });
    } else {
      navigate("/", { replace: true });
    }
  }, []);

  return <Router />;
}

export default App;
