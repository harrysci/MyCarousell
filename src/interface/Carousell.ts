export interface ListProps {
  bookList: Book[];
}

export interface ListItemProps {
  title: String;
  des: String;
}
export interface Book {
  id:String;
  userName:String;
  title:String;
  description:String;
}