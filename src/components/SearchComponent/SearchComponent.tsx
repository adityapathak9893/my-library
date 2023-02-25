import React, { FC, useEffect, useState } from "react";
import "./SearchComponent.css";
import { Input } from "antd";
import { useActionDispatch } from "../../hooks";

export const SearchComponent: FC = () => {
  const { getBooksDetailsData } = useActionDispatch();
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(term);

  useEffect(() => {
    const timer = setTimeout(() => setTerm(debouncedTerm), 1000);
    return () => clearTimeout(timer);
  }, [debouncedTerm]);

  useEffect(() => {
    if (term !== "") {
      getBooksDetailsData(term);
    } else {
      getBooksDetailsData("");
    }
  }, [term]);

  return (
    <div className="searchComponentWrapper">
      <div className="inputWrapper">
        <Input
          placeholder="Type to search books.."
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setDebouncedTerm(event.target.value);
          }}
        />
      </div>
    </div>
  );
};
