import React, { useEffect } from 'react';

const Users = ({ isLoading, users, error, getUsers }) => {
  useEffect(() => {
    getUsers();
    return () => {};
  }, [getUsers]);

  if (!users) return null;

  const renderUsers = () => {
    if (isLoading) return <h1>Loading...</h1>;
    if (error) return <h1>Errors: {error}</h1>;

    return users.map(user => {
      return (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <p>Username: {user.username}</p>
          <p>Email: {user.email.toLowerCase()}</p>
          <p>
            Address:
            <br />
            {user.address.street}
            <br />
            {user.address.city}, {user.address.zipcode}
          </p>
        </div>
      );
    });
  };

  return <div>{renderUsers()}</div>;
};

export default Users;
