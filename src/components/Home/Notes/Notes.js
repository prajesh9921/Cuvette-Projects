import React, {useEffect, useState} from 'react';
import styles from "./Notes.module.css";

export default function Notes() {

  const [notes, setNotes] = useState();

  const handleNotes = (event) => {
    setNotes(event.target.value);
    localStorage.setItem("notes", JSON.stringify(event.target.value));
  }

  useEffect(() => {
    const data = localStorage.getItem("notes");
    setNotes(JSON.parse(data));
  },[])

  return (
    <div className={styles.container}>
        <p className={styles.title}>All notes</p>
        <textarea onChange={handleNotes}  name="notes" id="notes" cols="auto" rows="auto" value={notes}></textarea>
    </div>
  );
}