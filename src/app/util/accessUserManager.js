export class TokenNotValidException extends Error {
    constructor(message) {
        super(message);
        this.name = 'TokenNotValidException';
    }
}

export class TokenNotFoundException extends Error {
    constructor(message) {
        super(message);
        this.name = 'TokenNotFoundException';
    }
}


/**
 * Guardado de token en el navegador,
 * ejemplo: storeAccess(promise.json());
 *
 * @param      {Promise<any>}  value   funcion .json() resultante de
 *                                     fetch a la api
 */
export function storeAccess(value){
	value.then((data) => {
		if (data.access_token){
	    	localStorage.setItem('access_token', data.access_token);
		}else{
			throw new TokenNotValidException('Token No valido');
		}
	}).catch((err) => {
		console.log(err); 
	});
}



/**
 * @typedef {Object} AuthorizationData
 * @property {string} token - El token de acceso.
 * @property {Object} Authorization - Encabezado de autorización con el token en formato 'Bearer <token>'.
 * 
 * Obtiene el token del navegador, si no existe se lanza la excepcion TokenNotFoundException
 * @throws {TokenNotFoundException} Se lanza si el token no se encuentra en el almacenamiento local.
 * @return {AuthorizationData}  Devuele token valido guardado
 */
export function getAccessUser(){  	
	const access = localStorage.getItem('access_token');
	if (!access){
		throw new TokenNotFoundException('Token no encontrado');
	}else{
		const Authorization = {
    		'Authorization': `Bearer ${access}`
  		}
		return {
			token: access,
			Authorization
		};
	}
}