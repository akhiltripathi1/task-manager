import mongoose from 'mongoose';

const connectDB = async () => {
  await mongoose
    .connect(process.env.DB_URI)
    .then(() => {
      console.log('MongoDB is connected...');
    })
    .catch((error) => {
      console.log('MongoDB connection error...', error);
    });
};
export default connectDB;
