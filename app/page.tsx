"use client";

import useCurrentUser from "@/hooks/use-current-user";

const Home = () => {
  const user = useCurrentUser();

  return user ? (
    <div>
      <h1>User Details</h1>
      <p>ID: {user.id}</p>
      <p>Email: {user.email}</p>
      <p>Name: {user.display_name}</p>
      <p>Image URL: {user.image_url}</p>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Home;
