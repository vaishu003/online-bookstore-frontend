# 🛍️ Online Bookstore Frontend

This is the frontend for the Online Bookstore project, built using **React.js**. It communicates with the backend (Spring Boot) via REST APIs to provide a complete book browsing and purchasing experience.

---

## 🚀 How to Run the Project

### ✅ Prerequisites
- Node.js (v14 or above)
- npm or yarn
- Code Editor (like VS Code)

---

## 🛠️ Steps

1. **Clone the repository**
   git clone https://github.com/vaishu003/online-bookstore-frontend.git

2. Navigate to the project folder
	cd online-bookstore-frontend

3. Install dependencies
	npm install

4. Run the application
	npm start

The app will run at: http://localhost:3000


Project Structure:

online-bookstore-frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── BookList.js
│   │   └── ...
│   ├── pages/
│   │   ├── Home.js
│   │   └── ...
│   ├── services/
│   │   └── api.js
│   ├── App.js
│   ├── index.js
│   └── App.css
├── .gitignore
├── package.json
└── README.md


Technologies Used

* React.js
* Axios
* Bootstrap 
* React Router DOM



API Integration
Make sure your backend is running on http://localhost:8080. You can adjust the API base URL in your API service files, such as src/services/api.js.

