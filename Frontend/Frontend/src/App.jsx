import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { Register } from "./Pages/Register";
import { FindProgram } from "./Pages/FindProgram";
import { MainContent } from "./Components/CoursesPage/MainComponent";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import coursesData from './Components/CoursesPage/MainComponent.json';
import { Internship } from "./Pages/Internship";
import { BecomeTutor } from "./Pages/BecomeTutor";
import { JobOpertunities } from "./Pages/JobOpertunities";
import { Contact } from "./Pages/Contact";
import { WhyChooseUs } from "./Pages/WhyChooseUs";
import { Instructors } from "./Pages/Instructors";
import { PHP } from './Pages/PHP';
import { FullSack } from './Pages/FullSack';
import { AppDevelop } from './Pages/AppDevelop';
import ScrollToTopButton from "./Pages/Scroll";

export default function App() {
  const ErrorPage = () => (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-[#04211e] text-orange-500">
      <h1 className="text-4xl font-bold">Oops! Something went wrong.</h1>
      <p className="text-lg mt-4">We couldn't load the page. Please try again later.</p>
    </div>
  );

  const router = createBrowserRouter([
    { path: "/", element: <><Home /><ScrollToTopButton /></>, errorElement: <ErrorPage /> },
    { path: "/register", element: <><Register /><ScrollToTopButton /></>, errorElement: <ErrorPage /> },
    { path: "/findProgram", element: <><FindProgram /><ScrollToTopButton /></>, errorElement: <ErrorPage /> },
    { path: "/internship", element: <><Internship /><ScrollToTopButton /></>, errorElement: <ErrorPage /> },
    { path: "/tutor", element: <><BecomeTutor /><ScrollToTopButton /></>, errorElement: <ErrorPage /> },
    { path: "/job", element: <><JobOpertunities /><ScrollToTopButton /></>, errorElement: <ErrorPage /> },
    { path: "/contact", element: <><Contact /><ScrollToTopButton /></>, errorElement: <ErrorPage /> },
    { path: "/choose", element: <><WhyChooseUs /><ScrollToTopButton /></>, errorElement: <ErrorPage /> },
    { path: "/instructors", element: <><Instructors /><ScrollToTopButton /></>, errorElement: <ErrorPage /> },
    { path: "/PHP Laravel Development", element: <><PHP /><ScrollToTopButton /></>, errorElement: <ErrorPage /> },
    { path: "/Mern Stack Web Development", element: <><FullSack /><ScrollToTopButton /></>, errorElement: <ErrorPage /> },
    { path: "/App Development", element: <><AppDevelop /><ScrollToTopButton /></>, errorElement: <ErrorPage /> },
    {
      path: `/course/:courseId`, 
      element: <><MainContent courses={coursesData} /><ScrollToTopButton /></>, 
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
