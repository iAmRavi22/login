// import { useState } from "react";
import ImageUploader from "./ImageUploader.js";
// import { useEffect } from "react";

// const Signup = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [localName, setLocalName] = useState("");
//   const [localPassword, setLocalPassword] = useState("");

//   const [LoginFirst, SetLoginFirst] = useState(true);
//   const [input, setinput] = useState(true);
//   const [buttontext, setButtonText] = useState("Login");

//   const [userName, setusername] = useState("nitin@procase");
//   const [userPassword, setuserPassword] = useState("procase@123");

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   useEffect(() => {
//     // Check local storage for saved email on component mount
//     const storedEmail = localStorage.getItem("email");
//     const storedPassword = localStorage.getItem("password");

//     if (storedEmail && storedPassword) {
//       setLocalName(storedEmail);
//       setLocalPassword(storedPassword);

//       setIsLoggedIn(true);
//     }
//   }, []);

//   function handler() {
//     console.log(`${email}  and  ${password}`);

//     localStorage.setItem("name", email);
//     setEmail("");

//     localStorage.setItem("password", password);
//     setPassword("");

//     {
//       userName === email && userPassword === password && setinput(false);
//     }
//     SetLoginFirst(false);
//     setIsLoggedIn(true);
//   }

//   function buttonhandler() {
//     setinput(true);
//     setEmail("");
//     setPassword("");

//     setLocalName(localStorage.getItem("name"));
//     setLocalPassword(localStorage.getItem("password"));
//     setIsLoggedIn(true);
//     localStorage.clear();
//   }

//   return (
//     <div className="container-sm  d-flex flex-column  gap-4 m-3  col-6    p-4  mx-auto">
//       <h3 className="mx-auto">Login</h3>
//       <section className="container-sm  d-flex flex-column  gap-4">
//         {input && (
//           <>
//             <input
//               placeholder="Enter your Email"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               class="form-control"
//               id="exampleInputEmail1"
//             />

//             <input
//               placeholder="Enter your password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               class="form-control"
//               id="exampleInputPassword1"
//             />
//           </>
//         )}
//       </section>

//       {input && (
//         <button onClick={handler} className="btn btn-primary ">
//           {buttontext} {userName === email && userPassword === password}
//         </button>
//       )}

//       {!input && isLoggedIn ? <ImageUploader /> : "djlksdjkjk"}
//       {/* {!input && localName && localPassword && <ImageUploader />} */}

//       {!input && (
//         <button
//           style={{ position: "absolute", right: "10px", top: "10px" }}
//           onClick={buttonhandler}
//           className="btn btn-primary"
//         >
//           Logout
//         </button>
//       )}
//     </div>
//   );
// };

// export default Signup;

import React, { useState, useEffect } from "react";

const Signup = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  useEffect(() => {
    // Check local storage for saved email on component mount
    const storedEmail = localStorage.getItem("userEmail");

    if (storedEmail) {
      setUserEmail(storedEmail);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    // Check if the entered email and password match your hardcoded values
    if (userEmail === "nitin@procase" && userPassword === "procase@123") {
      // Save email to local storage
      localStorage.setItem("userEmail", userEmail);
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    // Clear email from local storage and reset state
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
    setUserEmail("");
    setUserPassword("");
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <button onClick={handleLogout} className="btn btn-primary  text-left">
            Logout
          </button>
          <ImageUploader />
        </div>
      ) : (
        <div className="container-sm  d-flex flex-column  gap-4 m-3  col-6    p-4  mx-auto">
          <input
            type="text"
            placeholder="Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            id="exampleInputEmail1"
          />
          <input
            type="password"
            placeholder="Password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <button onClick={handleLogin} className="btn btn-primary">
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Signup;
