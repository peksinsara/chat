import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
    return (
        <div>
            <ChatEngine
                height="100vh"
                projectID="cbd485ca-d2d7-409a-b5b3-769c2e15e707"
                userName="elven.soul"
                userSecret="Darkness101"
                renderChatFeed={(chatAppprops)=><ChatFeed {... chatAppprops}/>}
            />

        </div>
    );
}

export default App;
