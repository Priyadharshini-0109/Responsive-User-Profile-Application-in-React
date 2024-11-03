import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      const response = await fetch("https://randomuser.me/api?results=5");
      const data = await response.json();
      setProfiles(data.results); // Access the results array directly
    };
    fetchProfiles();
  }, []);

  return (
    <div className="profile-list">
      {profiles.map((profile, index) => (
        <div key={index} className="profile-card">
          <h2>{profile.name.first} {profile.name.last}</h2>
          <p>Email: {profile.email}</p>
          <Link to={`/profile/${index}`} state={{ profile }}>View More</Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
