📰 Modern Blog Platform – Full Stack Project

A sleek, fully functional blog platform built with modern web technologies. It features a clean React frontend, a lightweight Hono.js backend, PostgreSQL for data storage, and Prisma ORM for elegant database access. Validation is handled end-to-end with a custom-built NPM package using Zod, shared between both client and server for complete type safety. Authentication is managed using JWT, with tokens stored locally on the client side.

⚙️ Tech Stack
*Layer
Tech
*)Frontend:
React + Tailwind CSS

*)Backend
Database
PostgreSQL
ORM
Prisma
Validation
Zod (via custom NPM package)
Tooling
*)Auth 
JWT
Vite, TypeScript, GitHub

✨ Features

📝 Blog listing with author, date, and read time

📦 Shared validation logic using custom NPM package (Zod-based)

🔁 End-to-end type safety with Prisma and Zod

⚡ Super lightweight and fast backend using Hono.js

🧠 Clean UI with responsive design via Tailwind

🚀 Scalable structure with modular codebase

📦 Custom NPM Package

Validation logic is bundled in a reusable NPM package, providing shared schemas and types between client and server.

✅ Used in the backend to validate API inputs and outputs

✅ Used in the frontend to validate forms before submission


# blogging-project
clone the repo
```sh
git clone https://github.com/deekshithreddy34/blogging-project.git
```

to run the project setup the .env file in the backend 
DATABASE_URL="....."

install the npm packages 
then run npm run dev in the backend
```sh
cd backend
npm install
npm run dev
```

run npm i in frontend as well 
run npm run dev
```sh
cd frontend
npm install
npm run dev
```

Snippet shots of the UI
![image](https://github.com/user-attachments/assets/25e4ac19-6e3f-494e-9ad3-89b967b72296)

![image](https://github.com/user-attachments/assets/340fb93a-3a95-4c23-a4c9-fb4aed31eaae)

![image](https://github.com/user-attachments/assets/68dca09f-d02e-4ddd-94dd-e1189651f9eb)

![image](https://github.com/user-attachments/assets/37369ce3-782d-4659-86ee-cb7ebfd58c78)

![image](https://github.com/user-attachments/assets/f24de96e-0c17-4e56-847b-648592d88e15)




