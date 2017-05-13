import { normalize, Schema, arrayOf } from 'normalizr';


/*
 * Define Schemas
 */
// Normalizr

/*
 * Middleware
 */
const apiSchema = store => next => action => {
  const console = window.console;

  let normalized = null;

  // Normalize specific api responses:
  switch(action.type) {

    //case TEST.SUCCESS:

    default:
      return next(action);

  }

  // Dispatch all actions
  if(normalized) {

    Object.keys(normalized.entities).forEach((entity) => {
      const actionName = entity + 'Action';
      if(apiAction[actionName] && apiAction[actionName].data) {
        store.dispatch(apiAction[actionName].data(normalized.entities[entity]));
      }else{
        console.log(`%cSchema without action: `, `color: red`, "\nSchema: " + entity + ", Action:" + action.type);
      }
    });
  }

  return next(action);
};

export default apiSchema;
