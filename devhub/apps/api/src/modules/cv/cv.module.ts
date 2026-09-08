// src/modules/cv/cv.module.ts
import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { CvController } from './cv.controller';
import { CvService } from './cv.service';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'cv-generation', // Queue name for AI CV generation jobs
    }),
  ],
  controllers: [CvController],
  providers: [CvService],
  exports: [CvService],
})
export class CvModule {}
