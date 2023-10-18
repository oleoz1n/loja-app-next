// imports
import Link from "next/link";

export default function Home() {
  return (
    <>
    <header>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/camisa">Camisa</Link></li>
        </ul>
      </nav>
    </header>
      <h1>HOME</h1>
    </>
  )
}
