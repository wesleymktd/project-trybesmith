import { NextFunction, Request, Response } from 'express';
import { validateToken } from './jwtConfig';

export default function authToken(
  req: Request & { userId?: number },
  res: Response,
  next: NextFunction,
) {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const retornoToken = validateToken(authorization);

    req.userId = retornoToken;
    // console.log('retorno validação', retornoToken);
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: 'Invalid token' });
  }
}
