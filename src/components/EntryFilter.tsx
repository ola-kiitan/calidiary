import React from "react";
import "../index.css"; // Ensure this path is correct
import { possibleTags } from "./NewEntryForm";
interface EntryFilterProps {
  filterTags: string[];
  setFilterTags: React.Dispatch<React.SetStateAction<string[]>>;
}

const EntryFilter: React.FC<EntryFilterProps> = ({ filterTags, setFilterTags }) => {
  // Example tags, replace with your actual tags source
  // const availableTags: string[] = ["sport", "study", "work", "hobby"];

  const handleTagClick = (tag: string): void => {
    setFilterTags(prevTags =>
      prevTags.includes(tag) ? prevTags.filter(t => t !== tag) : [...prevTags, tag]
    );
  };

  return (
    <div className="entry-filter-container">
      <span> Filter by tags:</span>
      {possibleTags.map(tag => (
        <button
          key={tag}
          onClick={() => handleTagClick(tag)}
          className={`tag-button ${filterTags.includes(tag) ? "active" : ""}`} // Use class names for the button and active state
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default EntryFilter;
