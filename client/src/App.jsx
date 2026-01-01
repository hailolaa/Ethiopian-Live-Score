import { useState, useEffect } from 'react'
import './App.css'

function App() {
    const [message, setMessage] = useState('Loading...')

    useEffect(() => {
        fetch('/api')
            .then(res => res.json())
            .then(data => setMessage(data.message))
            .catch(err => setMessage('Error connecting to server'))
    }, [])

    return (
        <div className="app">
            <header className="header">
                <h1>Ethiopian Premier League</h1>
                <p>Real-time Football Stats & Scores</p>
            </header>
            <main>
                <div className="status-card">
                    <h2>Server Status</h2>
                    <p>{message}</p>
                </div>
            </main>
        </div>
    )
}

export default App
