import { Controller, Get, Post, HttpCode, Param, Bind, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ParamsTokenFactory } from '@nestjs/core/pipes';

//app.controller.ts 带有单个路由的基本控制器。

//@Controller()可以定义一个基础的控制器
//可填写可选路由前缀
@Controller('api')
export class AppController {
  // constructor(private readonly appService: AppService) {}

  @Inject('app-service')
  private appService: AppService;

  @Inject('person')
  private p;

  @Inject('xxx')
  private xxx;

  //get请求
  //默认200状态码
  @Get('/get-test')
  findAll() {
    return 'return result' + JSON.stringify(this.xxx);
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);
    return `return params ${id}`;
  }

  //post请求
  //post默认状态码201
  @Post('/post-test')
  //可以修改状态码
  @HttpCode(202)
  create() {
    return 'post test';
  }

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
