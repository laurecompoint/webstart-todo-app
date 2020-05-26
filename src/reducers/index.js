import { combineReducers } from 'redux';
import todo from "./todo"



/**
 * combineReducers() permet de combiner les différents reducers, ce qui est plus pratique pour organiser les reducers.
 *
 * Dans notre cas le state général de l'application aura cette forme
 * {
 *   listings : {
 *     experiences: [....]
 *   },
 *   app: {
 *     isLoading: true
 *   }
 * }
 */

export default combineReducers({
    todo,


});