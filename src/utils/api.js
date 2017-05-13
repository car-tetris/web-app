import 'whatwg-fetch';
import CONFIG from '../config';

/*
 * API functions
 */

export const API_URL = CONFIG.api.url;

/**
 * Build a API URL.
 *
 * @param {string} path - API path like /login
 * @param {string} params - Like data=value&data1=value1 (without '?' at the beginning or '&' at the end)
 * @param {string} [token=null]
 * @returns {string} Complete URL like http://example.com/api/login?data=value?token=...
 */
export const buildUrl = (path, params, token=null) => {
  let url = "";
  if(params && params.length > 0) {
    url = !token ? path + "?" + params : path + "?" + params + "&access_token=" + token;
  }else{
    url = !token ? path : path + "?access_token=" + token;
  }
  return API_URL + url;
}

/**
 * Reformats the body from an array to an object with
 * indices as keys
 * @example
 * // obj parameter
 * [obj1, obj2] --> {0:obj1, 1:obj2}
 *
 * @param body
 * @returns {string} body as a string
 */
var formatBody = function(body){
  // Send valid body object.
  if(!body)
    return "{}";

  if(!Array.isArray(body))
    return JSON.stringify(body);

  var newBody = {};
  for(var i = 0; i < body.length; i++){
    newBody[i] = body[i];
  }
  return JSON.stringify(newBody);
}


/**
 * Convert an object to url parameters.
 * @example
 * // obj parameter
 * {
 *   filter: { include: "user" },
 *   params: { param1: 'data1' }
 * }
 *
 * @param {object} obj
 * @returns {string} URL parameters like param1=data1&param2=data2
 */
export const objectToParams = (obj) => {
  if(typeof(obj) !== 'object' || obj == null)
    return ''

  let params = ''
  // stringified loopback filter
  if(obj.filter && typeof(obj.filter) === 'object')
    params += 'filter=' + encodeURIComponent(JSON.stringify(obj.filter))

  if(obj.includes && typeof(obj.includes) === 'object')
    params += 'includes=' + encodeURIComponent(JSON.stringify(obj.includes))

  // params obj to string
  if(obj.params && typeof(obj.params) === 'object') {
    const tmpParams = Object.keys(obj.params).map((key) => {
      return key + '=' + ((typeof obj.params[key] === 'object') ? encodeURIComponent(JSON.stringify(obj.params[key])) : obj.params[key])
    }).join('&')
    params += params.length > 0 ? '&' + tmpParams: tmpParams
  }
  return params
}


/**
 * Send a post request.
 *
 * @param {string} path - API path like /login
 * @param {object} body
 * @param {string} [token=null]
 * @returns {Promise.<T>}
 */
export const post = (path, body, token=null, params=null) => {

  let paramsStr = ""
  if(typeof(params) === 'string') {
    paramsStr = params
  }else if(typeof(params) === 'object') {
    paramsStr = objectToParams(params)
  }

  const url = buildUrl(path, paramsStr, token)

  return fetch(url, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=UTF-8'
    },
    body: formatBody(body)
  }).then((response) => {
    if(response.statusText === 'No Content')
      return { json: {}, response };
    return response.json().then(json => ({ json, response }))
  }).then(({ json, response }) => {
    if(!response.ok)
      return Promise.reject(json)
    return json
  }).then(
    response => ({data: response, error: null}),
    error => ({
      data: null,
      error: error.error
        ? { ...error.error, method: 'post', url: url, path: path, params: params, body: body }
        : { status: 0, statusCode: 0, code: 'CONNECTION_REFUSED', message: 'Connection refused' }
    })
  )
}


/**
 * GET request.
 *
 * @param {string} path - API path like /login
 * @param {object|string} params - Object: {filter: {include: 'user'}} or String: filter[include]=user.
 * When using object you can pass normal params like this: {params: {data1: 'data1'}, filter: ...}
 * (see {@link https://docs.strongloop.com/display/public/LB/Querying+data#Queryingdata-RESTsyntax Loopback - Querying Data})
 * @param {string} [token=null]
 * @returns {Promise.<T>}
 */
