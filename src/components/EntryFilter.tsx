import React from 'react';
import { possibleTags } from './NewEntryForm';

interface EntryFilterProps {
  filterTags: string[];
  setFilterTags: React.Dispatch<React.SetStateAction<string[]>>;
}

const EntryFilter: React.FC<EntryFilterProps> = ({
  filterTags,
  setFilterTags,
}) => {
  const handleTagClick = (tag: string): void => {
    setFilterTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  return (
    <div className='entry-filter-container'>
      <span> Filter by tags:</span>
      {possibleTags.map((tag) => (
        <button
          key={tag}
          onClick={() => handleTagClick(tag)}
          className={`tag-button ${filterTags.includes(tag) ? 'active' : ''}`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default EntryFilter;
