import { Document } from "mongoose";

export default interface IPortfolio extends Document {
  seq: number;
  _id: string;
  userId: string;
  startDate: Date;
  endDate: Date;
  jobTitle: string;
  img: {
    originalname: string;
    location: string;
    mimetype: string;
    size: number;
    key: string;
  };
  ko: {
    title: string;
    desc: string;
    content: string;
  };
  en: {
    title: string;
    desc: string;
    content: string;
  };
}
