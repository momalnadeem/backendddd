import mongoose from "mongoose";
const Connection = () => {
  const DB = `mongodb://user:user12345@ac-95jz3c8-shard-00-00.l6sxp8c.mongodb.net:27017,ac-95jz3c8-shard-00-01.l6sxp8c.mongodb.net:27017,ac-95jz3c8-shard-00-02.l6sxp8c.mongodb.net:27017/?ssl=true&replicaSet=atlas-u3ddnd-shard-0&authSource=admin&retryWrites=true&w=majority`;
  mongoose
    .connect(DB)
    .then(() => {
      console.log("connected");
    })
    .catch((err) => {
      console.log("errorssssssssss", err);
    });
};
export default Connection;
