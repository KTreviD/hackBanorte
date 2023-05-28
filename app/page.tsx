"use client"
import styles from './page.module.css'
import { Chat } from './components/chat'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div style={{display: "flex"}}>
            <img src='/banorte.png' style={{width: "36px", height: "36px" , marginLeft:"12px", marginTop:"12px"}}></img>
            <div>
              <p style={{color: "#323E48", marginTop: "8px", fontSize: "20px", marginLeft: "10px"}}>Maya</p>
              <p style={{color: "#C1C5C8", fontSize: "15px", marginLeft: "10px"}}>Asistente virtual</p>
            </div>
          </div>
        </div>
        <Chat />
      </div>
    </main>
  );
}