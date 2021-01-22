import { Link } from "gatsby"
import React from "react"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Header headerText="ddd" />
      <h1>Hello Gatsby!</h1>
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
      <Link to="/contact/">Contact</Link>
      <p>What a world.</p>
      <p>What a world.</p>
      <p>What a world.</p>
      <p>What a world.</p>
    </div>
  )
}
