import { AdminService } from './admin.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AdminModel } from '../schema/admin.schema';

@Resolver((of) => AdminModel)
export class AdminResolver {
  constructor(private readonly adminService: AdminService) {}

  @Query((returns) => AdminModel)
  async login(
    @Args('username') username: string,
    @Args('password') password: string,
  ) {
    return await this.adminService.login(username, password);
  }

  @Mutation((returns) => AdminModel)
  async regsite(
    @Args('username') username: string,
    @Args('password') password: string,
  ) {
    return await this.adminService.registe({ username, password });
  }
}
