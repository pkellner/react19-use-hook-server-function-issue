"use client";

/* has error:
Cannot update a component (`Router`) while rendering a different component (`App`).
To locate the bad setState() call inside `App`
*/

import { use, Suspense } from "react";
import { fetchUsers } from "./actions"; // Server Function that returns a promise

let cachedPromise;

function getCachedUserPromise() {
  if (!cachedPromise) {
    cachedPromise = fetchUsers();
  }
  return cachedPromise;
}

const Users = function ({userPromise}) {

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
};

function App() {

  const userPromise = getCachedUserPromise();

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Users userPromise={userPromise} />
    </Suspense>
  );
}

export default App;
