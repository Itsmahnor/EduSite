import { FaPython, FaReact, FaLaravel, FaWordpress, FaAndroid, FaRobot } from "react-icons/fa";
import { SiMongodb, SiFlutter, SiShopify, SiGoogleads } from "react-icons/si";

export const coursesData = [
  {
    category: "AI PROGRAMS",
    courses: [
      { name: "Python Programming", icon: FaPython, route: "1" },
      { name: "Generative AI", icon: FaRobot, route: "2" },
      { name: "Machine Learning", icon: FaRobot, route: "3" },
      { name: "Chatbot Development", icon: FaRobot, route: "4" },
    ],
  },
  {
    category: "DEVELOPMENT",
    courses: [
      { name: "Mern Stack Development", icon: SiMongodb, route: "5" },
      { name: "Python Django Development", icon: FaPython, route: "6" },
      { name: "PHP Laravel Development", icon: FaLaravel, route: "7" },
      { name: "Frontend Development", icon: FaReact, route: "8" },
      { name: "Backend Development", icon: FaReact, route: "9" },
      { name: "React JS Development", icon: FaReact, route: "10" },
      { name: "WordPress Development", icon: FaWordpress, route: "11" },
      { name: "Shopify Development", icon: SiShopify, route: "12" },
    ],
  },
  {
    category: "APP DEVELOPMENT",
    courses: [
      { name: "Flutter App Development", icon: SiFlutter, route: "13" },
      { name: "React Native App Development", icon: FaReact, route: "14" },
      { name: "FlutterFlow App Development", icon: SiFlutter, route: "15" },
      { name: "Android App Development", icon: FaAndroid, route: "16" },
    ],
  },
  {
    category: "MARKETING PROGRAMS",
    courses: [
      { name: "Social Media Marketing", icon: SiGoogleads, route: "17" },
      { name: "Digital Marketing", icon: SiGoogleads, route: "18" },
      { name: "Google Ads", icon: SiGoogleads, route: "19" },
    ],
  },
  
];

