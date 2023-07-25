import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { NestExpressApplication } from '@nestjs/platform-express';

//main.ts	 应用程序的入口文件，它使用核心函数 NestFactory 来创建 Nest 应用程序的实例。

//引导应用文件启动
async function bootstrap() {
  //当您将类型信息传递给 NestFactory.create()方法时，app对象将具有该特定平台的专用方法。
  //注意，除非您确实需要访问底层平台的API，否则无需指定平台类型。
  const app = await NestFactory.create(AppModule);

  //const app = await NestFactory.createe<NestExpressApplication>(AppModule)


  await app.listen(3000);
}
bootstrap();
