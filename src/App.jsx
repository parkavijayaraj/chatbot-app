// src/App.jsx
import React from 'react';
import Chatbot from './components/Chatbot';
import { ChatProvider } from './context/ChatContext';

const App = () => {
  return (
    <ChatProvider>
      <Chatbot />
    </ChatProvider>
  );
};

export default App;
