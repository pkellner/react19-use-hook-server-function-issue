"use client";
import { Suspense, use } from "react";
import { fetchUsers } from "./actions"; // This is a server function

let cachedUsersPromise = null;

// Return the same promise every time so we don't re-fetch on each re-render
function getUsersPromise() {
  if (!cachedUsersPromise) {
    cachedUsersPromise = fetchUsers();
  }
  return cachedUsersPromise;
}

function UserListContent() {
  // use() will unwrap the server function's promise:
  //  - If pending, it suspends.
  //  - If resolved, it returns the data.
  //  - If rejected, it throws an error (caught by Error Boundaries).
  const users = use(getUsersPromise());

  return (
    <div>
      <h1>Users</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}

export default function UserList() {
  // The Suspense boundary will show the fallback while fetchUsers is pending
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UserListContent />
    </Suspense>
  );
}
