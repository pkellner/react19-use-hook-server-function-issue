import { Suspense } from "react";
import { fetchUsers } from "./actions";
import Users from './users';



async function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Users userPromise={fetchUsers()} />
    </Suspense>
  );
}

export default App;
