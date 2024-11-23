import { useEffect, useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import axios from "axios";

const App = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/hello")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);
  return (
    <div className="items-center justify-center min-h-screen bg-gray-100">
      <p>{message}</p>
      <p>Count: {count}</p>
      <Button onClick={() => setCount((prev) => prev + 1)}>Click Me</Button>
    </div>
  );
};

export default App;
