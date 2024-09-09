import React, { useState } from "react";
// export function ConditionalRender(props) {
//   const [value, setValue] = useState(0);
//   return (
//     <div>
//       <input
//         type="number"
//         name="inputnumber"
//         value={value}
//         onChange={(e) => {
//           setValue(e.target.value);
//         }}
//       />
//       <p>{value % 2 === 0 ? "Even" : "Odd"}</p>
//       <input type="submit" value="submit" />
//     </div>
//   );
// }

// *******************************
export const ConditionalRender = (props) => {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <h1>User Page</h1>
      {IsLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>LogIn</button>
      )}
    </div>
  );
};
