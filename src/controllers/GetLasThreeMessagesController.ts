import { Request, Response } from 'express';
import { GetLasThreeMessagesService } from '../services/GetLasThreeMessagesService';

class GetLasThreeMessagesController {
  async handle(request: Request, response: Response) {
    const service = new GetLasThreeMessagesService();

    const result = await service.execute();

    return response.json(result);
  }
}

export { GetLasThreeMessagesController };
