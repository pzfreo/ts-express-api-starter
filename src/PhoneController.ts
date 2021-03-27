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
        return phoneService.getAllPhones();
    }
    @Post("/")
    public async createPhone(
        @Body() phone: Phone
    ) : Promise<Phone> {
        const phoneService: PhoneService = PhoneService.getPhoneService();
        phoneService.addPhone(phone);
        return phoneService.getPhone(phone.id);
    } 

  }
