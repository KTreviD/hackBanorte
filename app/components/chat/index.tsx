import React, { useState } from 'react';
import styles from '../../page.module.css';
import { AiOutlineSend } from 'react-icons/ai';
import { FaMicrophoneAlt } from 'react-icons/fa';

interface Message {
    id: number;
    text: string;
    sender: boolean;
  }

export const Chat: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([ {id: 0, text:"Hola soy Maya, ¿Como te llamas?", sender: false } ]);
    const [currentMessage, setCurrentMessage] = useState<string>('');
    const botMessages = ["No entra aqui", "¿En que te puedo apoyar Ernesto?", "¿Qué tipo de pago desea realizar?", "¿Cuál servicio necesitas pagar, y sabes donde hacerlo?", "Puedes pagar tus servicios en el oxxo"];
    const [counter, setCounter] = useState(1);
    const handleSendMessage = (sender: boolean) => {
      if (currentMessage.trim() !== '') {
        const newMessage: Message = {
          id: Date.now(),
          text: currentMessage.trim(),
          sender: sender 
        };
    
        const newBotMessage: Message = {
          id: counter,
          text: botMessages[counter],
          sender: !sender 
        };
        setCounter(counter => counter + 1);
    
        const updatedMessages = [...messages, newMessage, newBotMessage];
        setMessages(updatedMessages);
        setCurrentMessage('');
      }
    };
  
    return (<>
      <div className={styles.chat}>
        <div>
          {messages.map((message) => (
            <div
            className={`${styles.messageContainer} ${message.sender ? styles.right : ''}`}
            key={message.id}
          >
            <div
              className={`${styles.message} ${message.sender ? styles.senderMessage : styles.iaMessage}`}
              style={{ wordBreak: 'break-word', backgroundColor: message.sender ? "#EB0029" : "#5B6670"}}
            >
              {message.text}
            </div>
            
          </div>
          ))}
          
        </div>
      </div>
      <div className={styles.footer}>
      <div className={styles.icons}><FaMicrophoneAlt color='#EB0029' fontSize={"1.6rem"}></FaMicrophoneAlt></div>
      <div className={styles.textBox}>
        <input
          type="text"
          className={styles.textHolder}
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
        />
      </div>
      <div className={styles.send} onClick={e => handleSendMessage(true)}>
        <AiOutlineSend color='#EB0029' fontSize={"2.4rem"}></AiOutlineSend>
      </div>
    </div></>
    );
  };