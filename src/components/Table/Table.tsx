import React, { FC } from "react";
import { Table } from "antd";
import { columnDetails } from "./Table.utility";
import { useStateSelector } from "../../hooks";
import "./Table.css";
import { TableDataType } from "../../models/interfaces";

export const BookDetailsTable: FC = () => {
  const { BooksDetails } = useStateSelector();
  const tableData: TableDataType[] = BooksDetails.docs.map((current, index) => {
    return {
      key: index + 1,
      bookTitle: current.title,
      authorName:
        current.author_name === undefined
          ? "Not Available"
          : current.author_name[0],
      year:
        current.first_publish_year === undefined
          ? 0
          : !!current.first_publish_year
          ? current.first_publish_year
          : 0,
      isbnNumber:
        current.isbn === undefined ? "Not Available" : current.isbn[0],
      NumberOfPages:
        current.number_of_pages_median === undefined
          ? 0
          : !!current.number_of_pages_median
          ? current.number_of_pages_median
          : 0,
    };
  });
  return <Table columns={columnDetails} dataSource={tableData} />;
};
