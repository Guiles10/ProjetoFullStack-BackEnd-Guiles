import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/dataBase/prisma.service";
import { ContactRepository } from "../contact.repository";
import { CreateContactDto } from "../../dto/create-contact.dto";
import { Contact } from "../../entities/contact.entity";
import { UpdateContactDto } from "../../dto/update-contact.dto";


@Injectable()
export class ContactPrismaRepository implements ContactRepository {

    constructor(private prisma: PrismaService){}

    async create(data: CreateContactDto, userId: string): Promise<Contact> {
        const contact = new Contact()
        Object.assign(contact, {
            ...data
        })
        const newContact = await this.prisma.contact.create({
            data: { ...contact, userId}
        })
        return newContact
    }

    async findAll(): Promise<Contact[]> {
        const contacts = await this.prisma.contact.findMany()
        return contacts
    }

    async findOne(id: string): Promise<Contact> {
        const contact = await this.prisma.contact.findUniqueOrThrow({
            where: {id}
        })
        return contact
    }

    async update(id: string, data: UpdateContactDto): Promise<Contact> {
        const contact = await this.prisma.contact.update({
            where: {id},
            data: {...data}
        })
        return contact
    }

    async delete(id: string): Promise<void> {
        await this.prisma.contact.delete({
            where: {id}
        })
    }
    
}   