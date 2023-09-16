import jsonwebtoken from 'jsonwebtoken';

const secret = 'secrete';

interface JwtPayload {
  password: string;
  email: string;
  iss?: string | undefined;
  sub?: string | undefined;
  aud?: string | string[] | undefined;
  exp?: number | undefined;
  nbf?: number | undefined;
  iat?: number | undefined;
  jti?: string | undefined;
}

const jwt = {
  encode: (obj: object) => jsonwebtoken.sign(obj, secret),
  decode: (token: string) => jsonwebtoken.verify(token, secret) as JwtPayload,
};

export default jwt;