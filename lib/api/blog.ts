import { Collection } from "mongodb";
import clientPromise from "../mongodb";

interface Blog {
  _id: string;
  title: string;
}

export const getAllBlogs = async () => {
  const client = await clientPromise;

  const collection: Collection<Blog> = client
    .db("visionclara")
    .collection<Blog>("blogs");

  const blogs: Blog[] = await collection.find().toArray();

  return blogs;
};
