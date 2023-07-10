
import { it, expect, describe, beforeEach } from 'vitest';

import { InMemoryCheckInsRepository } from '@/repositories/in-memory/in-memory-check-ins-repository';
import { CheckInUseCase } from './check-in';

let checkInRepository: InMemoryCheckInsRepository;
let sut: CheckInUseCase;

describe('Check-in Use Case', () => {

    beforeEach(() => {
        checkInRepository = new InMemoryCheckInsRepository();
        sut = new CheckInUseCase(checkInRepository);
    })

    it('should be able to check in', async () => {
        const email = 'johndoe@gmail.com'

        const { checkIn } = await sut.execute({
            gymId: 'gym-01',
            userId: 'user-01'
        });

        expect(checkIn.id).toEqual(expect.any(String));
    })

})