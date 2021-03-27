import { Phone } from "./Phone";


export class PhoneService {   
    private phones: Phone[] | null = null;    
    private static me : PhoneService;
    constructor() {
        const brick = <Phone>{  id:1, manufacturer: "Nokia", model: "3310" };
        this.phones = [];
        this.phones[brick.id] =  brick ;
    }

    public static getPhoneService() : PhoneService {
        if (this.me) return this.me;
        else {
            this.me = new PhoneService();
            return this.me;
        }
    }

    public async getAllPhones() : Promise<Phone[]> {
        return this.phones.filter((phone:Phone) => {return phone!=null});
    }
    
    public async getPhone(id:number) : Promise<Phone|null> {
        if (this.phones[id]) return this.phones[id];
        return null;
    }
        
    public async addPhone(phone:Phone) : Promise<void> {
        this.phones[phone.id] = phone;
        return;
    }
}
