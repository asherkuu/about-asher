import { Document } from "mongoose";
import { ReactNode } from "typings";

export default interface ICode {
  seq: number;
  _id: number;
  title: string;
  img: {
    location: string;
  };
  // render: any;
}
