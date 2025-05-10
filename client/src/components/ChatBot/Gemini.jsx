// import { useState } from "react";
// import axios from "axios";
// import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';


// function Gemini() {
//   const [question, setQuestion] = useState("");
//   const [answer, setAnswer] = useState("");
//   const [generatingAnswer, setGeneratingAnswer] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [isTyping, setIsTyping] = useState(false);
//   const API_KEY = "AIzaSyCXnkMJ8CgohWdQf0-mR2yBpd_h8C9WH9M";

  
  

// async function generateAnswer(e) {
//     if (e) {
//       e.preventDefault();
//     }
//     setGeneratingAnswer(true);
//     setIsTyping(true);
//     try {
//       const response = await axios({
//         url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
//         method: "post",
//         data: {
//           contents: [{ parts: [{ text: question }] }],
//         },
//       });
  
//       setAnswer(
//         response["data"]["candidates"][0]["content"]["parts"][0]["text"]
//       );
//       setIsTyping(false);
//       setMessages(prevMessages => [
//         ...prevMessages,
//         { text: question, type: "user" },
//         { text: response["data"]["candidates"][0]["content"]["parts"][0]["text"], type: "gemini" }
//       ]);
//     } catch (error) {
//       console.log(error);
//       setAnswer("Sorry - Something went wrong. Please try again!");
//     }
  
//     setGeneratingAnswer(false);
//   }
  

//   function handleSend(text) {
//     setMessages([...messages, { text: text, type: "user" }]);
//     setQuestion(text);
//     generateAnswer();
//   }

//   return (
//     <div className="Gemini">
//       <div style={{ position:"relative", height: "800px", width: "700px"  }}>
//         <MainContainer>
//           <ChatContainer>       
//             <MessageList 
//               scrollBehavior="smooth" 
//               typingIndicator={isTyping ? <TypingIndicator content="Gemini is typing" /> : null}
//             >
//               {messages.map((message, i) => {
//                 console.log(message['text'])
//                 return <Message key={i} model={message} />
//               })}
//             </MessageList>
//             <MessageInput placeholder="Type message here" onSend={handleSend} />        
//           </ChatContainer>
//         </MainContainer>
//       </div>
//     </div>
//   );
// }

// export default Gemini;


import { useState } from "react";
import axios from "axios";
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';


function Gemini() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const API_KEY = "AIzaSyCXnkMJ8CgohWdQf0-mR2yBpd_h8C9WH9M";

//   async function generateAnswer(e) {
//     setGeneratingAnswer(true);
//     e.preventDefault();
//     setIsTyping(true);
//     try {
//       const response = await axios({
//         url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
//         method: "post",
//         data: {
//           contents: [{ parts: [{ text: question }] }],
//         },
//       });

//       setAnswer(
//         response["data"]["candidates"][0]["content"]["parts"][0]["text"]
//       );
//       setIsTyping(false);
//       setMessages([
//         ...messages,
//         { text: question, type: "user" },
//         { text: response["data"]["candidates"][0]["content"]["parts"][0]["text"], type: "gemini" }
//       ]);
//     } catch (error) {
//       console.log(error);
//       setAnswer("Sorry - Something went wrong. Please try again!");
//     }

//     setGeneratingAnswer(false);
//   }

    async function generateAnswer(e) {
        if (e) {
        e.preventDefault();
        }
        setGeneratingAnswer(true);
        setIsTyping(true);
        try {
        const response = await axios({
            url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
            method: "post",
            data: {
            contents: [{ parts: [{ text: question }] }],
            },
        });
    
        setAnswer(
            response["data"]["candidates"][0]["content"]["parts"][0]["text"]
        );
        setIsTyping(false);
        setMessages(prevMessages => [
            ...prevMessages,
            { text: question, type: "user" },
            { text: response["data"]["candidates"][0]["content"]["parts"][0]["text"], type: "gemini" }
        ]);
        } catch (error) {
        console.log(error);
        setAnswer("Sorry - Something went wrong. Please try again!");
        }
    
        setGeneratingAnswer(false);
  }
  

  function handleSend(text) {
    setMessages([...messages, { text: text, type: "user" }]);
    setQuestion(text);
    generateAnswer();
  }

  return (
    <div className="App">
      <div style={{ position:"relative", height: "800px", width: "700px"  }}>
        <MainContainer>
          <ChatContainer>       
            <MessageList 
              scrollBehavior="smooth" 
              typingIndicator={isTyping ? <TypingIndicator content="Gemini is typing" /> : null}
            >
              {messages.map((message, i) => {
                console.log(message)
                return <Message key={i} model={message} />
              })}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />        
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}

export default Gemini;
