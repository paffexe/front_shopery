import { useState } from "react";

export default function DropdownMenu({ menuItems, title }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block border-0 ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
      >
        {title}
      </button>

      <div
        className={`absolute top-full left-0 mt-2 bg-card bg-white rounded-[20px] shadow-lg z-10 min-w-48 transition-all duration-200 ease-out origin-top ${
          isOpen
            ? "opacity-100 scale-y-100 visible"
            : "opacity-0 scale-y-95 invisible"
        }`}
      >
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => setIsOpen(false)}
            className="w-full text-left px-4 py-2 text-foreground hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg"
          >
            {item}
          </button>
        ))}
      </div>

      {isOpen && (
        <div onClick={() => setIsOpen(false)} className="fixed inset-0 z-0" />
      )}
    </div>
  );
}
