// import { UserInMemoryRepository } from './repositories/in-memory/users.in-memory.repository';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepository } from './repositories/users.repository';
import { UsersPrismaRepository } from './repositories/prisma/user.prisma.repository';
import { PrismaService } from 'src/dataBase/prisma.service';
import { UserInMemoryRepository } from './repositories/in-memory/users.in-memory.repository';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    PrismaService,
    {
      provide: UsersRepository,
      useClass: UsersPrismaRepository,
    },
  ],
  exports: [UsersService],
})
export class UsersModule {}
