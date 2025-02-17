import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.API_PORT ?? 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => {
    console.log(`Server run on port ${PORT}`);
  });
}
bootstrap();
