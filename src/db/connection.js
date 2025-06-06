import mongoose from "mongoose";

export const connectMongo = async () => {
    return mongoose.connect(process.env.MONGO_URL, {
        // promiseLibrary: global.Promise,
        // useCreateIndex: true,
        // useUnifiedTopology: true,
        // useFindAndModify: false,
    })
};
