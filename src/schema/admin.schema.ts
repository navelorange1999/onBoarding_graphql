import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType()
@Schema()
export class AdminModel extends Document {
  @Field()
  _id: string;

  @Field({ nullable: false })
  @Prop()
  username: string;

  @Field({ nullable: false })
  @Prop()
  password: string;
}

export const AdminSchema = SchemaFactory.createForClass(AdminModel);
