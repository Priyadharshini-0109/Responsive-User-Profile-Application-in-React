import React from "react";
import { useLocation } from "react-router-dom";

function ProfileDetail() {
  const { state } = useLocation();
  const profile = state?.profile;

  if (!profile) return <p>Profile data not found.</p>;

  return (
    <div className="profile-detail">
      <h1>{profile.name.first} {profile.name.last}</h1>
      <p>Email: {profile.email}</p>
      <p>Phone: {profile.phone}</p>
      <p>
        Address: {profile.location.street.number} {profile.location.street.name}, 
        {profile.location.city}, {profile.location.state}, {profile.location.country}
      </p>
    </div>
  );
}

export default ProfileDetail;
