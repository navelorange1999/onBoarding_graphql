import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AdminService } from './admin.service';
import { AdminResolver } from './admin.resolver';
import { AdminSchema } from '../schema/admin.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'AdminModel', schema: AdminSchema }]),
  ],
  providers: [AdminService, AdminResolver],
})
export class AdminModule {}
