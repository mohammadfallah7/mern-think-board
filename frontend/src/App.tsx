import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Header, NoteCard } from "./components";
import type { Note, Response } from "./types";

const App = () => {
  const [notes, setNotes] = useState<Note[]>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNotes = async () => {
      setLoading(true);

      try {
        const response = await axios.get<Response<Note[]>>(
          "http://localhost:3001/api/notes",
        );

        setNotes(response.data.data);
      } catch (error) {
        if (error instanceof AxiosError) {
          switch (error.response?.status) {
            case 404:
              toast.error("Todos not found!");
              break;
            case 429:
              toast.error("Too many requests");
              break;
          }
        } else {
          toast("An error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  const handleDeleteNote = async (noteId: string) => {
    const initialState = notes ? [...notes] : [];
    setNotes(notes?.filter((n) => n._id !== noteId));

    try {
      await axios.delete(`http://localhost:3001/api/notes/${noteId}`);
    } catch (error) {
      setNotes(initialState);
      if (error instanceof AxiosError) {
        switch (error.response?.status) {
          case 404:
            toast.error("Note not found!");
            break;
          case 429:
            toast.error("Too many requests");
            break;
        }
      } else {
        toast("An error occurred");
      }
    }
  };

  return (
    <main>
      <Header />
      <div className="container mx-auto px-3 my-8">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {notes?.map((note) => (
              <NoteCard
                key={note._id}
                note={note}
                onDeleteNote={(noteId) => handleDeleteNote(noteId)}
              />
            ))}
          </ul>
        )}
      </div>
    </main>
  );
};

export default App;
