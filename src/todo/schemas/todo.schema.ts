import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop()
  completedAt: Date;

  @Prop({ required: true })
  createdAt: false;

  @Prop()
  deletedAt: false;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
