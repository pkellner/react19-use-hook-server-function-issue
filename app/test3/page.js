'use client';

import { useEffect, useState, Suspense } from 'react';
import { fetchUsers } from './actions';

function UserListContent() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}

export default function UserList() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UserListContent />
    </Suspense>
  );
}