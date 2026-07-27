import React, { createContext, useContext, useState } from "react";

const ProfileContext = createContext(null);

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState({
    name: "David Dzidzinyo",
    bio: "Third-year IT student.",
    programme: "BSc. Information Technology",
    indexNumber: "22200278",
    level: "300",
  });

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const ctx = useContext(ProfileContext);
  if (!ctx) throw new Error("useProfile must be used within a ProfileProvider");
  return ctx;
}
