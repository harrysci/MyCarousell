export interface ListProps {
  bookList: NewBook[];
}

export interface BookItemProps {
  book : NewBook;
}
export interface Book {
  id:String;
  userName:String;
  title:String;
  description:String;
}
export interface NewBook {
  id:String;
  userName:String;
  title:String;
  description:String;
  bookMark: boolean;
}