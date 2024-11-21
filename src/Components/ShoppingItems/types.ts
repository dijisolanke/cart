export interface Item {
    url: string;    
    price: number;  
    id: string;   
    name: string  
  }
  
  export type Items = Record<string, Item>;
  