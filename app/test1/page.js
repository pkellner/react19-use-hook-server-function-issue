'use client';
import { useState, useEffect } from 'react';
import { fetchUsers } from "./actions";

const UserList = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, [fetchUsers]);

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;
  if (!users) return <div className="p-4">No users found</div>;

  return (
    <div className="p-4">
      <pre className="whitespace-pre-wrap">
        {JSON.stringify(users, null, 2)}
      </pre>
    </div>
  );
};

export default UserList;