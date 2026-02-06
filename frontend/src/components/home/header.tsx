import { LucidePlus } from "lucide-react";
import { Link } from "react-router";

export const Header = () => {
  return (
    <header className="bg-base-300 py-5">
      <div className="container mx-auto px-10 flex justify-between items-center">
        <Link to="/" className="font-sans font-extrabold text-2xl text-primary">
          ThinkBoard
        </Link>
        <Link to="/create" className="btn btn-primary">
          <LucidePlus className="size-4.5" />
          New Note
        </Link>
      </div>
    </header>
  );
};
