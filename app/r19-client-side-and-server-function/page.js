"use client";
import { use, Suspense } from "react";
import { fetchUsers } from './actions';

// make sure this promise is only created once by creating a cache object and checking if the promise is already in the cache
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
