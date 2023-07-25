import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

//app.module.ts	 T应用程序的根模块（root module）。

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [{
    provide: 'app-service',
    useClass: AppService,
  }, {
    provide: 'person',
    useValue: {
      name: "张三",
      age: 18,
      sex: "男"
    }
  },{
    provide: 'xxx',
    // useFactory 可以是 async 函数
    // Nest 会等到异步方法结束拿到结果后再进行注入
    useFactory: () => {
      return { a: 3, b: 5 }
    }
  }],
})
export class AppModule {}
