import axios, { AxiosError } from "axios";
import { useEffect, useState, type SubmitEvent } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import { TopBar } from "../components";
import { LucideLoader2 } from "lucide-react";
import type { Note, Response } from "../types";

type NewNote = {
  title?: string;
  content?: string;
};

export const TodoDetails = () => {
  const { id } = useParams();

  const [note, setNote] = useState<Note>();
  const [loading, setLoading] = useState(false);
  const [newNote, setNewNote] = useState<NewNote>({});
  const [updating, setUpdating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const fetchNote = async () => {
      try {
        const response = await axios.get<Response<Note>>(
          `http://localhost:3001/api/notes/${id}`,
        );
        setNote(response.data.data);
      } catch (error) {
        if (error instanceof AxiosError) {
          switch (error.response?.status) {
            case 404:
              toast.error("Note not found");
              break;
            case 429:
              toast.error("Too many requests");
              break;
          }
        } else {
          toast.error("Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    if (!newNote.title?.trim() && !newNote.content?.trim())
      return toast.error("Please enter a title or content");

    setUpdating(true);
    try {
      await axios.put(`http://localhost:3001/api/notes/${id}`, newNote);
      toast.success("Note updated successfully");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setNewNote({});
      setUpdating(false);
      navigate("/");
    }
  };

  return (
    <div className="container mx-auto px-3 my-8">
      <TopBar title="Back to Notes" href="/" />
      <div className="card bg-base-200 shadow-sm my-8 p-10">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <form onSubmit={(e) => handleSubmit(e)} className="space-y-4">
            <div className="grid gap-2">
              <label htmlFor="title">Title</label>
              <input
                id="title"
                value={newNote.title || note?.title}
                onChange={(e) =>
                  setNewNote({ ...newNote, title: e.target.value })
                }
                placeholder="Note title..."
                type="text"
                className="input w-full"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="content">Content</label>
              <textarea
                id="content"
                value={newNote.content || note?.content}
                onChange={(e) =>
                  setNewNote({ ...newNote, content: e.target.value })
                }
                placeholder="Write your note here..."
                className="input resize-none w-full h-28 rounded-lg py-2"
              />
            </div>

            <div className="flex justify-end">
              <button disabled={updating} className="btn btn-primary">
                Save changes
                {updating && <LucideLoader2 className="size-4 animate-spin" />}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
