// src/modules/ai/ai.module.ts
import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { AiService } from './ai.service';
import { CvGenerationProcessor } from './processors/cv-generation.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'cv-generation',
    }),
  ],
  providers: [AiService, CvGenerationProcessor],
  exports: [AiService],
})
export class AiModule {}
