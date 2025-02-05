import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import axios from 'axios';

const Chatbot = () => {
  const [userQuery, setUserQuery] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleUserQuery = async () => {
    if (!userQuery) return;
    setChatHistory((prevHistory) => [...prevHistory, { sender: 'user', text: userQuery }]);
    setUserQuery('');

    // Send query to the backend
    const response = await axios.post('http://localhost:8000/query', { user_query: userQuery });
    const botResponse = response.data.response;
    setChatHistory((prevHistory) => [...prevHistory, { sender: 'bot', text: botResponse }]);
  };

  return (
    <Box sx={{ maxWidth: '600px', margin: 'auto', padding: '20px', background: '#f4f4f4', borderRadius: '8px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        AI-Powered Chatbot
      </Typography>
      <Box sx={{ marginBottom: '20px' }}>
        {chatHistory.map((msg, idx) => (
          <Box key={idx} sx={{ marginBottom: '10px', textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
            <Typography variant="body1" sx={{ background: msg.sender === 'user' ? '#007BFF' : '#eeeeee', padding: '10px', borderRadius: '5px' }}>
              {msg.text}
            </Typography>
          </Box>
        ))}
      </Box>
      <TextField
        fullWidth
        variant="outlined"
        value={userQuery}
        onChange={(e) => setUserQuery(e.target.value)}
        placeholder="Type your query"
        sx={{ marginBottom: '10px' }}
      />
      <Button variant="contained" onClick={handleUserQuery} sx={{ width: '100%' }}>
        Send
      </Button>
    </Box>
  );
};

export default Chatbot;
