import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const calculatorServerOptions: ClientOptions = {
    transport: Transport.GRPC,
    options: {
        url: '0.0.0.0:50000',
        package: 'calculator',
        protoPath: join(__dirname, './calculator.proto'),
    },
};
