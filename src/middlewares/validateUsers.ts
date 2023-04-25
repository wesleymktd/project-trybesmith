import { NextFunction, Request, Response } from 'express';
import { User } from '../interfaces';

function validateUserName(username: unknown) {
  if (!username) {
    const message = '"username" is required';
    return ({ status: 400, message });
  }

  if (typeof username !== 'string') {
    const message = '"username" must be a string';
    return ({ status: 422, message });
  }

  if (username.length <= 2) {
    const message = '"username" length must be at least 3 characters long';
    return ({ status: 422, message });
  }
}

function validateVocation(vocation: unknown) {
  if (!vocation) {
    const message = '"vocation" is required';
    return ({ status: 400, message });
  }

  if (typeof vocation !== 'string') {
    const message = '"vocation" must be a string';
    return ({ status: 422, message });
  }

  if (vocation.length <= 2) {
    const message = '"vocation" length must be at least 3 characters long';
    return ({ status: 422, message });
  }
}

function validateLevel(level: unknown) {
  if (level === undefined) {
    const message = '"level" is required';
    return ({ status: 400, message });
  }

  if (typeof level !== 'number') {
    const message = '"level" must be a number';
    return ({ status: 422, message });
  }

  if (level <= 0) {
    const message = '"level" must be greater than or equal to 1';
    return ({ status: 422, message });
  }
}

function validatePassword(password: unknown) {
  if (!password) {
    const message = '"password" is required';
    return ({ status: 400, message });
  }

  if (typeof password !== 'string') {
    const message = '"password" must be a string';
    return ({ status: 422, message });
  }

  if (password.length < 8) {
    const message = '"password" length must be at least 8 characters long';
    return ({ status: 422, message });
  }
}

export default function validateUsers(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { username, vocation, level, password } = req.body as User;

  const errUserName = validateUserName(username);

  if (errUserName) return res.status(errUserName.status).json({ message: errUserName.message });
  
  const errVocation = validateVocation(vocation);

  if (errVocation) return res.status(errVocation.status).json({ message: errVocation.message });

  const errLevel = validateLevel(level);

  if (errLevel) return res.status(errLevel.status).json({ message: errLevel.message });

  const errPassword = validatePassword(password);

  if (errPassword) return res.status(errPassword.status).json({ message: errPassword.message });

  next();
}