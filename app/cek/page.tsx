"use client";

import React from "react";
import { useSession } from "@/app/lib/useSession";

const Page = () => {
  const { user, loading } = useSession();

  console.log("CEK Page - User:", user);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Not logged in</div>;
  }

  return (
    <div>
      <h1>Hello, {user.name}!</h1>
      <p>Your role is: {user.role}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Page;
