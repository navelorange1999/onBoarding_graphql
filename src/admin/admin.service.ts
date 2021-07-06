import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { AdminModel } from '../schema/admin.schema';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel('AdminModel') private adminModel: Model<AdminModel>,
  ) {}

  getAdminModelByUsernameAndPassword(username: string, password: string) {
    const res = this.adminModel.findOne({ username, password });
    return res;
  }

  getAllAdmin() {
    const res = this.adminModel.find();
    return res;
  }

  createAdmin(createAdminDto) {
    return new this.adminModel(createAdminDto).save();
  }
}
