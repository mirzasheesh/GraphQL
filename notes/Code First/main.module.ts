import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';

/* */
import { join } from 'path';

/* */
import { UserModule } from './user/user.module';
/* */

@Module({
    imports: [
        GraphQLModule.forRoot({
            driver: ApolloDriver,
            playground: true,
            autoSchemaFile: join(process.cwd(), 'src/user/schema.graphql')
        }),
        UserModule,
    ],
    controllers: [],
    providers: [],
})

export class MainModule { }