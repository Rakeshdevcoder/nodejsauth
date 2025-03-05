This is simple signup , signin , logout app using jwt token for authentication

i used libarries nodemon , axios , dotenv , react-router-dom , jsonwebtoken , express , mongoose 

it is pretty simple app ,

Steps to run 
1 - Clone repository
2 - setup env file with help of .env.sample file
3 - open project go to root folder (outside backend and frontend)
4 - please install all libraries like npm i bcryptjs cookie-parser cors dotenv express jsonwebtoken mongodb mongoose nodemon  
 "dependencies": {
    "bcryptjs": "^3.0.2",
    "cookie-parser": "^1.4.7",
    "cors": "^2.8.5",
    "dotenv": "^16.4.7",
    "express": "^4.21.2",
    "jsonwebtoken": "^9.0.2",
    "mongodb": "^6.14.2",
    "mongoose": "^8.12.1"
  },
  "devDependencies": {
    "nodemon": "^3.1.9"
  }

5 - then install this dependencies in frontend doing (cd frontend) npm i axios cors lucide-react zustand tailwindcss react-router-dom react-hot-toast

  "dependencies": {
    "@tailwindcss/vite": "^4.0.9",
    "axios": "^1.8.1",
    "cors": "^2.8.5",
    "lucide-react": "^0.477.0",
    "nodeauthnow": "file:..",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-hot-toast": "^2.5.2",
    "react-router-dom": "^7.2.0",
    "tailwindcss": "^4.0.9",
    "zustand": "^5.0.3"
  },
  "devDependencies": {
    "@eslint/js": "^9.21.0",
    "@types/react": "^19.0.10",
    "@types/react-dom": "^19.0.4",
    "@vitejs/plugin-react": "^4.3.4",
    "eslint": "^9.21.0",
    "eslint-plugin-react-hooks": "^5.1.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "globals": "^15.15.0",
    "vite": "^6.2.0"
  }

  7 - follow this url to install tailwindcss using react vite {https://tailwindcss.com/docs/installation/using-vite}
  8 - do (cd frontend) then (npm run dev) start frontend
  9 - do (cd..) go to root directory do (npm run dev) start backend
  10 - open frontend i do signup and then signin and then you go to home where you can see your email and username along with logout button
