import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Loan } from './loan/entity/loan';
import { LoanModule } from './loan/loan.module';
import { User } from './user/entity/user';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    LoanModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'user',
      password: 'password',
      database: 'db',
      // url: 'mysql://i0dzrrm1vy24cj9rolf0:pscale_pw_2YOz8tY7b2QZMYMWxYOkh7zQr2i1SJtWaw2bj9kzI3L@us-east.connect.psdb.cloud/testdatabase?ssl={"rejectUnauthorized":false}',
      entities: [User, Loan],
      synchronize: true,
      logging: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }

// DATABASE_URL = 'mysql://i0dzrrm1vy24cj9rolf0:pscale_pw_2YOz8tY7b2QZMYMWxYOkh7zQr2i1SJtWaw2bj9kzI3L@us-east.connect.psdb.cloud/testdatabase?ssl={"rejectUnauthorized":true}'

