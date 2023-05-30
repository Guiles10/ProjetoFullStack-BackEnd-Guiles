import { Injectable } from '@nestjs/common'
import { ContactRepository } from '../contact.repository'
import { CreateContactDto } from '../../dto/create-contact.dto'
import { Contact } from '../../entities/contact.entity'
import { UpdateContactDto } from '../../dto/update-contact.dto'
import { PrismaService } from "src/dataBase/prisma.service";


@Injectable()
export class ContactInMemoryRepository implements ContactRepository {

    private database: Contact[] = []

    async create(data: CreateContactDto, userId: string): Promise<Contact> {
        const newContact = new Contact()
        Object.assign(newContact, {
            ...data,
            userId: userId
        })
        this.database.push(newContact)
        return newContact
    }

    async findAll(): Promise<object | Contact[]> {
        return this.database
    }

    async findOne(id: string): Promise<Contact> {
        const contact = this.database.find((contact) => contact.id == id)
        return contact
    }

    update(id: string, data: UpdateContactDto): Contact | Promise<Contact> {
        const userIndex = this.database.findIndex((user) => user.id == id)
        this. database[userIndex] = {
            ...this.database[userIndex],
            ...data
        }
        return this.database[userIndex]
    }

    delete(id: string): void | Promise<void> {
        const userIndex = this.database.findIndex((user) => user.id == id)
        this.database.splice(userIndex, 1)
    }
}