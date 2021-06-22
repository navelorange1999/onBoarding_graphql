import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { AdminModel } from '../schema/admin.schema';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel('AdminModel') private adminModel: Model<AdminModel>,
  ) {}

  login(username: string, password: string) {
    const res = this.adminModel.findOne({ username, password });
    return res;
  }

  registe(createAdminDto) {
    return new this.adminModel(createAdminDto).save();
  }
}
