"use client";
import { useAuth } from "@clerk/nextjs";

const Dashboard = () => {
  const { isSignedIn, actor } = useAuth();

  if (!isSignedIn) {
    return <h1>Please log in to view this page.</h1>;
  }

  // Type assertion to ensure actor.firstName is treated as a string
  return <h1>Welcome to your Dashboard, {actor?.firstName as string}!</h1>;
};

export default Dashboard;
