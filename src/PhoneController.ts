import {
    Controller,
    Get,
    Post,
    Route,
    Body
  } from "tsoa";
  import { Phone } from "./Phone";
  import { PhoneService} from "./PhoneService";

  @Route("/phones")
  export class PhoneController extends Controller {
    @Get("/")
    public async getPhones() : Promise<Phone[]> {
        const phoneService: PhoneService = PhoneService.getPhoneService();
        return await phoneService.getAllPhones();
    }
    @Post("/")
    public async createPhone(
        @Body() phone: Phone
    ) : Promise<Phone> {
        const phoneService: PhoneService = PhoneService.getPhoneService();
        await phoneService.addPhone(phone);
        // send back what is in the database in case there is logic that changes it on saving
        return await phoneService.getPhone(phone.id);
    } 

  }
