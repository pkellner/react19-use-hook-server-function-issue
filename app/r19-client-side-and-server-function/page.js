import { Suspense } from "react";
import { fetchUsers } from "./actions";
import Users from './users';

let cachedUserPromise;

function getCachedUserPromise() {
  if (!cachedUserPromise) {
    cachedUserPromise = fetchUsers();
    console.log("fetching users");
  } else {
    console.log("using cached users");
  }
  return cachedUserPromise;
}

async function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Users userPromise={getCachedUserPromise()} />
    </Suspense>
  );
}

export default App;