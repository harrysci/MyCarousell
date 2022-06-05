export interface BookListProps {
  bookList: NewBook[];
}

export interface BookItemProps {
  book : NewBook;
}
export interface Book {
  id:string;
  userName:string;
  title:string;
  description:string;
}
export interface NewBook {
  id:string;
  userName:string;
  title:string;
  description:string;
  bookMark: boolean;
}