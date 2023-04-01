import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';

/* */
import { UserModule } from './user/user.module';
/* */

@Module({
    imports: [
        GraphQLModule.forRoot({
            driver: ApolloDriver,
            playground: true,
            typePaths: ['./**/*.graphql'],
        }),
        UserModule,
    ],
    controllers: [],
    providers: [],
})

export class MainModule { }