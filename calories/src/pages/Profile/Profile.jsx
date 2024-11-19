import './Profile.css';

const Profile = ({ user }) => {
  return (
    <div className="profile-container">
      <h1>Welcome, {user.name}!</h1>
      <p>Email: {user.email}</p>
      <div className="profile-details">
        <h2>Your Details</h2>
        <p>Member since: {user.memberSince}</p>
        <p>Last login: {user.lastLogin}</p>
      </div>
    </div>
  );
};

export default Profile;
