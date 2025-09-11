// import type { Route } from "../../+types/root";

// import { Button } from "@/components/ui/button";
// import { Link } from "react-router";



// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "Task Master" },
//     { name: "description", content: "Welcome to React Router!" },
//   ];
// }

// const Homepage = () => {
//   return (
//     <div className="w-full h-screen flex items-center justify-center gap-4">
//       <Link to="/sign-in">
//         <Button className="bg-blue-500 text-white">
//           Login
//         </Button>
//       </Link>
//       <Link to="/sign-up">
//         <Button variant="outline" className="bg-blue-500 text-white">
//           Sign Up
//         </Button>
//       </Link>
//     </div>
//   )
// }

// export default Homepage;

// import React from "react";
// import type { Route } from "../../+types/root";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router";
// import { motion } from "framer-motion";
// import { Sparkles } from "lucide-react";

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "TaskHub" },
//     { name: "description", content: "Welcome to TaskHub!" },
//   ];
// }

// const Homepage = () => {
//   return (
//     <div
//       className="relative w-full h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white"
//       // className="relative w-full h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-200 via-sky-300 to-indigo-300 text-gray-900"
//       // className="relative w-full h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-white via-gray-100 to-blue-200 text-gray-900"
//       // className="relative w-full h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-100 via-teal-200 to-green-200 text-gray-900"
//     >

//       <header className="absolute top-0 left-0 w-full flex items-center justify-between px-6 py-4">
//         <div className="flex items-center gap-3">
//           <img src="/logoT.png" alt="Ashkam Energy Logo" className="w-35 h-12" />
//           <span className="text-xl font-bold text-white">
//             Ashkam Energy Pvt Ltd
//           </span>
//         </div>
//       </header>

//       {/* Decorative Background Sparkles */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
//         <Sparkles className="absolute top-10 left-10 w-12 h-12 text-yellow-300 opacity-50 animate-pulse" />
//         <Sparkles className="absolute bottom-10 right-10 w-16 h-16 text-pink-300 opacity-50 animate-bounce" />
//       </div>

//       {/* Animated Title */}
//       <motion.h1
//         className="text-5xl md:text-6xl font-extrabold drop-shadow-lg"
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         Welcome to ASHKAM ENERGY PVT LTD<span className="block mt-2 text-yellow-300">Project Management Tool</span>
//       </motion.h1>

//       {/* Subtitle */}
//       <motion.p
//         className="mt-4 text-lg md:text-xl text-gray-200 max-w-xl"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.4, duration: 0.8 }}
//       >
//         Organize your work, boost productivity, and manage tasks like never before.
//       </motion.p>

//       {/* Buttons */}
//       <motion.div
//         className="mt-8 flex gap-4"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.8, duration: 0.6 }}
//       >
//         <Button
//           asChild
//           className="px-6 py-3 text-lg rounded-2xl bg-blue-500 text-white hover:bg-blue-400 shadow-lg hover:shadow-blue-500/50 transition-all"

//         >
//           <Link to="/sign-in">Login</Link>
//         </Button>

//         <Button
//           asChild
//           variant="outline"
//           className="px-6 py-3 text-lg rounded-2xl border-2 border-white text-white hover:bg-blue-600/30 hover:border-blue-300 shadow-lg transition-all"
//         >
//           <Link to="/sign-up">Sign Up</Link>
//         </Button>
//       </motion.div>
//     </div>
//   );
// };

// export default Homepage;

import React from "react";
import type { Route } from "../../+types/root";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Sparkles, Linkedin, Mail, Globe } from "lucide-react";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "PMT-Ashkam" },
    { name: "description", content: "Welcome to Project Management Tool powered by ASHKAM ENERGY PVT LTD!" },
  ];
}

const Homepage = () => {
  return (
    <div className="relative w-full h-screen flex flex-col bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white">
      {/* Header */}
      <header className="absolute top-0 left-0 w-full flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <img src="/logoT.png" alt="Ashkam Energy Logo" className="w-35 h-12" />
          <span className="text-xl font-bold text-white">
            Ashkam Energy Pvt Ltd
          </span>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
        {/* Decorative Background Sparkles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <Sparkles className="absolute top-10 left-10 w-12 h-12 text-yellow-300 opacity-50 animate-pulse" />
          <Sparkles className="absolute bottom-10 right-10 w-16 h-16 text-pink-300 opacity-50 animate-bounce" />
        </div>

        {/* Animated Title */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold drop-shadow-lg"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to ASHKAM ENERGY PVT LTD
          <span className="block mt-2 text-yellow-300">
            Project Management Tool
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-200 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Organize your work, boost productivity, and manage tasks like never before.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-8 flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Button
            asChild
            className="px-6 py-3 text-lg rounded-2xl bg-blue-500 text-white hover:bg-blue-400 shadow-lg hover:shadow-blue-500/50 transition-all"
          >
            <Link to="/sign-in">Login</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="px-6 py-3 text-lg rounded-2xl border-2 border-white text-white hover:bg-yellow-300 hover:border-blue-300 shadow-lg transition-all"
          >
            <Link to="/sign-up">Sign Up</Link>
          </Button>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="w-full py-4 bg-black/30 text-gray-200 text-sm text-center">
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-6">
            <a
              href="https://in.linkedin.com/company/ashkam-energy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:info@ashkam.in"
              className="hover:text-blue-400 transition-colors"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://ashkam.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Globe size={20} />
            </a>
          </div>
          <p>© {new Date().getFullYear()} Ashkam Energy Pvt Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;