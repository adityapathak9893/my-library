export interface AppState {
  bookDetails: BooksDetails;
  loadingIndicator: boolean;
}

export interface BooksDetails {
  numFound: number | null;
  start: number | null;
  numFoundExact: boolean;
  docs: Doc[];
  num_found: number | null;
  q: string;
  offset: null;
}

export interface Doc {
  key: string;
  type: Type;
  seed: string[] | "";
  title: string;
  title_suggest: string;
  edition_count: number | null;
  edition_key: string[] | "";
  publish_date: string[] | "";
  publish_year: number[] | null;
  first_publish_year: number | null;
  isbn?: string[] | "";
  last_modified_i: number | null;
  ebook_count_i: number | null;
  ebook_access: EbookAccess;
  has_fulltext: boolean;
  public_scan_b: boolean;
  publisher: string[] | "";
  language?: string[] | "";
  author_key?: string[] | "";
  author_name?: string[] | "";
  publisher_facet: string[] | "";
  _version_: number | null;
  author_facet?: string[] | "";
  number_of_pages_median?: number | null;
  cover_edition_key?: string;
  cover_i?: number | null;
  lccn?: string[] | "";
  publish_place?: string[] | "";
  lcc?: string[] | "";
  ddc?: string[] | "";
  ia?: string[] | "";
  ia_collection_s?: string;
  lending_edition_s?: string;
  lending_identifier_s?: string;
  printdisabled_s?: string;
  subject?: string[] | "";
  id_goodreads?: string[] | "";
  id_librarything?: string[] | "";
  ia_box_id?: string[] | "";
  subject_facet?: string[] | "";
  lcc_sort?: string;
  subject_key?: string[] | "";
  ddc_sort?: string;
  oclc?: string[] | "";
  author_alternative_name?: string[] | "";
  ia_collection?: string[] | "";
  contributor?: string[] | "";
  subtitle?: string;
  person?: string[] | "";
  place?: string[] | "";
  id_amazon?: string[] | "";
  id_overdrive?: string[] | "";
  person_key?: string[] | "";
  place_key?: string[] | "";
  person_facet?: string[] | "";
  place_facet?: string[] | "";
  first_sentence?: string[] | "";
  ia_loaded_id?: string[] | "";
  time?: string[] | "";
  time_facet?: string[] | "";
  time_key?: string[] | "";
  id_alibris_id?: string[] | "";
  id_better_world_books?: string[] | "";
  id_google?: string[] | "";
  id_hathi_trust?: string[] | "";
  id_isfdb?: string[] | "";
  id_librivox?: string[] | "";
  id_project_gutenberg?: string[] | "";
  id_standard_ebooks?: string[] | "";
}

export interface EbookAccess {
  Borrowable: string;
  NoEbook: string;
  Printdisabled: string;
  Public: string;
}

export interface Type {
  Work: string;
}

export interface TableDataType {
  key: React.Key;
  bookTitle: string;
  authorName: string;
  year: number;
  isbnNumber: string;
  NumberOfPages: number;
}
