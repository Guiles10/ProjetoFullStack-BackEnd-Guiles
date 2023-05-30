import { CreateContactDto } from "../dto/create-contact.dto";
import { UpdateContactDto } from "../dto/update-contact.dto";
import { Contact } from "../entities/contact.entity";

//se comprota como uma Interface também
export abstract class ContactRepository {
    abstract create(data: CreateContactDto, userID: string): Promise<Contact> | Contact;
    abstract findOne(id: string): Promise<Contact> | Contact;
    abstract findAll(): Promise<Contact[]> | object;
    abstract update(id: string, data: UpdateContactDto): Promise<Contact> | Contact;
    abstract delete(id: string): Promise<void> | void;
}

