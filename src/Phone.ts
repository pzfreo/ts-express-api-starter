export class Phone {
    id: number;
    manufacturer: string;
    model: string;
    price: number;
  }

// default phone is always Nokia 3310
export const brick = <Phone>{  id:1, manufacturer: "Nokia", model: "3310", price: 20.33 };
