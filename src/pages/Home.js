import React from 'react'
import History from './History'
import Reminder from './Reminder'

const Home = () => {
  const reminderPage = () => {
    console.log('Reminder page!')
  }
  const historyPage = () => {
    console.log('History page!')
  }
  return (
    <section>
      <h1>Home Component</h1>
      <button onClick={() => reminderPage()}>Reminder</button>
      <button onClick={() => historyPage()}>History</button>
    </section>
  )
}

export default Home
