import mongoose, { Schema } from "mongoose";
import IPortfolio from "../interfaces/portfolio";
import autoIncrement from "mongoose-auto-increment";

autoIncrement.initialize(mongoose.connection);

const PortfolioSchema: Schema<IPortfolio> = new Schema(
  {
    seq: { type: Number, required: true },
    userId: { type: String, required: true },
    jobTitle: { type: String, required: true, maxlength: 128 },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    img: {
      originalname: { type: String, maxLength: 1000, required: true },
      location: { type: String, required: true },
      mimetype: { type: String, required: true },
      size: { type: Number, required: true },
      key: { type: String, unique: true, required: true },
    },
    en: {
      title: { type: String, required: true, maxlength: 128 },
      desc: { type: String, required: true },
      content: { type: String, required: true },
      summary: {
        title: { type: String, required: true, maxlength: 128 },
        position: { type: String, required: true, maxlength: 128 },
        date: { type: String, required: true, maxlength: 128 },
        location: { type: String, required: true, maxlength: 128 },
        content: { type: Array },
      },
    },
    ko: {
      title: { type: String, required: true, maxlength: 128 },
      desc: { type: String, required: true },
      content: { type: String, required: true },
      summary: {
        title: { type: String, required: true, maxlength: 128 },
        position: { type: String, required: true, maxlength: 128 },
        date: { type: String, required: true, maxlength: 128 },
        location: { type: String, required: true, maxlength: 128 },
        content: { type: Array<string> },
      },
    },
  },
  {
    timestamps: true,
  }
);

PortfolioSchema.plugin(autoIncrement.plugin, {
  model: "Portfolios",
  field: "seq",
  startAt: 1, //시작
  increment: 1, // 증가
});

export default mongoose.models.Portfolios ||
  mongoose.model<IPortfolio>("Portfolios", PortfolioSchema);
