"use client";

import { use } from "react";


export default function Users({userPromise}) {
  const users = use(userPromise);
  return (
    <div>
      <h1>Client Side Only (use hook and suspense)</h1>
      <ul>
        {users.map((user) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
          </div>
        ))}
      </ul>
    </div>
  );
}
