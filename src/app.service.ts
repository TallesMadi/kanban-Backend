import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private note: string = '';

  saveData(message: string): string {
    this.note = message;
    return 'Fazer as atividades escolares';
  }

  getData(): string {
    return this.note;
  }
}
