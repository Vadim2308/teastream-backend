import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { CreateUserInput } from '@/src/modules/auth/account/inputs/create-user.input'
import { UserModel } from '@/src/modules/auth/account/models/user.model'
import { Authorization } from '@/src/shared/decorators/auth.decorator'
import { Authorized } from '@/src/shared/decorators/authorized.decorator'

import { AccountService } from './account.service'

/**
 * Резолвер в GQL - аналог контроллера в REST
 */
@Resolver('Account')
export class AccountResolver {
	public constructor(private readonly accountService: AccountService) {}

	@Authorization()
	@Query(() => UserModel, { name: 'findProfile' })
	public async me(@Authorized('id') id: string) {
		return this.accountService.me(id)
	}

	@Mutation(() => Boolean, { name: 'createUser' })
	public async create(@Args('data') input: CreateUserInput) {
		return this.accountService.create(input)
	}
}
