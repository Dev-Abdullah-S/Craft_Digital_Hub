import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import StudentDashboard from './pages/StudentDashboard';
import BlogsPage from './pages/BlogsPage';
import ServicesPage from './pages/ServicesPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import Testimonials from './pages/Testimonials';
import FAQPage from './pages/FAQPage';
import LegalPage from './pages/LegalPage';
import CourseDetail from "./pages/CourseDetail";
import Profile from "./pages/Profile";
import EnrolledCourses from "./pages/EnrolledCourses";
import CourseEnrollment from "./pages/CourseEnrollment";
import Certificates from "./pages/Certificates";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
     <Router>
       <Routes>
         <Route path='/' element={<MainLayout/>}>
          <Route index element={<HomePage />}/>
          <Route path='courses' element={<CoursesPage />}/>
          <Route path="/courses/:id" element={<CourseDetail />} />
           <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/StudentDashboard"
          element={
            <ProtectedRoute>
              <StudentDashboard />
            </ProtectedRoute>
          }
        >
          <Route path="profile" element={<Profile />} />
          <Route path="courses" element={<EnrolledCourses />} />
          <Route path="certificates" element={<Certificates />} />
        </Route>
          <Route path='blogs' element={<BlogsPage />}/>
          <Route path='services' element={<ServicesPage />}/>
          <Route path='aboutUs' element={<AboutUsPage />}/>
          <Route path='contactUs' element={<ContactUsPage />}/>
          <Route path='testimonials' element={<Testimonials />}/>
          <Route path='FAQ' element={<FAQPage />}/>
          <Route path='Legal' element={<LegalPage />}/>
          <Route path="/enroll/:id" element={<CourseEnrollment />} />
          </Route>
       </Routes>
     </Router>
  )
}

export default App