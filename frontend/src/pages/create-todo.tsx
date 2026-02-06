import { useState, type SubmitEvent } from "react";
import { TopBar } from "../components";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { LucideLoader2 } from "lucide-react";

const CreateTodo = () => {
  const [note, setNote] = useState({ title: "", content: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    if (!note.title.trim() || !note.content.trim())
      return toast.error("Please fill all fields");

    setLoading(true);
    try {
      await axios.post("http://localhost:3001/api/notes", note);
      toast.success("Note created successfully");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setNote({ title: "", content: "" });
      setLoading(false);
      navigate("/");
    }
  };

  return (
    <div className="container mx-auto px-3 my-8">
      <TopBar title="Back to Notes" href="/" />
      <div className="card bg-base-200 shadow-sm my-8 p-10">
        <h1 className="card-title text-2xl">Create New Note</h1>

        <form onSubmit={(e) => handleSubmit(e)} className="mt-8 space-y-4">
          <div className="grid gap-2">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              value={note.title}
              onChange={(e) => setNote({ ...note, title: e.target.value })}
              placeholder="Note title..."
              type="text"
              className="input w-full"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              value={note.content}
              onChange={(e) => setNote({ ...note, content: e.target.value })}
              placeholder="Write your note here..."
              className="input resize-none w-full h-28 rounded-lg py-2"
            />
          </div>

          <div className="flex justify-end">
            <button disabled={loading} className="btn btn-primary">
              Create Note
              {loading && <LucideLoader2 className="size-4 animate-spin" />}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTodo;
