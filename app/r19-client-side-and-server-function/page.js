import { Suspense } from "react";
import { fetchUsers } from "./actions";
import Users from './users';

let cachedUserPromise;

function getCachedUserPromise() {
  if (!cachedUserPromise) {
    cachedUserPromise = fetchUsers();
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