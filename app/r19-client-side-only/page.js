"use client";
import { use, Suspense } from "react";

const fetchUsers = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

let cachedPromise;

function getCachedUserPromise() {
  if (!cachedPromise) {
    cachedPromise = fetchUsers();
  } else {
    console.log('using cached promise');
  }
  return cachedPromise;
}

const userPromise = getCachedUserPromise();

const Users = () => {
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
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Users />
    </Suspense>
  );
}

export default App;
