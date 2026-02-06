import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { Header } from "./components";
import type { Note, Response } from "./types";
import toast from "react-hot-toast";

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

  return (
    <main>
      <Header />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {notes?.map((note) => (
            <li key={note._id}>{note.title}</li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default App;
