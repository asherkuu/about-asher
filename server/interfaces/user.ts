import { Document } from "mongoose";

export default interface IUser extends Document {
  "https://ashpor.com/roles": ["admin" | "guest"];
  given_name: string;
  family_name: string;
  nickname: string;
  name: string;
  picture: string;
  updated_at: Date;
  sub: string;
  customProperty: string;
}
