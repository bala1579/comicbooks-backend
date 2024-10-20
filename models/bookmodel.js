import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const comicbooksSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    author: {
      type: String,
      required: true,
    },

    publishYear: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },

    pages: {
      type: Number,
      required: true,
    },
  },

  { timestamps: true }
);

//  it save in mongo db Book like books
export const ComicBooks = mongoose.model("ComicBooks", comicbooksSchema);
