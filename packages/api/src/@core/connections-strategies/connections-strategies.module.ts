import { Module } from '@nestjs/common';
import { LoggerService } from '@@core/logger/logger.service';
import { PrismaService } from '@@core/prisma/prisma.service';
import { ConnectionsStrategiesController } from './connections-strategies.controller';
import { ConnectionsStrategiesService } from './connections-strategies.service';

@Module({
  controllers: [ConnectionsStrategiesController],
  providers: [LoggerService, PrismaService, ConnectionsStrategiesService],
})
export class ConnectionsStrategiesModule {}
