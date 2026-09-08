// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { BullModule } from '@nestjs/bull';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { CvModule } from './modules/cv/cv.module';
import { TemplatesModule } from './modules/templates/templates.module';
import { GithubModule } from './modules/github/github.module';
import { AiModule } from './modules/ai/ai.module';
import { ExportsModule } from './modules/exports/exports.module';

@Module({
  imports: [
    // Config - load .env
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
    }),

    // Rate limiting
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: () => ({
        throttlers: [
          { ttl: 60000, limit: 60 },  // 60 req/min general
        ],
      }),
    }),

    // Redis Queue
    BullModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        redis: config.get('REDIS_URL'),
      }),
    }),

    // Feature Modules
    PrismaModule,
    AuthModule,
    UsersModule,
    CvModule,
    TemplatesModule,
    GithubModule,
    AiModule,
    ExportsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
