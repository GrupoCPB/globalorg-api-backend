import { EntityRepository, getCustomRepository, Repository } from 'typeorm';
import { hashSync } from 'bcryptjs';
import { User } from '@/entities/Users';
import { IChangePasswordRepository } from '@/repositories/interfaces/user/IChangePasswordRepository';
import { TChangePasswordDTO } from '@/useCases/user/changePassword/changePassword.dto';
import { configBcrypt } from '@/config/bcrypt';

@EntityRepository(User)
class UserRepository extends Repository<User> {}

export class ChangePasswordRepository implements IChangePasswordRepository {
  async updatePassword({ idUser, newPassword }: TChangePasswordDTO): Promise<void> {
    const orm = getCustomRepository(UserRepository);
    const passwordHash = hashSync(newPassword, configBcrypt.salt);

    await orm.update({ id: idUser }, { password: passwordHash });
  }
}