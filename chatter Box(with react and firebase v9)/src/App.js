import './App.css';
import { Chat } from './My_Components/Chat';
import { SignIn } from './My_Components/SignIn';
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth } from "./firebase" ;

function App() {
  const [user] = useAuthState(auth) //if signed in user will return true
  return (
    <div>
    {user? <Chat/> : <SignIn/>}
    </div>
  );
}

export default App;
