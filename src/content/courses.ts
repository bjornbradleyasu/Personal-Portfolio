import { SchoolProject } from './types'

export const classProjects: SchoolProject[] = [
  
  //SPRING 2026
    // (34) AME 486 MAS Capstone II
    {
    id: 'class-34',
    title: 'AME486 - MAS Capstone II',
    course: 'AME486 - MAS Capstone II',
    semester: 'Spring 2026',
    description: 'A full-stack chat application with real-time messaging, user authentication, and file sharing capabilities.',
    whatLearned: [
      'WebSocket implementation for real-time communication',
      'User authentication and session management',
      'Database design for chat applications',
      'Security best practices for web applications'
    ],
    contributions: [
      'Designed and implemented the frontend interface',
      'Built the WebSocket server for real-time messaging',
      'Implemented user authentication system',
      'Created responsive design for mobile and desktop'
    ],
    codePreview: {
      file: 'ChatComponent.tsx',
      language: 'typescript',
      code: `// Real-time chat component
import React, { useState, useEffect } from 'react';
import { useWebSocket } from '../hooks/useWebSocket';

export const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const { socket, isConnected } = useWebSocket();

  const sendMessage = () => {
    if (!inputText.trim() || !socket) return;
    // Send message logic here
    setInputText('');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="text">{message.text}</span>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};`
    },
    githubUrl: 'https://github.com/bjornbradley/chat-app-cse340',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express']
  },
    // (35) AME 360 Designing Mixed-Reality Experiences
    {
    id: 'class-35',
    title: 'AME360 - Designing Mixed-Reality Experiences',
    course: 'AME360 - Designing Mixed-Reality Experiences',
    semester: 'Spring 2026',
    description: 'A full-stack chat application with real-time messaging, user authentication, and file sharing capabilities.',
    whatLearned: [
      'WebSocket implementation for real-time communication',
      'User authentication and session management',
      'Database design for chat applications',
      'Security best practices for web applications'
    ],
    contributions: [
      'Designed and implemented the frontend interface',
      'Built the WebSocket server for real-time messaging',
      'Implemented user authentication system',
      'Created responsive design for mobile and desktop'
    ],
    codePreview: {
      file: 'ChatComponent.tsx',
      language: 'typescript',
      code: `// Real-time chat component
import React, { useState, useEffect } from 'react';
import { useWebSocket } from '../hooks/useWebSocket';

export const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const { socket, isConnected } = useWebSocket();

  const sendMessage = () => {
    if (!inputText.trim() || !socket) return;
    // Send message logic here
    setInputText('');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="text">{message.text}</span>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};`
    },
    githubUrl: 'https://github.com/bjornbradley/chat-app-cse340',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express']
  },
    // (36) AME 404 Reading the Algorithm
    {
    id: 'class-36',
    title: 'AME404 - Reading the Algorithm',
    course: 'AME404 - Reading the Algorithm',
    semester: 'Spring 2026',
    description: 'A full-stack chat application with real-time messaging, user authentication, and file sharing capabilities.',
    whatLearned: [
      'WebSocket implementation for real-time communication',
      'User authentication and session management',
      'Database design for chat applications',
      'Security best practices for web applications'
    ],
    contributions: [
      'Designed and implemented the frontend interface',
      'Built the WebSocket server for real-time messaging',
      'Implemented user authentication system',
      'Created responsive design for mobile and desktop'
    ],
    codePreview: {
      file: 'ChatComponent.tsx',
      language: 'typescript',
      code: `// Real-time chat component
import React, { useState, useEffect } from 'react';
import { useWebSocket } from '../hooks/useWebSocket';

export const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const { socket, isConnected } = useWebSocket();

  const sendMessage = () => {
    if (!inputText.trim() || !socket) return;
    // Send message logic here
    setInputText('');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="text">{message.text}</span>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};`
    },
    githubUrl: 'https://github.com/bjornbradley/chat-app-cse340',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express']
  },

  //FALL 2025
    // (29) AME 436 Animating Virtual Worlds
    {
    id: 'class-29',
    title: 'AME436 - Animating Virtual Worlds',
    course: 'AME436 - Animating Virtual Worlds',
    semester: 'Fall 2025',
    description: 'A full-stack chat application with real-time messaging, user authentication, and file sharing capabilities.',
    whatLearned: [
      'WebSocket implementation for real-time communication',
      'User authentication and session management',
      'Database design for chat applications',
      'Security best practices for web applications'
    ],
    contributions: [
      'Designed and implemented the frontend interface',
      'Built the WebSocket server for real-time messaging',
      'Implemented user authentication system',
      'Created responsive design for mobile and desktop'
    ],
    codePreview: {
      file: 'ChatComponent.tsx',
      language: 'typescript',
      code: `// Real-time chat component
import React, { useState, useEffect } from 'react';
import { useWebSocket } from '../hooks/useWebSocket';

export const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const { socket, isConnected } = useWebSocket();

  const sendMessage = () => {
    if (!inputText.trim() || !socket) return;
    // Send message logic here
    setInputText('');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="text">{message.text}</span>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};`
    },
    githubUrl: 'https://github.com/bjornbradley/chat-app-cse340',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express']
  },
    // (30) AME 485 MAS Capstone I
    {
    id: 'class-30',
    title: 'AME485 - MAS Capstone I',
    course: 'AME485 - MAS Capstone I',
    semester: 'Fall 2025',
    description: 'A full-stack chat application with real-time messaging, user authentication, and file sharing capabilities.',
    whatLearned: [
      'WebSocket implementation for real-time communication',
      'User authentication and session management',
      'Database design for chat applications',
      'Security best practices for web applications'
    ],
    contributions: [
      'Designed and implemented the frontend interface',
      'Built the WebSocket server for real-time messaging',
      'Implemented user authentication system',
      'Created responsive design for mobile and desktop'
    ],
    codePreview: {
      file: 'ChatComponent.tsx',
      language: 'typescript',
      code: `// Real-time chat component
import React, { useState, useEffect } from 'react';
import { useWebSocket } from '../hooks/useWebSocket';

export const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const { socket, isConnected } = useWebSocket();

  const sendMessage = () => {
    if (!inputText.trim() || !socket) return;
    // Send message logic here
    setInputText('');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="text">{message.text}</span>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};`
    },
    githubUrl: 'https://github.com/bjornbradley/chat-app-cse340',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express']
  },
    // (31) CPI 360 Decision Making & Problem Solving
    {
    id: 'class-31',
    title: 'CPI360 - Decision Making & Problem Solving',
    course: 'CPI360 - Decision Making & Problem Solving',
    semester: 'Fall 2025',
    description: 'A full-stack chat application with real-time messaging, user authentication, and file sharing capabilities.',
    whatLearned: [
      'WebSocket implementation for real-time communication',
      'User authentication and session management',
      'Database design for chat applications',
      'Security best practices for web applications'
    ],
    contributions: [
      'Designed and implemented the frontend interface',
      'Built the WebSocket server for real-time messaging',
      'Implemented user authentication system',
      'Created responsive design for mobile and desktop'
    ],
    codePreview: {
      file: 'ChatComponent.tsx',
      language: 'typescript',
      code: `// Real-time chat component
import React, { useState, useEffect } from 'react';
import { useWebSocket } from '../hooks/useWebSocket';

export const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const { socket, isConnected } = useWebSocket();

  const sendMessage = () => {
    if (!inputText.trim() || !socket) return;
    // Send message logic here
    setInputText('');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="text">{message.text}</span>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};`
    },
    githubUrl: 'https://github.com/bjornbradley/chat-app-cse340',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express']
  },
    // (32) IAP 362 Games and Narratology
    {
    id: 'class-32',
    title: 'IAP362 - Games and Narratology',
    course: 'IAP362 - Games and Narratology',
    semester: 'Fall 2025',
    description: 'A full-stack chat application with real-time messaging, user authentication, and file sharing capabilities.',
    whatLearned: [
      'WebSocket implementation for real-time communication',
      'User authentication and session management',
      'Database design for chat applications',
      'Security best practices for web applications'
    ],
    contributions: [
      'Designed and implemented the frontend interface',
      'Built the WebSocket server for real-time messaging',
      'Implemented user authentication system',
      'Created responsive design for mobile and desktop'
    ],
    codePreview: {
      file: 'ChatComponent.tsx',
      language: 'typescript',
      code: `// Real-time chat component
import React, { useState, useEffect } from 'react';
import { useWebSocket } from '../hooks/useWebSocket';

export const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const { socket, isConnected } = useWebSocket();

  const sendMessage = () => {
    if (!inputText.trim() || !socket) return;
    // Send message logic here
    setInputText('');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="text">{message.text}</span>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};`
    },
    githubUrl: 'https://github.com/bjornbradley/chat-app-cse340',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express']
  },
    // (33) AME 244 Intro Interactive Environments
    {
    id: 'class-33',
    title: 'AME244 - Intro Interactive Environments',
    course: 'AME244 - Intro Interactive Environments',
    semester: 'Fall 2025',
    description: 'A full-stack chat application with real-time messaging, user authentication, and file sharing capabilities.',
    whatLearned: [
      'WebSocket implementation for real-time communication',
      'User authentication and session management',
      'Database design for chat applications',
      'Security best practices for web applications'
    ],
    contributions: [
      'Designed and implemented the frontend interface',
      'Built the WebSocket server for real-time messaging',
      'Implemented user authentication system',
      'Created responsive design for mobile and desktop'
    ],
    codePreview: {
      file: 'ChatComponent.tsx',
      language: 'typescript',
      code: `// Real-time chat component
import React, { useState, useEffect } from 'react';
import { useWebSocket } from '../hooks/useWebSocket';

export const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const { socket, isConnected } = useWebSocket();

  const sendMessage = () => {
    if (!inputText.trim() || !socket) return;
    // Send message logic here
    setInputText('');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="text">{message.text}</span>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};`
    },
    githubUrl: 'https://github.com/bjornbradley/chat-app-cse340',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express']
  },

  //SPRING 2025
    // (23) AME 411 Advanced Interactive Sound
    {
    id: 'class-23',
    title: 'AME411 - Advanced Interactive Sound',
    course: 'AME411 - Advanced Interactive Sound',
    semester: 'Spring 2025',
    description: 'A full-stack chat application with real-time messaging, user authentication, and file sharing capabilities.',
    whatLearned: [
      'WebSocket implementation for real-time communication',
      'User authentication and session management',
      'Database design for chat applications',
      'Security best practices for web applications'
    ],
    contributions: [
      'Designed and implemented the frontend interface',
      'Built the WebSocket server for real-time messaging',
      'Implemented user authentication system',
      'Created responsive design for mobile and desktop'
    ],
    codePreview: {
      file: 'ChatComponent.tsx',
      language: 'typescript',
      code: `// Real-time chat component
import React, { useState, useEffect } from 'react';
import { useWebSocket } from '../hooks/useWebSocket';

export const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const { socket, isConnected } = useWebSocket();

  const sendMessage = () => {
    if (!inputText.trim() || !socket) return;
    // Send message logic here
    setInputText('');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="text">{message.text}</span>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};`
    },
    githubUrl: 'https://github.com/bjornbradley/chat-app-cse340',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express']
  },
    // (24) CSE 220 Programming for Computer Engr
    {
    id: 'class-24',
    title: 'CSE220 - Programming for Computer Engineering',
    course: 'CSE220 - Programming for Computer Engineering',
    semester: 'Spring 2025',
    description: 'A full-stack chat application with real-time messaging, user authentication, and file sharing capabilities.',
    whatLearned: [
      'WebSocket implementation for real-time communication',
      'User authentication and session management',
      'Database design for chat applications',
      'Security best practices for web applications'
    ],
    contributions: [
      'Designed and implemented the frontend interface',
      'Built the WebSocket server for real-time messaging',
      'Implemented user authentication system',
      'Created responsive design for mobile and desktop'
    ],
    codePreview: {
      file: 'ChatComponent.tsx',
      language: 'typescript',
      code: `// Real-time chat component
import React, { useState, useEffect } from 'react';
import { useWebSocket } from '../hooks/useWebSocket';

export const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const { socket, isConnected } = useWebSocket();

  const sendMessage = () => {
    if (!inputText.trim() || !socket) return;
    // Send message logic here
    setInputText('');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="text">{message.text}</span>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};`
    },
    githubUrl: 'https://github.com/bjornbradley/chat-app-cse340',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express']
  },
    // (25) CSE 360 Intro to Software Engineering
    {
    id: 'class-25',
    title: 'CSE360 - Intro to Software Engineering',
    course: 'CSE360 - Intro to Software Engineering',
    semester: 'Spring 2025',
    description: 'A full-stack chat application with real-time messaging, user authentication, and file sharing capabilities.',
    whatLearned: [
      'WebSocket implementation for real-time communication',
      'User authentication and session management',
      'Database design for chat applications',
      'Security best practices for web applications'
    ],
    contributions: [
      'Designed and implemented the frontend interface',
      'Built the WebSocket server for real-time messaging',
      'Implemented user authentication system',
      'Created responsive design for mobile and desktop'
    ],
    codePreview: {
      file: 'ChatComponent.tsx',
      language: 'typescript',
      code: `// Real-time chat component
import React, { useState, useEffect } from 'react';
import { useWebSocket } from '../hooks/useWebSocket';

export const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const { socket, isConnected } = useWebSocket();

  const sendMessage = () => {
    if (!inputText.trim() || !socket) return;
    // Send message logic here
    setInputText('');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="text">{message.text}</span>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};`
    },
    githubUrl: 'https://github.com/bjornbradley/chat-app-cse340',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express']
  },
    // (26) MSC 115 Music Production Fundamentals
    {
    id: 'class-26',
    title: 'MSC115 - Music Production Fundamentals',
    course: 'MSC115 - Music Production Fundamentals',
    semester: 'Spring 2025',
    description: 'A full-stack chat application with real-time messaging, user authentication, and file sharing capabilities.',
    whatLearned: [
      'WebSocket implementation for real-time communication',
      'User authentication and session management',
      'Database design for chat applications',
      'Security best practices for web applications'
    ],
    contributions: [
      'Designed and implemented the frontend interface',
      'Built the WebSocket server for real-time messaging',
      'Implemented user authentication system',
      'Created responsive design for mobile and desktop'
    ],
    codePreview: {
      file: 'ChatComponent.tsx',
      language: 'typescript',
      code: `// Real-time chat component
import React, { useState, useEffect } from 'react';
import { useWebSocket } from '../hooks/useWebSocket';

export const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const { socket, isConnected } = useWebSocket();

  const sendMessage = () => {
    if (!inputText.trim() || !socket) return;
    // Send message logic here
    setInputText('');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="text">{message.text}</span>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};`
    },
    githubUrl: 'https://github.com/bjornbradley/chat-app-cse340',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express']
  },
    // (27) MUS 100 Fundamentals of Music Notation
    {
    id: 'class-27',
    title: 'MUS100 - Fundamentals of Music Notation',
    course: 'MUS100 - Fundamentals of Music Notation',
    semester: 'Spring 2025',
    description: 'A full-stack chat application with real-time messaging, user authentication, and file sharing capabilities.',
    whatLearned: [
      'WebSocket implementation for real-time communication',
      'User authentication and session management',
      'Database design for chat applications',
      'Security best practices for web applications'
    ],
    contributions: [
      'Designed and implemented the frontend interface',
      'Built the WebSocket server for real-time messaging',
      'Implemented user authentication system',
      'Created responsive design for mobile and desktop'
    ],
    codePreview: {
      file: 'ChatComponent.tsx',
      language: 'typescript',
      code: `// Real-time chat component
import React, { useState, useEffect } from 'react';
import { useWebSocket } from '../hooks/useWebSocket';

export const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const { socket, isConnected } = useWebSocket();

  const sendMessage = () => {
    if (!inputText.trim() || !socket) return;
    // Send message logic here
    setInputText('');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="text">{message.text}</span>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};`
    },
    githubUrl: 'https://github.com/bjornbradley/chat-app-cse340',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express']
  },
    // (28) AME 400 Minds and Machines
    {
    id: 'class-28',
    title: 'AME400 - Minds and Machines',
    course: 'AME400 - Minds and Machines',
    semester: 'Spring 2025',
    description: 'A full-stack chat application with real-time messaging, user authentication, and file sharing capabilities.',
    whatLearned: [
      'WebSocket implementation for real-time communication',
      'User authentication and session management',
      'Database design for chat applications',
      'Security best practices for web applications'
    ],
    contributions: [
      'Designed and implemented the frontend interface',
      'Built the WebSocket server for real-time messaging',
      'Implemented user authentication system',
      'Created responsive design for mobile and desktop'
    ],
    codePreview: {
      file: 'ChatComponent.tsx',
      language: 'typescript',
      code: `// Real-time chat component
import React, { useState, useEffect } from 'react';
import { useWebSocket } from '../hooks/useWebSocket';

export const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const { socket, isConnected } = useWebSocket();

  const sendMessage = () => {
    if (!inputText.trim() || !socket) return;
    // Send message logic here
    setInputText('');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="text">{message.text}</span>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};`
    },
    githubUrl: 'https://github.com/bjornbradley/chat-app-cse340',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express']
  },

  //FALL 2024
    // (18) AME 430 Mac Development for Media Arts
    {
    id: 'class-18',
    title: 'AME430 - Mac Development for Media Arts',
    course: 'AME430 - Mac Development for Media Arts',
    semester: 'Fall 2024',
    description: 'A full-stack chat application with real-time messaging, user authentication, and file sharing capabilities.',
    whatLearned: [
      'WebSocket implementation for real-time communication',
      'User authentication and session management',
      'Database design for chat applications',
      'Security best practices for web applications'
    ],
    contributions: [
      'Designed and implemented the frontend interface',
      'Built the WebSocket server for real-time messaging',
      'Implemented user authentication system',
      'Created responsive design for mobile and desktop'
    ],
    codePreview: {
      file: 'ChatComponent.tsx',
      language: 'typescript',
      code: `// Real-time chat component
import React, { useState, useEffect } from 'react';
import { useWebSocket } from '../hooks/useWebSocket';

export const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const { socket, isConnected } = useWebSocket();

  const sendMessage = () => {
    if (!inputText.trim() || !socket) return;
    // Send message logic here
    setInputText('');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="text">{message.text}</span>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};`
    },
    githubUrl: 'https://github.com/bjornbradley/chat-app-cse340',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express']
  },
    // (19) AME 494 Topic: Programming for the Internet of Things
    {
    id: 'class-19',
    title: 'AME494 - Programming for the Internet of Things',
    course: 'AME494 - Programming for the Internet of Things',
    semester: 'Fall 2024',
    description: 'A full-stack chat application with real-time messaging, user authentication, and file sharing capabilities.',
    whatLearned: [
      'WebSocket implementation for real-time communication',
      'User authentication and session management',
      'Database design for chat applications',
      'Security best practices for web applications'
    ],
    contributions: [
      'Designed and implemented the frontend interface',
      'Built the WebSocket server for real-time messaging',
      'Implemented user authentication system',
      'Created responsive design for mobile and desktop'
    ],
    codePreview: {
      file: 'ChatComponent.tsx',
      language: 'typescript',
      code: `// Real-time chat component
import React, { useState, useEffect } from 'react';
import { useWebSocket } from '../hooks/useWebSocket';

export const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const { socket, isConnected } = useWebSocket();

  const sendMessage = () => {
    if (!inputText.trim() || !socket) return;
    // Send message logic here
    setInputText('');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="text">{message.text}</span>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};`
    },
    githubUrl: 'https://github.com/bjornbradley/chat-app-cse340',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express']
  },
    // (20) CIS 300 Web Design and Development
    {
    id: 'class-20',
    title: 'CIS300 - Web Design and Development',
    course: 'CIS300 - Web Design and Development',
    semester: 'Fall 2024',
    description: 'A full-stack chat application with real-time messaging, user authentication, and file sharing capabilities.',
    whatLearned: [
      'WebSocket implementation for real-time communication',
      'User authentication and session management',
      'Database design for chat applications',
      'Security best practices for web applications'
    ],
    contributions: [
      'Designed and implemented the frontend interface',
      'Built the WebSocket server for real-time messaging',
      'Implemented user authentication system',
      'Created responsive design for mobile and desktop'
    ],
    codePreview: {
      file: 'ChatComponent.tsx',
      language: 'typescript',
      code: `// Real-time chat component
import React, { useState, useEffect } from 'react';
import { useWebSocket } from '../hooks/useWebSocket';

export const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const { socket, isConnected } = useWebSocket();

  const sendMessage = () => {
    if (!inputText.trim() || !socket) return;
    // Send message logic here
    setInputText('');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="text">{message.text}</span>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};`
    },
    githubUrl: 'https://github.com/bjornbradley/chat-app-cse340',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express']
  },
    // (21) COM 263 Elements Intercultural Comm
    {
    id: 'class-21',
    title: 'COM263 - Elements Intercultural Comm',
    course: 'COM263 - Elements Intercultural Comm',
    semester: 'Fall 2024',
    description: 'A full-stack chat application with real-time messaging, user authentication, and file sharing capabilities.',
    whatLearned: [
      'WebSocket implementation for real-time communication',
      'User authentication and session management',
      'Database design for chat applications',
      'Security best practices for web applications'
    ],
    contributions: [
      'Designed and implemented the frontend interface',
      'Built the WebSocket server for real-time messaging',
      'Implemented user authentication system',
      'Created responsive design for mobile and desktop'
    ],
    codePreview: {
      file: 'ChatComponent.tsx',
      language: 'typescript',
      code: `// Real-time chat component
import React, { useState, useEffect } from 'react';
import { useWebSocket } from '../hooks/useWebSocket';

export const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const { socket, isConnected } = useWebSocket();

  const sendMessage = () => {
    if (!inputText.trim() || !socket) return;
    // Send message logic here
    setInputText('');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="text">{message.text}</span>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};`
    },
    githubUrl: 'https://github.com/bjornbradley/chat-app-cse340',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express']
  },
    // (22) IAP 322 Multitrack Digital Recording
    {
    id: 'class-22',
    title: 'IAP322 - Multitrack Digital Recording',
    course: 'IAP322 - Multitrack Digital Recording',
    semester: 'Fall 2024',
    description: 'A full-stack chat application with real-time messaging, user authentication, and file sharing capabilities.',
    whatLearned: [
      'WebSocket implementation for real-time communication',
      'User authentication and session management',
      'Database design for chat applications',
      'Security best practices for web applications'
    ],
    contributions: [
      'Designed and implemented the frontend interface',
      'Built the WebSocket server for real-time messaging',
      'Implemented user authentication system',
      'Created responsive design for mobile and desktop'
    ],
    codePreview: {
      file: 'ChatComponent.tsx',
      language: 'typescript',
      code: `// Real-time chat component
import React, { useState, useEffect } from 'react';
import { useWebSocket } from '../hooks/useWebSocket';

export const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const { socket, isConnected } = useWebSocket();

  const sendMessage = () => {
    if (!inputText.trim() || !socket) return;
    // Send message logic here
    setInputText('');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="text">{message.text}</span>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};`
    },
    githubUrl: 'https://github.com/bjornbradley/chat-app-cse340',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express']
  },

  //SPRING 2024
    // (13) AME 112 Computational Thinking for MAS	
    {
    id: 'class-13',
    title: 'AME112 - Computational Thinking for MAS',
    course: 'AME112 - Computational Thinking for MAS',
    semester: 'Spring 2024',
    description: 'A full-stack chat application with real-time messaging, user authentication, and file sharing capabilities.',
    whatLearned: [
      'WebSocket implementation for real-time communication',
      'User authentication and session management',
      'Database design for chat applications',
      'Security best practices for web applications'
    ],
    contributions: [
      'Designed and implemented the frontend interface',
      'Built the WebSocket server for real-time messaging',
      'Implemented user authentication system',
      'Created responsive design for mobile and desktop'
    ],
    codePreview: {
      file: 'ChatComponent.tsx',
      language: 'typescript',
      code: `// Real-time chat component
import React, { useState, useEffect } from 'react';
import { useWebSocket } from '../hooks/useWebSocket';

export const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const { socket, isConnected } = useWebSocket();

  const sendMessage = () => {
    if (!inputText.trim() || !socket) return;
    // Send message logic here
    setInputText('');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="text">{message.text}</span>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};`
    },
    githubUrl: 'https://github.com/bjornbradley/chat-app-cse340',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express']
  },	
    // (14) AME 220 Programming for the Web
    {
    id: 'class-14',
    title: 'AME220 - Programming for the Web',
    course: 'AME220 - Programming for the Web',
    semester: 'Spring 2024',
    description: 'A full-stack chat application with real-time messaging, user authentication, and file sharing capabilities.',
    whatLearned: [
      'WebSocket implementation for real-time communication',
      'User authentication and session management',
      'Database design for chat applications',
      'Security best practices for web applications'
    ],
    contributions: [
      'Designed and implemented the frontend interface',
      'Built the WebSocket server for real-time messaging',
      'Implemented user authentication system',
      'Created responsive design for mobile and desktop'
    ],
    codePreview: {
      file: 'ChatComponent.tsx',
      language: 'typescript',
      code: `// Real-time chat component
import React, { useState, useEffect } from 'react';
import { useWebSocket } from '../hooks/useWebSocket';

export const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const { socket, isConnected } = useWebSocket();

  const sendMessage = () => {
    if (!inputText.trim() || !socket) return;
    // Send message logic here
    setInputText('');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="text">{message.text}</span>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};`
    },
    githubUrl: 'https://github.com/bjornbradley/chat-app-cse340',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express']
  },
    // (15) AME 230 Programming for Media Arts
    {
    id: 'class-15',
    title: 'AME230 - Programming for Media Arts',
    course: 'AME230 - Programming for Media Arts',
    semester: 'Spring 2024',
    description: 'A full-stack chat application with real-time messaging, user authentication, and file sharing capabilities.',
    whatLearned: [
      'WebSocket implementation for real-time communication',
      'User authentication and session management',
      'Database design for chat applications',
      'Security best practices for web applications'
    ],
    contributions: [
      'Designed and implemented the frontend interface',
      'Built the WebSocket server for real-time messaging',
      'Implemented user authentication system',
      'Created responsive design for mobile and desktop'
    ],
    codePreview: {
      file: 'ChatComponent.tsx',
      language: 'typescript',
      code: `// Real-time chat component
import React, { useState, useEffect } from 'react';
import { useWebSocket } from '../hooks/useWebSocket';

export const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const { socket, isConnected } = useWebSocket();

  const sendMessage = () => {
    if (!inputText.trim() || !socket) return;
    // Send message logic here
    setInputText('');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="text">{message.text}</span>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};`
    },
    githubUrl: 'https://github.com/bjornbradley/chat-app-cse340',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express']
  },
    // (16) AME 111 Intro to Digital Culture
    {
    id: 'class-16',
    title: 'AME111 - Intro to Digital Culture',
    course: 'AME111 - Intro to Digital Culture',
    semester: 'Spring 2024',
    description: 'A full-stack chat application with real-time messaging, user authentication, and file sharing capabilities.',
    whatLearned: [
      'WebSocket implementation for real-time communication',
      'User authentication and session management',
      'Database design for chat applications',
      'Security best practices for web applications'
    ],
    contributions: [
      'Designed and implemented the frontend interface',
      'Built the WebSocket server for real-time messaging',
      'Implemented user authentication system',
      'Created responsive design for mobile and desktop'
    ],
    codePreview: {
      file: 'ChatComponent.tsx',
      language: 'typescript',
      code: `// Real-time chat component
import React, { useState, useEffect } from 'react';
import { useWebSocket } from '../hooks/useWebSocket';

export const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const { socket, isConnected } = useWebSocket();

  const sendMessage = () => {
    if (!inputText.trim() || !socket) return;
    // Send message logic here
    setInputText('');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="text">{message.text}</span>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};`
    },
    githubUrl: 'https://github.com/bjornbradley/chat-app-cse340',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express']
  },
    // (17) AME 130 Prototyping Dreams
    {
    id: 'class-17',
    title: 'AME130 - Prototyping Dreams',
    course: 'AME130 - Prototyping Dreams',
    semester: 'Spring 2024',
    description: 'A full-stack chat application with real-time messaging, user authentication, and file sharing capabilities.',
    whatLearned: [
      'WebSocket implementation for real-time communication',
      'User authentication and session management',
      'Database design for chat applications',
      'Security best practices for web applications'
    ],
    contributions: [
      'Designed and implemented the frontend interface',
      'Built the WebSocket server for real-time messaging',
      'Implemented user authentication system',
      'Created responsive design for mobile and desktop'
    ],
    codePreview: {
      file: 'ChatComponent.tsx',
      language: 'typescript',
      code: `// Real-time chat component
import React, { useState, useEffect } from 'react';
import { useWebSocket } from '../hooks/useWebSocket';

export const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const { socket, isConnected } = useWebSocket();

  const sendMessage = () => {
    if (!inputText.trim() || !socket) return;
    // Send message logic here
    setInputText('');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="text">{message.text}</span>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};`
    },
    githubUrl: 'https://github.com/bjornbradley/chat-app-cse340',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express']
  },
  
  //Fall 2023
    // (9) CSE 120 Digital Design Fundamentals	
    {
    id: 'class-9',
    title: 'CSE120 - Digital Design Fundamentals',
    course: 'CSE120 - Digital Design Fundamentals',
    semester: 'Fall 2023',
    description: 'A full-stack chat application with real-time messaging, user authentication, and file sharing capabilities.',
    whatLearned: [
      'WebSocket implementation for real-time communication',
      'User authentication and session management',
      'Database design for chat applications',
      'Security best practices for web applications'
    ],
    contributions: [
      'Designed and implemented the frontend interface',
      'Built the WebSocket server for real-time messaging',
      'Implemented user authentication system',
      'Created responsive design for mobile and desktop'
    ],
    codePreview: {
      file: 'ChatComponent.tsx',
      language: 'typescript',
      code: `// Real-time chat component
import React, { useState, useEffect } from 'react';
import { useWebSocket } from '../hooks/useWebSocket';

export const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const { socket, isConnected } = useWebSocket();

  const sendMessage = () => {
    if (!inputText.trim() || !socket) return;
    // Send message logic here
    setInputText('');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="text">{message.text}</span>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};`
    },
    githubUrl: 'https://github.com/bjornbradley/chat-app-cse340',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express']
  },				
    // (10) CSE 240 Intro to Programming Languages
    {
    id: 'class-10',
    title: 'CSE240 - Intro to Programming Languages',
    course: 'CSE240 - Intro to Programming Languages',
    semester: 'Fall 2023',
    description: 'A full-stack chat application with real-time messaging, user authentication, and file sharing capabilities.',
    whatLearned: [
      'WebSocket implementation for real-time communication',
      'User authentication and session management',
      'Database design for chat applications',
      'Security best practices for web applications'
    ],
    contributions: [
      'Designed and implemented the frontend interface',
      'Built the WebSocket server for real-time messaging',
      'Implemented user authentication system',
      'Created responsive design for mobile and desktop'
    ],
    codePreview: {
      file: 'ChatComponent.tsx',
      language: 'typescript',
      code: `// Real-time chat component
import React, { useState, useEffect } from 'react';
import { useWebSocket } from '../hooks/useWebSocket';

export const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const { socket, isConnected } = useWebSocket();

  const sendMessage = () => {
    if (!inputText.trim() || !socket) return;
    // Send message logic here
    setInputText('');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="text">{message.text}</span>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};`
    },
    githubUrl: 'https://github.com/bjornbradley/chat-app-cse340',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express']
  },
    // (11) MAT 243 Discrete Math Structures
    {
    id: 'class-11',
    title: 'MAT243 - Discrete Math Structures',
    course: 'MAT243 - Discrete Math Structures',
    semester: 'Fall 2023',
    description: 'A full-stack chat application with real-time messaging, user authentication, and file sharing capabilities.',
    whatLearned: [
      'WebSocket implementation for real-time communication',
      'User authentication and session management',
      'Database design for chat applications',
      'Security best practices for web applications'
    ],
    contributions: [
      'Designed and implemented the frontend interface',
      'Built the WebSocket server for real-time messaging',
      'Implemented user authentication system',
      'Created responsive design for mobile and desktop'
    ],
    codePreview: {
      file: 'ChatComponent.tsx',
      language: 'typescript',
      code: `// Real-time chat component
import React, { useState, useEffect } from 'react';
import { useWebSocket } from '../hooks/useWebSocket';

export const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const { socket, isConnected } = useWebSocket();

  const sendMessage = () => {
    if (!inputText.trim() || !socket) return;
    // Send message logic here
    setInputText('');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="text">{message.text}</span>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};`
    },
    githubUrl: 'https://github.com/bjornbradley/chat-app-cse340',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express']
  },
    // (12) MAT 267 Calculus for Engineers III
    {
    id: 'class-12',
    title: 'MAT267 - Calculus for Engineers III',
    course: 'MAT267 - Calculus for Engineers III',
    semester: 'Fall 2023',
    description: 'A full-stack chat application with real-time messaging, user authentication, and file sharing capabilities.',
    whatLearned: [
      'WebSocket implementation for real-time communication',
      'User authentication and session management',
      'Database design for chat applications',
      'Security best practices for web applications'
    ],
    contributions: [
      'Designed and implemented the frontend interface',
      'Built the WebSocket server for real-time messaging',
      'Implemented user authentication system',
      'Created responsive design for mobile and desktop'
    ],
    codePreview: {
      file: 'ChatComponent.tsx',
      language: 'typescript',
      code: `// Real-time chat component
import React, { useState, useEffect } from 'react';
import { useWebSocket } from '../hooks/useWebSocket';

export const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const { socket, isConnected } = useWebSocket();

  const sendMessage = () => {
    if (!inputText.trim() || !socket) return;
    // Send message logic here
    setInputText('');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="text">{message.text}</span>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};`
    },
    githubUrl: 'https://github.com/bjornbradley/chat-app-cse340',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express']
  },

  //Summer 2023
    // (8) MAT 266 - Calculus for Engineers II
    {
    id: 'class-8',
    title: 'MAT266 - Calculus for Engineers II',
    course: 'MAT266 - Calculus for Engineers II',
    semester: 'Summer 2023',
    description: 'A full-stack chat application with real-time messaging, user authentication, and file sharing capabilities.',
    whatLearned: [
      'WebSocket implementation for real-time communication',
      'User authentication and session management',
      'Database design for chat applications',
      'Security best practices for web applications'
    ],
    contributions: [
      'Designed and implemented the frontend interface',
      'Built the WebSocket server for real-time messaging',
      'Implemented user authentication system',
      'Created responsive design for mobile and desktop'
    ],
    codePreview: {
      file: 'ChatComponent.tsx',
      language: 'typescript',
      code: `// Real-time chat component
import React, { useState, useEffect } from 'react';
import { useWebSocket } from '../hooks/useWebSocket';

export const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const { socket, isConnected } = useWebSocket();

  const sendMessage = () => {
    if (!inputText.trim() || !socket) return;
    // Send message logic here
    setInputText('');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="text">{message.text}</span>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};`
    },
    githubUrl: 'https://github.com/bjornbradley/chat-app-cse340',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express']
  },

  //SPRING 2023
    // (5) CSE 205 - Object-Oriented Programming & Data Structures
    {
    id: 'class-5',
    title: 'CSE205 - Object-Oriented Programming & Data Structures',
    course: 'CSE205 - Object-Oriented Programming & Data Structures',
    semester: 'Spring 2023',
    description: 'A full-stack chat application with real-time messaging, user authentication, and file sharing capabilities.',
    whatLearned: [
      'WebSocket implementation for real-time communication',
      'User authentication and session management',
      'Database design for chat applications',
      'Security best practices for web applications'
    ],
    contributions: [
      'Designed and implemented the frontend interface',
      'Built the WebSocket server for real-time messaging',
      'Implemented user authentication system',
      'Created responsive design for mobile and desktop'
    ],
    codePreview: {
      file: 'ChatComponent.tsx',
      language: 'typescript',
      code: `// Real-time chat component
import React, { useState, useEffect } from 'react';
import { useWebSocket } from '../hooks/useWebSocket';

export const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const { socket, isConnected } = useWebSocket();

  const sendMessage = () => {
    if (!inputText.trim() || !socket) return;
    // Send message logic here
    setInputText('');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="text">{message.text}</span>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};`
    },
    githubUrl: 'https://github.com/bjornbradley/chat-app-cse340',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express']
  },
    // (6) MAT 265 - Calculus for Engineers I
    {
    id: 'class-6',
    title: 'MAT265 - Calculus for Engineers I',
    course: 'MAT265 - Calculus for Engineers I',
    semester: 'Spring 2023',
    description: 'A full-stack chat application with real-time messaging, user authentication, and file sharing capabilities.',
    whatLearned: [
      'WebSocket implementation for real-time communication',
      'User authentication and session management',
      'Database design for chat applications',
      'Security best practices for web applications'
    ],
    contributions: [
      'Designed and implemented the frontend interface',
      'Built the WebSocket server for real-time messaging',
      'Implemented user authentication system',
      'Created responsive design for mobile and desktop'
    ],
    codePreview: {
      file: 'ChatComponent.tsx',
      language: 'typescript',
      code: `// Real-time chat component
import React, { useState, useEffect } from 'react';
import { useWebSocket } from '../hooks/useWebSocket';

export const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const { socket, isConnected } = useWebSocket();

  const sendMessage = () => {
    if (!inputText.trim() || !socket) return;
    // Send message logic here
    setInputText('');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="text">{message.text}</span>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};`
    },
    githubUrl: 'https://github.com/bjornbradley/chat-app-cse340',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express']
  },
    // (7) HON 272 - The Human Event II
    {
    id: 'class-7',
    title: 'HON272 - The Human Event II',
    course: 'HON272 - The Human Event II',
    semester: 'Spring 2023',
    description: 'A full-stack chat application with real-time messaging, user authentication, and file sharing capabilities.',
    whatLearned: [
      'WebSocket implementation for real-time communication',
      'User authentication and session management',
      'Database design for chat applications',
      'Security best practices for web applications'
    ],
    contributions: [
      'Designed and implemented the frontend interface',
      'Built the WebSocket server for real-time messaging',
      'Implemented user authentication system',
      'Created responsive design for mobile and desktop'
    ],
    codePreview: {
      file: 'ChatComponent.tsx',
      language: 'typescript',
      code: `// Real-time chat component
import React, { useState, useEffect } from 'react';
import { useWebSocket } from '../hooks/useWebSocket';

export const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const { socket, isConnected } = useWebSocket();

  const sendMessage = () => {
    if (!inputText.trim() || !socket) return;
    // Send message logic here
    setInputText('');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="text">{message.text}</span>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};`
    },
    githubUrl: 'https://github.com/bjornbradley/chat-app-cse340',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express']
  },

  //Fall 2022
    // (1) CSE 110 - Principles of Programming
    {
    id: 'class-1',
    title: 'CSE110 - Principles of Programming',
    course: 'CSE110 - Principles of Programming',
    semester: 'Fall 2022',
    description: 'A full-stack chat application with real-time messaging, user authentication, and file sharing capabilities.',
    whatLearned: [
      'WebSocket implementation for real-time communication',
      'User authentication and session management',
      'Database design for chat applications',
      'Security best practices for web applications'
    ],
    contributions: [
      'Designed and implemented the frontend interface',
      'Built the WebSocket server for real-time messaging',
      'Implemented user authentication system',
      'Created responsive design for mobile and desktop'
    ],
    codePreview: {
      file: 'ChatComponent.tsx',
      language: 'typescript',
      code: `// Real-time chat component
import React, { useState, useEffect } from 'react';
import { useWebSocket } from '../hooks/useWebSocket';

export const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const { socket, isConnected } = useWebSocket();

  const sendMessage = () => {
    if (!inputText.trim() || !socket) return;
    // Send message logic here
    setInputText('');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="text">{message.text}</span>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};`
    },
    githubUrl: 'https://github.com/bjornbradley/chat-app-cse340',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express']
  },
    // (2) FSE 100 - Introduction to Engineering
    {
    id: 'class-2',
    title: 'FSE100 - Introduction to Engineering',
    course: 'FSE100 - Introduction to Engineering',
    semester: 'Fall 2022',
    description: 'A full-stack chat application with real-time messaging, user authentication, and file sharing capabilities.',
    whatLearned: [
      'WebSocket implementation for real-time communication',
      'User authentication and session management',
      'Database design for chat applications',
      'Security best practices for web applications'
    ],
    contributions: [
      'Designed and implemented the frontend interface',
      'Built the WebSocket server for real-time messaging',
      'Implemented user authentication system',
      'Created responsive design for mobile and desktop'
    ],
    codePreview: {
      file: 'ChatComponent.tsx',
      language: 'typescript',
      code: `// Real-time chat component
import React, { useState, useEffect } from 'react';
import { useWebSocket } from '../hooks/useWebSocket';

export const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const { socket, isConnected } = useWebSocket();

  const sendMessage = () => {
    if (!inputText.trim() || !socket) return;
    // Send message logic here
    setInputText('');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="text">{message.text}</span>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};`
    },
    githubUrl: 'https://github.com/bjornbradley/chat-app-cse340',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express']
  },
    // (3) HON 171 - The Human Event
    {
    id: 'class-3',
    title: 'HON171 - The Human Event',
    course: 'HON171 - The Human Event',
    semester: 'Fall 2022',
    description: 'A full-stack chat application with real-time messaging, user authentication, and file sharing capabilities.',
    whatLearned: [
      'WebSocket implementation for real-time communication',
      'User authentication and session management',
      'Database design for chat applications',
      'Security best practices for web applications'
    ],
    contributions: [
      'Designed and implemented the frontend interface',
      'Built the WebSocket server for real-time messaging',
      'Implemented user authentication system',
      'Created responsive design for mobile and desktop'
    ],
    codePreview: {
      file: 'ChatComponent.tsx',
      language: 'typescript',
      code: `// Real-time chat component
import React, { useState, useEffect } from 'react';
import { useWebSocket } from '../hooks/useWebSocket';

export const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const { socket, isConnected } = useWebSocket();

  const sendMessage = () => {
    if (!inputText.trim() || !socket) return;
    // Send message logic here
    setInputText('');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="text">{message.text}</span>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};`
    },
    githubUrl: 'https://github.com/bjornbradley/chat-app-cse340',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express']
  },
    // (4) MAT 170 - Precalculus
    {
    id: 'class-4',
    title: 'MAT170 - Precalculus',
    course: 'MAT170 - Precalculus',
    semester: 'Fall 2022',
    description: 'A full-stack chat application with real-time messaging, user authentication, and file sharing capabilities.',
    whatLearned: [
      'WebSocket implementation for real-time communication',
      'User authentication and session management',
      'Database design for chat applications',
      'Security best practices for web applications'
    ],
    contributions: [
      'Designed and implemented the frontend interface',
      'Built the WebSocket server for real-time messaging',
      'Implemented user authentication system',
      'Created responsive design for mobile and desktop'
    ],
    codePreview: {
      file: 'ChatComponent.tsx',
      language: 'typescript',
      code: `// Real-time chat component
import React, { useState, useEffect } from 'react';
import { useWebSocket } from '../hooks/useWebSocket';

export const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const { socket, isConnected } = useWebSocket();

  const sendMessage = () => {
    if (!inputText.trim() || !socket) return;
    // Send message logic here
    setInputText('');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="text">{message.text}</span>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};`
    },
    githubUrl: 'https://github.com/bjornbradley/chat-app-cse340',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express']
  },
]