import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType()
export class User {

    @Field()
    userID: number;

    @Field()
    userName: string;

    @Field()
    isActive: boolean;
}