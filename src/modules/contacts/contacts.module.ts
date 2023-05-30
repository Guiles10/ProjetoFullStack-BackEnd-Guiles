import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { ContactRepository } from './repositories/contact.repository';
// import { ContactInMemoryRepository } from './repositories/in-memory/contact.in-memory.repository';
import { PrismaService } from 'src/dataBase/prisma.service';
import { ContactPrismaRepository } from './repositories/prisma/contacts-prisma.repository';

@Module({
  controllers: [ContactsController],
  providers: [
    ContactsService,
    PrismaService,
    {
      provide: ContactRepository,
      useClass: ContactPrismaRepository,
    }
  ]
})
export class ContactsModule {}
