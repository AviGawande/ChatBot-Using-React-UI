import { useState } from "react";
import './App.css';
import {sendMessageToOpenAI} from "./openai";

import Header from "./header";


function App() {

  const [input , setInput] = useState("");
  const [messages,setMessages ] = useState([]);

  const handleSend = async () => {
    const response = await sendMessageToOpenAI(input);
    setMessages([
      ...messages,
      {text:input,isUser: true},
      {text:response,isUser: false },
    ]);
    setInput("");
  };


  return<div className="App">
    <div className="chat">
    <div>
      <header/>
    </div>
      {messages.map((message,index) => (
        <div  key={index}   className={message.isUser ? "user-message" : "bot-message"}>
          {message.text}</div>
        
      ))}
    </div>

    <div className="input-container">
      <input placeholder="Ask Your Questions??" type="text" value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={handleSend}>Send</button>
    </div>
    
   
  </div>;
  
}

export default App;
