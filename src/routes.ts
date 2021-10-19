import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateMessageController } from './controllers/CreateMessageController';
import { GetLasThreeMessagesController } from './controllers/GetLasThreeMessagesController';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

const router = Router();

router.post('/authenticate', new AuthenticateUserController().handle);

router.post(
  '/messages',
  ensureAuthenticated,
  new CreateMessageController().handle
);

router.get(
  '/messages/getlastthree',
  new GetLasThreeMessagesController().handle
);

export { router };
