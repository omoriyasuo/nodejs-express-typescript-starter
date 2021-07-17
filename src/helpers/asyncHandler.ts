/*
  try/catchブロックの連鎖を避けるヘルパー
  routes/のなかで使う

    router.get('/me', asyncHandler(async (request, response, next) => {
      // try/catchを書かなくて良い
      // apiError.tsにあるインスタンスを渡すことでエラーハンドリング可能
      const user = await UserRepo.findProfileById(request.user.id)
      if (!user) throw new BadRequestError('User not registered);
      return new SuccessResponse('success').send(response);
    }))

*/

import { NextFunction, Request, Response } from 'express';

type AsyncFunction = (
  request: Request,
  response: Response,
  next: NextFunction,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
) => Promise<any>;

export const asyncHandler =
  (execution: AsyncFunction) =>
  (request: Request, response: Response, next: NextFunction): void => {
    execution(request, response, next).catch(next);
  };
