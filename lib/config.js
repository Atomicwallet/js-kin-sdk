"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Config = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _clone = require("lodash/clone");

var _clone2 = _interopRequireDefault(_clone);

var _axiosRetry = require("axios-retry");

var _axiosRetry2 = _interopRequireDefault(_axiosRetry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultConfig = {
  allowHttp: false,
  timeout: 0,
  retry: {
    retries: 0,
    retryDelay: _axiosRetry2.default.exponentialDelay,
    retryCondition: function retryCondition(error) {
      return _axiosRetry2.default.isNetworkError(error) || _axiosRetry2.default.isRetryableError(error);
    }
  }
};

var config = (0, _clone2.default)(defaultConfig);

/**
 * Global config class.
 *
 * Usage node:
 * ```
 * import {Config} from 'kin-sdk';
 * Config.setAllowHttp(true);
 * Config.setTimeout(5000);
 * ```
 *
 * Usage browser:
 * ```
 * KinSdk.Config.setAllowHttp(true);
 * KinSdk.Config.setTimeout(5000);
 * ```
 * @static
 */

var Config = function () {
  function Config() {
    _classCallCheck(this, Config);
  }

  _createClass(Config, null, [{
    key: "setAllowHttp",

    /**
     * Sets `allowHttp` flag globally. When set to `true`, connections to insecure http protocol servers will be allowed.
     * Must be set to `false` in production. Default: `false`.
     * @param {boolean} value
     * @static
     */
    value: function setAllowHttp(value) {
      config.allowHttp = value;
    }

    /**
     * Sets `timeout` flag globally. When set to anything besides 0, the request will timeout after specified time (ms).
     * Default: 0.
     * @param {number} value
     * @static
     */

  }, {
    key: "setTimeout",
    value: function setTimeout(value) {
      config.timeout = value;
    }

    /**
     * Returns the value of `allowHttp` flag.
     * @static
     */

  }, {
    key: "isAllowHttp",
    value: function isAllowHttp() {
      return (0, _clone2.default)(config.allowHttp);
    }

    /**
    * Returns the value of `timeout` flag.
    * @static
    */

  }, {
    key: "getTimeout",
    value: function getTimeout() {
      return (0, _clone2.default)(config.timeout);
    }

    /**
     * Sets all global config flags to default values.
     * @static
     */

  }, {
    key: "setDefault",
    value: function setDefault() {
      config = (0, _clone2.default)(defaultConfig);
    }

    /**
     * Creates and returns the definition for the `retry` mechanism.
     * @static
     */

  }, {
    key: "getRetry",
    value: function getRetry() {
      return (0, _clone2.default)(config.retry);
    }
  }]);

  return Config;
}();

exports.Config = Config;