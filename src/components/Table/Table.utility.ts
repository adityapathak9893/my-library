import type { ColumnsType } from "antd/es/table";
import { TableDataType } from "../../models/interfaces";

export const columnDetails: ColumnsType<TableDataType> = [
  {
    title: "Book Title",
    dataIndex: "bookTitle",
  },
  {
    title: "Author(s) name",
    dataIndex: "authorName",
  },
  {
    title: "Year (First Published)",
    dataIndex: "year",
    sorter: {
      compare: (a, b) => a.year - b.year,
      multiple: 1,
    },
  },
  {
    title: "ISBN Number",
    dataIndex: "isbnNumber",
  },
  {
    title: "Number of pages",
    dataIndex: "NumberOfPages",
  },
];