export const get = (path, params, token=null) => {

  let paramsStr = ""
  if(typeof(params) === 'string') {
    paramsStr = params
  }else if(typeof(params) === 'object') {
    paramsStr = objectToParams(params)
  }

  const url = buildUrl(path, paramsStr, token)

  return fetch(url, {
    method: 'get',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json; charset=UTF-8'
    }
  }).then((response) => {
    if(response.statusText === 'No Content')
      return { json: {}, response };
    return response.json().then(json => ({ json, response }))
  }).then(({ json, response }) => {
    if(!response.ok)
      return Promise.reject(json)
    return json
  }).then(
    response => ({data: response, error: null}),
    error => ({
      data: null,
      error: error.error
        ? { ...error.error, method: 'get', url: url, path: path, params: params }
        : { status: 0, statusCode: 0, code: 'CONNECTION_REFUSED', message: 'Connection refused.' }
    })
  )
}


/**
 * Send a put request.
 *
 * @param {string} path - API path like /login
 * @param {object} body
 * @param {string} [token=null]
 * @returns {Promise.<T>}
 */
export const put = (path, body, token=null, params=null) => {

  let paramsStr = ""
  if(typeof(params) === 'string') {
    paramsStr = params
  }else if(typeof(params) === 'object') {
    paramsStr = objectToParams(params)
  }

  const url = buildUrl(path, paramsStr, token)

  return fetch(url, {
    method: 'put',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=UTF-8'
    },
    body: formatBody(body)
  }).then((response) => {
    if(response.statusText === 'No Content')
      return { json: {}, response };
    return response.json().then(json => ({ json, response }))
  }).then(({ json, response }) => {
    if(!response.ok)
      return Promise.reject(json)
    return json
  }).then(
    response => ({data: response, error: null}),
    error => ({
      data: null,
      error: error.error
        ? { ...error.error, method: 'put', url: url, path: path, params: params, body: body }
        : { status: 0, statusCode: 0, code: 'CONNECTION_REFUSED', message: 'Connection refused.' }
    })
  )
}


/**
 * Send a delete request.
 *
 * @param {string} path - API path like /login
 * @param {object} body
 * @param {string} [token=null]
 * @returns {Promise.<T>}
 */
export const deleteMsg = (path, params, token=null) => {

  let paramsStr = ""
  if(typeof(params) === 'string') {
    paramsStr = params
  }else if(typeof(params) === 'object') {
    paramsStr = objectToParams(params)
  }

  const url = buildUrl(path, paramsStr, token)

  return fetch(url, {
    method: 'delete',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json; charset=UTF-8'
    }
  }).then((response) => {
    if(response.statusText === 'No Content')
      return { json: {}, response };
    return response.json().then(json => ({ json, response }))
  }).then(({ json, response }) => {
    if(!response.ok)
      return Promise.reject(json)
    return json
  }).then(
    response => ({data: response, error: null}),
    error => ({
      data: null,
      error: error.error
        ? { ...error.error, method: 'delete', url: url, path: path, params: params }
        : { status: 0, statusCode: 0, code: 'CONNECTION_REFUSED', message: 'Connection refused.' }
    })
  )
}


/**
 * Upload a file.
 *
 * @param {string} path - API path like /login
 * @param {object} files
 * @param {string} [token=null]
 * @param {string|object} params
 * @param {function} callback
 * @returns {Promise.<T>}
 */
export const upload = (path, files, token=null, params=null, callback=undefined) => {


  let paramsStr = "";
  if(typeof(params) === 'string') {
    paramsStr = params;
  }else if(typeof(params) === 'object') {
    paramsStr = objectToParams(params);
  }

  const url = buildUrl(path, paramsStr, token);

  const errorObj = { method: 'upload', url: url, path: path, files: files, params: params };

  // create formData (only 1 file supported)
  var data = new FormData();
  data.append(files[0].name, files[0]);

  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest()
    xhr.open('POST', url)
    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve({error: null, data: JSON.parse(xhr.responseText)});
      } else {
        reject({error: { ...errorObj, statusText: xhr.statusText }, data: null});
      }
    }
    xhr.onerror = function(error) {
      reject({error: { ...errorObj, statusText: error.target.status }, data: null});
    }
    if(callback != undefined) {
      xhr.upload.onprogress = function (event) {
        if (event.lengthComputable) {
          var percent = Math.round((event.loaded / event.total) * 100)
          callback(percent);
        }
      }
    }
    xhr.send(data);
  });
}
