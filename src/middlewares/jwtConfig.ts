import jwt from 'jsonwebtoken';

export const secret = process.env.JWT_SECRET as string;

export const config: object = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

export function validateToken(token: string) {
  const decodetToken = jwt.verify(token, 'minhaSenhaSecreta');
  if (typeof decodetToken !== 'string') {
    return decodetToken.id;
  }
  return 0;
}