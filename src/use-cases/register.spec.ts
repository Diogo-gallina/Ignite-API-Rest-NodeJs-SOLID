
import { it, expect, describe, beforeEach } from 'vitest';
import { compare } from "bcryptjs";

import { RegisterUseCase } from './register';
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { UserAlreadyExistError } from './errors/user-aleread-exists-error';

let usersRepository: InMemoryUsersRepository;
let sut: RegisterUseCase;

describe('Resgister Use Case', () => {

    beforeEach(() => {
        usersRepository = new InMemoryUsersRepository();
        sut = new RegisterUseCase(usersRepository);
    })

    it('should be able to register', async () => {
        const email = 'johndoe@gmail.com'

        const { user } = await sut.execute({
            name: 'John Doe',
            email: 'johndoe@gmail.com',
            password: '123456'
        });

        expect(user.id).toEqual(expect.any(String));
    })

    it('should hash user password upon registration', async () => {
        const { user } = await sut.execute({
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
        const email = 'johndoe@gmail.com'

       await sut.execute({
            name: 'John Doe',
            email,
            password: '123456'
        })

        await expect(() => 
        sut.execute({
            name: 'John Doe',
            email,
            password: '123456'
        })
        ).rejects.toBeInstanceOf(UserAlreadyExistError);
    })
})