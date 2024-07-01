import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
@Entity()
export class Country {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  code: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  emoji: string;

  @Field()
  @Column()
  continent: string;
}
