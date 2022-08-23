import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getUserByUsername } from "../services/firebase";
import * as ROUTES from "../constants/routes";
import Header from "../components/Header";
import UserProfile from "../components/Profile/index";

export default function Profile() {
  //if I choose a profile, I will go to the page with the username of the profile (by Huy)
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function checkUserExists() {
      const [user] = await getUserByUsername(username);

      if (user?.userId) {
        setUser(user);
      } else {
        navigate(ROUTES.NOT_FOUND, { replace: true });
      }
    }
    checkUserExists();
  }, [username, navigate]);

  return user?.username ? (
    <div className="bg-gray-background">
      <Header />
      <div className="mx-auto max-w-screen-lg">
        <UserProfile user={user} />
      </div>
    </div>
  ) : null;
}
