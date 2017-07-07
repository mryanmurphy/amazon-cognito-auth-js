/*!
 * Copyright 2017 Amazon.com,
 * Inc. or its affiliates. All Rights Reserved.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the
 * License. A copy of the License is located at
 * 
 *      http://aws.amazon.com/apache2.0/
 * 
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, express or implied. See the License
 * for the specific language governing permissions and
 * limitations under the License. 
 */


(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("aws-sdk/global"), require("aws-sdk/clients/cognitoidentityserviceprovider"));
	else if(typeof define === 'function' && define.amd)
		define(["aws-sdk/global", "aws-sdk/clients/cognitoidentityserviceprovider"], factory);
	else if(typeof exports === 'object')
		exports["AmazonCognitoIdentity"] = factory(require("aws-sdk/global"), require("aws-sdk/clients/cognitoidentityserviceprovider"));
	else
		root["AmazonCognitoIdentity"] = factory(root["AWSCognito"], root["AWSCognito"]["CognitoIdentityServiceProvider"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_9__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aws_sdk_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aws_sdk_global___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_aws_sdk_global__);
/*!
 * Amazon Cognito Auth SDK for JavaScript
 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *         http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file.
 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
 * OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions
 * and limitations under the License.
 */



/** @class */
class CognitoAccessToken {
  /**
   * Constructs a new CognitoAccessToken object
   * @param {string=} AccessToken The JWT access token.
   */
  constructor(AccessToken) {
    // Assign object
    this.jwtToken = AccessToken || '';
  }

  /**
   * @returns {string} the record's token.
   */
  getJwtToken() {
    return this.jwtToken;
  }

  /**
   * Sets new value for access token.
   * @param {string=} accessToken The JWT access token.
   * @returns {void}
   */
  setJwtToken(accessToken) {
    this.jwtToken = accessToken;
  }

  /**
   * @returns {int} the token's expiration (exp member).
   */
  getExpiration() {
    const payload = this.jwtToken.split('.')[1];
    const expiration = JSON.parse(__WEBPACK_IMPORTED_MODULE_0_aws_sdk_global__["util"].base64.decode(payload).toString('utf8'));
    return expiration.exp;
  }

  /**
   * @returns {string} the username from payload.
   */
  getUsername() {
    if (this.jwtToken === null) {
      return undefined;
    }
    const payload = this.jwtToken.split('.')[1];
    const usernameSource = JSON.parse(__WEBPACK_IMPORTED_MODULE_0_aws_sdk_global__["util"].base64.decode(payload).toString('utf8'));
    return usernameSource.username;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CognitoAccessToken;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aws_sdk_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aws_sdk_global___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_aws_sdk_global__);
/*!
 * Amazon Cognito Auth SDK for JavaScript
 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *         http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file.
 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
 * OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions
 * and limitations under the License.
 */



/** @class */
class CognitoIdToken {
  /**
   * Constructs a new CognitoIdToken object
   * @param {string=} IdToken The JWT Id token
   */
  constructor(IdToken) {
    // Assign object
    this.jwtToken = IdToken || '';
  }

  /**
   * @returns {string} the record's token.
   */
  getJwtToken() {
    return this.jwtToken;
  }

  /**
   * Sets new value for id token.
   * @param {string=} idToken The JWT Id token
   * @returns {void}
   */
  setJwtToken(idToken) {
    this.jwtToken = idToken;
  }

  /**
   * @returns {int} the token's expiration (exp member).
   */
  getExpiration() {
    const payload = this.jwtToken.split('.')[1];
    const expiration = JSON.parse(__WEBPACK_IMPORTED_MODULE_0_aws_sdk_global__["util"].base64.decode(payload).toString('utf8'));
    return expiration.exp;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CognitoIdToken;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*!
 * Amazon Cognito Auth SDK for JavaScript
 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *         http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file.
 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
 * OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions
 * and limitations under the License.
 */

/** @class */
class CognitoRefreshToken {
  /**
   * Constructs a new CognitoRefreshToken object
   * @param {string=} RefreshToken The JWT refresh token.
   */
  constructor(RefreshToken) {
    // Assign object
    this.refreshToken = RefreshToken || '';
  }

  /**
   * @returns {string} the record's token.
   */
  getToken() {
    return this.refreshToken;
  }

  /**
   * Sets new value for refresh token.
   * @param {string=} refreshToken The JWT refresh token.
   * @returns {void}
   */
  setToken(refreshToken) {
    this.refreshToken = refreshToken;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CognitoRefreshToken;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*!
 * Amazon Cognito Auth SDK for JavaScript
 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *         http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file.
 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
 * OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions
 * and limitations under the License.
 */

/** @class */
class CognitoTokenScopes {
  /**
   * Constructs a new CognitoTokenScopes object
   * @param {array=} TokenScopesArray The token scopes
   */
  constructor(TokenScopesArray) {
    // Assign object
    this.tokenScopes = TokenScopesArray || [];
  }

  /**
   * @returns {Array} the token scopes.
   */
  getScopes() {
    return this.tokenScopes;
  }

  /**
   * Sets new value for token scopes.
   * @param {array=} tokenScopes The token scopes
   * @returns {void}
   */
  setTokenScopes(tokenScopes) {
    this.tokenScopes = tokenScopes;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CognitoTokenScopes;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CognitoAccessToken__ = __webpack_require__(0);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CognitoAccessToken", function() { return __WEBPACK_IMPORTED_MODULE_0__CognitoAccessToken__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CognitoIdToken__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CognitoIdToken", function() { return __WEBPACK_IMPORTED_MODULE_1__CognitoIdToken__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CognitoRefreshToken__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CognitoRefreshToken", function() { return __WEBPACK_IMPORTED_MODULE_2__CognitoRefreshToken__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CognitoTokenScopes__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CognitoTokenScopes", function() { return __WEBPACK_IMPORTED_MODULE_3__CognitoTokenScopes__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CognitoAuth__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CognitoAuth", function() { return __WEBPACK_IMPORTED_MODULE_4__CognitoAuth__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CognitoAuthSession__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CognitoAuthSession", function() { return __WEBPACK_IMPORTED_MODULE_5__CognitoAuthSession__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__DateHelper__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DateHelper", function() { return __WEBPACK_IMPORTED_MODULE_6__DateHelper__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__StorageHelper__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "StorageHelper", function() { return __WEBPACK_IMPORTED_MODULE_7__StorageHelper__["a"]; });
/*!
 * Amazon Cognito Auth SDK for JavaScript
 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *         http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file.
 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
 * OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions
 * and limitations under the License.
 */










/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CognitoTokenScopes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CognitoAccessToken__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CognitoIdToken__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CognitoRefreshToken__ = __webpack_require__(2);
/*!
 * Amazon Cognito Auth SDK for JavaScript
 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *         http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file.
 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
 * OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions
 * and limitations under the License.
 */






/** @class */
class CognitoAuthSession {
  /**
   * Constructs a new CognitoUserSession object
   * @param {CognitoIdToken} IdToken The session's Id token.
   * @param {CognitoRefreshToken} RefreshToken The session's refresh token.
   * @param {CognitoAccessToken} AccessToken The session's access token.
   * @param {array}  TokenScopes  The session's token scopes.
   */
  constructor({ IdToken, RefreshToken, AccessToken, TokenScopes } = {}) {
    if (IdToken) {
      this.idToken = IdToken;
    } else {
      this.idToken = new __WEBPACK_IMPORTED_MODULE_2__CognitoIdToken__["a" /* default */]();
    }
    if (RefreshToken) {
      this.refreshToken = RefreshToken;
    } else {
      this.refreshToken = new __WEBPACK_IMPORTED_MODULE_3__CognitoRefreshToken__["a" /* default */]();
    }
    if (AccessToken) {
      this.accessToken = AccessToken;
    } else {
      this.accessToken = new __WEBPACK_IMPORTED_MODULE_1__CognitoAccessToken__["a" /* default */]();
    }
    if (TokenScopes) {
      this.tokenScopes = TokenScopes;
    } else {
      this.tokenScopes = new __WEBPACK_IMPORTED_MODULE_0__CognitoTokenScopes__["a" /* default */]();
    }
  }

  /**
   * @returns {CognitoIdToken} the session's Id token
   */
  getIdToken() {
    return this.idToken;
  }

  /**
   * Set a new Id token
   * @param {CognitoIdToken} IdToken The session's Id token.
   * @returns {void}
   */
  setIdToken(IdToken) {
    this.idToken = IdToken;
  }

  /**
   * @returns {CognitoRefreshToken} the session's refresh token
   */
  getRefreshToken() {
    return this.refreshToken;
  }

  /**
   * Set a new Refresh token
   * @param {CognitoRefreshToken} RefreshToken The session's refresh token.
   * @returns {void}
   */
  setRefreshToken(RefreshToken) {
    this.refreshToken = RefreshToken;
  }

  /**
   * @returns {CognitoAccessToken} the session's access token
   */
  getAccessToken() {
    return this.accessToken;
  }

  /**
   * Set a new Access token
   * @param {CognitoAccessToken} AccessToken The session's access token.
   * @returns {void}
   */
  setAccessToken(AccessToken) {
    this.accessToken = AccessToken;
  }

  /**
   * @returns {CognitoTokenScopes} the session's token scopes
   */
  getTokenScopes() {
    return this.tokenScopes;
  }

  /**
   * Set new token scopes
   * @param {array}  tokenScopes  The session's token scopes.
   * @returns {void}
   */
  setTokenScopes(tokenScopes) {
    this.tokenScopes = tokenScopes;
  }

  /**
   * Checks to see if the session is still valid based on session expiry information found
   * in Access and Id Tokens and the current time
   * @returns {boolean} if the session is still valid
   */
  isValid() {
    const now = Math.floor(new Date() / 1000);
    try {
      if (this.accessToken != null) {
        return now < this.accessToken.getExpiration();
      }
      if (this.idToken != null) {
        return now < this.idToken.getExpiration();
      }
      return false;
    } catch (e) {
      return false;
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CognitoAuthSession;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*!
 * Amazon Cognito Auth SDK for JavaScript
 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *         http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file.
 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
 * OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions
 * and limitations under the License.
 */
let dataMemory = {};

/** @class */
class MemoryStorage {

  /**
   * This is used to set a specific item in storage
   * @param {string} key - the key for the item
   * @param {object} value - the value
   * @returns {string} value that was set
   */
  static setItem(key, value) {
    dataMemory[key] = value;
    return dataMemory[key];
  }

  /**
   * This is used to get a specific key from storage
   * @param {string} key - the key for the item
   * This is used to clear the storage
   * @returns {string} the data item
   */
  static getItem(key) {
    return Object.prototype.hasOwnProperty.call(dataMemory, key) ? dataMemory[key] : undefined;
  }

  /**
   * This is used to remove an item from storage
   * @param {string} key - the key being set
   * @returns {string} value - value that was deleted
   */
  static removeItem(key) {
    return delete dataMemory[key];
  }

  /**
   * This is used to clear the storage
   * @returns {string} nothing
   */
  static clear() {
    dataMemory = {};
    return dataMemory;
  }
}

/** @class */
class StorageHelper {

  /**
   * This is used to get a storage object
   * @returns {object} the storage
   */
  constructor() {
    try {
      this.storageWindow = window.localStorage;
      this.storageWindow.setItem('aws.cognito.test-ls', 1);
      this.storageWindow.removeItem('aws.cognito.test-ls');
    } catch (exception) {
      this.storageWindow = MemoryStorage;
    }
  }

  /**
   * This is used to return the storage
   * @returns {object} the storage
   */
  getStorage() {
    return this.storageWindow;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = StorageHelper;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aws_sdk_clients_cognitoidentityserviceprovider__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aws_sdk_clients_cognitoidentityserviceprovider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_aws_sdk_clients_cognitoidentityserviceprovider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src__ = __webpack_require__(4);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CognitoAccessToken", function() { return __WEBPACK_IMPORTED_MODULE_1__src__["CognitoAccessToken"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CognitoIdToken", function() { return __WEBPACK_IMPORTED_MODULE_1__src__["CognitoIdToken"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CognitoRefreshToken", function() { return __WEBPACK_IMPORTED_MODULE_1__src__["CognitoRefreshToken"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CognitoTokenScopes", function() { return __WEBPACK_IMPORTED_MODULE_1__src__["CognitoTokenScopes"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CognitoAuth", function() { return __WEBPACK_IMPORTED_MODULE_1__src__["CognitoAuth"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CognitoAuthSession", function() { return __WEBPACK_IMPORTED_MODULE_1__src__["CognitoAuthSession"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DateHelper", function() { return __WEBPACK_IMPORTED_MODULE_1__src__["DateHelper"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "StorageHelper", function() { return __WEBPACK_IMPORTED_MODULE_1__src__["StorageHelper"]; });
/*!
 * Amazon Cognito Auth SDK for JavaScript
 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *         http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file.
 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
 * OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions
 * and limitations under the License.
 */






Object.keys(__WEBPACK_IMPORTED_MODULE_1__src__).forEach(key => {
  __WEBPACK_IMPORTED_MODULE_0_aws_sdk_clients_cognitoidentityserviceprovider___default.a[key] = __WEBPACK_IMPORTED_MODULE_1__src__[key];
});

// The version of crypto-browserify included by aws-sdk only
// checks for window.crypto, not window.msCrypto as used by
// IE 11 – so we set it explicitly here
if (typeof window !== 'undefined' && !window.crypto && window.msCrypto) {
  window.crypto = window.msCrypto;
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CognitoTokenScopes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CognitoAccessToken__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CognitoIdToken__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CognitoRefreshToken__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CognitoAuthSession__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__StorageHelper__ = __webpack_require__(7);
/*!
 * Amazon Cognito Auth SDK for JavaScript
 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *         http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file.
 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
 * OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions
 * and limitations under the License.
 */








/** @class */
class CognitoAuth {
  /**
   * Constructs a new CognitoAuth object
   * @param {object} data Creation options
   * @param {string} data.ClientId Required: User pool application client id.
   * @param {string} data.AppWebDomain Required: The application/user-pools Cognito web hostname,
   *                     this is set at the Cognito console.
   * @param {array} data.TokenScopesArray Optional: The token scopes
   * @param {string} data.IdentityProvider Optional: Identity provider to use
   * @param {string} data.RedirectUriSignIn Required: The redirect Uri,
   * which will be launched after authentication as signed in.
   * @param {string} data.RedirectUriSignOut Required:
   * The redirect Uri, which will be launched when signed out.
   * @param {nodeCallback<CognitoAuthSession>} Optional: userhandler Called on success or error.
   */
  constructor(data) {
    const { ClientId, AppWebDomain, TokenScopesArray,
      RedirectUriSignIn, RedirectUriSignOut, IdentityProvider } = data || {};
    if (data == null || !ClientId || !AppWebDomain || !RedirectUriSignIn || !RedirectUriSignOut) {
      throw new Error(this.getCognitoConstants().PARAMETERERROR);
    }

    this.clientId = ClientId;
    this.appWebDomain = AppWebDomain;
    this.identityProvider = IdentityProvider;
    this.TokenScopesArray = TokenScopesArray || [];
    if (!Array.isArray(TokenScopesArray)) {
      throw new Error(this.getCognitoConstants().SCOPETYPEERROR);
    }
    const tokenScopes = new __WEBPACK_IMPORTED_MODULE_0__CognitoTokenScopes__["a" /* default */](this.TokenScopesArray);
    this.RedirectUriSignIn = RedirectUriSignIn;
    this.RedirectUriSignOut = RedirectUriSignOut;
    this.signInUserSession = new __WEBPACK_IMPORTED_MODULE_4__CognitoAuthSession__["a" /* default */]();
    this.responseType = this.getCognitoConstants().TOKEN;
    this.storage = new __WEBPACK_IMPORTED_MODULE_5__StorageHelper__["a" /* default */]().getStorage();
    this.signInUserSession.setTokenScopes(tokenScopes);
    this.username = this.getLastUser();
    this.authEventListenerAttached = false;
    this.attachAuthEventListener();
  }

  /**
   * Attaches window message listener to handle auth flow
   */
  attachAuthEventListener() {
    if (!this.authEventListenerAttached) {
      this.authEventListenerAttached = true;
      window.addEventListener('message', event => {
        if (event.data.location) {
          if (this.authWindowRef && this.authWindowRef.close) this.authWindowRef.close();
          this.parseCognitoWebResponse(event.data.location);
        }
      }, false);
    }
  }

  /**
   * @returns {JSON} the constants
   */
  getCognitoConstants() {
    const CognitoConstants = {
      DOMAIN_SCHEME: 'https',
      DOMAIN_PATH_SIGNIN: 'authorize',
      DOMAIN_PATH_SIGNOUT: 'logout',
      DOMAIN_QUERY_PARAM_REDIRECT_URI: 'redirect_uri',
      DOMAIN_QUERY_PARAM_SIGNOUT_URI: 'logout_uri',
      DOMAIN_QUERY_PARAM_RESPONSE_TYPE: 'response_type',
      DOMAIN_QUERY_IDENTITY_PROVIDER: 'identity_provider',
      CLIENT_ID: 'client_id',
      STATE: 'state',
      SCOPE: 'scope',
      TOKEN: 'token',
      CODE: 'code',
      POST: 'POST',
      PARAMETERERROR: 'The parameters: App client Id, App web domain' + ', the redirect URL when you are signed in and the ' + 'redirect URL when you are signed out are required.',
      SCOPETYPEERROR: 'Scopes have to be array type. ',
      QUESTIONMARK: '?',
      POUNDSIGN: '#',
      COLONDOUBLESLASH: '://',
      SLASH: '/',
      AMPERSAND: '&',
      EQUALSIGN: '=',
      SPACE: ' ',
      CONTENTTYPE: 'Content-Type',
      CONTENTTYPEVALUE: 'application/x-www-form-urlencoded',
      AUTHORIZATIONCODE: 'authorization_code',
      IDTOKEN: 'id_token',
      ACCESSTOKEN: 'access_token',
      REFRESHTOKEN: 'refresh_token',
      ERROR: 'error',
      STRINGTYPE: 'string',
      STATELENGTH: 32,
      STATEORIGINSTRING: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
      WITHCREDENTIALS: 'withCredentials',
      UNDEFINED: 'undefined',
      SELF: '_self',
      HOSTNAMEREGEX: /:\/\/([0-9]?\.)?(.[^/:]+)/i,
      HASHPARAMETERREGEX: /#(.+)/,
      QUERYPARAMETERREGEX1: /[?](.+)/,
      QUERYPARAMETERREGEX2: /=(.+)/,
      HEADER: { 'Content-Type': 'application/x-www-form-urlencoded' }
    };
    return CognitoConstants;
  }

  /**
   * @returns {string} the client id
   */
  getClientId() {
    return this.clientId;
  }

  /**
   * @returns {string} the app web domain
   */
  getAppWebDomain() {
    return this.appWebDomain;
  }

  /**
   * method for getting the current user of the application from the local storage
   *
   * @returns {CognitoAuth} the user retrieved from storage
   */
  getCurrentUser() {
    const lastUserKey = `CognitoIdentityServiceProvider.${this.clientId}.LastAuthUser`;

    const lastAuthUser = this.storage.getItem(lastUserKey);
    return lastAuthUser;
  }

  /**
   * @param {string} Username the user's name
   * method for setting the current user's name
   * @returns {void}
   */
  setUser(Username) {
    this.username = Username;
  }

  /**
   * sets response type to 'code'
   * @returns {void}
   */
  useCodeGrantFlow() {
    this.responseType = this.getCognitoConstants().CODE;
  }

  /**
   * sets response type to 'token'
   * @returns {void}
   */
  useImplicitFlow() {
    this.responseType = this.getCognitoConstants().TOKEN;
  }

  /**
   * @returns {CognitoAuthSession} the current session for this user
   */
  getSignInUserSession() {
    return this.signInUserSession;
  }

  /**
   * @returns {string} the user's username
   */
  getUsername() {
    return this.username;
  }

  /**
   * @param {string} Username the user's username
   * @returns {void}
   */
  setUsername(Username) {
    this.username = Username;
  }

  /**
   * This is used to get a session, either from the session object
   * or from the local storage, or by using a refresh token
   * @param {boolean} nonInteractive When truthy, only attempts to login
   * through non-interactive means: cached session or valid refresh token available.
   * @param {string} RedirectUriSignIn Required: The redirect Uri,
   * which will be launched after authentication.
   * @param {array} TokenScopesArray Required: The token scopes, it is an
   * array of strings specifying all scopes for the tokens.
   * @returns {void}
   */
  getSession(nonInteractive) {
    const URL = this.getFQDNSignIn();
    if (this.signInUserSession != null && this.signInUserSession.isValid()) {
      return this.userhandler.onSuccess(this.signInUserSession);
    }
    this.signInUserSession = this.getCachedSession();

    const tokenScopesInputSet = new Set(this.TokenScopesArray);
    const cachedScopesSet = new Set(this.signInUserSession.tokenScopes.getScopes());

    // compare scopes
    if (!nonInteractive && !this.compareSets(tokenScopesInputSet, cachedScopesSet)) {
      const tokenScopes = new __WEBPACK_IMPORTED_MODULE_0__CognitoTokenScopes__["a" /* default */](this.TokenScopesArray);
      const idToken = new __WEBPACK_IMPORTED_MODULE_2__CognitoIdToken__["a" /* default */]();
      const accessToken = new __WEBPACK_IMPORTED_MODULE_1__CognitoAccessToken__["a" /* default */]();
      const refreshToken = new __WEBPACK_IMPORTED_MODULE_3__CognitoRefreshToken__["a" /* default */]();
      this.signInUserSession.setTokenScopes(tokenScopes);
      this.signInUserSession.setIdToken(idToken);
      this.signInUserSession.setAccessToken(accessToken);
      this.signInUserSession.setRefreshToken(refreshToken);
      this.launchUri(URL);
    } else if (this.signInUserSession.isValid()) {
      return this.userhandler.onSuccess(this.signInUserSession);
    } else if (this.signInUserSession.getRefreshToken() && this.signInUserSession.getRefreshToken().getToken()) {
      this.refreshSession(this.signInUserSession.getRefreshToken().getToken());
    } else if (!nonInteractive) {
      this.launchUri(URL);
    }
    return undefined;
  }

  /**
   * Gets session when cached in local storage.
   */
  getExistingSession() {
    return this.getSession(true);
  }

  /**
   * @param {string} httpRequestResponse the http request response
   * @returns {void}
   * Parse the http request response and proceed according to different response types.
   */
  parseCognitoWebResponse(httpRequestResponse) {
    if (httpRequestResponse.indexOf(this.getCognitoConstants().QUESTIONMARK) > -1) {
      this.getCodeQueryParameter(httpRequestResponse);
    } else if (httpRequestResponse.indexOf(this.getCognitoConstants().POUNDSIGN) > -1) {
      // To parse the response to get tokens
      this.getTokenQueryParameter(httpRequestResponse);
    }
  }

  /**
   * @param {string} httpRequestResponse the http request response
   * @returns {void}
   * Parse the http request response and proceed according to code response type.
   */
  getCodeQueryParameter(httpRequestResponse) {
    let mapSecond = new Map();
    mapSecond = this.getQueryParameters(httpRequestResponse, mapSecond, this.getCognitoConstants().QUERYPARAMETERREGEX1);
    if (mapSecond.has(this.getCognitoConstants().CODE)) {
      // if the response contains code
      // To parse the response and get the code value.
      const codeParameter = this.getCodeParameter(httpRequestResponse);
      const url = this.getCognitoConstants().DOMAIN_SCHEME.concat(this.getCognitoConstants().COLONDOUBLESLASH, this.getAppWebDomain(), this.getCognitoConstants().SLASH, this.getCognitoConstants().TOKEN);
      const header = this.getCognitoConstants().HEADER;
      const body = { grant_type: this.getCognitoConstants().AUTHORIZATIONCODE,
        client_id: this.getClientId(),
        redirect_uri: this.RedirectUriSignIn,
        code: codeParameter };
      const boundOnSuccess = this.onSuccessExchangeForToken.bind(this);
      const boundOnFailure = this.onFailure.bind(this);
      this.makePOSTRequest(header, body, url, boundOnSuccess, boundOnFailure);
    }
  }

  /**
   * Parse the http request response and proceed according to token response type.
   * @param {string} httpRequestResponse the http request response
   * @returns {void}
   */
  getTokenQueryParameter(httpRequestResponse) {
    let map = new Map();
    map = this.getQueryParameters(httpRequestResponse, map, this.getCognitoConstants().HASHPARAMETERREGEX);
    const idToken = new __WEBPACK_IMPORTED_MODULE_2__CognitoIdToken__["a" /* default */]();
    const accessToken = new __WEBPACK_IMPORTED_MODULE_1__CognitoAccessToken__["a" /* default */]();
    const refreshToken = new __WEBPACK_IMPORTED_MODULE_3__CognitoRefreshToken__["a" /* default */]();
    if (httpRequestResponse.indexOf(this.getCognitoConstants().IDTOKEN) > -1) {
      idToken.setJwtToken(map.get(this.getCognitoConstants().IDTOKEN));
      this.signInUserSession.setIdToken(idToken);
    } else {
      this.signInUserSession.setIdToken(idToken);
    }
    if (httpRequestResponse.indexOf(this.getCognitoConstants().ACCESSTOKEN) > -1) {
      accessToken.setJwtToken(map.get(this.getCognitoConstants().ACCESSTOKEN));
      this.signInUserSession.setAccessToken(accessToken);
    } else {
      this.signInUserSession.setAccessToken(accessToken);
    }
    if (httpRequestResponse.indexOf(this.getCognitoConstants().REFRESHTOKEN) > -1) {
      refreshToken.setToken(map.get(this.getCognitoConstants().REFRESHTOKEN));
      this.signInUserSession.setRefreshToken(refreshToken);
    } else {
      this.signInUserSession.setRefreshToken(refreshToken);
    }
    this.cacheTokensScopes();
    return this.userhandler.onSuccess(this.signInUserSession);
  }

  /**
   * Get cached tokens and scopes and return a new session using all the cached data.
   * @returns {CognitoAuthSession} the auth session
   */
  getCachedSession() {
    if (!this.username) {
      return new __WEBPACK_IMPORTED_MODULE_4__CognitoAuthSession__["a" /* default */]();
    }
    const keyPrefix = `CognitoIdentityServiceProvider.${this.getClientId()}.${this.username}`;
    const idTokenKey = `${keyPrefix}.idToken`;
    const accessTokenKey = `${keyPrefix}.accessToken`;
    const refreshTokenKey = `${keyPrefix}.refreshToken`;
    const scopeKey = `${keyPrefix}.tokenScopesString`;

    const scopesString = this.storage.getItem(scopeKey);
    let scopesArray = [];
    if (scopesString) {
      scopesArray = scopesString.split(' ');
    }
    const tokenScopes = new __WEBPACK_IMPORTED_MODULE_0__CognitoTokenScopes__["a" /* default */](scopesArray);
    const idToken = new __WEBPACK_IMPORTED_MODULE_2__CognitoIdToken__["a" /* default */](this.storage.getItem(idTokenKey));
    const accessToken = new __WEBPACK_IMPORTED_MODULE_1__CognitoAccessToken__["a" /* default */](this.storage.getItem(accessTokenKey));
    const refreshToken = new __WEBPACK_IMPORTED_MODULE_3__CognitoRefreshToken__["a" /* default */](this.storage.getItem(refreshTokenKey));

    const sessionData = {
      IdToken: idToken,
      AccessToken: accessToken,
      RefreshToken: refreshToken,
      TokenScopes: tokenScopes
    };
    const cachedSession = new __WEBPACK_IMPORTED_MODULE_4__CognitoAuthSession__["a" /* default */](sessionData);
    return cachedSession;
  }

  /**
   * This is used to get last signed in user from local storage
   * @returns {string} the last user name
   */
  getLastUser() {
    const keyPrefix = `CognitoIdentityServiceProvider.${this.getClientId()}`;
    const lastUserKey = `${keyPrefix}.LastAuthUser`;
    const lastUserName = this.storage.getItem(lastUserKey);
    if (lastUserName) {
      return lastUserName;
    }
    return undefined;
  }

  /**
   * This is used to save the session tokens, scope and state to local storage
   * Input parameter is a set of strings.
   * @returns {void}
   */
  cacheTokensScopes() {
    const keyPrefix = `CognitoIdentityServiceProvider.${this.getClientId()}`;
    const tokenUserName = this.signInUserSession.getAccessToken().getUsername();
    const idTokenKey = `${keyPrefix}.${tokenUserName}.idToken`;
    const accessTokenKey = `${keyPrefix}.${tokenUserName}.accessToken`;
    const refreshTokenKey = `${keyPrefix}.${tokenUserName}.refreshToken`;
    const lastUserKey = `${keyPrefix}.LastAuthUser`;
    const scopeKey = `${keyPrefix}.${tokenUserName}.tokenScopesString`;
    const scopesArray = this.signInUserSession.getTokenScopes().getScopes();
    const scopesString = scopesArray.join(' ');
    this.storage.setItem(idTokenKey, this.signInUserSession.getIdToken().getJwtToken());
    this.storage.setItem(accessTokenKey, this.signInUserSession.getAccessToken().getJwtToken());
    this.storage.setItem(refreshTokenKey, this.signInUserSession.getRefreshToken().getToken());
    this.storage.setItem(lastUserKey, tokenUserName);
    this.storage.setItem(scopeKey, scopesString);
  }

  /**
   * Compare two sets if they are identical.
   * @param {set} set1 one set
   * @param {set} set2 the other set
   * @returns {boolean} boolean value is true if two sets are identical
   */
  compareSets(set1, set2) {
    if (set1.size !== set2.size) {
      return false;
    }
    for (const item of set1) {
      if (!set2.has(item)) {
        return false;
      }
    }
    return true;
  }

  /**
   * @param {string} url the url string
   * Get the hostname from url.
   * @returns {string} hostname string
   */
  getHostName(url) {
    const match = url.match(this.getCognitoConstants().HOSTNAMEREGEX);
    if (match != null && match.length > 2 && typeof match[2] === this.getCognitoConstants().STRINGTYPE && match[2].length > 0) {
      return match[2];
    }
    return undefined;
  }

  /**
   * Get http query parameters and store them into a map.
   * @param {string} url the url string
   * @param {map} map the query parameter map
   * @returns {map} map
   */
  getQueryParameters(url, map, regex) {
    const str = String(url).split(regex);
    const url2 = str[1];
    const str1 = String(url2).split(this.getCognitoConstants().AMPERSAND);
    const num = str1.length;
    let i;
    for (i = 0; i < num; i++) {
      str1[i] = String(str1[i]).split(this.getCognitoConstants().QUERYPARAMETERREGEX2);
      map.set(str1[i][0], str1[i][1]);
    }
    return map;
  }

  /**
   * Get the code parameter from the url.
   * @param {string} url the url string
   * @returns {string} code
   */
  getCodeParameter(url) {
    const urlEdit = String(url).split(this.getCognitoConstants().QUESTIONMARK);
    const url1 = urlEdit[1];
    const urlStr = String(url1).split(this.getCognitoConstants().EQUALSIGN);
    const code = urlStr[1];
    return code;
  }

  /**
   * helper function to generate a random string
   * @param {int} length the length of string
   * @param {string} chars a original string
   * @returns {string} a random value.
   */
  generateRandomString(length, chars) {
    let result = '';
    let i = length;
    for (; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
  }

  /**
   * This is used to clear the session tokens, scopes and state from local storage
   * @returns {void}
   */
  clearCachedTokensScopes() {
    const keyPrefix = `CognitoIdentityServiceProvider.${this.getClientId()}`;
    const idTokenKey = `${keyPrefix}.${this.username}.idToken`;
    const accessTokenKey = `${keyPrefix}.${this.username}.accessToken`;
    const refreshTokenKey = `${keyPrefix}.${this.username}.refreshToken`;
    const lastUserKey = `${keyPrefix}.LastAuthUser`;
    const scopeKey = `${keyPrefix}.${this.username}.tokenScopesString`;

    this.storage.removeItem(idTokenKey);
    this.storage.removeItem(accessTokenKey);
    this.storage.removeItem(refreshTokenKey);
    this.storage.removeItem(lastUserKey);
    this.storage.removeItem(scopeKey);
  }

  /**
   * This is used to build a user session from tokens retrieved in the authentication result
   * @param {object} refreshToken authResult Successful auth response from server.
   * @returns {void}
   */
  refreshSession(refreshToken) {
    // https POST call for refreshing token
    const url = this.getCognitoConstants().DOMAIN_SCHEME.concat(this.getCognitoConstants().COLONDOUBLESLASH, this.getAppWebDomain(), this.getCognitoConstants().SLASH, this.getCognitoConstants().TOKEN);
    const header = this.getCognitoConstants().HEADER;
    const body = { grant_type: this.getCognitoConstants().REFRESHTOKEN,
      client_id: this.getClientId(),
      redirect_uri: this.RedirectUriSignIn,
      refresh_token: refreshToken };
    const boundOnSuccess = this.onSuccessRefreshToken.bind(this);
    const boundOnFailure = this.onFailure.bind(this);
    this.makePOSTRequest(header, body, url, boundOnSuccess, boundOnFailure);
  }

  /**
   * Make the http POST request.
   * @param {JSON} header header JSON object
   * @param {JSON} body body JSON object
   * @param {string} url string
   * @param {function} onSuccess callback
   * @param {function} onFailure callback
   * @returns {void}
   */
  makePOSTRequest(header, body, url, onSuccess, onFailure) {
    // This is a sample server that supports CORS.
    const xhr = this.createCORSRequest(this.getCognitoConstants().POST, url);
    let bodyString = '';

    if (!xhr) {
      return;
    }
    // set header
    if (header.length) {
      for (let j = 0; j < header.length; j++) {
        xhr.setRequestHeader(j, header[j]);
      }
    } else {
      for (let key in header) {
        if (header.hasOwnProperty && !header.hasOwnProperty(key)) continue;
        xhr.setRequestHeader(key, header[key]);
      }
    }
    // set body
    if (body.length) {
      for (let i = 0; i < body.length; i++) {
        bodyString = bodyString.concat(i, this.getCognitoConstants().EQUALSIGN, body[i], this.getCognitoConstants().AMPERSAND);
      }
    } else {
      for (let key in body) {
        if (body.hasOwnProperty && !body.hasOwnProperty(key)) continue;
        bodyString = bodyString.concat(key, this.getCognitoConstants().EQUALSIGN, body[key], this.getCognitoConstants().AMPERSAND);
      }
    }

    bodyString = bodyString.substring(0, bodyString.length - 1);
    xhr.send(bodyString);
    xhr.onreadystatechange = function addressState() {
      if (xhr.readyState === 4) {
        const jsonData = xhr.responseText;
        if (xhr.status === 200) {
          xhr.onload = onSuccess(jsonData);
        } else {
          xhr.onerror = onFailure(jsonData);
        }
      }
    };
  }

  /**
   * Create the XHR object
   * @param {string} method which method to call
   * @param {string} url the url string
   * @returns {object} xhr
   */
  createCORSRequest(method, url) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    if (this.getCognitoConstants().WITHCREDENTIALS in xhr) {
      // XHR for Chrome/Firefox/Opera/Safari.
      xhr.open(method, url, true);
    } else if (typeof XDomainRequest !== this.getCognitoConstants().UNDEFINED) {
      // XDomainRequest for IE.
      xhr = new XDomainRequest();
      xhr.open(method, url);
    } else {
      // CORS not supported.
      xhr = null;
    }
    return xhr;
  }

  /**
   * The http POST request onFailure callback.
   * @param {object} err the error object
   * @returns {function} onFailure
   */
  onFailure(err) {
    this.userhandler.onFailure(err);
  }

  /**
   * The http POST request onSuccess callback when refreshing tokens.
   * @param {JSON} jsonData tokens
   * @returns {function} onSuccess
   */
  onSuccessRefreshToken(jsonData) {
    const jsonDataObject = JSON.parse(jsonData);
    if (Object.prototype.hasOwnProperty.call(jsonDataObject, this.getCognitoConstants().ERROR)) {
      const URL = this.getFQDNSignIn();
      this.launchUri(URL);
    } else {
      if (Object.prototype.hasOwnProperty.call(jsonDataObject, this.getCognitoConstants().IDTOKEN)) {
        this.signInUserSession.setIdToken(new __WEBPACK_IMPORTED_MODULE_2__CognitoIdToken__["a" /* default */](jsonDataObject.id_token));
      }
      if (Object.prototype.hasOwnProperty.call(jsonDataObject, this.getCognitoConstants().ACCESSTOKEN)) {
        this.signInUserSession.setAccessToken(new __WEBPACK_IMPORTED_MODULE_1__CognitoAccessToken__["a" /* default */](jsonDataObject.access_token));
      }
      this.cacheTokensScopes();
      return this.userhandler.onSuccess(this.signInUserSession);
    }
    return undefined;
  }

  /**
   * The http POST request onSuccess callback when exchanging code for tokens.
   * @param {JSON} jsonData tokens
   * @returns {function} onSuccess
   */
  onSuccessExchangeForToken(jsonData) {
    const jsonDataObject = JSON.parse(jsonData);
    const refreshToken = new __WEBPACK_IMPORTED_MODULE_3__CognitoRefreshToken__["a" /* default */]();
    const accessToken = new __WEBPACK_IMPORTED_MODULE_1__CognitoAccessToken__["a" /* default */]();
    const idToken = new __WEBPACK_IMPORTED_MODULE_2__CognitoIdToken__["a" /* default */]();
    if (Object.prototype.hasOwnProperty.call(jsonDataObject, this.getCognitoConstants().ERROR)) {
      return this.userhandler.onFailure(jsonData);
    }
    if (Object.prototype.hasOwnProperty.call(jsonDataObject, this.getCognitoConstants().IDTOKEN)) {
      this.signInUserSession.setIdToken(new __WEBPACK_IMPORTED_MODULE_2__CognitoIdToken__["a" /* default */](jsonDataObject.id_token));
    } else {
      this.signInUserSession.setIdToken(idToken);
    }
    if (Object.prototype.hasOwnProperty.call(jsonDataObject, this.getCognitoConstants().ACCESSTOKEN)) {
      this.signInUserSession.setAccessToken(new __WEBPACK_IMPORTED_MODULE_1__CognitoAccessToken__["a" /* default */](jsonDataObject.access_token));
    } else {
      this.signInUserSession.setAccessToken(accessToken);
    }
    if (Object.prototype.hasOwnProperty.call(jsonDataObject, this.getCognitoConstants().REFRESHTOKEN)) {
      this.signInUserSession.setRefreshToken(new __WEBPACK_IMPORTED_MODULE_3__CognitoRefreshToken__["a" /* default */](jsonDataObject.refresh_token));
    } else {
      this.signInUserSession.setRefreshToken(refreshToken);
    }
    this.cacheTokensScopes();
    return this.userhandler.onSuccess(this.signInUserSession);
  }

  /**
   * Launch Cognito Auth UI page.
   * @param {string} URL the url to launch
   * @returns {void}
   */
  launchUri(URL) {
    this.authWindowRef = window.open(URL);
  }

  /**
   * @returns {string} scopes string
   */
  getSpaceSeperatedScopeString() {
    let tokenScopesString = this.signInUserSession.getTokenScopes().getScopes();
    tokenScopesString = tokenScopesString.join(this.getCognitoConstants().SPACE);
    return encodeURIComponent(tokenScopesString);
  }

  /**
   * Create the FQDN(fully qualified domain name) for authorization endpoint.
   * @returns {string} url
   */
  getFQDNSignIn() {
    const state = this.generateRandomString(this.getCognitoConstants().STATELENGTH, this.getCognitoConstants().STATEORIGINSTRING);
    const tokenScopesString = this.getSpaceSeperatedScopeString();
    // Build the complete web domain to launch the login screen
    const uri = this.getCognitoConstants().DOMAIN_SCHEME.concat(this.getCognitoConstants().COLONDOUBLESLASH, this.getAppWebDomain(), this.getCognitoConstants().SLASH, this.getCognitoConstants().DOMAIN_PATH_SIGNIN, this.getCognitoConstants().QUESTIONMARK, this.getCognitoConstants().DOMAIN_QUERY_PARAM_REDIRECT_URI, this.getCognitoConstants().EQUALSIGN, encodeURIComponent(this.RedirectUriSignIn), this.getCognitoConstants().AMPERSAND, this.getCognitoConstants().DOMAIN_QUERY_PARAM_RESPONSE_TYPE, this.getCognitoConstants().EQUALSIGN, this.responseType, this.getCognitoConstants().AMPERSAND, this.getCognitoConstants().CLIENT_ID, this.getCognitoConstants().EQUALSIGN, this.getClientId(), this.getCognitoConstants().AMPERSAND, this.getCognitoConstants().STATE, this.getCognitoConstants().EQUALSIGN, state, this.getCognitoConstants().AMPERSAND, this.getCognitoConstants().DOMAIN_QUERY_IDENTITY_PROVIDER, this.getCognitoConstants().EQUALSIGN, this.identityProvider ? encodeURIComponent(this.identityProvider) : '', this.getCognitoConstants().AMPERSAND, this.getCognitoConstants().SCOPE, this.getCognitoConstants().EQUALSIGN, tokenScopesString);
    return uri;
  }

  /**
   * Sign out the user.
   * @returns {void}
   */
  signOut() {
    const URL = this.getFQDNSignOut();
    this.clearCachedTokensScopes();
    this.launchUri(URL);
    this.signInUserSession = new __WEBPACK_IMPORTED_MODULE_4__CognitoAuthSession__["a" /* default */]();
  }

  /**
   * Create the FQDN(fully qualified domain name) for signout endpoint.
   * @returns {string} url
   */
  getFQDNSignOut() {
    const uri = this.getCognitoConstants().DOMAIN_SCHEME.concat(this.getCognitoConstants().COLONDOUBLESLASH, this.getAppWebDomain(), this.getCognitoConstants().SLASH, this.getCognitoConstants().DOMAIN_PATH_SIGNOUT, this.getCognitoConstants().QUESTIONMARK, this.getCognitoConstants().DOMAIN_QUERY_PARAM_SIGNOUT_URI, this.getCognitoConstants().EQUALSIGN, encodeURIComponent(this.RedirectUriSignOut), this.getCognitoConstants().AMPERSAND, this.getCognitoConstants().CLIENT_ID, this.getCognitoConstants().EQUALSIGN, this.getClientId());
    return uri;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CognitoAuth;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*!
 * Amazon Cognito Auth SDK for JavaScript
 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *         http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file.
 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
 * OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions
 * and limitations under the License.
 */
const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const weekNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

/** @class */
class DateHelper {
    /**
     * @returns {string} The current time in "ddd MMM D HH:mm:ss UTC YYYY" format.
     */
    getNowString() {
        const now = new Date();

        const weekDay = weekNames[now.getUTCDay()];
        const month = monthNames[now.getUTCMonth()];
        const day = now.getUTCDate();

        let hours = now.getUTCHours();
        if (hours < 10) {
            hours = `0${hours}`;
        }

        let minutes = now.getUTCMinutes();
        if (minutes < 10) {
            minutes = `0${minutes}`;
        }

        let seconds = now.getUTCSeconds();
        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        const year = now.getUTCFullYear();

        // ddd MMM D HH:mm:ss UTC YYYY
        const dateNow = `${weekDay} ${month} ${day} ${hours}:${minutes}:${seconds} UTC ${year}`;

        return dateNow;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DateHelper;


/***/ })
/******/ ]);
});