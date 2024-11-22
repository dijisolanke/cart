export interface Item {
    url: string;    
    price: number;  
    id: string;   
    name: string  
    quantity: number
  }
  
  export type Items = Record<string, Item>;
  