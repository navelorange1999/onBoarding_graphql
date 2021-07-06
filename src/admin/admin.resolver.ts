import { AdminService } from './admin.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AdminModel } from '../schema/admin.schema';

@Resolver(() => AdminModel)
export class AdminResolver {
  constructor(private readonly adminService: AdminService) {}

  @Query(() => AdminModel)
  async getAdminModelByUsernameAndPassword(
    @Args('username') username: string,
    @Args('password') password: string,
  ) {
    return await this.adminService.getAdminModelByUsernameAndPassword(
      username,
      password,
    );
  }

  @Query(() => [AdminModel])
  async getAllAdmin() {
    return await this.adminService.getAllAdmin();
  }

  @Mutation(() => AdminModel)
  async createAdmin(
    @Args('username') username: string,
    @Args('password') password: string,
  ) {
    return await this.adminService.createAdmin({ username, password });
  }
}
