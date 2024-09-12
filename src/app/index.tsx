import { Lock, Mail } from "lucide-react";
import { Button } from "../components/ui/button";
import { Tooltip } from "../components/ui/tooltip";
import { Input } from "../components/ui/input";
import { Dialog } from "../components/ui/dialog";

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

      <Input withIcon placeholder="Hello" icon={<Lock />} type="password" containerClassName="mt-4" className="w-64" />

      <Dialog messageClose="save" title="Input Biodata" description="Input your biodata" formFields={
        [
          {
            label: 'Name',
            type: 'text',
            placeholder: 'Input your name'
          },
          {
            label: 'Email',
            type: 'email',
            placeholder: 'Input your email'
          },
          {
            label: 'address',
            type: 'text',
            placeholder: 'Input your address'
          }
        ]
      }>
        <Button variant="outline" startContent={<Mail />}>
          Input Biodata
        </Button>
      </Dialog>
    </>
  );
}

export default App;
