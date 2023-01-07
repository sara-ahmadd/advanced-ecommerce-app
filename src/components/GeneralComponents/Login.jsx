// import React, { useContext, useState } from "react";
// import { Auth } from "./withAuthContext";
// import { useNavigate, useLocation } from "react-router-dom";

// function Profile() {
//   const [user, setUser] = useState("");
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [_userProp, login, _logout] = useContext(Auth);
//   const handleLogin = () => {
//     login(user);
//     navigate(location.state?.path || "/");
//   };

//   return (
//     <div>
//       <label>UserName</label>
//       <br />
//       <input
//         type="text"
//         value={user}
//         onChange={(e) => setUser(e.target.value)}
//       />
//       <br />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// }

// export default Profile;
