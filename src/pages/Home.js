import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import History from './History'
import Reminder from './Reminder'

const Home = () => {
  const [nextPage, setNewPage] = useState('')
  useEffect(() => {
    console.log(nextPage)
  }, [nextPage])
  const reminderPage = () => {
    const page = 'reminder'
    setNewPage(page)
  }
  const historyPage = () => {
    const page = 'history'
    setNewPage(page)
  }
  return (
    <section>
      <h1>Home Component</h1>
      <button onClick={() => reminderPage()}>Reminder</button>
      <ul className="nav-links">
        <li>
          <Link to="/history">History</Link>
        </li>
        <li>
          <Link to="/reminder">Reminder</Link>
        </li>
      </ul>
      <button onClick={() => historyPage()}>History</button>
      <h1>{nextPage}</h1>
    </section>
  )
}

export default Home
