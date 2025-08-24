 📌 SkillLink – Freelance Job API

📖 Overview

    SkillLink is a backend API for managing freelance job postings, applications, and 
    user authentication.

    It is built with Node.js, Express, MongoDB, and JWT Authentication.

🚀 Features

  👤 User Authentication (Signup/Login using JWT)
  💼 Job Management (Create, Read, Update, Delete jobs)
  📝 Job Applications (Apply for jobs, view applied jobs)
  🔒 Role-based Access Control (Admin / User)
  📦 REST API architecture
  🌐 MongoDB database integration

🛠️ Tech 

   Backend: Node.js, Express.js
   Database: MongoDB (Mongoose ORM)
   Authentication: JWT
   Testing Tool: Postman

🔑 API Endpoints

   Auth Routes
        POST /api/auth/signup → Register new user
        POST /api/auth/login → Login user

  Job Routes
      POST /api/jobs → Create job (Admin only)
      GET /api/jobs → Get all jobs
      GET /api/jobs/:id → Get job by ID
      PUT /api/jobs/:id → Update job (Admin only)
      DELETE /api/jobs/:id → Delete job (Admin only)

  Application Routes 
     POST /api/apply/:jobId → Apply to a job
     GET /api/applications/me → View my applications 

⚡ How to Run Locally

  1. Clone the repo
     git clone https://github.com/your-username/skilllink-backend.git
     cd skilllink-backend

  2. Install dependencies
     npm install express mongoose dotenv jsonwebtoken bcryptjs cors multer
     npm install --save-dev nodemon

 3. Create a .env file in root folder and add 
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_secret_key

 4. Run the server
    npm run dev
    Server will start at 👉 http://localhost:5000

📬 API Endpoints

🔐 Auth
  
   POST /api/auth/signup → Register user
   POST /api/auth/login → Login user

👨‍💼 Jobs

   POST /api/jobs → Post a new job 
   GET /api/jobs → Get all jobs
   GET /api/jobs/:id → Get job by ID
   PUT /api/jobs/:id → Update job 
   DELETE /api/jobs/:id → Delete job 

🙋 Applications

   POST /api/jobs/:id/apply → Apply to a job 
   GET /api/applications → Get applied jobs 

