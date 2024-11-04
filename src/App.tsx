// import React from 'react';
// import "./App.scss"

// export default function App() {
//   return (
//     <div>
//       <h1>Gestor de Bebê</h1>
//       <p>Bem-vindo ao app gestor de bebê!</p>
//     </div>
//   );
// }

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import Dashboard from './views/Dashboard';
import Settings from './views/Settings';
import Form from './views/Form';
import CustomButton from './components/Button';

const App = () => {
  return (
   <div>
    <CustomButton />
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/form" element={<Form />} />

      {/* <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
<Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
<Route path="/form" element={<PrivateRoute><Form /></PrivateRoute>} /> */}

    </Routes>
    </div>
  );
};

export default App;
