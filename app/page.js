export default function Home() {
  return (
    <ul>
      <li>
        <a href="http://localhost:3000/r19-client-side-only">
          Client Side Only (use hook and suspense, no error)
        </a>
      </li>
      <li>
        <a href="http://localhost:3000/r19-client-side-and-server-function">
          Client Side With Server Function (use hook and suspense, WITH error)
        </a>
      </li>
    </ul>
  )
}