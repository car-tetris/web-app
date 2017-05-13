import logger from './logger';
import apiSchema from './apiSchema';
import apiError from './apiError'

const middlewares = (__DEV__) ?
  [// middlewares for dovelopment
    logger,
    apiSchema,
    apiError
  ] : [
    apiSchema,
    apiError
  ];

export default middlewares;
