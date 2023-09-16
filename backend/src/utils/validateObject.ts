import NotFound from '../middlewares/errors/NotFound.error';

const validateAttributes = (obj: object) => {
  const result = Object.values(obj).find((att) => att || att === 0);
  if (!result) throw new NotFound('values invalid');
};
  
export default validateAttributes;