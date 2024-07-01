import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeEntry } from "../state/diarySlice";
import DeleteIcon from "../assets/icons/Delete";
import Modal from "./Modal";
import {format} from "date-fns";
import "../index";

interface EntryProps {
  id: number;
  date: Date;
  content: string;
  tags: string[];
}
const Entry: React.FC<EntryProps> = ({ date, content, tags, id }) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    setModalOpen(true);
  };
  const handleConfirmDelete = () => {
    setModalOpen(false);
    dispatch(removeEntry(id));
  };
const formattedDate = format(date, 'EE, dd.MM.yyyy')
  return (
    <>
      <article className="article-card">
        <p className="article-card-tags">
          {tags.map(tag => (
            <span key={tag} className="selected-tag">
              {tag}
            </span>
          ))}
        </p>
        <p className="article-card-content">{content}</p>
    <time className="article-card-date" dateTime={formattedDate}>
      {formattedDate}
    </time>
        <div className="article-card-delete">
          <DeleteIcon onClick={handleDelete} />
        </div>
      </article>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
};
export default Entry;
