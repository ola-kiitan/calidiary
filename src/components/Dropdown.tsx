import React, { useState } from "react";
import TagIcon from "../assets/icons/Tag";
import "../styles/form.css";

interface DropdownProps {
  options: string[];
  onSelectionChange: (selected: string[]) => void;
  selectedTags: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ options, selectedTags, onSelectionChange }) => {
  const [isHovering, setIsHovering] = useState(false);
  const showDropdown = () => setIsHovering(true);
  const hideDropdown = () => setIsHovering(false);

  const handleOptionChange = (option: string) => {
    const newSelectedOptions = selectedTags.includes(option)
      ? selectedTags.filter((o: string) => o !== option)
      : [...selectedTags, option];
    onSelectionChange(newSelectedOptions);
  };

  return (
    <div>
      <div className="tag-container" onMouseLeave={hideDropdown}>
        <div className="tag-label">
          <TagIcon />
          <p onMouseEnter={showDropdown}>Add tags</p>
        </div>

        {isHovering && (
          <div className="tag-dropdown">
            {options.map(option => (
              <label key={option} className="tag-dropdown-item">
                <input
                  type="checkbox"
                  checked={selectedTags.includes(option)}
                  onChange={() => handleOptionChange(option)}
                />
                <p>{option}</p>
              </label>
            ))}
            <span className="close" onClick={hideDropdown}>
              X
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
