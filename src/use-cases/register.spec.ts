
import { it, expect, describe } from 'vitest';
import { compare } from "bcryptjs";

import { RegisterUseCase } from './register';
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { UserAlreadyExistError } from './errors/user-aleread-exists-error';

describe('Resgister Use Case', () => {

    it('should be able to register', async () => {
        const usersRepository = new InMemoryUsersRepository();
        const registerUseCase = new RegisterUseCase(usersRepository);

        const email = 'johndoe@gmail.com'

        const { user } = await registerUseCase.execute({
            name: 'John Doe',
            email: 'johndoe@gmail.com',
            password: '123456'
        });

        expect(user.id).toEqual(expect.any(String));
    })

    it('should hash user password upon registration', async () => {
        const usersRepository = new InMemoryUsersRepository()
        const registerUseCase = new RegisterUseCase(usersRepository);

        const { user } = await registerUseCase.execute({
            name: 'John Doe',
            email: 'johndoe@gmail.com',
            password: '123456'
        })

        const isPasswordCorrectlyHashed = await compare( 
            '123456',
            user.password_hash,
        )

        expect(isPasswordCorrectlyHashed).toBe(true);
    })

    it('should not be able to register with same email twice', async () => {
        const usersRepository = new InMemoryUsersRepository();
        const registerUseCase = new RegisterUseCase(usersRepository);

        const email = 'johndoe@gmail.com'

       await registerUseCase.execute({
            name: 'John Doe',
            email,
            password: '123456'
        })

        await expect(() => 
        registerUseCase.execute({
            name: 'John Doe',
            email,
            password: '123456'
        })
        ).rejects.toBeInstanceOf(UserAlreadyExistError);
    })
})