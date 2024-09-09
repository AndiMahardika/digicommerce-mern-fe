import { Mail } from "lucide-react";
import { Button } from "../components/ui/button";
import { Tooltip } from "../components/ui/tooltip";

function App() {
  return (
    <>
      <h1 className="text-5xl font-bold">
        Hello form the App  <span className="text-red-500">Update staging</span>!
      </h1>
      <Tooltip message="Hello from tooltip">
        <Button variant="outline" startContent={<Mail />}>
          Hello!
        </Button>
      </Tooltip>
      {/* <Button startContent={<LogIn size={16}/>} size="small">Login</Button> */}
    </>
  );
}

export default App;
