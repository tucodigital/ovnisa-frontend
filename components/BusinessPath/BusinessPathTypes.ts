export interface BusinessPathContentType {
  title: String;
  subtitle: String;
  description: string;
  items: BusinessPathItemType[];
}

export interface BusinessPathItemType {
  id: number;
  title: String;
  description: String;
  icon: any;
}
