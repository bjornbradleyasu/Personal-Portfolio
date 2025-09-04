import { SchoolProject } from './types'

export const classProjects: SchoolProject[] = [
  {
    id: 'class-1',
    title: 'CSE360 - Software Engineering',
    course: 'CSE 360 - Software Engineering',
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
  {
    id: 'class-2',
    title: 'CPI 300 -Web Design And Development',
    course: 'CPI 300 - Web Design And Development',
    description: 'A convolutional neural network for image classification trained on the CIFAR-10 dataset.',
    whatLearned: [
      'Deep learning fundamentals and neural network architecture',
      'Convolutional neural networks for image processing',
      'Data preprocessing and augmentation techniques',
      'Model training and evaluation metrics'
    ],
    contributions: [
      'Implemented CNN architecture using PyTorch',
      'Designed data preprocessing pipeline',
      'Optimized hyperparameters for better accuracy',
      'Created visualization tools for model analysis'
    ],
    codePreview: {
      file: 'CNN.py',
      language: 'python',
      code: `# Convolutional Neural Network for CIFAR-10
import torch
import torch.nn as nn
import torch.nn.functional as F

class CIFAR10CNN(nn.Module):
    def __init__(self, num_classes=10):
        super(CIFAR10CNN, self).__init__()
        
        # Convolutional layers
        self.conv1 = nn.Conv2d(3, 32, kernel_size=3, padding=1)
        self.conv2 = nn.Conv2d(32, 64, kernel_size=3, padding=1)
        
        # Fully connected layers
        self.fc1 = nn.Linear(64 * 8 * 8, 512)
        self.fc2 = nn.Linear(512, num_classes)
        
    def forward(self, x):
        x = F.relu(self.conv1(x))
        x = F.max_pool2d(x, 2)
        x = F.relu(self.conv2(x))
        x = F.max_pool2d(x, 2)
        x = x.view(-1, 64 * 8 * 8)
        x = F.relu(self.fc1(x))
        x = self.fc2(x)
        return x`
    },
    githubUrl: 'https://github.com/bjornbradleyasu/CIS300Fall2024',
    technologies: ['Python', 'PyTorch', 'NumPy', 'Matplotlib', 'Scikit-learn']
  },
  {
    id: 'class-3',
    title: 'AME411 - Advanced Interactive Sound',
    course: 'AME411 - Advanced Interactive Sound',
    description: 'A relational database management system with SQL query processing and transaction management.',
    whatLearned: [
      'Relational database design principles',
      'SQL query optimization and indexing',
      'Transaction management and ACID properties',
      'Database normalization and schema design'
    ],
    contributions: [
      'Designed normalized database schema',
      'Implemented SQL query parser and executor',
      'Built transaction management system',
      'Created indexing strategies for performance'
    ],
    codePreview: {
      file: 'QueryExecutor.java',
      language: 'java',
      code: `// Database query executor
import java.sql.*;
import java.util.*;

public class QueryExecutor {
    private Connection connection;
    private Statement statement;
    
    public QueryExecutor(Connection connection) {
        this.connection = connection;
        try {
            this.statement = connection.createStatement();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    
    public ResultSet executeQuery(String sql) throws SQLException {
        if (!isValidSQL(sql)) {
            throw new SQLException("Invalid SQL syntax");
        }
        
        ResultSet resultSet = statement.executeQuery(sql);
        logQuery(sql, System.currentTimeMillis());
        return resultSet;
    }
    
    private boolean isValidSQL(String sql) {
        return sql != null && !sql.trim().isEmpty();
    }
    
    private void logQuery(String sql, long timestamp) {
        System.out.println("Query executed: " + sql);
    }
}`
    },
    githubUrl: 'https://github.com/bjornbradley/dbms-cse412',
    technologies: ['Java', 'SQL', 'JDBC', 'JUnit', 'Maven']
  },
  {
    id: 'class-4',
    title: 'AME400 - Minds and Machines',
    course: 'AME400 - Minds and Machines',
    description: 'A collaborative software development project following agile methodologies and best practices.',
    whatLearned: [
      'Agile development methodologies',
      'Version control and collaboration tools',
      'Software testing and quality assurance',
      'Project management and documentation'
    ],
    contributions: [
      'Led frontend development team of 4 developers',
      'Implemented CI/CD pipeline with automated testing',
      'Created comprehensive project documentation',
      'Managed sprint planning and code reviews'
    ],
    codePreview: {
      file: 'ProjectManager.tsx',
      language: 'typescript',
      code: `// Project management dashboard
import React, { useState, useEffect } from 'react';

export const ProjectManager: React.FC = () => {
  const [projects, setProjects] = useState([]);
  const [sprints, setSprints] = useState([]);
  
  useEffect(() => {
    // Fetch project data
    fetchProjects();
  }, []);
  
  return (
    <div className="project-manager">
      <h2>Project Management Dashboard</h2>
      <div className="sprint-board">
        {/* Sprint board implementation */}
      </div>
    </div>
  );
};`
    },
    githubUrl: 'https://github.com/bjornbradleyasu/AME400_Minds-Machines.git',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Jest']
  },
  {
    id: 'class-5',
    title: 'AME430 - Mac Development',
    course: 'AME430 - Mac Development',
    description: 'A collaborative software development project following agile methodologies and best practices.',
    whatLearned: [
      'Agile development methodologies',
      'Version control and collaboration tools',
      'Software testing and quality assurance',
      'Project management and documentation'
    ],
    contributions: [
      'Led frontend development team of 4 developers',
      'Implemented CI/CD pipeline with automated testing',
      'Created comprehensive project documentation',
      'Managed sprint planning and code reviews'
    ],
    codePreview: {
      file: 'ProjectManager.tsx',
      language: 'typescript',
      code: `// Project management dashboard
import React, { useState, useEffect } from 'react';

export const ProjectManager: React.FC = () => {
  const [projects, setProjects] = useState([]);
  const [sprints, setSprints] = useState([]);
  
  useEffect(() => {
    // Fetch project data
    fetchProjects();
  }, []);
  
  return (
    <div className="project-manager">
      <h2>Project Management Dashboard</h2>
      <div className="sprint-board">
        {/* Sprint board implementation */}
      </div>
    </div>
  );
};`
    },
    githubUrl: 'https://github.com/bjornbradleyasu/AME430.git',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Jest']
  },
  {
    id: 'class-6',
    title: 'AME436 - Animating Virtual Worlds',
    course: 'AME436 - Animating Virtual Worlds',
    description: 'A collaborative software development project following agile methodologies and best practices.',
    whatLearned: [
      'Agile development methodologies',
      'Version control and collaboration tools',
      'Software testing and quality assurance',
      'Project management and documentation'
    ],
    contributions: [
      'Led frontend development team of 4 developers',
      'Implemented CI/CD pipeline with automated testing',
      'Created comprehensive project documentation',
      'Managed sprint planning and code reviews'
    ],
    codePreview: {
      file: 'ProjectManager.tsx',
      language: 'typescript',
      code: `// Project management dashboard
import React, { useState, useEffect } from 'react';

export const ProjectManager: React.FC = () => {
  const [projects, setProjects] = useState([]);
  const [sprints, setSprints] = useState([]);
  
  useEffect(() => {
    // Fetch project data
    fetchProjects();
  }, []);
  
  return (
    <div className="project-manager">
      <h2>Project Management Dashboard</h2>
      <div className="sprint-board">
        {/* Sprint board implementation */}
      </div>
    </div>
  );
};`
    },
    githubUrl: 'https://github.com/bjornbradleyasu/AME430.git',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Jest']
  },
  {
    id: 'class-7',
    title: 'AME494 - Programming for the Internet of Things',
    course: 'AME494 - Programming for the Internet of Things',
    description: 'A collaborative software development project following agile methodologies and best practices.',
    whatLearned: [
      'Agile development methodologies',
      'Version control and collaboration tools',
      'Software testing and quality assurance',
      'Project management and documentation'
    ],
    contributions: [
      'Led frontend development team of 4 developers',
      'Implemented CI/CD pipeline with automated testing',
      'Created comprehensive project documentation',
      'Managed sprint planning and code reviews'
    ],
    codePreview: {
      file: 'ProjectManager.tsx',
      language: 'typescript',
      code: `// Project management dashboard
import React, { useState, useEffect } from 'react';

export const ProjectManager: React.FC = () => {
  const [projects, setProjects] = useState([]);
  const [sprints, setSprints] = useState([]);
  
  useEffect(() => {
    // Fetch project data
    fetchProjects();
  }, []);
  
  return (
    <div className="project-manager">
      <h2>Project Management Dashboard</h2>
      <div className="sprint-board">
        {/* Sprint board implementation */}
      </div>
    </div>
  );
};`
    },
    githubUrl: 'https://github.com/bjornbradleyasu/AME494598Fall2024.git',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Jest']
  },
  {
    id: 'class-8',
    title: 'AME485 - Media Arts and Sciences Capstone',
    course: 'AME485 - Media Arts and Sciences Capstone',
    description: 'A collaborative software development project following agile methodologies and best practices.',
    whatLearned: [
      'Agile development methodologies',
      'Version control and collaboration tools',
      'Software testing and quality assurance',
      'Project management and documentation'
    ],
    contributions: [
      'Led frontend development team of 4 developers',
      'Implemented CI/CD pipeline with automated testing',
      'Created comprehensive project documentation',
      'Managed sprint planning and code reviews'
    ],
    codePreview: {
      file: 'ProjectManager.tsx',
      language: 'typescript',
      code: `// Project management dashboard
import React, { useState, useEffect } from 'react';

export const ProjectManager: React.FC = () => {
  const [projects, setProjects] = useState([]);
  const [sprints, setSprints] = useState([]);
  
  useEffect(() => {
    // Fetch project data
    fetchProjects();
  }, []);
  
  return (
    <div className="project-manager">
      <h2>Project Management Dashboard</h2>
      <div className="sprint-board">
        {/* Sprint board implementation */}
      </div>
    </div>
  );
};`
    },
    githubUrl: 'https://github.com/bjornbradleyasu/AME430.git',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Jest']
  }
]

