import { formatDate } from "date-fns";
import { LucidePenBox, LucideTrash2 } from "lucide-react";
import type { FC } from "react";
import type { Note } from "../../types";

interface NoteCardProps {
  note: Note;
  onDeleteNote: (noteId: string) => void;
}

export const NoteCard: FC<NoteCardProps> = ({ note, onDeleteNote }) => {
  return (
    <li className="card bg-base-200 shadow-sm">
      <div className="card-body">
        <h2 className="card-title line-clamp-1">{note.title}</h2>
        <p className="font-thin line-clamp-2">{note.content}</p>
        <div className="flex justify-between items-center">
          <span className="text-xs font-thin">
            {formatDate(new Date(note.createdAt), "PP")}
          </span>
          <div className="card-actions justify-end">
            <button className="btn btn-square">
              <LucidePenBox className="size-4" />
            </button>
            <button
              className="btn btn-square"
              onClick={() => onDeleteNote(note._id)}
            >
              <LucideTrash2 className="size-4 text-error" />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
