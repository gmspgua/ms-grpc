import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { calculatorServerOptions } from './grpc/calculator.option';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, );
  app.connectMicroservice(calculatorServerOptions);
  await app.startAllMicroservicesAsync();
  await app.listen(8081);
  
}
bootstrap();


