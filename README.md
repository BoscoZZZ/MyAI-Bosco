# MyAI-Bosco 🤖

An AI-powered intelligent document Q&A system that supports PDF document upload and intelligent conversations based on document content.

## 🚀 Features

- 📁 **Document Upload**: Support PDF file upload (max 5MB)
- 🤖 **Intelligent Q&A**: AI-powered question answering based on uploaded PDF documents
- 🔍 **Document Retrieval**: Advanced vector storage and similarity search technology
- 💬 **Natural Conversation**: Natural dialogue experience using OpenAI GPT-3.5-turbo model
- 📱 **Responsive Design**: Support for both desktop and mobile devices

## 🛠️ Tech Stack

### Frontend
- **React** 18.3.1
- **Create React App** 5.0.1
- **CSS3** for styling

### Backend
- **Node.js** + **Express.js** 4.18.2
- **LangChain** 0.0.135 - AI application development framework
- **OpenAI API** - GPT-3.5-turbo model and Embeddings
- **Multer** - File upload handling
- **PDF-Parse** - PDF document parsing
- **CORS** - Cross-origin resource sharing

## 📦 Installation Guide

### Prerequisites
- Node.js 16.0+
- npm or yarn
- OpenAI API key

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/MyAI-Bosco.git
cd MyAI-Bosco
```

### 2. Install Frontend Dependencies
```bash
npm install
```

### 3. Install Backend Dependencies
```bash
cd server
npm install
```

### 4. Environment Variables Setup
Create a `.env` file in the project root:
```env
REACT_APP_OPENAI_API_KEY=your_openai_api_key_here
```

## 🚀 Running the Project

### Start Backend Server
```bash
cd server
npm start
```
The server will start at `http://localhost:5001`

### Start Frontend Application
```bash
# In project root directory
npm start
```
The frontend application will start at `http://localhost:3000`

## 📚 API Documentation

### File Upload
- **POST** `/upload`
- Supported formats: PDF, PNG
- Maximum file size: 5MB
- Returns: File path confirmation message

### Intelligent Q&A
- **GET** `/chat?question=your_question`
- Requires uploaded document
- Returns: AI-generated answer based on document content

## 📁 Project Structure

```
MyAI-Bosco/
├── public/                 # Static assets
├── src/                    # React frontend source code
│   ├── App.js             # Main application component
│   ├── App.css            # Stylesheet
│   └── index.js           # Entry point
├── server/                 # Backend services
│   ├── server.js          # Express server
│   ├── chat.js            # AI chat logic
│   ├── uploads/           # File upload storage
│   └── package.json       # Backend dependencies
├── package.json           # Frontend dependencies
└── README.md              # Project documentation
```

## 🎯 Usage Guide

1. **Start the Application**: Follow the installation guide to start both frontend and backend services
2. **Upload Document**: Upload a PDF document through the interface
3. **Ask Questions**: Input questions about the document content
4. **Get Answers**: The system will provide intelligent answers based on the document content

## 🔧 Development Guide

### Local Development
```bash
# Start both frontend and backend development servers
npm run dev
```

### Build for Production
```bash
npm run build
```

### Run Tests
```bash
npm test
```

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Create a Pull Request

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [OpenAI](https://openai.com/) - For providing powerful AI models
- [LangChain](https://langchain.com/) - Excellent AI application development framework
- [React](https://reactjs.org/) - User interface library
- [Express.js](https://expressjs.com/) - Web application framework

## 📧 Contact

If you have any questions or suggestions, please reach out:

- Create an [Issue](https://github.com/yourusername/MyAI-Bosco/issues)
- Email: your.email@example.com

---

⭐ If this project helps you, please give us a star!
