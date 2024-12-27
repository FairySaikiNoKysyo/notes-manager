import React, { useEffect, useState } from 'react';
import { getNotes } from '../services/api';

interface Note {
  _id: string;
  content: string;
}

const NoteList = ({ topicId }: { topicId: string }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const data = await getNotes(topicId);
      setNotes(data.notes);
    };

    fetchNotes();
  }, [topicId]);

  return (
    <div>
      <h2>Notes</h2>
      <ul>
        {notes.map(note => (
          <li key={note._id}>{note.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
