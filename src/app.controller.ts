import { Controller, Get , UseFilters, UseInterceptors } from '@nestjs/common';
import { GrpcMethod, } from '@nestjs/microservices';
import { AppService } from './app.service';

export interface Entrada {
   valor: number;
}

export interface Saida {
  readonly valorAnterior: number;
  readonly valorPosterior: number;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseFilters()
  @UseInterceptors()
  @GrpcMethod('CalculatorService', 'Calcular')
  async calcular(data: Entrada, metadata: any) {
    const valorAnterior =  data.valor  -1;
    const valorPosterior =  data.valor +1; 
      return {
        valorAnterior,
        valorPosterior,
      } 
  };   
  
  
}


