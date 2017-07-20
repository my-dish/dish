// @flow

type errorCode =
  '401' |
  '404' |
  '502';

export type Error = {
  error: {
    code: errorCode;
  };
};
