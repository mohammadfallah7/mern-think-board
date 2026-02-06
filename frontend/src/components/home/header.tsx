import { LucidePlus } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-base-300 py-5">
      <div className="container mx-auto px-10 flex justify-between items-center">
        <a href="/" className="font-sans font-extrabold text-2xl text-primary">
          ThinkBoard
        </a>
        <a href="/new" className="btn btn-primary">
          <LucidePlus className="size-4.5" />
          New Note
        </a>
      </div>
    </header>
  );
};
