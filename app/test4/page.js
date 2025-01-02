import { use, Suspense } from "react";
import { fetchUsers } from "./actions";

function UserListContent() {
  const users = use(fetchUsers());
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
