import { useState, useRef, useEffect } from 'react'
import { io } from 'socket.io-client'
import './App.css'

const socket = io('ws://localhost:3500')

function App() {
  const [name, setName] = useState("")
  const [inRoom, setInRoom] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])
  const [users, setUsers] = useState([])
  const [activityMsg, setActivityMsg] = useState("")
  const chatDisplayRef = useRef(null)
  const activityTimer = useRef(null)

  useEffect(() => {
    socket.on("message", (data) => {
      setActivityMsg("")
      setMessages((prev) => [...prev, data])
      setTimeout(() => {
        if (chatDisplayRef.current) {
          chatDisplayRef.current.scrollTop = chatDisplayRef.current.scrollHeight
        }
      }, 100)
    })

    socket.on("activity", (name) => {
      setActivityMsg(`${name} is typing...`)
      clearTimeout(activityTimer.current)
      activityTimer.current = setTimeout(() => {
        setActivityMsg("")
      }, 3000)
    })

    socket.on("userList", ({ users }) => {
      setUsers(users)
    })

    return () => {
      socket.off("message")
      socket.off("activity")
      socket.off("userList")
    }
  }, [])

  const handleJoin = (e) => {
    e.preventDefault()
    if (name.trim()) {
      socket.emit("enterRoom", { name })
      setInRoom(true)
    }
  }

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (message.trim()) {
      socket.emit("message", { name, text: message })
      setMessage("")
    }
  }

  const handleTyping = () => {
    if (name.trim()) {
      socket.emit("activity", name)
    }
  }

  return (
    <main>
      {!inRoom ? (
        <form className="form-join" onSubmit={handleJoin}>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={8}
            size={5}
            required
          />
          <button id="join" type="submit">Join</button>
        </form>
      ) : (
        <>
          <ul className="chat-display" ref={chatDisplayRef}>
            {messages.map((msg, i) => {
              const isSelf = msg.name === name
              const isAdmin = msg.name === "Admin"

              const postClass = isAdmin
                ? "post"
                : isSelf
                ? "post post--left"
                : "post post--right"

              return (
                <li key={i} className={postClass}>
                  {!isAdmin ? (
                    <div
                      className={`post__header ${
                        isSelf ? "post__header--user" : "post__header--reply"
                      }`}
                    >
                      <span className="post__header--name">{msg.name}</span>
                      <span className="post__header--time">{msg.time}</span>
                    </div>
                  ) : null}
                  <div className="post__text">{msg.text}</div>
                </li>
              )
            })}
          </ul>

          <p className="user-list">
            {users.length > 0 && (
              <>
                <em>Users in chatroom:</em>{" "}
                {users.map((u, i) => (
                  <span key={i}>
                    {u.name}
                    {i < users.length - 1 ? ", " : ""}
                  </span>
                ))}
              </>
            )}
          </p>

          <p className="activity">{activityMsg}</p>

          <form className="form-msg" onSubmit={handleSendMessage}>
            <input
              type="text"
              id="message"
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleTyping}
              required
            />
            <button type="submit">Send</button>
          </form>
        </>
      )}
    </main>

  )
}

export default App
