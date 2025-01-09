import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
  ],
})
export class DatabaseModule {}