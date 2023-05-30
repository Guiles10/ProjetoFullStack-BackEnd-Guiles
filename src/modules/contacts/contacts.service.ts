import { Injectable, NotFoundException,NotAcceptableException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { ContactRepository } from './repositories/contact.repository';
import { UpdateContactDto } from './dto/update-contact.dto';

@Injectable()
export class ContactsService {

  constructor(private contactRepository: ContactRepository){}

  async create(createContactDto: CreateContactDto, userId: string) {
    const contact = await this.contactRepository.create(createContactDto, userId)
    return contact
  }

  async findAll() {
    return this.contactRepository.findAll()
  }

  async findOne(id: string) {
    const findContact = await this.contactRepository.findOne(id)
    if(!findContact){
      throw new NotFoundException("Contact Not Exist!")
    }
    return findContact
  }

  async update(id: string, updateUserDto: UpdateContactDto) {
    const user = await this.contactRepository.update(id, updateUserDto)
    if(!user){
      throw new NotAcceptableException("User Not Found!")
    }
    return user
  }

  async remove(id: string) {
    const user = await this.contactRepository.findOne(id)
    if(!user){
      throw new NotAcceptableException("User Not Found!")
    }
    await this.contactRepository.delete(id)
    return
  }
}
