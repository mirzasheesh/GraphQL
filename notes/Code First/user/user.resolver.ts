import { Resolver, Query, Args } from '@nestjs/graphql'

import { User as RetUser, UserService } from './user.service';

import { User } from './user.schema';

const service: UserService = new UserService();

@Resolver()
export class UserResolver {

    @Query(returns => [User])
    getUsers() {

        return service.getUsers();
    }

    @Query(returns => User)
    getUser(@Args('userID') userID: number) {

        return service.getUser(userID);
    }
}