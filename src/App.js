import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

const App = () => {
  //if not logged in return login form
  if (!localStorage.getItem("username")) return <LoginForm />;
  return (
    <div>
      <ChatEngine
        height="100vh"
        projectID="cbd485ca-d2d7-409a-b5b3-769c2e15e707"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppprops) => <ChatFeed {...chatAppprops} />}
      />
    </div>
  );
};

export default App;
