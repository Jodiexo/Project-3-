import { createContext, useState } from 'react';

const LoginContext = createContext({
  first_name: '',
  last_name: '',
  user_name: '',
  password: '',
  role: [],
  email: '',
  setUser: () => {},
  createUser: async () => {},
});

const LoginProvider = ({ children }) => {
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    user_name: '',
    password: '',
    role: [],
    email: '',
  });

  const createUser = async (newUser) => {
    try {
      newUser.role = ['user']; // Set role to 'user'
      console.log('createUser has been triggered with:', newUser); // Log the newUser object

      const response = await fetch('http://localhost:8080/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error('Post request failed');
      }

      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };
  return (
    // passing the user props created on line 17 and functions from lines 12/13
    <LoginContext.Provider value={{ ...user, setUser, createUser }}>
      {children}
    </LoginContext.Provider>
  );
};
export { LoginContext, LoginProvider };
