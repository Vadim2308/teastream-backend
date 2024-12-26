import { ConfigService } from '@nestjs/config'
import * as dotenv from 'dotenv'

dotenv.config()

// Если есть доступ к ConfigService
export function isDev(configService: ConfigService) {
	return configService.getOrThrow<string>('NODE_ENV') === 'development'
}
// Если нет доступа к ConfigService
export const IS_DEV_ENV = process.env.NODE_ENV === 'development'
