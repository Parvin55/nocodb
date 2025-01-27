import { forwardRef, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersService } from '~/services/users/users.service';
import { UsersController } from '~/controllers/users/users.controller';
import { MetasModule } from '~/modules/metas/metas.module';

@Module({
  imports: [PassportModule, forwardRef(() => MetasModule)],
  controllers: [
    ...(process.env.NC_WORKER_CONTAINER !== 'true' ? [UsersController] : []),
  ],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
