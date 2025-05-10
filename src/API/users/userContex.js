import React, { createContext, useContext, useState, useEffect } from 'react';
import { getCurrentUser } from '../API/users/getCurrentUser';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const refreshUser = async () => {
    const { success, user } = await getCurrentUser();
    if (success) setUser(user);
  };

  useEffect(() => {
    refreshUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, refreshUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
