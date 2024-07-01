import Entry from "./Entry";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import EntryFilter from "./EntryFilter";

interface EntryType {
  tags: string[];
  date: Date;
  content: string;
}
interface RootState {
  diary: {
    entries: EntryType[];
  };
}
const EntryList: React.FC = () => {
  const entries = useSelector((state: RootState) => state?.diary?.entries);
  const [filterTags, setFilterTags] = useState<string[]>([]);

  // filter logic to support multiple tags
  const filteredEntries = entries.filter(
    (entry: EntryType) => filterTags.length === 0 || filterTags.some(tag => entry.tags.includes(tag))
  );

  return (
    <section className="entry-list">
        <EntryFilter filterTags={filterTags} setFilterTags={setFilterTags} />
      <div>
         {entries.length === 0 ? (
          <div className="placeholder">Empty List, Make An Entry.</div>
        ) : filteredEntries.length === 0 ? (
          <div className="placeholder">No entries match filter tag(s).</div>
        ) : (
          filteredEntries
            .slice()
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .map((entry, i) => <Entry id={i} key={i} {...entry} />)
        )}
      </div>
    </section>
  );
};

export default EntryList;
