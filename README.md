# Service Review System

## 📌 Project Overview

The **Service Review System** is a full-stack web application that allows users to add services, explore services added by others, and share their experiences through reviews. Users can manage both their services and reviews in a secure, authenticated environment.

This project demonstrates practical experience with:

* User authentication (JWT-based)
* CRUD operations
* Secure API handling
* Full-stack development with modern tools

---


## 🔐 User Credentials
- **User Email:** nurnabi@gmail.com
- **User Password:** Khairul37

---

## 🎯 Key Features

### 🔐 Authentication System

* Email & Password based Login and Registration
* Google or GitHub social login (any one)
* JWT token generation on login/register
* Token stored securely in cookies
* Protected (Private) routes

**Password Validation Rules:**

* Minimum 6 characters
* At least one uppercase letter
* At least one lowercase letter

Toast/SweetAlert notifications are shown for:

* Successful login/registration
* Authentication errors

---

## 👤 User Capabilities

### ✅ Service Management

* Add new services
* Update existing services
* Delete services created by the user

### ✅ Review Management

* Add reviews with rating and feedback
* Update or delete own reviews
* View all submitted reviews from **My Reviews** page

### ✅ Browsing & Exploration

* View all services
* Filter services by category and price
* Search services by title (server-side recommended)
* View service details with all reviews

---

## 🧭 Layout & Page Structure

### 🧩 Navbar

**Before Login:**

* Logo
* Home
* Services
* Login
* Register

**After Login:**

* Logo
* Home
* Services
* Add Service
* My Services
* My Reviews
* Dashboard
* User Avatar
* Logout

### 🧩 Main Section

* Dynamic content rendered based on route

### 🧩 Footer

* Website logo/name
* Short description
* Useful links
* Copyright

---

## 🏠 Home Page Sections

### 🎞 Banner Section

* Image slider/carousel (minimum 3 slides)
* Meaningful text highlights

### ⭐ Featured Services

* Displays **6 services** using MongoDB `limit()`
* Each card shows:

  * Service Image
  * Title
  * Short Description
  * Price
  * "See Details" button

### 🤝 Meet Our Partners

* Static section
* Partner logos, names, and short descriptions

### ➕ Extra Sections

* Two additional relevant sections (custom-designed)

### 🎬 Animations

* Framer Motion animations used where appropriate

---

## 📄 Pages & Routes

### 🔑 Login Page

* Email
* Password
* Google/GitHub login
* Redirect link to Register page

### 📝 Register Page

* Name
* Email
* Photo URL
* Password
* Redirect link to Login page

---

## ➕ Add Service Page (Private Route)

**Fields:**

* Service Image
* Service Title
* Company Name
* Website
* Description
* Category
* Price
* Added Date (auto-generated)
* User Email (from auth)

**On Submit:**

* Service stored in database
* Success toast displayed

---

## 📋 All Services Page

**Features:**

* Category filter dropdown (Food, Transport, IT, High Price, Low Price)
* Search by service title
* Service cards displaying:

  * Image
  * Title
  * Description
  * Category
  * Price
  * "See Details" button

---

## 🔍 Service Details Page

* Full service information
* Total review count
* All reviews displayed

### ✍ Add Review (Login Required)

* Text review textarea
* Rating selection (react-rating)
* Review date (auto-generated)
* User name & photo displayed

---

## 📊 Dashboard

Includes the following routes:

* Analytics
* Tracking
* My Profile

---

## 🛠 My Services Page (Private Route)

* Services displayed in **table format**

**Actions:**

* Update service (modal form)
* Delete service (confirmation modal)

---

## 🧾 My Reviews Page (Private Route)

* One-column card layout
* Displays:

  * Service Title (read-only)
  * Review text
  * Rating

**Actions:**

* Update review (modal)
* Delete review (confirmation modal)

---

## 🔢 CountUp Section

* Total users
* Total services
* Total reviews

(Implemented using `react-countup`)

---

## 🔐 JWT Authentication & Security

* JWT generated on login/register
* Token stored in cookies
* All **POST, PATCH, DELETE** APIs are protected
* Unauthorized access returns error response

Optional:

* Axios interceptor for handling token expiration

---

## ⚙️ Additional Features

* Dynamic Website Title (changes on route change)
* Custom 404 / Not Found Page
* Loading Spinner for data fetching states
* Toast/SweetAlert notifications for all CRUD actions

---

## 🧑‍💻 Technologies Used

### Frontend

* React
* React Router
* Tailwind CSS
* DaisyUI
* Framer Motion
* React Hook Form
* React Rating
* React CountUp

### Backend

* Node.js
* Express.js
* MongoDB
* JWT Authentication

---

## 🚀 How to Run the Project

```bash
# Clone the repository
git clone https://github.com/khairul-islam-k/service-review-11

# Install client dependencies
cd service-review-11
npm install
npm run dev

# Install server dependencies
cd review-server-11
npm install
npm run start
```

---

## 📄 License

This project is developed for educational purposes.

---

### ✨ Author

**MD Khairul Islam**

---

Feel free to explore, extend, and improve this project 🚀
