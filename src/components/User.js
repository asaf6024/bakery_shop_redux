import {Collapse, Button, Fade} from 'react-bootstrap/'
import {  useState} from "react";
import UserContainer from './UserContainer';
const User = () =>{
    const [open, setOpen] = useState(false)

    return (
        <div className = 'users'>
        <>
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            Our Partners
          </Button>
          <Collapse in={open}>
            <div id="example-collapse-text">
              <UserContainer/>
            </div>
          </Collapse>
        </>
        </div>
      );
    }
export default User