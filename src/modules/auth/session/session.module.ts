import { Module } from '@nestjs/common'

import { VerificationService } from '../verification/verification.service'

import { SessionResolver } from './session.resolver'
import { SessionService } from './session.service'

@Module({
  /**
   * imports: [],
   * В этом массиве вы можете указать другие модули, которые нужны для работы SessionModule.
   * Например, если SessionService использует TypeORM для работы с базой данных, вы можете импортировать TypeOrmModule.
   */
  /**
   * Здесь вы регистрируете провайдеры (SessionResolver, SessionService, VerificationService), которые будут доступны внутри друг друга.
   * Например, если SessionService нужен внутри SessionResolver, NestJS автоматически его внедрит через Dependency Injection.
   * Или если VerificationService нужен внутри SessionService, то его Nest также внедрит
   */
  providers: [SessionResolver, SessionService, VerificationService],
  /**
   * exports: []:
   * В этом массиве вы указываете, что должно быть доступно вне SessionModule, когда его импортируют в другие модули.
   * Например, если вы хотите, чтобы SessionService можно было использовать в других модулях, его нужно добавить в exports.
   */
})
export class SessionModule {}
