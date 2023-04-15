import { Collection, ObjectId } from "mongodb";
import clientPromise from "../mongodb";

export interface Blog {
  _id: ObjectId;
  title: string;
}

// get all blogs
export const getAllBlogs = async () => {
  const client = await clientPromise;

  const collection: Collection<Blog> = client
    .db("visionclara")
    .collection("blogs");

  const retults: Blog[] = await collection.find().toArray();

  return retults;
};

// get one blog by id
export const getOneBlog = async (blogId: string) => {
  const client = await clientPromise;

  const collection: Collection<Blog> = client
    .db("visionclara")
    .collection("blogs");

  const id = new ObjectId(blogId);

  const retults: Blog | null = await collection.findOne({ _id: id });

  return retults;
};
