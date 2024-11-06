import { TasksController } from './tasks.controller';
import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
@Module({
  providers: [TasksService],
  controllers: [TasksController],
})
export class TasksModule {}
