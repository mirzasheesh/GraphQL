import { Resolver, Query, Args } from '@nestjs/graphql'

import { UserService } from './user.service';

const service: UserService = new UserService();

@Resolver('User')
export class UserResolver {

    @Query('getUsers')
    getUsers() {

        return service.getUsers();
    }

    @Query('getUser')
    getUser(@Args('userID') userID: number) {

        return service.getUser(userID);
    }
}