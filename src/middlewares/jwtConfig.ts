export const secret = process.env.JWT_SECRET as string;

export const config: object = {
  expiresIn: '1d',
  algorithm: 'HS256',
};