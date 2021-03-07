(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "0fR0":
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web-plugins.js ***!
  \**************************************************************/
/*! exports provided: AccessibilityPluginWeb, Accessibility, AppPluginWeb, App, BrowserPluginWeb, Browser, CameraPluginWeb, Camera, ClipboardPluginWeb, Clipboard, FilesystemPluginWeb, Filesystem, GeolocationPluginWeb, Geolocation, DevicePluginWeb, Device, LocalNotificationsPluginWeb, LocalNotifications, SharePluginWeb, Share, ModalsPluginWeb, Modals, MotionPluginWeb, Motion, NetworkPluginWeb, Network, PermissionsPluginWeb, Permissions, SplashScreenPluginWeb, SplashScreen, StoragePluginWeb, Storage, ToastPluginWeb, Toast, registerWebPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerWebPlugin", function() { return registerWebPlugin; });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ "91C0");
/* harmony import */ var _web_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web/index */ "6Fjf");
/* harmony import */ var _web_accessibility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web/accessibility */ "tXcl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccessibilityPluginWeb", function() { return _web_accessibility__WEBPACK_IMPORTED_MODULE_2__["AccessibilityPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Accessibility", function() { return _web_accessibility__WEBPACK_IMPORTED_MODULE_2__["Accessibility"]; });

/* harmony import */ var _web_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web/app */ "fnMB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppPluginWeb", function() { return _web_app__WEBPACK_IMPORTED_MODULE_3__["AppPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "App", function() { return _web_app__WEBPACK_IMPORTED_MODULE_3__["App"]; });

/* harmony import */ var _web_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./web/browser */ "6Yfx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowserPluginWeb", function() { return _web_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Browser", function() { return _web_browser__WEBPACK_IMPORTED_MODULE_4__["Browser"]; });

/* harmony import */ var _web_camera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./web/camera */ "oNdP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraPluginWeb", function() { return _web_camera__WEBPACK_IMPORTED_MODULE_5__["CameraPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return _web_camera__WEBPACK_IMPORTED_MODULE_5__["Camera"]; });

/* harmony import */ var _web_clipboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./web/clipboard */ "FXFR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClipboardPluginWeb", function() { return _web_clipboard__WEBPACK_IMPORTED_MODULE_6__["ClipboardPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Clipboard", function() { return _web_clipboard__WEBPACK_IMPORTED_MODULE_6__["Clipboard"]; });

/* harmony import */ var _web_filesystem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./web/filesystem */ "r04x");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilesystemPluginWeb", function() { return _web_filesystem__WEBPACK_IMPORTED_MODULE_7__["FilesystemPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Filesystem", function() { return _web_filesystem__WEBPACK_IMPORTED_MODULE_7__["Filesystem"]; });

/* harmony import */ var _web_geolocation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./web/geolocation */ "fme8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GeolocationPluginWeb", function() { return _web_geolocation__WEBPACK_IMPORTED_MODULE_8__["GeolocationPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Geolocation", function() { return _web_geolocation__WEBPACK_IMPORTED_MODULE_8__["Geolocation"]; });

/* harmony import */ var _web_device__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./web/device */ "ghO4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DevicePluginWeb", function() { return _web_device__WEBPACK_IMPORTED_MODULE_9__["DevicePluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Device", function() { return _web_device__WEBPACK_IMPORTED_MODULE_9__["Device"]; });

/* harmony import */ var _web_local_notifications__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./web/local-notifications */ "QYDU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalNotificationsPluginWeb", function() { return _web_local_notifications__WEBPACK_IMPORTED_MODULE_10__["LocalNotificationsPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalNotifications", function() { return _web_local_notifications__WEBPACK_IMPORTED_MODULE_10__["LocalNotifications"]; });

/* harmony import */ var _web_share__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./web/share */ "ZO70");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharePluginWeb", function() { return _web_share__WEBPACK_IMPORTED_MODULE_11__["SharePluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Share", function() { return _web_share__WEBPACK_IMPORTED_MODULE_11__["Share"]; });

/* harmony import */ var _web_modals__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./web/modals */ "sB/A");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalsPluginWeb", function() { return _web_modals__WEBPACK_IMPORTED_MODULE_12__["ModalsPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modals", function() { return _web_modals__WEBPACK_IMPORTED_MODULE_12__["Modals"]; });

/* harmony import */ var _web_motion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./web/motion */ "X33G");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MotionPluginWeb", function() { return _web_motion__WEBPACK_IMPORTED_MODULE_13__["MotionPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Motion", function() { return _web_motion__WEBPACK_IMPORTED_MODULE_13__["Motion"]; });

/* harmony import */ var _web_network__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./web/network */ "LZKj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NetworkPluginWeb", function() { return _web_network__WEBPACK_IMPORTED_MODULE_14__["NetworkPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Network", function() { return _web_network__WEBPACK_IMPORTED_MODULE_14__["Network"]; });

/* harmony import */ var _web_permissions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./web/permissions */ "uhwm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionsPluginWeb", function() { return _web_permissions__WEBPACK_IMPORTED_MODULE_15__["PermissionsPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Permissions", function() { return _web_permissions__WEBPACK_IMPORTED_MODULE_15__["Permissions"]; });

/* harmony import */ var _web_splash_screen__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./web/splash-screen */ "5Ynz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SplashScreenPluginWeb", function() { return _web_splash_screen__WEBPACK_IMPORTED_MODULE_16__["SplashScreenPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SplashScreen", function() { return _web_splash_screen__WEBPACK_IMPORTED_MODULE_16__["SplashScreen"]; });

/* harmony import */ var _web_storage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./web/storage */ "nfLy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StoragePluginWeb", function() { return _web_storage__WEBPACK_IMPORTED_MODULE_17__["StoragePluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Storage", function() { return _web_storage__WEBPACK_IMPORTED_MODULE_17__["Storage"]; });

/* harmony import */ var _web_toast__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./web/toast */ "6fhM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastPluginWeb", function() { return _web_toast__WEBPACK_IMPORTED_MODULE_18__["ToastPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return _web_toast__WEBPACK_IMPORTED_MODULE_18__["Toast"]; });




















Object(_web_index__WEBPACK_IMPORTED_MODULE_1__["mergeWebPlugins"])(_global__WEBPACK_IMPORTED_MODULE_0__["Plugins"]);
var registerWebPlugin = function (plugin) {
    Object(_web_index__WEBPACK_IMPORTED_MODULE_1__["mergeWebPlugin"])(_global__WEBPACK_IMPORTED_MODULE_0__["Plugins"], plugin);
};
//# sourceMappingURL=web-plugins.js.map

/***/ }),

/***/ "5Ynz":
/*!********************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/splash-screen.js ***!
  \********************************************************************/
/*! exports provided: SplashScreenPluginWeb, SplashScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreenPluginWeb", function() { return SplashScreenPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreen", function() { return SplashScreen; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "O1h7");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "6Fjf");


var SplashScreenPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SplashScreenPluginWeb, _super);
    function SplashScreenPluginWeb() {
        return _super.call(this, {
            name: 'SplashScreen',
            platforms: ['web']
        }) || this;
    }
    SplashScreenPluginWeb.prototype.show = function (_options, _callback) {
        return Promise.resolve();
    };
    SplashScreenPluginWeb.prototype.hide = function (_options, _callback) {
        return Promise.resolve();
    };
    return SplashScreenPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var SplashScreen = new SplashScreenPluginWeb();

//# sourceMappingURL=splash-screen.js.map

/***/ }),

/***/ "6Fjf":
/*!************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/index.js ***!
  \************************************************************/
/*! exports provided: WebPluginRegistry, WebPlugins, WebPlugin, mergeWebPlugins, mergeWebPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPluginRegistry", function() { return WebPluginRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPlugins", function() { return WebPlugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPlugin", function() { return WebPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeWebPlugins", function() { return mergeWebPlugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeWebPlugin", function() { return mergeWebPlugin; });
var WebPluginRegistry = /** @class */ (function () {
    function WebPluginRegistry() {
        this.plugins = {};
        this.loadedPlugins = {};
    }
    WebPluginRegistry.prototype.addPlugin = function (plugin) {
        this.plugins[plugin.config.name] = plugin;
    };
    WebPluginRegistry.prototype.getPlugin = function (name) {
        return this.plugins[name];
    };
    WebPluginRegistry.prototype.loadPlugin = function (name) {
        var plugin = this.getPlugin(name);
        if (!plugin) {
            console.error("Unable to load web plugin " + name + ", no such plugin found.");
            return;
        }
        plugin.load();
    };
    WebPluginRegistry.prototype.getPlugins = function () {
        var p = [];
        for (var name_1 in this.plugins) {
            p.push(this.plugins[name_1]);
        }
        return p;
    };
    return WebPluginRegistry;
}());

var WebPlugins = new WebPluginRegistry();

var WebPlugin = /** @class */ (function () {
    function WebPlugin(config, pluginRegistry) {
        this.config = config;
        this.loaded = false;
        this.listeners = {};
        this.windowListeners = {};
        if (!pluginRegistry) {
            WebPlugins.addPlugin(this);
        }
        else {
            pluginRegistry.addPlugin(this);
        }
    }
    WebPlugin.prototype.addWindowListener = function (handle) {
        window.addEventListener(handle.windowEventName, handle.handler);
        handle.registered = true;
    };
    WebPlugin.prototype.removeWindowListener = function (handle) {
        if (!handle) {
            return;
        }
        window.removeEventListener(handle.windowEventName, handle.handler);
        handle.registered = false;
    };
    WebPlugin.prototype.addListener = function (eventName, listenerFunc) {
        var _this = this;
        var listeners = this.listeners[eventName];
        if (!listeners) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(listenerFunc);
        // If we haven't added a window listener for this event and it requires one,
        // go ahead and add it
        var windowListener = this.windowListeners[eventName];
        if (windowListener && !windowListener.registered) {
            this.addWindowListener(windowListener);
        }
        return {
            remove: function () {
                _this.removeListener(eventName, listenerFunc);
            }
        };
    };
    WebPlugin.prototype.removeListener = function (eventName, listenerFunc) {
        var listeners = this.listeners[eventName];
        if (!listeners) {
            return;
        }
        var index = listeners.indexOf(listenerFunc);
        this.listeners[eventName].splice(index, 1);
        // If there are no more listeners for this type of event,
        // remove the window listener
        if (!this.listeners[eventName].length) {
            this.removeWindowListener(this.windowListeners[eventName]);
        }
    };
    WebPlugin.prototype.removeAllListeners = function () {
        this.listeners = {};
        for (var listener in this.windowListeners) {
            this.removeWindowListener(this.windowListeners[listener]);
        }
        this.windowListeners = {};
    };
    WebPlugin.prototype.notifyListeners = function (eventName, data) {
        var listeners = this.listeners[eventName];
        if (listeners) {
            listeners.forEach(function (listener) { return listener(data); });
        }
    };
    WebPlugin.prototype.hasListeners = function (eventName) {
        return !!this.listeners[eventName].length;
    };
    WebPlugin.prototype.registerWindowListener = function (windowEventName, pluginEventName) {
        var _this = this;
        this.windowListeners[pluginEventName] = {
            registered: false,
            windowEventName: windowEventName,
            pluginEventName: pluginEventName,
            handler: function (event) {
                _this.notifyListeners(pluginEventName, event);
            }
        };
    };
    WebPlugin.prototype.requestPermissions = function () {
        if (Capacitor.isNative) {
            return Capacitor.nativePromise(this.config.name, 'requestPermissions', {});
        }
        else {
            return Promise.resolve({ results: [] });
        }
    };
    WebPlugin.prototype.load = function () {
        this.loaded = true;
    };
    return WebPlugin;
}());

var shouldMergeWebPlugin = function (plugin) {
    return plugin.config.platforms && plugin.config.platforms.indexOf(Capacitor.platform) >= 0;
};
/**
 * For all our known web plugins, merge them into the global plugins
 * registry if they aren't already existing. If they don't exist, that
 * means there's no existing native implementation for it.
 * @param knownPlugins the Capacitor.Plugins global registry.
 */
var mergeWebPlugins = function (knownPlugins) {
    var plugins = WebPlugins.getPlugins();
    for (var _i = 0, plugins_1 = plugins; _i < plugins_1.length; _i++) {
        var plugin = plugins_1[_i];
        mergeWebPlugin(knownPlugins, plugin);
    }
};
var mergeWebPlugin = function (knownPlugins, plugin) {
    // If we already have a plugin registered (meaning it was defined in the native layer),
    // then we should only overwrite it if the corresponding web plugin activates on
    // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
    if (knownPlugins.hasOwnProperty(plugin.config.name) && !shouldMergeWebPlugin(plugin)) {
        return;
    }
    knownPlugins[plugin.config.name] = plugin;
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "6Yfx":
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/browser.js ***!
  \**************************************************************/
/*! exports provided: BrowserPluginWeb, Browser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserPluginWeb", function() { return BrowserPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Browser", function() { return Browser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "O1h7");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "6Fjf");


var BrowserPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BrowserPluginWeb, _super);
    function BrowserPluginWeb() {
        return _super.call(this, {
            name: 'Browser',
            platforms: ['web']
        }) || this;
    }
    BrowserPluginWeb.prototype.open = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this._lastWindow = window.open(options.url, options.windowName || '_blank');
                return [2 /*return*/, Promise.resolve()];
            });
        });
    };
    BrowserPluginWeb.prototype.prefetch = function (_options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                // Does nothing
                return [2 /*return*/, Promise.resolve()];
            });
        });
    };
    BrowserPluginWeb.prototype.close = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this._lastWindow && this._lastWindow.close();
                return [2 /*return*/, Promise.resolve()];
            });
        });
    };
    return BrowserPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Browser = new BrowserPluginWeb();

//# sourceMappingURL=browser.js.map

/***/ }),

/***/ "6fhM":
/*!************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/toast.js ***!
  \************************************************************/
/*! exports provided: ToastPluginWeb, Toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastPluginWeb", function() { return ToastPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return Toast; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "O1h7");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "6Fjf");


var ToastPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ToastPluginWeb, _super);
    function ToastPluginWeb() {
        return _super.call(this, {
            name: 'Toast',
            platforms: ['web']
        }) || this;
    }
    ToastPluginWeb.prototype.show = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var duration, toast;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                duration = 2000;
                if (options.duration) {
                    duration = options.duration === 'long' ? 3500 : 2000;
                }
                toast = document.createElement('pwa-toast');
                toast.duration = duration;
                toast.message = options.text;
                document.body.appendChild(toast);
                return [2 /*return*/];
            });
        });
    };
    return ToastPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Toast = new ToastPluginWeb();

//# sourceMappingURL=toast.js.map

/***/ }),

/***/ "91C0":
/*!*********************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/global.js ***!
  \*********************************************************/
/*! exports provided: Capacitor, Plugins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Capacitor", function() { return Capacitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plugins", function() { return Plugins; });
/* harmony import */ var _web_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web-runtime */ "LLrc");

// Create our default Capacitor instance, which will be
// overridden on native platforms
var Capacitor = (function (globalThis) {
    // Create a new CapacitorWeb instance if one doesn't already exist on globalThis
    // Ensure the global is assigned the same Capacitor instance,
    // then export Capacitor so it can be imported in other modules
    return globalThis.Capacitor = (globalThis.Capacitor || new _web_runtime__WEBPACK_IMPORTED_MODULE_0__["CapacitorWeb"]());
})(
// figure out the current globalThis, such as "window", "self" or "global"
// ensure errors are not thrown in an node SSR environment or web worker
typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
var Plugins = Capacitor.Plugins;

//# sourceMappingURL=global.js.map

/***/ }),

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "FXFR":
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/clipboard.js ***!
  \****************************************************************/
/*! exports provided: ClipboardPluginWeb, Clipboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardPluginWeb", function() { return ClipboardPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clipboard", function() { return Clipboard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "O1h7");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "6Fjf");


var ClipboardPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ClipboardPluginWeb, _super);
    function ClipboardPluginWeb() {
        return _super.call(this, {
            name: 'Clipboard',
            platforms: ['web']
        }) || this;
    }
    ClipboardPluginWeb.prototype.write = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var blob, clipboardItemInput, err_1;
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!navigator.clipboard) {
                            return [2 /*return*/, Promise.reject('Clipboard API not available in this browser')];
                        }
                        if (!(options.string !== undefined || options.url)) return [3 /*break*/, 2];
                        if (!navigator.clipboard.writeText) {
                            return [2 /*return*/, Promise.reject('Writting to clipboard not supported in this browser')];
                        }
                        return [4 /*yield*/, navigator.clipboard.writeText(options.string !== undefined ? options.string : options.url)];
                    case 1:
                        _b.sent();
                        return [3 /*break*/, 10];
                    case 2:
                        if (!options.image) return [3 /*break*/, 9];
                        if (!navigator.clipboard.write) {
                            return [2 /*return*/, Promise.reject('Setting images not supported in this browser')];
                        }
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 7, , 8]);
                        return [4 /*yield*/, fetch(options.image)];
                    case 4: return [4 /*yield*/, (_b.sent()).blob()];
                    case 5:
                        blob = _b.sent();
                        clipboardItemInput = new ClipboardItem((_a = {}, _a[blob.type] = blob, _a));
                        return [4 /*yield*/, navigator.clipboard.write([clipboardItemInput])];
                    case 6:
                        _b.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        err_1 = _b.sent();
                        return [2 /*return*/, Promise.reject('Failed to write image')];
                    case 8: return [3 /*break*/, 10];
                    case 9: return [2 /*return*/, Promise.reject('Nothing to write')];
                    case 10: return [2 /*return*/, Promise.resolve()];
                }
            });
        });
    };
    ClipboardPluginWeb.prototype.read = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var clipboardItems, type, clipboardBlob, data, err_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!navigator.clipboard) {
                            return [2 /*return*/, Promise.reject('Clipboard API not available in this browser')];
                        }
                        if (!!navigator.clipboard.read) return [3 /*break*/, 1];
                        if (!navigator.clipboard.readText) {
                            return [2 /*return*/, Promise.reject('Reading from clipboard not supported in this browser')];
                        }
                        return [2 /*return*/, this.readText()];
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, navigator.clipboard.read()];
                    case 2:
                        clipboardItems = _a.sent();
                        type = clipboardItems[0].types[0];
                        return [4 /*yield*/, clipboardItems[0].getType(type)];
                    case 3:
                        clipboardBlob = _a.sent();
                        return [4 /*yield*/, this._getBlobData(clipboardBlob, type)];
                    case 4:
                        data = _a.sent();
                        return [2 /*return*/, Promise.resolve({ value: data, type: type })];
                    case 5:
                        err_2 = _a.sent();
                        return [2 /*return*/, this.readText()];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ClipboardPluginWeb.prototype.readText = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var text;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, navigator.clipboard.readText()];
                    case 1:
                        text = _a.sent();
                        return [2 /*return*/, Promise.resolve({ value: text, type: 'text/plain' })];
                }
            });
        });
    };
    ClipboardPluginWeb.prototype._getBlobData = function (clipboardBlob, type) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            if (type.includes('image')) {
                reader.readAsDataURL(clipboardBlob);
            }
            else {
                reader.readAsText(clipboardBlob);
            }
            reader.onloadend = function () {
                var r = reader.result;
                resolve(r);
            };
            reader.onerror = function (e) {
                reject(e);
            };
        });
    };
    return ClipboardPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Clipboard = new ClipboardPluginWeb();

//# sourceMappingURL=clipboard.js.map

/***/ }),

/***/ "I2A1":
/*!**************************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js ***!
  \**************************************************************************/
/*! exports provided: CameraSource, CameraDirection, CameraResultType, FilesystemDirectory, FilesystemEncoding, HapticsImpactStyle, HapticsNotificationType, KeyboardStyle, KeyboardResize, ActionSheetOptionStyle, PermissionType, PhotosAlbumType, StatusBarStyle, StatusBarAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraSource", function() { return CameraSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraDirection", function() { return CameraDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraResultType", function() { return CameraResultType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesystemDirectory", function() { return FilesystemDirectory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesystemEncoding", function() { return FilesystemEncoding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HapticsImpactStyle", function() { return HapticsImpactStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HapticsNotificationType", function() { return HapticsNotificationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardStyle", function() { return KeyboardStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardResize", function() { return KeyboardResize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSheetOptionStyle", function() { return ActionSheetOptionStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionType", function() { return PermissionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosAlbumType", function() { return PhotosAlbumType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusBarStyle", function() { return StatusBarStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusBarAnimation", function() { return StatusBarAnimation; });
var CameraSource;
(function (CameraSource) {
    CameraSource["Prompt"] = "PROMPT";
    CameraSource["Camera"] = "CAMERA";
    CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));
var CameraDirection;
(function (CameraDirection) {
    CameraDirection["Rear"] = "REAR";
    CameraDirection["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));
var CameraResultType;
(function (CameraResultType) {
    CameraResultType["Uri"] = "uri";
    CameraResultType["Base64"] = "base64";
    CameraResultType["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));
var FilesystemDirectory;
(function (FilesystemDirectory) {
    /**
     * The Documents directory
     * On iOS it's the app's documents directory.
     * Use this directory to store user-generated content.
     * On Android it's the Public Documents folder, so it's accessible from other apps.
     * It's not accesible on Android 10 unless the app enables legacy External Storage
     * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
     * in the `AndroidManifest.xml`
     */
    FilesystemDirectory["Documents"] = "DOCUMENTS";
    /**
     * The Data directory
     * On iOS it will use the Documents directory
     * On Android it's the directory holding application files.
     * Files will be deleted when the application is uninstalled.
     */
    FilesystemDirectory["Data"] = "DATA";
    /**
     * The Cache directory
     * Can be deleted in cases of low memory, so use this directory to write app-specific files
     * that your app can re-create easily.
     */
    FilesystemDirectory["Cache"] = "CACHE";
    /**
     * The external directory
     * On iOS it will use the Documents directory
     * On Android it's the directory on the primary shared/external
     * storage device where the application can place persistent files it owns.
     * These files are internal to the applications, and not typically visible
     * to the user as media.
     * Files will be deleted when the application is uninstalled.
     */
    FilesystemDirectory["External"] = "EXTERNAL";
    /**
     * The external storage directory
     * On iOS it will use the Documents directory
     * On Android it's the primary shared/external storage directory.
     * It's not accesible on Android 10 unless the app enables legacy External Storage
     * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
     * in the `AndroidManifest.xml`
     */
    FilesystemDirectory["ExternalStorage"] = "EXTERNAL_STORAGE";
})(FilesystemDirectory || (FilesystemDirectory = {}));
var FilesystemEncoding;
(function (FilesystemEncoding) {
    FilesystemEncoding["UTF8"] = "utf8";
    FilesystemEncoding["ASCII"] = "ascii";
    FilesystemEncoding["UTF16"] = "utf16";
})(FilesystemEncoding || (FilesystemEncoding = {}));
var HapticsImpactStyle;
(function (HapticsImpactStyle) {
    HapticsImpactStyle["Heavy"] = "HEAVY";
    HapticsImpactStyle["Medium"] = "MEDIUM";
    HapticsImpactStyle["Light"] = "LIGHT";
})(HapticsImpactStyle || (HapticsImpactStyle = {}));
var HapticsNotificationType;
(function (HapticsNotificationType) {
    HapticsNotificationType["SUCCESS"] = "SUCCESS";
    HapticsNotificationType["WARNING"] = "WARNING";
    HapticsNotificationType["ERROR"] = "ERROR";
})(HapticsNotificationType || (HapticsNotificationType = {}));
var KeyboardStyle;
(function (KeyboardStyle) {
    KeyboardStyle["Dark"] = "DARK";
    KeyboardStyle["Light"] = "LIGHT";
})(KeyboardStyle || (KeyboardStyle = {}));
var KeyboardResize;
(function (KeyboardResize) {
    KeyboardResize["Body"] = "body";
    KeyboardResize["Ionic"] = "ionic";
    KeyboardResize["Native"] = "native";
    KeyboardResize["None"] = "none";
})(KeyboardResize || (KeyboardResize = {}));
var ActionSheetOptionStyle;
(function (ActionSheetOptionStyle) {
    ActionSheetOptionStyle["Default"] = "DEFAULT";
    ActionSheetOptionStyle["Destructive"] = "DESTRUCTIVE";
    ActionSheetOptionStyle["Cancel"] = "CANCEL";
})(ActionSheetOptionStyle || (ActionSheetOptionStyle = {}));
//
var PermissionType;
(function (PermissionType) {
    PermissionType["Camera"] = "camera";
    PermissionType["Photos"] = "photos";
    PermissionType["Geolocation"] = "geolocation";
    PermissionType["Notifications"] = "notifications";
    PermissionType["ClipboardRead"] = "clipboard-read";
    PermissionType["ClipboardWrite"] = "clipboard-write";
    PermissionType["Microphone"] = "microphone";
})(PermissionType || (PermissionType = {}));
var PhotosAlbumType;
(function (PhotosAlbumType) {
    /**
     * Album is a "smart" album (such as Favorites or Recently Added)
     */
    PhotosAlbumType["Smart"] = "smart";
    /**
     * Album is a cloud-shared album
     */
    PhotosAlbumType["Shared"] = "shared";
    /**
     * Album is a user-created album
     */
    PhotosAlbumType["User"] = "user";
})(PhotosAlbumType || (PhotosAlbumType = {}));
var StatusBarStyle;
(function (StatusBarStyle) {
    /**
     * Light text for dark backgrounds.
     */
    StatusBarStyle["Dark"] = "DARK";
    /**
     * Dark text for light backgrounds.
     */
    StatusBarStyle["Light"] = "LIGHT";
})(StatusBarStyle || (StatusBarStyle = {}));
var StatusBarAnimation;
(function (StatusBarAnimation) {
    /**
     * No animation during show/hide.
     */
    StatusBarAnimation["None"] = "NONE";
    /**
     * Slide animation during show/hide.
     */
    StatusBarAnimation["Slide"] = "SLIDE";
    /**
     * Fade animation during show/hide.
     */
    StatusBarAnimation["Fade"] = "FADE";
})(StatusBarAnimation || (StatusBarAnimation = {}));
//# sourceMappingURL=core-plugin-definitions.js.map

/***/ }),

/***/ "LLrc":
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web-runtime.js ***!
  \**************************************************************/
/*! exports provided: CapacitorWeb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapacitorWeb", function() { return CapacitorWeb; });
var CapacitorWeb = /** @class */ (function () {
    function CapacitorWeb() {
        var _this = this;
        this.platform = 'web';
        this.isNative = false;
        // Need to assign here to avoid having to define every plugin but still
        // get the typed benefits of the provided plugins in PluginRegistry
        this.Plugins = {};
        // Gracefully degrade in non-Proxy supporting engines, e.g. IE11. This
        // effectively means that trying to access an unavailable plugin will
        // locally throw, but this is still better than throwing a syntax error.
        if (typeof Proxy !== 'undefined') {
            // Build a proxy for the Plugins object that returns the "Noop Plugin"
            // if a plugin isn't available
            this.Plugins = new Proxy(this.Plugins, {
                get: function (target, prop) {
                    if (typeof target[prop] === 'undefined') {
                        var thisRef_1 = _this;
                        return new Proxy({}, {
                            get: function (_target, _prop) {
                                if (typeof _target[_prop] === 'undefined') {
                                    return thisRef_1.pluginMethodNoop.bind(thisRef_1, _target, _prop, prop);
                                }
                                else {
                                    return _target[_prop];
                                }
                            }
                        });
                    }
                    else {
                        return target[prop];
                    }
                }
            });
        }
    }
    CapacitorWeb.prototype.pluginMethodNoop = function (_target, _prop, pluginName) {
        return Promise.reject(pluginName + " does not have web implementation.");
    };
    CapacitorWeb.prototype.getPlatform = function () {
        return this.platform;
    };
    CapacitorWeb.prototype.isPluginAvailable = function (name) {
        return this.Plugins.hasOwnProperty(name);
    };
    CapacitorWeb.prototype.convertFileSrc = function (filePath) {
        return filePath;
    };
    CapacitorWeb.prototype.handleError = function (e) {
        console.error(e);
    };
    return CapacitorWeb;
}());

//# sourceMappingURL=web-runtime.js.map

/***/ }),

/***/ "LZKj":
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/network.js ***!
  \**************************************************************/
/*! exports provided: NetworkPluginWeb, Network */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkPluginWeb", function() { return NetworkPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Network", function() { return Network; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "O1h7");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "6Fjf");


var NetworkPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NetworkPluginWeb, _super);
    function NetworkPluginWeb() {
        var _this = _super.call(this, {
            name: 'Network',
            platforms: ['web']
        }) || this;
        _this.listenerFunction = null;
        return _this;
    }
    NetworkPluginWeb.prototype.getStatus = function () {
        return new Promise(function (resolve, reject) {
            if (!window.navigator) {
                reject('Network info not available');
                return;
            }
            var connected = window.navigator.onLine;
            var connection = window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection;
            var connectionType = connection ? (connection.type || connection.effectiveType) : 'wifi';
            resolve({
                connected: connected,
                connectionType: connected ? connectionType : 'none'
            });
        });
    };
    NetworkPluginWeb.prototype.addListener = function (eventName, listenerFunc) {
        var thisRef = this;
        var connection = window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection;
        var connectionType = connection ? (connection.type || connection.effectiveType) : 'wifi';
        var onlineBindFunc = listenerFunc.bind(thisRef, { connected: true, connectionType: connectionType });
        var offlineBindFunc = listenerFunc.bind(thisRef, { connected: false, connectionType: 'none' });
        if (eventName.localeCompare('networkStatusChange') === 0) {
            window.addEventListener('online', onlineBindFunc);
            window.addEventListener('offline', offlineBindFunc);
            return {
                remove: function () {
                    window.removeEventListener('online', onlineBindFunc);
                    window.removeEventListener('offline', offlineBindFunc);
                }
            };
        }
    };
    return NetworkPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Network = new NetworkPluginWeb();

//# sourceMappingURL=network.js.map

/***/ }),

/***/ "QYDU":
/*!**************************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/local-notifications.js ***!
  \**************************************************************************/
/*! exports provided: LocalNotificationsPluginWeb, LocalNotifications */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalNotificationsPluginWeb", function() { return LocalNotificationsPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalNotifications", function() { return LocalNotifications; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "O1h7");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "6Fjf");


var LocalNotificationsPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LocalNotificationsPluginWeb, _super);
    function LocalNotificationsPluginWeb() {
        var _this = _super.call(this, {
            name: 'LocalNotifications',
            platforms: ['web']
        }) || this;
        _this.pending = [];
        return _this;
    }
    LocalNotificationsPluginWeb.prototype.createChannel = function (channel) {
        throw new Error('Feature not available in the browser. ' + channel.id);
    };
    LocalNotificationsPluginWeb.prototype.deleteChannel = function (channel) {
        throw new Error('Feature not available in the browser. ' + channel.id);
    };
    LocalNotificationsPluginWeb.prototype.listChannels = function () {
        throw new Error('Feature not available in the browser');
    };
    LocalNotificationsPluginWeb.prototype.sendPending = function () {
        var _this = this;
        var toRemove = [];
        var now = +new Date;
        this.pending.forEach(function (localNotification) {
            if (localNotification.schedule && localNotification.schedule.at) {
                if (+localNotification.schedule.at <= now) {
                    _this.buildNotification(localNotification);
                    toRemove.push(localNotification);
                }
            }
        });
        console.log('Sent pending, removing', toRemove);
        this.pending = this.pending.filter(function (localNotification) { return !toRemove.find(function (ln) { return ln === localNotification; }); });
    };
    LocalNotificationsPluginWeb.prototype.sendNotification = function (localNotification) {
        var _this = this;
        var l = localNotification;
        if (localNotification.schedule && localNotification.schedule.at) {
            var diff = +localNotification.schedule.at - +new Date;
            this.pending.push(l);
            setTimeout(function () {
                _this.sendPending();
            }, diff);
            return;
        }
        this.buildNotification(localNotification);
    };
    LocalNotificationsPluginWeb.prototype.buildNotification = function (localNotification) {
        var l = localNotification;
        return new Notification(l.title, {
            body: l.body
        });
    };
    LocalNotificationsPluginWeb.prototype.schedule = function (options) {
        var _this = this;
        var notifications = [];
        options.notifications.forEach(function (notification) {
            notifications.push(_this.sendNotification(notification));
        });
        return Promise.resolve({
            notifications: options.notifications.map(function (notification) { return { id: '' + notification.id }; })
        });
    };
    LocalNotificationsPluginWeb.prototype.getPending = function () {
        return Promise.resolve({
            notifications: this.pending.map(function (localNotification) {
                return {
                    id: '' + localNotification.id
                };
            })
        });
    };
    LocalNotificationsPluginWeb.prototype.registerActionTypes = function (_options) {
        throw new Error('Method not implemented.');
    };
    LocalNotificationsPluginWeb.prototype.cancel = function (pending) {
        console.log('Cancel these', pending);
        this.pending = this.pending.filter(function (localNotification) { return !pending.notifications.find(function (ln) { return ln.id === '' + localNotification.id; }); });
        return Promise.resolve();
    };
    LocalNotificationsPluginWeb.prototype.areEnabled = function () {
        return Promise.resolve({
            value: Notification.permission === 'granted'
        });
    };
    LocalNotificationsPluginWeb.prototype.requestPermission = function () {
        return new Promise(function (resolve) {
            Notification.requestPermission(function (result) {
                var granted = true;
                if (result === 'denied' || result === 'default') {
                    granted = false;
                }
                resolve({ granted: granted });
            });
        });
    };
    LocalNotificationsPluginWeb.prototype.requestPermissions = function () {
        return new Promise(function (resolve, reject) {
            Notification.requestPermission(function (result) {
                if (result === 'denied' || result === 'default') {
                    reject(result);
                    return;
                }
                resolve({
                    results: [result]
                });
            });
        });
    };
    return LocalNotificationsPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var LocalNotifications = new LocalNotificationsPluginWeb();

//# sourceMappingURL=local-notifications.js.map

/***/ }),

/***/ "U+rf":
/*!*******************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/util.js ***!
  \*******************************************************/
/*! exports provided: extend, uuid4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uuid4", function() { return uuid4; });
var extend = function (target) {
    var objs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        objs[_i - 1] = arguments[_i];
    }
    objs.forEach(function (o) {
        if (o && typeof (o) === 'object') {
            for (var k in o) {
                if (o.hasOwnProperty(k)) {
                    target[k] = o[k];
                }
            }
        }
    });
    return target;
};
var uuid4 = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "WOgW":
/*!**********************************************************************************!*\
  !*** ./node_modules/@ionic-native/android-permissions/__ivy_ngcc__/ngx/index.js ***!
  \**********************************************************************************/
/*! exports provided: AndroidPermissions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AndroidPermissions", function() { return AndroidPermissions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "C6fG");




var AndroidPermissions = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AndroidPermissions, _super);
    function AndroidPermissions() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PERMISSION = {
            ACCESS_CHECKIN_PROPERTIES: 'android.permission.ACCESS_CHECKIN_PROPERTIES',
            ACCESS_COARSE_LOCATION: 'android.permission.ACCESS_COARSE_LOCATION',
            ACCESS_FINE_LOCATION: 'android.permission.ACCESS_FINE_LOCATION',
            ACCESS_LOCATION_EXTRA_COMMANDS: 'android.permission.ACCESS_LOCATION_EXTRA_COMMANDS',
            ACCESS_MOCK_LOCATION: 'android.permission.ACCESS_MOCK_LOCATION',
            ACCESS_NETWORK_STATE: 'android.permission.ACCESS_NETWORK_STATE',
            ACCESS_SURFACE_FLINGER: 'android.permission.ACCESS_SURFACE_FLINGER',
            ACCESS_WIFI_STATE: 'android.permission.ACCESS_WIFI_STATE',
            ACCOUNT_MANAGER: 'android.permission.ACCOUNT_MANAGER',
            ADD_VOICEMAIL: 'com.android.voicemail.permission.ADD_VOICEMAIL',
            AUTHENTICATE_ACCOUNTS: 'android.permission.AUTHENTICATE_ACCOUNTS',
            BATTERY_STATS: 'android.permission.BATTERY_STATS',
            BIND_ACCESSIBILITY_SERVICE: 'android.permission.BIND_ACCESSIBILITY_SERVICE',
            BIND_APPWIDGET: 'android.permission.BIND_APPWIDGET',
            BIND_CARRIER_MESSAGING_SERVICE: 'android.permission.BIND_CARRIER_MESSAGING_SERVICE',
            BIND_DEVICE_ADMIN: 'android.permission.BIND_DEVICE_ADMIN',
            BIND_DREAM_SERVICE: 'android.permission.BIND_DREAM_SERVICE',
            BIND_INPUT_METHOD: 'android.permission.BIND_INPUT_METHOD',
            BIND_NFC_SERVICE: 'android.permission.BIND_NFC_SERVICE',
            BIND_NOTIFICATION_LISTENER_SERVICE: 'android.permission.BIND_NOTIFICATION_LISTENER_SERVICE',
            BIND_PRINT_SERVICE: 'android.permission.BIND_PRINT_SERVICE',
            BIND_REMOTEVIEWS: 'android.permission.BIND_REMOTEVIEWS',
            BIND_TEXT_SERVICE: 'android.permission.BIND_TEXT_SERVICE',
            BIND_TV_INPUT: 'android.permission.BIND_TV_INPUT',
            BIND_VOICE_INTERACTION: 'android.permission.BIND_VOICE_INTERACTION',
            BIND_VPN_SERVICE: 'android.permission.BIND_VPN_SERVICE',
            BIND_WALLPAPER: 'android.permission.BIND_WALLPAPER',
            BLUETOOTH: 'android.permission.BLUETOOTH',
            BLUETOOTH_ADMIN: 'android.permission.BLUETOOTH_ADMIN',
            BLUETOOTH_PRIVILEGED: 'android.permission.BLUETOOTH_PRIVILEGED',
            BODY_SENSORS: 'android.permission.BODY_SENSORS',
            BRICK: 'android.permission.BRICK',
            BROADCAST_PACKAGE_REMOVED: 'android.permission.BROADCAST_PACKAGE_REMOVED',
            BROADCAST_SMS: 'android.permission.BROADCAST_SMS',
            BROADCAST_STICKY: 'android.permission.BROADCAST_STICKY',
            BROADCAST_WAP_PUSH: 'android.permission.BROADCAST_WAP_PUSH',
            CALL_PHONE: 'android.permission.CALL_PHONE',
            CALL_PRIVILEGED: 'android.permission.CALL_PRIVILEGED',
            CAMERA: 'android.permission.CAMERA',
            CAPTURE_AUDIO_OUTPUT: 'android.permission.CAPTURE_AUDIO_OUTPUT',
            CAPTURE_SECURE_VIDEO_OUTPUT: 'android.permission.CAPTURE_SECURE_VIDEO_OUTPUT',
            CAPTURE_VIDEO_OUTPUT: 'android.permission.CAPTURE_VIDEO_OUTPUT',
            CHANGE_COMPONENT_ENABLED_STATE: 'android.permission.CHANGE_COMPONENT_ENABLED_STATE',
            CHANGE_CONFIGURATION: 'android.permission.CHANGE_CONFIGURATION',
            CHANGE_NETWORK_STATE: 'android.permission.CHANGE_NETWORK_STATE',
            CHANGE_WIFI_MULTICAST_STATE: 'android.permission.CHANGE_WIFI_MULTICAST_STATE',
            CHANGE_WIFI_STATE: 'android.permission.CHANGE_WIFI_STATE',
            CLEAR_APP_CACHE: 'android.permission.CLEAR_APP_CACHE',
            CLEAR_APP_USER_DATA: 'android.permission.CLEAR_APP_USER_DATA',
            CONTROL_LOCATION_UPDATES: 'android.permission.CONTROL_LOCATION_UPDATES',
            DELETE_CACHE_FILES: 'android.permission.DELETE_CACHE_FILES',
            DELETE_PACKAGES: 'android.permission.DELETE_PACKAGES',
            DEVICE_POWER: 'android.permission.DEVICE_POWER',
            DIAGNOSTIC: 'android.permission.DIAGNOSTIC',
            DISABLE_KEYGUARD: 'android.permission.DISABLE_KEYGUARD',
            DUMP: 'android.permission.DUMP',
            EXPAND_STATUS_BAR: 'android.permission.EXPAND_STATUS_BAR',
            FACTORY_TEST: 'android.permission.FACTORY_TEST',
            FLASHLIGHT: 'android.permission.FLASHLIGHT',
            FORCE_BACK: 'android.permission.FORCE_BACK',
            GET_ACCOUNTS: 'android.permission.GET_ACCOUNTS',
            GET_PACKAGE_SIZE: 'android.permission.GET_PACKAGE_SIZE',
            GET_TASKS: 'android.permission.GET_TASKS',
            GET_TOP_ACTIVITY_INFO: 'android.permission.GET_TOP_ACTIVITY_INFO',
            GLOBAL_SEARCH: 'android.permission.GLOBAL_SEARCH',
            HARDWARE_TEST: 'android.permission.HARDWARE_TEST',
            INJECT_EVENTS: 'android.permission.INJECT_EVENTS',
            INSTALL_LOCATION_PROVIDER: 'android.permission.INSTALL_LOCATION_PROVIDER',
            INSTALL_PACKAGES: 'android.permission.INSTALL_PACKAGES',
            INSTALL_SHORTCUT: 'com.android.launcher.permission.INSTALL_SHORTCUT',
            INTERNAL_SYSTEM_WINDOW: 'android.permission.INTERNAL_SYSTEM_WINDOW',
            INTERNET: 'android.permission.INTERNET',
            KILL_BACKGROUND_PROCESSES: 'android.permission.KILL_BACKGROUND_PROCESSES',
            LOCATION_HARDWARE: 'android.permission.LOCATION_HARDWARE',
            MANAGE_ACCOUNTS: 'android.permission.MANAGE_ACCOUNTS',
            MANAGE_APP_TOKENS: 'android.permission.MANAGE_APP_TOKENS',
            MANAGE_DOCUMENTS: 'android.permission.MANAGE_DOCUMENTS',
            MASTER_CLEAR: 'android.permission.MASTER_CLEAR',
            MEDIA_CONTENT_CONTROL: 'android.permission.MEDIA_CONTENT_CONTROL',
            MODIFY_AUDIO_SETTINGS: 'android.permission.MODIFY_AUDIO_SETTINGS',
            MODIFY_PHONE_STATE: 'android.permission.MODIFY_PHONE_STATE',
            MOUNT_FORMAT_FILESYSTEMS: 'android.permission.MOUNT_FORMAT_FILESYSTEMS',
            MOUNT_UNMOUNT_FILESYSTEMS: 'android.permission.MOUNT_UNMOUNT_FILESYSTEMS',
            NFC: 'android.permission.NFC',
            PERSISTENT_ACTIVITY: 'android.permission.PERSISTENT_ACTIVITY',
            PROCESS_OUTGOING_CALLS: 'android.permission.PROCESS_OUTGOING_CALLS',
            READ_CALENDAR: 'android.permission.READ_CALENDAR',
            READ_CALL_LOG: 'android.permission.READ_CALL_LOG',
            READ_CONTACTS: 'android.permission.READ_CONTACTS',
            READ_EXTERNAL_STORAGE: 'android.permission.READ_EXTERNAL_STORAGE',
            READ_FRAME_BUFFER: 'android.permission.READ_FRAME_BUFFER',
            READ_HISTORY_BOOKMARKS: 'com.android.browser.permission.READ_HISTORY_BOOKMARKS',
            READ_INPUT_STATE: 'android.permission.READ_INPUT_STATE',
            READ_LOGS: 'android.permission.READ_LOGS',
            READ_PHONE_STATE: 'android.permission.READ_PHONE_STATE',
            READ_PROFILE: 'android.permission.READ_PROFILE',
            READ_SMS: 'android.permission.READ_SMS',
            READ_SOCIAL_STREAM: 'android.permission.READ_SOCIAL_STREAM',
            READ_SYNC_SETTINGS: 'android.permission.READ_SYNC_SETTINGS',
            READ_SYNC_STATS: 'android.permission.READ_SYNC_STATS',
            READ_USER_DICTIONARY: 'android.permission.READ_USER_DICTIONARY',
            READ_VOICEMAIL: 'com.android.voicemail.permission.READ_VOICEMAIL',
            REBOOT: 'android.permission.REBOOT',
            RECEIVE_BOOT_COMPLETED: 'android.permission.RECEIVE_BOOT_COMPLETED',
            RECEIVE_MMS: 'android.permission.RECEIVE_MMS',
            RECEIVE_SMS: 'android.permission.RECEIVE_SMS',
            RECEIVE_WAP_PUSH: 'android.permission.RECEIVE_WAP_PUSH',
            RECORD_AUDIO: 'android.permission.RECORD_AUDIO',
            REORDER_TASKS: 'android.permission.REORDER_TASKS',
            RESTART_PACKAGES: 'android.permission.RESTART_PACKAGES',
            SEND_RESPOND_VIA_MESSAGE: 'android.permission.SEND_RESPOND_VIA_MESSAGE',
            SEND_SMS: 'android.permission.SEND_SMS',
            SET_ACTIVITY_WATCHER: 'android.permission.SET_ACTIVITY_WATCHER',
            SET_ALARM: 'com.android.alarm.permission.SET_ALARM',
            SET_ALWAYS_FINISH: 'android.permission.SET_ALWAYS_FINISH',
            SET_ANIMATION_SCALE: 'android.permission.SET_ANIMATION_SCALE',
            SET_DEBUG_APP: 'android.permission.SET_DEBUG_APP',
            SET_ORIENTATION: 'android.permission.SET_ORIENTATION',
            SET_POINTER_SPEED: 'android.permission.SET_POINTER_SPEED',
            SET_PREFERRED_APPLICATIONS: 'android.permission.SET_PREFERRED_APPLICATIONS',
            SET_PROCESS_LIMIT: 'android.permission.SET_PROCESS_LIMIT',
            SET_TIME: 'android.permission.SET_TIME',
            SET_TIME_ZONE: 'android.permission.SET_TIME_ZONE',
            SET_WALLPAPER: 'android.permission.SET_WALLPAPER',
            SET_WALLPAPER_HINTS: 'android.permission.SET_WALLPAPER_HINTS',
            SIGNAL_PERSISTENT_PROCESSES: 'android.permission.SIGNAL_PERSISTENT_PROCESSES',
            STATUS_BAR: 'android.permission.STATUS_BAR',
            SUBSCRIBED_FEEDS_READ: 'android.permission.SUBSCRIBED_FEEDS_READ',
            SUBSCRIBED_FEEDS_WRITE: 'android.permission.SUBSCRIBED_FEEDS_WRITE',
            SYSTEM_ALERT_WINDOW: 'android.permission.SYSTEM_ALERT_WINDOW',
            TRANSMIT_IR: 'android.permission.TRANSMIT_IR',
            UNINSTALL_SHORTCUT: 'com.android.launcher.permission.UNINSTALL_SHORTCUT',
            UPDATE_DEVICE_STATS: 'android.permission.UPDATE_DEVICE_STATS',
            USE_CREDENTIALS: 'android.permission.USE_CREDENTIALS',
            USE_SIP: 'android.permission.USE_SIP',
            VIBRATE: 'android.permission.VIBRATE',
            WAKE_LOCK: 'android.permission.WAKE_LOCK',
            WRITE_APN_SETTINGS: 'android.permission.WRITE_APN_SETTINGS',
            WRITE_CALENDAR: 'android.permission.WRITE_CALENDAR',
            WRITE_CALL_LOG: 'android.permission.WRITE_CALL_LOG',
            WRITE_CONTACTS: 'android.permission.WRITE_CONTACTS',
            WRITE_EXTERNAL_STORAGE: 'android.permission.WRITE_EXTERNAL_STORAGE',
            WRITE_GSERVICES: 'android.permission.WRITE_GSERVICES',
            WRITE_HISTORY_BOOKMARKS: 'com.android.browser.permission.WRITE_HISTORY_BOOKMARKS',
            WRITE_PROFILE: 'android.permission.WRITE_PROFILE',
            WRITE_SECURE_SETTINGS: 'android.permission.WRITE_SECURE_SETTINGS',
            WRITE_SETTINGS: 'android.permission.WRITE_SETTINGS',
            WRITE_SMS: 'android.permission.WRITE_SMS',
            WRITE_SOCIAL_STREAM: 'android.permission.WRITE_SOCIAL_STREAM',
            WRITE_SYNC_SETTINGS: 'android.permission.WRITE_SYNC_SETTINGS',
            WRITE_USER_DICTIONARY: 'android.permission.WRITE_USER_DICTIONARY',
            WRITE_VOICEMAIL: 'com.android.voicemail.permission.WRITE_VOICEMAIL',
        };
        return _this;
    }
    AndroidPermissions.prototype.checkPermission = function (permission) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "checkPermission", {}, arguments); };
    AndroidPermissions.prototype.requestPermission = function (permission) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "requestPermission", {}, arguments); };
    AndroidPermissions.prototype.requestPermissions = function (permissions) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "requestPermissions", {}, arguments); };
    AndroidPermissions.prototype.hasPermission = function (permission) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "hasPermission", {}, arguments); };
    AndroidPermissions.pluginName = "AndroidPermissions";
    AndroidPermissions.plugin = "cordova-plugin-android-permissions";
    AndroidPermissions.pluginRef = "cordova.plugins.permissions";
    AndroidPermissions.repo = "https://github.com/NeoLSN/cordova-plugin-android-permissions";
    AndroidPermissions.platforms = ["Android"];
AndroidPermissions.ɵfac = function AndroidPermissions_Factory(t) { return ɵAndroidPermissions_BaseFactory(t || AndroidPermissions); };
AndroidPermissions.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AndroidPermissions, factory: function (t) { return AndroidPermissions.ɵfac(t); } });
var ɵAndroidPermissions_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AndroidPermissions);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AndroidPermissions, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
    return AndroidPermissions;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvYW5kcm9pZC1wZXJtaXNzaW9ucy9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7QUFDeEU7QUFHMEIsSUFrQ2Msc0NBQWlCO0FBQUM7QUFFOUM7QUFDRCxRQUZULGdCQUFVLEdBQVE7QUFDcEIsWUFBSSx5QkFBeUIsRUFBRSw4Q0FBOEM7QUFDN0UsWUFBSSxzQkFBc0IsRUFBRSwyQ0FBMkM7QUFDdkUsWUFBSSxvQkFBb0IsRUFBRSx5Q0FBeUM7QUFDbkUsWUFBSSw4QkFBOEIsRUFBRSxtREFBbUQ7QUFDdkYsWUFBSSxvQkFBb0IsRUFBRSx5Q0FBeUM7QUFDbkUsWUFBSSxvQkFBb0IsRUFBRSx5Q0FBeUM7QUFDbkUsWUFBSSxzQkFBc0IsRUFBRSwyQ0FBMkM7QUFDdkUsWUFBSSxpQkFBaUIsRUFBRSxzQ0FBc0M7QUFDN0QsWUFBSSxlQUFlLEVBQUUsb0NBQW9DO0FBQ3pELFlBQUksYUFBYSxFQUFFLGdEQUFnRDtBQUNuRSxZQUFJLHFCQUFxQixFQUFFLDBDQUEwQztBQUNyRSxZQUFJLGFBQWEsRUFBRSxrQ0FBa0M7QUFDckQsWUFBSSwwQkFBMEIsRUFBRSwrQ0FBK0M7QUFDL0UsWUFBSSxjQUFjLEVBQUUsbUNBQW1DO0FBQ3ZELFlBQUksOEJBQThCLEVBQUUsbURBQW1EO0FBQ3ZGLFlBQUksaUJBQWlCLEVBQUUsc0NBQXNDO0FBQzdELFlBQUksa0JBQWtCLEVBQUUsdUNBQXVDO0FBQy9ELFlBQUksaUJBQWlCLEVBQUUsc0NBQXNDO0FBQzdELFlBQUksZ0JBQWdCLEVBQUUscUNBQXFDO0FBQzNELFlBQUksa0NBQWtDLEVBQUUsdURBQXVEO0FBQy9GLFlBQUksa0JBQWtCLEVBQUUsdUNBQXVDO0FBQy9ELFlBQUksZ0JBQWdCLEVBQUUscUNBQXFDO0FBQzNELFlBQUksaUJBQWlCLEVBQUUsc0NBQXNDO0FBQzdELFlBQUksYUFBYSxFQUFFLGtDQUFrQztBQUNyRCxZQUFJLHNCQUFzQixFQUFFLDJDQUEyQztBQUN2RSxZQUFJLGdCQUFnQixFQUFFLHFDQUFxQztBQUMzRCxZQUFJLGNBQWMsRUFBRSxtQ0FBbUM7QUFDdkQsWUFBSSxTQUFTLEVBQUUsOEJBQThCO0FBQzdDLFlBQUksZUFBZSxFQUFFLG9DQUFvQztBQUN6RCxZQUFJLG9CQUFvQixFQUFFLHlDQUF5QztBQUNuRSxZQUFJLFlBQVksRUFBRSxpQ0FBaUM7QUFDbkQsWUFBSSxLQUFLLEVBQUUsMEJBQTBCO0FBQ3JDLFlBQUkseUJBQXlCLEVBQUUsOENBQThDO0FBQzdFLFlBQUksYUFBYSxFQUFFLGtDQUFrQztBQUNyRCxZQUFJLGdCQUFnQixFQUFFLHFDQUFxQztBQUMzRCxZQUFJLGtCQUFrQixFQUFFLHVDQUF1QztBQUMvRCxZQUFJLFVBQVUsRUFBRSwrQkFBK0I7QUFDL0MsWUFBSSxlQUFlLEVBQUUsb0NBQW9DO0FBQ3pELFlBQUksTUFBTSxFQUFFLDJCQUEyQjtBQUN2QyxZQUFJLG9CQUFvQixFQUFFLHlDQUF5QztBQUNuRSxZQUFJLDJCQUEyQixFQUFFLGdEQUFnRDtBQUNqRixZQUFJLG9CQUFvQixFQUFFLHlDQUF5QztBQUNuRSxZQUFJLDhCQUE4QixFQUFFLG1EQUFtRDtBQUN2RixZQUFJLG9CQUFvQixFQUFFLHlDQUF5QztBQUNuRSxZQUFJLG9CQUFvQixFQUFFLHlDQUF5QztBQUNuRSxZQUFJLDJCQUEyQixFQUFFLGdEQUFnRDtBQUNqRixZQUFJLGlCQUFpQixFQUFFLHNDQUFzQztBQUM3RCxZQUFJLGVBQWUsRUFBRSxvQ0FBb0M7QUFDekQsWUFBSSxtQkFBbUIsRUFBRSx3Q0FBd0M7QUFDakUsWUFBSSx3QkFBd0IsRUFBRSw2Q0FBNkM7QUFDM0UsWUFBSSxrQkFBa0IsRUFBRSx1Q0FBdUM7QUFDL0QsWUFBSSxlQUFlLEVBQUUsb0NBQW9DO0FBQ3pELFlBQUksWUFBWSxFQUFFLGlDQUFpQztBQUNuRCxZQUFJLFVBQVUsRUFBRSwrQkFBK0I7QUFDL0MsWUFBSSxnQkFBZ0IsRUFBRSxxQ0FBcUM7QUFDM0QsWUFBSSxJQUFJLEVBQUUseUJBQXlCO0FBQ25DLFlBQUksaUJBQWlCLEVBQUUsc0NBQXNDO0FBQzdELFlBQUksWUFBWSxFQUFFLGlDQUFpQztBQUNuRCxZQUFJLFVBQVUsRUFBRSwrQkFBK0I7QUFDL0MsWUFBSSxVQUFVLEVBQUUsK0JBQStCO0FBQy9DLFlBQUksWUFBWSxFQUFFLGlDQUFpQztBQUNuRCxZQUFJLGdCQUFnQixFQUFFLHFDQUFxQztBQUMzRCxZQUFJLFNBQVMsRUFBRSw4QkFBOEI7QUFDN0MsWUFBSSxxQkFBcUIsRUFBRSwwQ0FBMEM7QUFDckUsWUFBSSxhQUFhLEVBQUUsa0NBQWtDO0FBQ3JELFlBQUksYUFBYSxFQUFFLGtDQUFrQztBQUNyRCxZQUFJLGFBQWEsRUFBRSxrQ0FBa0M7QUFDckQsWUFBSSx5QkFBeUIsRUFBRSw4Q0FBOEM7QUFDN0UsWUFBSSxnQkFBZ0IsRUFBRSxxQ0FBcUM7QUFDM0QsWUFBSSxnQkFBZ0IsRUFBRSxrREFBa0Q7QUFDeEUsWUFBSSxzQkFBc0IsRUFBRSwyQ0FBMkM7QUFDdkUsWUFBSSxRQUFRLEVBQUUsNkJBQTZCO0FBQzNDLFlBQUkseUJBQXlCLEVBQUUsOENBQThDO0FBQzdFLFlBQUksaUJBQWlCLEVBQUUsc0NBQXNDO0FBQzdELFlBQUksZUFBZSxFQUFFLG9DQUFvQztBQUN6RCxZQUFJLGlCQUFpQixFQUFFLHNDQUFzQztBQUM3RCxZQUFJLGdCQUFnQixFQUFFLHFDQUFxQztBQUMzRCxZQUFJLFlBQVksRUFBRSxpQ0FBaUM7QUFDbkQsWUFBSSxxQkFBcUIsRUFBRSwwQ0FBMEM7QUFDckUsWUFBSSxxQkFBcUIsRUFBRSwwQ0FBMEM7QUFDckUsWUFBSSxrQkFBa0IsRUFBRSx1Q0FBdUM7QUFDL0QsWUFBSSx3QkFBd0IsRUFBRSw2Q0FBNkM7QUFDM0UsWUFBSSx5QkFBeUIsRUFBRSw4Q0FBOEM7QUFDN0UsWUFBSSxHQUFHLEVBQUUsd0JBQXdCO0FBQ2pDLFlBQUksbUJBQW1CLEVBQUUsd0NBQXdDO0FBQ2pFLFlBQUksc0JBQXNCLEVBQUUsMkNBQTJDO0FBQ3ZFLFlBQUksYUFBYSxFQUFFLGtDQUFrQztBQUNyRCxZQUFJLGFBQWEsRUFBRSxrQ0FBa0M7QUFDckQsWUFBSSxhQUFhLEVBQUUsa0NBQWtDO0FBQ3JELFlBQUkscUJBQXFCLEVBQUUsMENBQTBDO0FBQ3JFLFlBQUksaUJBQWlCLEVBQUUsc0NBQXNDO0FBQzdELFlBQUksc0JBQXNCLEVBQUUsdURBQXVEO0FBQ25GLFlBQUksZ0JBQWdCLEVBQUUscUNBQXFDO0FBQzNELFlBQUksU0FBUyxFQUFFLDhCQUE4QjtBQUM3QyxZQUFJLGdCQUFnQixFQUFFLHFDQUFxQztBQUMzRCxZQUFJLFlBQVksRUFBRSxpQ0FBaUM7QUFDbkQsWUFBSSxRQUFRLEVBQUUsNkJBQTZCO0FBQzNDLFlBQUksa0JBQWtCLEVBQUUsdUNBQXVDO0FBQy9ELFlBQUksa0JBQWtCLEVBQUUsdUNBQXVDO0FBQy9ELFlBQUksZUFBZSxFQUFFLG9DQUFvQztBQUN6RCxZQUFJLG9CQUFvQixFQUFFLHlDQUF5QztBQUNuRSxZQUFJLGNBQWMsRUFBRSxpREFBaUQ7QUFDckUsWUFBSSxNQUFNLEVBQUUsMkJBQTJCO0FBQ3ZDLFlBQUksc0JBQXNCLEVBQUUsMkNBQTJDO0FBQ3ZFLFlBQUksV0FBVyxFQUFFLGdDQUFnQztBQUNqRCxZQUFJLFdBQVcsRUFBRSxnQ0FBZ0M7QUFDakQsWUFBSSxnQkFBZ0IsRUFBRSxxQ0FBcUM7QUFDM0QsWUFBSSxZQUFZLEVBQUUsaUNBQWlDO0FBQ25ELFlBQUksYUFBYSxFQUFFLGtDQUFrQztBQUNyRCxZQUFJLGdCQUFnQixFQUFFLHFDQUFxQztBQUMzRCxZQUFJLHdCQUF3QixFQUFFLDZDQUE2QztBQUMzRSxZQUFJLFFBQVEsRUFBRSw2QkFBNkI7QUFDM0MsWUFBSSxvQkFBb0IsRUFBRSx5Q0FBeUM7QUFDbkUsWUFBSSxTQUFTLEVBQUUsd0NBQXdDO0FBQ3ZELFlBQUksaUJBQWlCLEVBQUUsc0NBQXNDO0FBQzdELFlBQUksbUJBQW1CLEVBQUUsd0NBQXdDO0FBQ2pFLFlBQUksYUFBYSxFQUFFLGtDQUFrQztBQUNyRCxZQUFJLGVBQWUsRUFBRSxvQ0FBb0M7QUFDekQsWUFBSSxpQkFBaUIsRUFBRSxzQ0FBc0M7QUFDN0QsWUFBSSwwQkFBMEIsRUFBRSwrQ0FBK0M7QUFDL0UsWUFBSSxpQkFBaUIsRUFBRSxzQ0FBc0M7QUFDN0QsWUFBSSxRQUFRLEVBQUUsNkJBQTZCO0FBQzNDLFlBQUksYUFBYSxFQUFFLGtDQUFrQztBQUNyRCxZQUFJLGFBQWEsRUFBRSxrQ0FBa0M7QUFDckQsWUFBSSxtQkFBbUIsRUFBRSx3Q0FBd0M7QUFDakUsWUFBSSwyQkFBMkIsRUFBRSxnREFBZ0Q7QUFDakYsWUFBSSxVQUFVLEVBQUUsK0JBQStCO0FBQy9DLFlBQUkscUJBQXFCLEVBQUUsMENBQTBDO0FBQ3JFLFlBQUksc0JBQXNCLEVBQUUsMkNBQTJDO0FBQ3ZFLFlBQUksbUJBQW1CLEVBQUUsd0NBQXdDO0FBQ2pFLFlBQUksV0FBVyxFQUFFLGdDQUFnQztBQUNqRCxZQUFJLGtCQUFrQixFQUFFLG9EQUFvRDtBQUM1RSxZQUFJLG1CQUFtQixFQUFFLHdDQUF3QztBQUNqRSxZQUFJLGVBQWUsRUFBRSxvQ0FBb0M7QUFDekQsWUFBSSxPQUFPLEVBQUUsNEJBQTRCO0FBQ3pDLFlBQUksT0FBTyxFQUFFLDRCQUE0QjtBQUN6QyxZQUFJLFNBQVMsRUFBRSw4QkFBOEI7QUFDN0MsWUFBSSxrQkFBa0IsRUFBRSx1Q0FBdUM7QUFDL0QsWUFBSSxjQUFjLEVBQUUsbUNBQW1DO0FBQ3ZELFlBQUksY0FBYyxFQUFFLG1DQUFtQztBQUN2RCxZQUFJLGNBQWMsRUFBRSxtQ0FBbUM7QUFDdkQsWUFBSSxzQkFBc0IsRUFBRSwyQ0FBMkM7QUFDdkUsWUFBSSxlQUFlLEVBQUUsb0NBQW9DO0FBQ3pELFlBQUksdUJBQXVCLEVBQUUsd0RBQXdEO0FBQ3JGLFlBQUksYUFBYSxFQUFFLGtDQUFrQztBQUNyRCxZQUFJLHFCQUFxQixFQUFFLDBDQUEwQztBQUNyRSxZQUFJLGNBQWMsRUFBRSxtQ0FBbUM7QUFDdkQsWUFBSSxTQUFTLEVBQUUsOEJBQThCO0FBQzdDLFlBQUksbUJBQW1CLEVBQUUsd0NBQXdDO0FBQ2pFLFlBQUksbUJBQW1CLEVBQUUsd0NBQXdDO0FBQ2pFLFlBQUkscUJBQXFCLEVBQUUsMENBQTBDO0FBQ3JFLFlBQUksZUFBZSxFQUFFLGtEQUFrRDtBQUN2RSxTQUFHLENBQUM7QUFDSjtBQUVlO0FBQU0sSUFLbkIsNENBQWUsYUFBQyxVQUFrQjtBQUtwQyxJQUtFLDhDQUFpQixhQUFDLFVBQWtCO0FBS3BDLElBS0EsK0NBQWtCLGFBQUMsV0FBcUI7QUFLakIsSUFLdkIsMENBQWEsYUFBQyxVQUFrQjtBQUtoQztBQUNhO0FBRTBDO0FBQWtFO0FBQThGO3NEQXpNeE4sVUFBVTs7Ozs7MEJBQ0w7QUFBQyw2QkF2Q1A7QUFBRSxFQXVDc0MsaUJBQWlCO0FBQ3hELFNBRFksa0JBQWtCO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBBbmRyb2lkIFBlcm1pc3Npb25zXG4gKiBAcHJlbWllciBhbmRyb2lkLXBlcm1pc3Npb25zXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGlzIGRlc2lnbmVkIHRvIHN1cHBvcnQgQW5kcm9pZCBuZXcgcGVybWlzc2lvbnMgY2hlY2tpbmcgbWVjaGFuaXNtLlxuICpcbiAqIFlvdSBjYW4gZmluZCBhbGwgcGVybWlzc2lvbnMgaGVyZTogaHR0cHM6Ly9kZXZlbG9wZXIuYW5kcm9pZC5jb20vcmVmZXJlbmNlL2FuZHJvaWQvTWFuaWZlc3QucGVybWlzc2lvbi5odG1sXG4gKlxuICogQHVzYWdlXG4gKiBgYGBcbiAqIGltcG9ydCB7IEFuZHJvaWRQZXJtaXNzaW9ucyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYW5kcm9pZC1wZXJtaXNzaW9ucy9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGFuZHJvaWRQZXJtaXNzaW9uczogQW5kcm9pZFBlcm1pc3Npb25zKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmFuZHJvaWRQZXJtaXNzaW9ucy5jaGVja1Blcm1pc3Npb24odGhpcy5hbmRyb2lkUGVybWlzc2lvbnMuUEVSTUlTU0lPTi5DQU1FUkEpLnRoZW4oXG4gKiAgIHJlc3VsdCA9PiBjb25zb2xlLmxvZygnSGFzIHBlcm1pc3Npb24/JyxyZXN1bHQuaGFzUGVybWlzc2lvbiksXG4gKiAgIGVyciA9PiB0aGlzLmFuZHJvaWRQZXJtaXNzaW9ucy5yZXF1ZXN0UGVybWlzc2lvbih0aGlzLmFuZHJvaWRQZXJtaXNzaW9ucy5QRVJNSVNTSU9OLkNBTUVSQSlcbiAqICk7XG4gKlxuICogdGhpcy5hbmRyb2lkUGVybWlzc2lvbnMucmVxdWVzdFBlcm1pc3Npb25zKFt0aGlzLmFuZHJvaWRQZXJtaXNzaW9ucy5QRVJNSVNTSU9OLkNBTUVSQSwgdGhpcy5hbmRyb2lkUGVybWlzc2lvbnMuUEVSTUlTU0lPTi5HRVRfQUNDT1VOVFNdKTtcbiAqXG4gKiBgYGBcbiAqXG4gKiBBbmRyb2lkIDI2IGFuZCBhYm92ZTogZHVlIHRvIEFuZHJvaWQgMjYncyBjaGFuZ2VzIHRvIHBlcm1pc3Npb25zIGhhbmRsaW5nIChwZXJtaXNzaW9ucyBhcmUgcmVxdWVzdGVkIGF0IHRpbWUgb2YgdXNlIHJhdGhlciB0aGFuIGF0IHJ1bnRpbWUsKSBpZiB5b3VyIGFwcCBkb2VzIG5vdCBpbmNsdWRlIGFueSBmdW5jdGlvbnMgKGVnLiBvdGhlciBJb25pYyBOYXRpdmUgcGx1Z2lucykgdGhhdCB1dGlsaXplIGEgcGFydGljdWxhciBwZXJtaXNzaW9uLCB0aGVuIGByZXF1ZXN0UGVybWlzc2lvbigpYCBhbmQgYHJlcXVlc3RQZXJtaXNzaW9ucygpYCB3aWxsIHJlc29sdmUgaW1tZWRpYXRlbHkgd2l0aCBubyBwcm9tcHQgc2hvd24gdG8gdGhlIHVzZXIuICBUaHVzLCB5b3UgbXVzdCBpbmNsdWRlIGEgZnVuY3Rpb24gdXRpbGl6aW5nIHRoZSBmZWF0dXJlIHlvdSB3b3VsZCBsaWtlIHRvIHVzZSBiZWZvcmUgcmVxdWVzdGluZyBwZXJtaXNzaW9uIGZvciBpdC5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdBbmRyb2lkUGVybWlzc2lvbnMnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1hbmRyb2lkLXBlcm1pc3Npb25zJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLnBlcm1pc3Npb25zJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9OZW9MU04vY29yZG92YS1wbHVnaW4tYW5kcm9pZC1wZXJtaXNzaW9ucycsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFuZHJvaWRQZXJtaXNzaW9ucyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgUEVSTUlTU0lPTjogYW55ID0ge1xuICAgIEFDQ0VTU19DSEVDS0lOX1BST1BFUlRJRVM6ICdhbmRyb2lkLnBlcm1pc3Npb24uQUNDRVNTX0NIRUNLSU5fUFJPUEVSVElFUycsXG4gICAgQUNDRVNTX0NPQVJTRV9MT0NBVElPTjogJ2FuZHJvaWQucGVybWlzc2lvbi5BQ0NFU1NfQ09BUlNFX0xPQ0FUSU9OJyxcbiAgICBBQ0NFU1NfRklORV9MT0NBVElPTjogJ2FuZHJvaWQucGVybWlzc2lvbi5BQ0NFU1NfRklORV9MT0NBVElPTicsXG4gICAgQUNDRVNTX0xPQ0FUSU9OX0VYVFJBX0NPTU1BTkRTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkFDQ0VTU19MT0NBVElPTl9FWFRSQV9DT01NQU5EUycsXG4gICAgQUNDRVNTX01PQ0tfTE9DQVRJT046ICdhbmRyb2lkLnBlcm1pc3Npb24uQUNDRVNTX01PQ0tfTE9DQVRJT04nLFxuICAgIEFDQ0VTU19ORVRXT1JLX1NUQVRFOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkFDQ0VTU19ORVRXT1JLX1NUQVRFJyxcbiAgICBBQ0NFU1NfU1VSRkFDRV9GTElOR0VSOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkFDQ0VTU19TVVJGQUNFX0ZMSU5HRVInLFxuICAgIEFDQ0VTU19XSUZJX1NUQVRFOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkFDQ0VTU19XSUZJX1NUQVRFJyxcbiAgICBBQ0NPVU5UX01BTkFHRVI6ICdhbmRyb2lkLnBlcm1pc3Npb24uQUNDT1VOVF9NQU5BR0VSJyxcbiAgICBBRERfVk9JQ0VNQUlMOiAnY29tLmFuZHJvaWQudm9pY2VtYWlsLnBlcm1pc3Npb24uQUREX1ZPSUNFTUFJTCcsXG4gICAgQVVUSEVOVElDQVRFX0FDQ09VTlRTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkFVVEhFTlRJQ0FURV9BQ0NPVU5UUycsXG4gICAgQkFUVEVSWV9TVEFUUzogJ2FuZHJvaWQucGVybWlzc2lvbi5CQVRURVJZX1NUQVRTJyxcbiAgICBCSU5EX0FDQ0VTU0lCSUxJVFlfU0VSVklDRTogJ2FuZHJvaWQucGVybWlzc2lvbi5CSU5EX0FDQ0VTU0lCSUxJVFlfU0VSVklDRScsXG4gICAgQklORF9BUFBXSURHRVQ6ICdhbmRyb2lkLnBlcm1pc3Npb24uQklORF9BUFBXSURHRVQnLFxuICAgIEJJTkRfQ0FSUklFUl9NRVNTQUdJTkdfU0VSVklDRTogJ2FuZHJvaWQucGVybWlzc2lvbi5CSU5EX0NBUlJJRVJfTUVTU0FHSU5HX1NFUlZJQ0UnLFxuICAgIEJJTkRfREVWSUNFX0FETUlOOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkJJTkRfREVWSUNFX0FETUlOJyxcbiAgICBCSU5EX0RSRUFNX1NFUlZJQ0U6ICdhbmRyb2lkLnBlcm1pc3Npb24uQklORF9EUkVBTV9TRVJWSUNFJyxcbiAgICBCSU5EX0lOUFVUX01FVEhPRDogJ2FuZHJvaWQucGVybWlzc2lvbi5CSU5EX0lOUFVUX01FVEhPRCcsXG4gICAgQklORF9ORkNfU0VSVklDRTogJ2FuZHJvaWQucGVybWlzc2lvbi5CSU5EX05GQ19TRVJWSUNFJyxcbiAgICBCSU5EX05PVElGSUNBVElPTl9MSVNURU5FUl9TRVJWSUNFOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkJJTkRfTk9USUZJQ0FUSU9OX0xJU1RFTkVSX1NFUlZJQ0UnLFxuICAgIEJJTkRfUFJJTlRfU0VSVklDRTogJ2FuZHJvaWQucGVybWlzc2lvbi5CSU5EX1BSSU5UX1NFUlZJQ0UnLFxuICAgIEJJTkRfUkVNT1RFVklFV1M6ICdhbmRyb2lkLnBlcm1pc3Npb24uQklORF9SRU1PVEVWSUVXUycsXG4gICAgQklORF9URVhUX1NFUlZJQ0U6ICdhbmRyb2lkLnBlcm1pc3Npb24uQklORF9URVhUX1NFUlZJQ0UnLFxuICAgIEJJTkRfVFZfSU5QVVQ6ICdhbmRyb2lkLnBlcm1pc3Npb24uQklORF9UVl9JTlBVVCcsXG4gICAgQklORF9WT0lDRV9JTlRFUkFDVElPTjogJ2FuZHJvaWQucGVybWlzc2lvbi5CSU5EX1ZPSUNFX0lOVEVSQUNUSU9OJyxcbiAgICBCSU5EX1ZQTl9TRVJWSUNFOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkJJTkRfVlBOX1NFUlZJQ0UnLFxuICAgIEJJTkRfV0FMTFBBUEVSOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkJJTkRfV0FMTFBBUEVSJyxcbiAgICBCTFVFVE9PVEg6ICdhbmRyb2lkLnBlcm1pc3Npb24uQkxVRVRPT1RIJyxcbiAgICBCTFVFVE9PVEhfQURNSU46ICdhbmRyb2lkLnBlcm1pc3Npb24uQkxVRVRPT1RIX0FETUlOJyxcbiAgICBCTFVFVE9PVEhfUFJJVklMRUdFRDogJ2FuZHJvaWQucGVybWlzc2lvbi5CTFVFVE9PVEhfUFJJVklMRUdFRCcsXG4gICAgQk9EWV9TRU5TT1JTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkJPRFlfU0VOU09SUycsXG4gICAgQlJJQ0s6ICdhbmRyb2lkLnBlcm1pc3Npb24uQlJJQ0snLFxuICAgIEJST0FEQ0FTVF9QQUNLQUdFX1JFTU9WRUQ6ICdhbmRyb2lkLnBlcm1pc3Npb24uQlJPQURDQVNUX1BBQ0tBR0VfUkVNT1ZFRCcsXG4gICAgQlJPQURDQVNUX1NNUzogJ2FuZHJvaWQucGVybWlzc2lvbi5CUk9BRENBU1RfU01TJyxcbiAgICBCUk9BRENBU1RfU1RJQ0tZOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkJST0FEQ0FTVF9TVElDS1knLFxuICAgIEJST0FEQ0FTVF9XQVBfUFVTSDogJ2FuZHJvaWQucGVybWlzc2lvbi5CUk9BRENBU1RfV0FQX1BVU0gnLFxuICAgIENBTExfUEhPTkU6ICdhbmRyb2lkLnBlcm1pc3Npb24uQ0FMTF9QSE9ORScsXG4gICAgQ0FMTF9QUklWSUxFR0VEOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkNBTExfUFJJVklMRUdFRCcsXG4gICAgQ0FNRVJBOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkNBTUVSQScsXG4gICAgQ0FQVFVSRV9BVURJT19PVVRQVVQ6ICdhbmRyb2lkLnBlcm1pc3Npb24uQ0FQVFVSRV9BVURJT19PVVRQVVQnLFxuICAgIENBUFRVUkVfU0VDVVJFX1ZJREVPX09VVFBVVDogJ2FuZHJvaWQucGVybWlzc2lvbi5DQVBUVVJFX1NFQ1VSRV9WSURFT19PVVRQVVQnLFxuICAgIENBUFRVUkVfVklERU9fT1VUUFVUOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkNBUFRVUkVfVklERU9fT1VUUFVUJyxcbiAgICBDSEFOR0VfQ09NUE9ORU5UX0VOQUJMRURfU1RBVEU6ICdhbmRyb2lkLnBlcm1pc3Npb24uQ0hBTkdFX0NPTVBPTkVOVF9FTkFCTEVEX1NUQVRFJyxcbiAgICBDSEFOR0VfQ09ORklHVVJBVElPTjogJ2FuZHJvaWQucGVybWlzc2lvbi5DSEFOR0VfQ09ORklHVVJBVElPTicsXG4gICAgQ0hBTkdFX05FVFdPUktfU1RBVEU6ICdhbmRyb2lkLnBlcm1pc3Npb24uQ0hBTkdFX05FVFdPUktfU1RBVEUnLFxuICAgIENIQU5HRV9XSUZJX01VTFRJQ0FTVF9TVEFURTogJ2FuZHJvaWQucGVybWlzc2lvbi5DSEFOR0VfV0lGSV9NVUxUSUNBU1RfU1RBVEUnLFxuICAgIENIQU5HRV9XSUZJX1NUQVRFOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkNIQU5HRV9XSUZJX1NUQVRFJyxcbiAgICBDTEVBUl9BUFBfQ0FDSEU6ICdhbmRyb2lkLnBlcm1pc3Npb24uQ0xFQVJfQVBQX0NBQ0hFJyxcbiAgICBDTEVBUl9BUFBfVVNFUl9EQVRBOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkNMRUFSX0FQUF9VU0VSX0RBVEEnLFxuICAgIENPTlRST0xfTE9DQVRJT05fVVBEQVRFUzogJ2FuZHJvaWQucGVybWlzc2lvbi5DT05UUk9MX0xPQ0FUSU9OX1VQREFURVMnLFxuICAgIERFTEVURV9DQUNIRV9GSUxFUzogJ2FuZHJvaWQucGVybWlzc2lvbi5ERUxFVEVfQ0FDSEVfRklMRVMnLFxuICAgIERFTEVURV9QQUNLQUdFUzogJ2FuZHJvaWQucGVybWlzc2lvbi5ERUxFVEVfUEFDS0FHRVMnLFxuICAgIERFVklDRV9QT1dFUjogJ2FuZHJvaWQucGVybWlzc2lvbi5ERVZJQ0VfUE9XRVInLFxuICAgIERJQUdOT1NUSUM6ICdhbmRyb2lkLnBlcm1pc3Npb24uRElBR05PU1RJQycsXG4gICAgRElTQUJMRV9LRVlHVUFSRDogJ2FuZHJvaWQucGVybWlzc2lvbi5ESVNBQkxFX0tFWUdVQVJEJyxcbiAgICBEVU1QOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkRVTVAnLFxuICAgIEVYUEFORF9TVEFUVVNfQkFSOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkVYUEFORF9TVEFUVVNfQkFSJyxcbiAgICBGQUNUT1JZX1RFU1Q6ICdhbmRyb2lkLnBlcm1pc3Npb24uRkFDVE9SWV9URVNUJyxcbiAgICBGTEFTSExJR0hUOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkZMQVNITElHSFQnLFxuICAgIEZPUkNFX0JBQ0s6ICdhbmRyb2lkLnBlcm1pc3Npb24uRk9SQ0VfQkFDSycsXG4gICAgR0VUX0FDQ09VTlRTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkdFVF9BQ0NPVU5UUycsXG4gICAgR0VUX1BBQ0tBR0VfU0laRTogJ2FuZHJvaWQucGVybWlzc2lvbi5HRVRfUEFDS0FHRV9TSVpFJyxcbiAgICBHRVRfVEFTS1M6ICdhbmRyb2lkLnBlcm1pc3Npb24uR0VUX1RBU0tTJyxcbiAgICBHRVRfVE9QX0FDVElWSVRZX0lORk86ICdhbmRyb2lkLnBlcm1pc3Npb24uR0VUX1RPUF9BQ1RJVklUWV9JTkZPJyxcbiAgICBHTE9CQUxfU0VBUkNIOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkdMT0JBTF9TRUFSQ0gnLFxuICAgIEhBUkRXQVJFX1RFU1Q6ICdhbmRyb2lkLnBlcm1pc3Npb24uSEFSRFdBUkVfVEVTVCcsXG4gICAgSU5KRUNUX0VWRU5UUzogJ2FuZHJvaWQucGVybWlzc2lvbi5JTkpFQ1RfRVZFTlRTJyxcbiAgICBJTlNUQUxMX0xPQ0FUSU9OX1BST1ZJREVSOiAnYW5kcm9pZC5wZXJtaXNzaW9uLklOU1RBTExfTE9DQVRJT05fUFJPVklERVInLFxuICAgIElOU1RBTExfUEFDS0FHRVM6ICdhbmRyb2lkLnBlcm1pc3Npb24uSU5TVEFMTF9QQUNLQUdFUycsXG4gICAgSU5TVEFMTF9TSE9SVENVVDogJ2NvbS5hbmRyb2lkLmxhdW5jaGVyLnBlcm1pc3Npb24uSU5TVEFMTF9TSE9SVENVVCcsXG4gICAgSU5URVJOQUxfU1lTVEVNX1dJTkRPVzogJ2FuZHJvaWQucGVybWlzc2lvbi5JTlRFUk5BTF9TWVNURU1fV0lORE9XJyxcbiAgICBJTlRFUk5FVDogJ2FuZHJvaWQucGVybWlzc2lvbi5JTlRFUk5FVCcsXG4gICAgS0lMTF9CQUNLR1JPVU5EX1BST0NFU1NFUzogJ2FuZHJvaWQucGVybWlzc2lvbi5LSUxMX0JBQ0tHUk9VTkRfUFJPQ0VTU0VTJyxcbiAgICBMT0NBVElPTl9IQVJEV0FSRTogJ2FuZHJvaWQucGVybWlzc2lvbi5MT0NBVElPTl9IQVJEV0FSRScsXG4gICAgTUFOQUdFX0FDQ09VTlRTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLk1BTkFHRV9BQ0NPVU5UUycsXG4gICAgTUFOQUdFX0FQUF9UT0tFTlM6ICdhbmRyb2lkLnBlcm1pc3Npb24uTUFOQUdFX0FQUF9UT0tFTlMnLFxuICAgIE1BTkFHRV9ET0NVTUVOVFM6ICdhbmRyb2lkLnBlcm1pc3Npb24uTUFOQUdFX0RPQ1VNRU5UUycsXG4gICAgTUFTVEVSX0NMRUFSOiAnYW5kcm9pZC5wZXJtaXNzaW9uLk1BU1RFUl9DTEVBUicsXG4gICAgTUVESUFfQ09OVEVOVF9DT05UUk9MOiAnYW5kcm9pZC5wZXJtaXNzaW9uLk1FRElBX0NPTlRFTlRfQ09OVFJPTCcsXG4gICAgTU9ESUZZX0FVRElPX1NFVFRJTkdTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLk1PRElGWV9BVURJT19TRVRUSU5HUycsXG4gICAgTU9ESUZZX1BIT05FX1NUQVRFOiAnYW5kcm9pZC5wZXJtaXNzaW9uLk1PRElGWV9QSE9ORV9TVEFURScsXG4gICAgTU9VTlRfRk9STUFUX0ZJTEVTWVNURU1TOiAnYW5kcm9pZC5wZXJtaXNzaW9uLk1PVU5UX0ZPUk1BVF9GSUxFU1lTVEVNUycsXG4gICAgTU9VTlRfVU5NT1VOVF9GSUxFU1lTVEVNUzogJ2FuZHJvaWQucGVybWlzc2lvbi5NT1VOVF9VTk1PVU5UX0ZJTEVTWVNURU1TJyxcbiAgICBORkM6ICdhbmRyb2lkLnBlcm1pc3Npb24uTkZDJyxcbiAgICBQRVJTSVNURU5UX0FDVElWSVRZOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlBFUlNJU1RFTlRfQUNUSVZJVFknLFxuICAgIFBST0NFU1NfT1VUR09JTkdfQ0FMTFM6ICdhbmRyb2lkLnBlcm1pc3Npb24uUFJPQ0VTU19PVVRHT0lOR19DQUxMUycsXG4gICAgUkVBRF9DQUxFTkRBUjogJ2FuZHJvaWQucGVybWlzc2lvbi5SRUFEX0NBTEVOREFSJyxcbiAgICBSRUFEX0NBTExfTE9HOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlJFQURfQ0FMTF9MT0cnLFxuICAgIFJFQURfQ09OVEFDVFM6ICdhbmRyb2lkLnBlcm1pc3Npb24uUkVBRF9DT05UQUNUUycsXG4gICAgUkVBRF9FWFRFUk5BTF9TVE9SQUdFOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlJFQURfRVhURVJOQUxfU1RPUkFHRScsXG4gICAgUkVBRF9GUkFNRV9CVUZGRVI6ICdhbmRyb2lkLnBlcm1pc3Npb24uUkVBRF9GUkFNRV9CVUZGRVInLFxuICAgIFJFQURfSElTVE9SWV9CT09LTUFSS1M6ICdjb20uYW5kcm9pZC5icm93c2VyLnBlcm1pc3Npb24uUkVBRF9ISVNUT1JZX0JPT0tNQVJLUycsXG4gICAgUkVBRF9JTlBVVF9TVEFURTogJ2FuZHJvaWQucGVybWlzc2lvbi5SRUFEX0lOUFVUX1NUQVRFJyxcbiAgICBSRUFEX0xPR1M6ICdhbmRyb2lkLnBlcm1pc3Npb24uUkVBRF9MT0dTJyxcbiAgICBSRUFEX1BIT05FX1NUQVRFOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlJFQURfUEhPTkVfU1RBVEUnLFxuICAgIFJFQURfUFJPRklMRTogJ2FuZHJvaWQucGVybWlzc2lvbi5SRUFEX1BST0ZJTEUnLFxuICAgIFJFQURfU01TOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlJFQURfU01TJyxcbiAgICBSRUFEX1NPQ0lBTF9TVFJFQU06ICdhbmRyb2lkLnBlcm1pc3Npb24uUkVBRF9TT0NJQUxfU1RSRUFNJyxcbiAgICBSRUFEX1NZTkNfU0VUVElOR1M6ICdhbmRyb2lkLnBlcm1pc3Npb24uUkVBRF9TWU5DX1NFVFRJTkdTJyxcbiAgICBSRUFEX1NZTkNfU1RBVFM6ICdhbmRyb2lkLnBlcm1pc3Npb24uUkVBRF9TWU5DX1NUQVRTJyxcbiAgICBSRUFEX1VTRVJfRElDVElPTkFSWTogJ2FuZHJvaWQucGVybWlzc2lvbi5SRUFEX1VTRVJfRElDVElPTkFSWScsXG4gICAgUkVBRF9WT0lDRU1BSUw6ICdjb20uYW5kcm9pZC52b2ljZW1haWwucGVybWlzc2lvbi5SRUFEX1ZPSUNFTUFJTCcsXG4gICAgUkVCT09UOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlJFQk9PVCcsXG4gICAgUkVDRUlWRV9CT09UX0NPTVBMRVRFRDogJ2FuZHJvaWQucGVybWlzc2lvbi5SRUNFSVZFX0JPT1RfQ09NUExFVEVEJyxcbiAgICBSRUNFSVZFX01NUzogJ2FuZHJvaWQucGVybWlzc2lvbi5SRUNFSVZFX01NUycsXG4gICAgUkVDRUlWRV9TTVM6ICdhbmRyb2lkLnBlcm1pc3Npb24uUkVDRUlWRV9TTVMnLFxuICAgIFJFQ0VJVkVfV0FQX1BVU0g6ICdhbmRyb2lkLnBlcm1pc3Npb24uUkVDRUlWRV9XQVBfUFVTSCcsXG4gICAgUkVDT1JEX0FVRElPOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlJFQ09SRF9BVURJTycsXG4gICAgUkVPUkRFUl9UQVNLUzogJ2FuZHJvaWQucGVybWlzc2lvbi5SRU9SREVSX1RBU0tTJyxcbiAgICBSRVNUQVJUX1BBQ0tBR0VTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlJFU1RBUlRfUEFDS0FHRVMnLFxuICAgIFNFTkRfUkVTUE9ORF9WSUFfTUVTU0FHRTogJ2FuZHJvaWQucGVybWlzc2lvbi5TRU5EX1JFU1BPTkRfVklBX01FU1NBR0UnLFxuICAgIFNFTkRfU01TOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlNFTkRfU01TJyxcbiAgICBTRVRfQUNUSVZJVFlfV0FUQ0hFUjogJ2FuZHJvaWQucGVybWlzc2lvbi5TRVRfQUNUSVZJVFlfV0FUQ0hFUicsXG4gICAgU0VUX0FMQVJNOiAnY29tLmFuZHJvaWQuYWxhcm0ucGVybWlzc2lvbi5TRVRfQUxBUk0nLFxuICAgIFNFVF9BTFdBWVNfRklOSVNIOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlNFVF9BTFdBWVNfRklOSVNIJyxcbiAgICBTRVRfQU5JTUFUSU9OX1NDQUxFOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlNFVF9BTklNQVRJT05fU0NBTEUnLFxuICAgIFNFVF9ERUJVR19BUFA6ICdhbmRyb2lkLnBlcm1pc3Npb24uU0VUX0RFQlVHX0FQUCcsXG4gICAgU0VUX09SSUVOVEFUSU9OOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlNFVF9PUklFTlRBVElPTicsXG4gICAgU0VUX1BPSU5URVJfU1BFRUQ6ICdhbmRyb2lkLnBlcm1pc3Npb24uU0VUX1BPSU5URVJfU1BFRUQnLFxuICAgIFNFVF9QUkVGRVJSRURfQVBQTElDQVRJT05TOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlNFVF9QUkVGRVJSRURfQVBQTElDQVRJT05TJyxcbiAgICBTRVRfUFJPQ0VTU19MSU1JVDogJ2FuZHJvaWQucGVybWlzc2lvbi5TRVRfUFJPQ0VTU19MSU1JVCcsXG4gICAgU0VUX1RJTUU6ICdhbmRyb2lkLnBlcm1pc3Npb24uU0VUX1RJTUUnLFxuICAgIFNFVF9USU1FX1pPTkU6ICdhbmRyb2lkLnBlcm1pc3Npb24uU0VUX1RJTUVfWk9ORScsXG4gICAgU0VUX1dBTExQQVBFUjogJ2FuZHJvaWQucGVybWlzc2lvbi5TRVRfV0FMTFBBUEVSJyxcbiAgICBTRVRfV0FMTFBBUEVSX0hJTlRTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlNFVF9XQUxMUEFQRVJfSElOVFMnLFxuICAgIFNJR05BTF9QRVJTSVNURU5UX1BST0NFU1NFUzogJ2FuZHJvaWQucGVybWlzc2lvbi5TSUdOQUxfUEVSU0lTVEVOVF9QUk9DRVNTRVMnLFxuICAgIFNUQVRVU19CQVI6ICdhbmRyb2lkLnBlcm1pc3Npb24uU1RBVFVTX0JBUicsXG4gICAgU1VCU0NSSUJFRF9GRUVEU19SRUFEOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlNVQlNDUklCRURfRkVFRFNfUkVBRCcsXG4gICAgU1VCU0NSSUJFRF9GRUVEU19XUklURTogJ2FuZHJvaWQucGVybWlzc2lvbi5TVUJTQ1JJQkVEX0ZFRURTX1dSSVRFJyxcbiAgICBTWVNURU1fQUxFUlRfV0lORE9XOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlNZU1RFTV9BTEVSVF9XSU5ET1cnLFxuICAgIFRSQU5TTUlUX0lSOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlRSQU5TTUlUX0lSJyxcbiAgICBVTklOU1RBTExfU0hPUlRDVVQ6ICdjb20uYW5kcm9pZC5sYXVuY2hlci5wZXJtaXNzaW9uLlVOSU5TVEFMTF9TSE9SVENVVCcsXG4gICAgVVBEQVRFX0RFVklDRV9TVEFUUzogJ2FuZHJvaWQucGVybWlzc2lvbi5VUERBVEVfREVWSUNFX1NUQVRTJyxcbiAgICBVU0VfQ1JFREVOVElBTFM6ICdhbmRyb2lkLnBlcm1pc3Npb24uVVNFX0NSRURFTlRJQUxTJyxcbiAgICBVU0VfU0lQOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlVTRV9TSVAnLFxuICAgIFZJQlJBVEU6ICdhbmRyb2lkLnBlcm1pc3Npb24uVklCUkFURScsXG4gICAgV0FLRV9MT0NLOiAnYW5kcm9pZC5wZXJtaXNzaW9uLldBS0VfTE9DSycsXG4gICAgV1JJVEVfQVBOX1NFVFRJTkdTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLldSSVRFX0FQTl9TRVRUSU5HUycsXG4gICAgV1JJVEVfQ0FMRU5EQVI6ICdhbmRyb2lkLnBlcm1pc3Npb24uV1JJVEVfQ0FMRU5EQVInLFxuICAgIFdSSVRFX0NBTExfTE9HOiAnYW5kcm9pZC5wZXJtaXNzaW9uLldSSVRFX0NBTExfTE9HJyxcbiAgICBXUklURV9DT05UQUNUUzogJ2FuZHJvaWQucGVybWlzc2lvbi5XUklURV9DT05UQUNUUycsXG4gICAgV1JJVEVfRVhURVJOQUxfU1RPUkFHRTogJ2FuZHJvaWQucGVybWlzc2lvbi5XUklURV9FWFRFUk5BTF9TVE9SQUdFJyxcbiAgICBXUklURV9HU0VSVklDRVM6ICdhbmRyb2lkLnBlcm1pc3Npb24uV1JJVEVfR1NFUlZJQ0VTJyxcbiAgICBXUklURV9ISVNUT1JZX0JPT0tNQVJLUzogJ2NvbS5hbmRyb2lkLmJyb3dzZXIucGVybWlzc2lvbi5XUklURV9ISVNUT1JZX0JPT0tNQVJLUycsXG4gICAgV1JJVEVfUFJPRklMRTogJ2FuZHJvaWQucGVybWlzc2lvbi5XUklURV9QUk9GSUxFJyxcbiAgICBXUklURV9TRUNVUkVfU0VUVElOR1M6ICdhbmRyb2lkLnBlcm1pc3Npb24uV1JJVEVfU0VDVVJFX1NFVFRJTkdTJyxcbiAgICBXUklURV9TRVRUSU5HUzogJ2FuZHJvaWQucGVybWlzc2lvbi5XUklURV9TRVRUSU5HUycsXG4gICAgV1JJVEVfU01TOiAnYW5kcm9pZC5wZXJtaXNzaW9uLldSSVRFX1NNUycsXG4gICAgV1JJVEVfU09DSUFMX1NUUkVBTTogJ2FuZHJvaWQucGVybWlzc2lvbi5XUklURV9TT0NJQUxfU1RSRUFNJyxcbiAgICBXUklURV9TWU5DX1NFVFRJTkdTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLldSSVRFX1NZTkNfU0VUVElOR1MnLFxuICAgIFdSSVRFX1VTRVJfRElDVElPTkFSWTogJ2FuZHJvaWQucGVybWlzc2lvbi5XUklURV9VU0VSX0RJQ1RJT05BUlknLFxuICAgIFdSSVRFX1ZPSUNFTUFJTDogJ2NvbS5hbmRyb2lkLnZvaWNlbWFpbC5wZXJtaXNzaW9uLldSSVRFX1ZPSUNFTUFJTCcsXG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrIHBlcm1pc3Npb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IHBlcm1pc3Npb24gVGhlIG5hbWUgb2YgdGhlIHBlcm1pc3Npb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxBbmRyb2lkUGVybWlzc2lvblJlc3BvbnNlPn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY2hlY2tQZXJtaXNzaW9uKHBlcm1pc3Npb246IHN0cmluZyk6IFByb21pc2U8QW5kcm9pZFBlcm1pc3Npb25SZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXF1ZXN0IHBlcm1pc3Npb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IHBlcm1pc3Npb24gVGhlIG5hbWUgb2YgdGhlIHBlcm1pc3Npb24gdG8gcmVxdWVzdFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPEFuZHJvaWRQZXJtaXNzaW9uUmVzcG9uc2U+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZXF1ZXN0UGVybWlzc2lvbihwZXJtaXNzaW9uOiBzdHJpbmcpOiBQcm9taXNlPEFuZHJvaWRQZXJtaXNzaW9uUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVxdWVzdCBwZXJtaXNzaW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwZXJtaXNzaW9ucyBBbiBhcnJheSB3aXRoIHBlcm1pc3Npb25zXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVxdWVzdFBlcm1pc3Npb25zKHBlcm1pc3Npb25zOiBzdHJpbmdbXSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gc3RpbGwgd29ya3Mgbm93LCB3aWxsIG5vdCBzdXBwb3J0IGluIHRoZSBmdXR1cmUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwZXJtaXNzaW9uIFRoZSBuYW1lIG9mIHRoZSBwZXJtaXNzaW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8QW5kcm9pZFBlcm1pc3Npb25SZXNwb25zZT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGhhc1Blcm1pc3Npb24ocGVybWlzc2lvbjogc3RyaW5nKTogUHJvbWlzZTxBbmRyb2lkUGVybWlzc2lvblJlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQW5kcm9pZFBlcm1pc3Npb25SZXNwb25zZSB7XG4gIGhhc1Blcm1pc3Npb246IGJvb2xlYW47XG59XG4iXX0=

/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      Controllo cabina elettrica\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n  </ion-header>\n  <ion-button expand=\"full\" (click)=\"requestPermission()\">Notification Permission</ion-button>\n\n  <div padding>\n    <ion-button color=\"primary\" (click)=\"loginiotronic()\">Iotronic Login</ion-button>\n  </div>\n  <div padding>\n    <ion-button color=\"primary\" (click)=\"getMyLocation()\">GeoLocation Info</ion-button>\n  </div>\n  <div padding>\n    <ion-button color=\"primary\" (click)=\"blepage()\" slot=\"end\">Bluetooth Connection\n      <ion-icon name=\"Bluetooth\"></ion-icon>\n    </ion-button>\n  </div>\n\n\n</ion-content>\n");

/***/ }),

/***/ "X33G":
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/motion.js ***!
  \*************************************************************/
/*! exports provided: MotionPluginWeb, Motion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotionPluginWeb", function() { return MotionPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Motion", function() { return Motion; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "O1h7");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "6Fjf");


var MotionPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MotionPluginWeb, _super);
    function MotionPluginWeb() {
        var _this = _super.call(this, {
            name: 'Motion'
        }) || this;
        _this.registerWindowListener('devicemotion', 'accel');
        _this.registerWindowListener('deviceorientation', 'orientation');
        return _this;
    }
    return MotionPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Motion = new MotionPluginWeb();

//# sourceMappingURL=motion.js.map

/***/ }),

/***/ "YgRC":
/*!*************************************!*\
  !*** ./src/app/location.service.ts ***!
  \*************************************/
/*! exports provided: LocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_location_accuracy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/location-accuracy */ "uD+E");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "WOgW");





let LocationService = class LocationService {
    constructor(AndroidPermissions) {
        this.AndroidPermissions = AndroidPermissions;
    }
    askToTurnOnGPS() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield new Promise((resolve, reject) => {
                _ionic_native_location_accuracy__WEBPACK_IMPORTED_MODULE_2__["LocationAccuracy"].canRequest().then((canRequest) => {
                    if (canRequest) {
                        // the accuracy option will be ignored by iOS
                        _ionic_native_location_accuracy__WEBPACK_IMPORTED_MODULE_2__["LocationAccuracy"].request(_ionic_native_location_accuracy__WEBPACK_IMPORTED_MODULE_2__["LocationAccuracy"].REQUEST_PRIORITY_HIGH_ACCURACY).then(() => {
                            resolve(true);
                        }, error => {
                            resolve(false);
                        });
                    }
                    else {
                        resolve(false);
                    }
                });
            });
        });
    }
    // Check if application having GPS access permission
    checkGPSPermission() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield new Promise((resolve, reject) => {
                if (_capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Capacitor"].isNative) {
                    this.AndroidPermissions.checkPermission(this.AndroidPermissions.PERMISSION.ACCESS_FINE_LOCATION).then(result => {
                        if (result.hasPermission) {
                            // If having permission show 'Turn On GPS' dialogue
                            resolve(true);
                        }
                        else {
                            // If not having permission ask for permission
                            resolve(false);
                        }
                    }, err => { alert(err); });
                }
                else {
                    resolve(true);
                }
            });
        });
    }
    requestGPSPermission() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield new Promise((resolve, reject) => {
                _ionic_native_location_accuracy__WEBPACK_IMPORTED_MODULE_2__["LocationAccuracy"].canRequest().then((canRequest) => {
                    if (canRequest) {
                        resolve('CAN_REQUEST');
                    }
                    else {
                        // Show 'GPS Permission Request' dialogue
                        this.AndroidPermissions.requestPermission(this.AndroidPermissions.PERMISSION.ACCESS_FINE_LOCATION)
                            .then((result) => {
                            if (result.hasPermission) {
                                // call method to turn on GPS
                                resolve('GOT_PERMISSION');
                            }
                            else {
                                resolve('DENIED_PERMISSION');
                            }
                        }, error => {
                            // Show alert if user click on 'No Thanks'
                            alert('requestPermission Error requesting location permissions ' + error);
                        });
                    }
                });
            });
        });
    }
};
LocationService.ctorParameters = () => [
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__["AndroidPermissions"] }
];
LocationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LocationService);



/***/ }),

/***/ "ZO70":
/*!************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/share.js ***!
  \************************************************************/
/*! exports provided: SharePluginWeb, Share */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharePluginWeb", function() { return SharePluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Share", function() { return Share; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "O1h7");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "6Fjf");


var SharePluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SharePluginWeb, _super);
    function SharePluginWeb() {
        return _super.call(this, {
            name: 'Share',
            platforms: ['web']
        }) || this;
    }
    SharePluginWeb.prototype.share = function (options) {
        if (!navigator.share) {
            return Promise.reject('Web Share API not available');
        }
        return navigator.share({
            title: options.title,
            text: options.text,
            url: options.url
        });
    };
    return SharePluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Share = new SharePluginWeb();

//# sourceMappingURL=share.js.map

/***/ }),

/***/ "c7tv":
/*!***********************************************!*\
  !*** ./src/app/services/messaging.service.ts ***!
  \***********************************************/
/*! exports provided: MessagingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagingService", function() { return MessagingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/messaging */ "XoYk");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let MessagingService = class MessagingService {
    constructor(afMessaging) {
        this.afMessaging = afMessaging;
        this.token = null;
    }
    requestPemission() {
        return this.afMessaging.requestToken.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(token => {
            console.log("Store the user token", token);
        }));
    }
    getMessages() {
        return this.afMessaging.messages;
    }
    deleteToken() {
        if (this.token) {
            this.afMessaging.deleteToken(this.token);
            this.token = null;
        }
    }
};
MessagingService.ctorParameters = () => [
    { type: _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_2__["AngularFireMessaging"] }
];
MessagingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MessagingService);



/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "fme8":
/*!******************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/geolocation.js ***!
  \******************************************************************/
/*! exports provided: GeolocationPluginWeb, Geolocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationPluginWeb", function() { return GeolocationPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Geolocation", function() { return Geolocation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "O1h7");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "6Fjf");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "U+rf");



var GeolocationPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GeolocationPluginWeb, _super);
    function GeolocationPluginWeb() {
        return _super.call(this, {
            name: 'Geolocation',
            platforms: ['web']
        }) || this;
    }
    GeolocationPluginWeb.prototype.getCurrentPosition = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return _this.requestPermissions().then(function (_result) {
                window.navigator.geolocation.getCurrentPosition(function (pos) {
                    resolve(pos);
                }, function (err) {
                    reject(err);
                }, Object(_util__WEBPACK_IMPORTED_MODULE_2__["extend"])({
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 0
                }, options));
            });
        });
    };
    GeolocationPluginWeb.prototype.watchPosition = function (options, callback) {
        var id = window.navigator.geolocation.watchPosition(function (pos) {
            callback(pos);
        }, function (err) {
            callback(null, err);
        }, Object(_util__WEBPACK_IMPORTED_MODULE_2__["extend"])({
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }, options));
        return "" + id;
    };
    GeolocationPluginWeb.prototype.clearWatch = function (options) {
        window.navigator.geolocation.clearWatch(parseInt(options.id, 10));
        return Promise.resolve();
    };
    return GeolocationPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Geolocation = new GeolocationPluginWeb();

//# sourceMappingURL=geolocation.js.map

/***/ }),

/***/ "fnMB":
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/app.js ***!
  \**********************************************************/
/*! exports provided: AppPluginWeb, App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppPluginWeb", function() { return AppPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "O1h7");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "6Fjf");


var AppPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AppPluginWeb, _super);
    function AppPluginWeb() {
        var _this = _super.call(this, {
            name: 'App',
            platforms: ['web']
        }) || this;
        if (typeof document !== 'undefined') {
            document.addEventListener('visibilitychange', _this.handleVisibilityChange.bind(_this), false);
        }
        return _this;
    }
    AppPluginWeb.prototype.exitApp = function () {
        throw new Error('Method not implemented.');
    };
    AppPluginWeb.prototype.canOpenUrl = function (_options) {
        return Promise.resolve({ value: true });
    };
    AppPluginWeb.prototype.openUrl = function (_options) {
        return Promise.resolve({ completed: true });
    };
    AppPluginWeb.prototype.getLaunchUrl = function () {
        return Promise.resolve({ url: '' });
    };
    AppPluginWeb.prototype.getState = function () {
        return Promise.resolve({ isActive: document.hidden !== true });
    };
    AppPluginWeb.prototype.handleVisibilityChange = function () {
        var data = {
            isActive: document.hidden !== true
        };
        this.notifyListeners('appStateChange', data);
    };
    return AppPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var App = new AppPluginWeb();

//# sourceMappingURL=app.js.map

/***/ }),

/***/ "gcOT":
/*!********************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/index.js ***!
  \********************************************************/
/*! exports provided: CameraSource, CameraDirection, CameraResultType, FilesystemDirectory, FilesystemEncoding, HapticsImpactStyle, HapticsNotificationType, KeyboardStyle, KeyboardResize, ActionSheetOptionStyle, PermissionType, PhotosAlbumType, StatusBarStyle, StatusBarAnimation, Capacitor, Plugins, AccessibilityPluginWeb, Accessibility, AppPluginWeb, App, BrowserPluginWeb, Browser, CameraPluginWeb, Camera, ClipboardPluginWeb, Clipboard, FilesystemPluginWeb, Filesystem, GeolocationPluginWeb, Geolocation, DevicePluginWeb, Device, LocalNotificationsPluginWeb, LocalNotifications, SharePluginWeb, Share, ModalsPluginWeb, Modals, MotionPluginWeb, Motion, NetworkPluginWeb, Network, PermissionsPluginWeb, Permissions, SplashScreenPluginWeb, SplashScreen, StoragePluginWeb, Storage, ToastPluginWeb, Toast, registerWebPlugin, WebPluginRegistry, WebPlugins, WebPlugin, mergeWebPlugins, mergeWebPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-plugin-definitions */ "I2A1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraSource", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["CameraSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraDirection", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["CameraDirection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraResultType", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["CameraResultType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilesystemDirectory", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["FilesystemDirectory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilesystemEncoding", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["FilesystemEncoding"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HapticsImpactStyle", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["HapticsImpactStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HapticsNotificationType", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["HapticsNotificationType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeyboardStyle", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["KeyboardStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeyboardResize", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["KeyboardResize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionSheetOptionStyle", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["ActionSheetOptionStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionType", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["PermissionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhotosAlbumType", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["PhotosAlbumType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatusBarStyle", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["StatusBarStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatusBarAnimation", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["StatusBarAnimation"]; });

/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ "91C0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Capacitor", function() { return _global__WEBPACK_IMPORTED_MODULE_1__["Capacitor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Plugins", function() { return _global__WEBPACK_IMPORTED_MODULE_1__["Plugins"]; });

/* harmony import */ var _web_plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-plugins */ "0fR0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccessibilityPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["AccessibilityPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Accessibility", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Accessibility"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["AppPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "App", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["App"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowserPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["BrowserPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Browser", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Browser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["CameraPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Camera"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClipboardPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["ClipboardPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Clipboard", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Clipboard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilesystemPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["FilesystemPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Filesystem", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Filesystem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GeolocationPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["GeolocationPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Geolocation", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DevicePluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["DevicePluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Device", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Device"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalNotificationsPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["LocalNotificationsPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalNotifications", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["LocalNotifications"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharePluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["SharePluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Share", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Share"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalsPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["ModalsPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modals", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Modals"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MotionPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["MotionPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Motion", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Motion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NetworkPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["NetworkPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Network", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Network"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionsPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["PermissionsPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Permissions", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Permissions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SplashScreenPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["SplashScreenPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SplashScreen", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StoragePluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["StoragePluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Storage", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Storage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["ToastPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Toast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerWebPlugin", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["registerWebPlugin"]; });

/* harmony import */ var _web_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web/index */ "6Fjf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebPluginRegistry", function() { return _web_index__WEBPACK_IMPORTED_MODULE_3__["WebPluginRegistry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebPlugins", function() { return _web_index__WEBPACK_IMPORTED_MODULE_3__["WebPlugins"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebPlugin", function() { return _web_index__WEBPACK_IMPORTED_MODULE_3__["WebPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeWebPlugins", function() { return _web_index__WEBPACK_IMPORTED_MODULE_3__["mergeWebPlugins"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeWebPlugin", function() { return _web_index__WEBPACK_IMPORTED_MODULE_3__["mergeWebPlugin"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "ghO4":
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/device.js ***!
  \*************************************************************/
/*! exports provided: DevicePluginWeb, Device */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicePluginWeb", function() { return DevicePluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Device", function() { return Device; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "O1h7");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "6Fjf");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "U+rf");



var DevicePluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DevicePluginWeb, _super);
    function DevicePluginWeb() {
        return _super.call(this, {
            name: 'Device',
            platforms: ['web']
        }) || this;
    }
    DevicePluginWeb.prototype.getInfo = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var ua, uaFields;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                ua = navigator.userAgent;
                uaFields = this.parseUa(ua);
                return [2 /*return*/, Promise.resolve({
                        model: uaFields.model,
                        platform: 'web',
                        appVersion: '',
                        appBuild: '',
                        appId: '',
                        appName: '',
                        operatingSystem: uaFields.operatingSystem,
                        osVersion: uaFields.osVersion,
                        manufacturer: navigator.vendor,
                        isVirtual: false,
                        uuid: this.getUid()
                    })];
            });
        });
    };
    DevicePluginWeb.prototype.getBatteryInfo = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var battery, e_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        battery = {};
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, navigator.getBattery()];
                    case 2:
                        battery = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, Promise.resolve({
                            batteryLevel: battery.level,
                            isCharging: battery.charging
                        })];
                }
            });
        });
    };
    DevicePluginWeb.prototype.getLanguageCode = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, {
                        value: navigator.language
                    }];
            });
        });
    };
    DevicePluginWeb.prototype.parseUa = function (_ua) {
        var uaFields = {};
        var start = _ua.indexOf('(') + 1;
        var end = _ua.indexOf(') AppleWebKit');
        if (_ua.indexOf(') Gecko') !== -1) {
            end = _ua.indexOf(') Gecko');
        }
        var fields = _ua.substring(start, end);
        if (_ua.indexOf('Android') !== -1) {
            uaFields.model = fields.replace('; wv', '').split('; ').pop().split(' Build')[0];
            uaFields.osVersion = fields.split('; ')[1];
        }
        else {
            uaFields.model = fields.split('; ')[0];
            if (navigator.oscpu) {
                uaFields.osVersion = navigator.oscpu;
            }
            else {
                if (_ua.indexOf('Windows') !== -1) {
                    uaFields.osVersion = fields;
                }
                else {
                    var lastParts = fields.split('; ').pop().replace(' like Mac OS X', '').split(' ');
                    uaFields.osVersion = lastParts[lastParts.length - 1].replace(/_/g, '.');
                }
            }
        }
        if (/android/i.test(_ua)) {
            uaFields.operatingSystem = 'android';
        }
        else if (/iPad|iPhone|iPod/.test(_ua) && !window.MSStream) {
            uaFields.operatingSystem = 'ios';
        }
        else if (/Win/.test(_ua)) {
            uaFields.operatingSystem = 'windows';
        }
        else if (/Mac/i.test(_ua)) {
            uaFields.operatingSystem = 'mac';
        }
        else {
            uaFields.operatingSystem = 'unknown';
        }
        return uaFields;
    };
    DevicePluginWeb.prototype.getUid = function () {
        var uid = window.localStorage.getItem('_capuid');
        if (uid) {
            return uid;
        }
        uid = Object(_util__WEBPACK_IMPORTED_MODULE_2__["uuid4"])();
        window.localStorage.setItem('_capuid', uid);
        return uid;
    };
    return DevicePluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Device = new DevicePluginWeb();

//# sourceMappingURL=device.js.map

/***/ }),

/***/ "nfLy":
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/storage.js ***!
  \**************************************************************/
/*! exports provided: StoragePluginWeb, Storage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoragePluginWeb", function() { return StoragePluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Storage", function() { return Storage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "O1h7");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "6Fjf");


var StoragePluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StoragePluginWeb, _super);
    function StoragePluginWeb() {
        var _this = _super.call(this, {
            name: 'Storage',
            platforms: ['web']
        }) || this;
        _this.KEY_PREFIX = '_cap_';
        return _this;
    }
    StoragePluginWeb.prototype.get = function (options) {
        var _this = this;
        return new Promise(function (resolve, _reject) {
            resolve({
                value: window.localStorage.getItem(_this.makeKey(options.key))
            });
        });
    };
    StoragePluginWeb.prototype.set = function (options) {
        var _this = this;
        return new Promise(function (resolve, _reject) {
            window.localStorage.setItem(_this.makeKey(options.key), options.value);
            resolve();
        });
    };
    StoragePluginWeb.prototype.remove = function (options) {
        var _this = this;
        return new Promise(function (resolve, _reject) {
            window.localStorage.removeItem(_this.makeKey(options.key));
            resolve();
        });
    };
    StoragePluginWeb.prototype.keys = function () {
        var _this = this;
        return new Promise(function (resolve, _reject) {
            resolve({
                keys: Object.keys(localStorage).filter(function (k) { return _this.isKey(k); }).map(function (k) { return _this.getKey(k); })
            });
        });
    };
    StoragePluginWeb.prototype.clear = function () {
        var _this = this;
        return new Promise(function (resolve, _reject) {
            Object.keys(localStorage)
                .filter(function (k) { return _this.isKey(k); })
                .forEach(function (k) { return window.localStorage.removeItem(k); });
            resolve();
        });
    };
    StoragePluginWeb.prototype.makeKey = function (key) {
        return this.KEY_PREFIX + key;
    };
    StoragePluginWeb.prototype.isKey = function (key) {
        return key.indexOf(this.KEY_PREFIX) === 0;
    };
    StoragePluginWeb.prototype.getKey = function (key) {
        return key.substr(this.KEY_PREFIX.length);
    };
    return StoragePluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Storage = new StoragePluginWeb();

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ "oNdP":
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/camera.js ***!
  \*************************************************************/
/*! exports provided: CameraPluginWeb, Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraPluginWeb", function() { return CameraPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "O1h7");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "6Fjf");
/* harmony import */ var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core-plugin-definitions */ "I2A1");



var CameraPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CameraPluginWeb, _super);
    function CameraPluginWeb() {
        return _super.call(this, {
            name: 'Camera',
            platforms: ['web']
        }) || this;
    }
    CameraPluginWeb.prototype.getPhoto = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                        var cameraModal_1, e_1;
                        var _this = this;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!options.webUseInput) return [3 /*break*/, 1];
                                    this.fileInputExperience(options, resolve);
                                    return [3 /*break*/, 7];
                                case 1:
                                    if (!customElements.get('pwa-camera-modal')) return [3 /*break*/, 6];
                                    cameraModal_1 = document.createElement('pwa-camera-modal');
                                    document.body.appendChild(cameraModal_1);
                                    _a.label = 2;
                                case 2:
                                    _a.trys.push([2, 4, , 5]);
                                    return [4 /*yield*/, cameraModal_1.componentOnReady()];
                                case 3:
                                    _a.sent();
                                    cameraModal_1.addEventListener('onPhoto', function (e) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                        var photo, _a;
                                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                                            switch (_b.label) {
                                                case 0:
                                                    photo = e.detail;
                                                    if (!(photo === null)) return [3 /*break*/, 1];
                                                    reject('User cancelled photos app');
                                                    return [3 /*break*/, 4];
                                                case 1:
                                                    if (!(photo instanceof Error)) return [3 /*break*/, 2];
                                                    reject(photo.message);
                                                    return [3 /*break*/, 4];
                                                case 2:
                                                    _a = resolve;
                                                    return [4 /*yield*/, this._getCameraPhoto(photo, options)];
                                                case 3:
                                                    _a.apply(void 0, [_b.sent()]);
                                                    _b.label = 4;
                                                case 4:
                                                    cameraModal_1.dismiss();
                                                    document.body.removeChild(cameraModal_1);
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); });
                                    cameraModal_1.present();
                                    return [3 /*break*/, 5];
                                case 4:
                                    e_1 = _a.sent();
                                    this.fileInputExperience(options, resolve);
                                    return [3 /*break*/, 5];
                                case 5: return [3 /*break*/, 7];
                                case 6:
                                    console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/pwa-elements.");
                                    this.fileInputExperience(options, resolve);
                                    _a.label = 7;
                                case 7: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    CameraPluginWeb.prototype.fileInputExperience = function (options, resolve) {
        var input = document.querySelector('#_capacitor-camera-input');
        var cleanup = function () {
            input.parentNode && input.parentNode.removeChild(input);
        };
        if (!input) {
            input = document.createElement('input');
            input.id = '_capacitor-camera-input';
            input.type = 'file';
            document.body.appendChild(input);
        }
        input.accept = 'image/*';
        input.capture = true;
        if (options.source === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Photos || options.source === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Prompt) {
            input.removeAttribute('capture');
        }
        else if (options.direction === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraDirection"].Front) {
            input.capture = 'user';
        }
        else if (options.direction === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraDirection"].Rear) {
            input.capture = 'environment';
        }
        input.addEventListener('change', function (_e) {
            var file = input.files[0];
            var format = 'jpeg';
            if (file.type === 'image/png') {
                format = 'png';
            }
            else if (file.type === 'image/gif') {
                format = 'gif';
            }
            if (options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].DataUrl || options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64) {
                var reader_1 = new FileReader();
                reader_1.addEventListener('load', function () {
                    if (options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].DataUrl) {
                        resolve({
                            dataUrl: reader_1.result,
                            format: format
                        });
                    }
                    else if (options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64) {
                        var b64 = reader_1.result.split(',')[1];
                        resolve({
                            base64String: b64,
                            format: format
                        });
                    }
                    cleanup();
                });
                reader_1.readAsDataURL(file);
            }
            else {
                resolve({
                    webPath: URL.createObjectURL(file),
                    format: format
                });
                cleanup();
            }
        });
        input.click();
    };
    CameraPluginWeb.prototype._getCameraPhoto = function (photo, options) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            var format = photo.type.split('/')[1];
            if (options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Uri) {
                resolve({
                    webPath: URL.createObjectURL(photo),
                    format: format
                });
            }
            else {
                reader.readAsDataURL(photo);
                reader.onloadend = function () {
                    var r = reader.result;
                    if (options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].DataUrl) {
                        resolve({
                            dataUrl: r,
                            format: format
                        });
                    }
                    else {
                        resolve({
                            base64String: r.split(',')[1],
                            format: format
                        });
                    }
                };
                reader.onerror = function (e) {
                    reject(e);
                };
            }
        });
    };
    return CameraPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Camera = new CameraPluginWeb();

//# sourceMappingURL=camera.js.map

/***/ }),

/***/ "r04x":
/*!*****************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/filesystem.js ***!
  \*****************************************************************/
/*! exports provided: FilesystemPluginWeb, Filesystem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesystemPluginWeb", function() { return FilesystemPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filesystem", function() { return Filesystem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "O1h7");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "6Fjf");
/* harmony import */ var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core-plugin-definitions */ "I2A1");



var FilesystemPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FilesystemPluginWeb, _super);
    function FilesystemPluginWeb() {
        var _this = _super.call(this, {
            name: 'Filesystem',
            platforms: ['web']
        }) || this;
        _this.DEFAULT_DIRECTORY = _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["FilesystemDirectory"].Data;
        _this.DB_VERSION = 1;
        _this.DB_NAME = 'Disc';
        _this._writeCmds = ['add', 'put', 'delete'];
        return _this;
    }
    FilesystemPluginWeb.prototype.initDb = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (this._db !== undefined) {
                    return [2 /*return*/, this._db];
                }
                if (!('indexedDB' in window)) {
                    throw new Error('This browser doesn\'t support IndexedDB');
                }
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var request = indexedDB.open(_this.DB_NAME, _this.DB_VERSION);
                        request.onupgradeneeded = FilesystemPluginWeb.doUpgrade;
                        request.onsuccess = function () {
                            _this._db = request.result;
                            resolve(request.result);
                        };
                        request.onerror = function () { return reject(request.error); };
                        request.onblocked = function () {
                            console.warn('db blocked');
                        };
                    })];
            });
        });
    };
    FilesystemPluginWeb.doUpgrade = function (event) {
        var eventTarget = event.target;
        var db = eventTarget.result;
        switch (event.oldVersion) {
            case 0:
            case 1:
            default:
                if (db.objectStoreNames.contains('FileStorage')) {
                    db.deleteObjectStore('FileStorage');
                }
                var store = db.createObjectStore('FileStorage', { keyPath: 'path' });
                store.createIndex('by_folder', 'folder');
        }
    };
    FilesystemPluginWeb.prototype.dbRequest = function (cmd, args) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var readFlag;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                readFlag = this._writeCmds.indexOf(cmd) !== -1 ? 'readwrite' : 'readonly';
                return [2 /*return*/, this.initDb()
                        .then(function (conn) {
                        return new Promise(function (resolve, reject) {
                            var tx = conn.transaction(['FileStorage'], readFlag);
                            var store = tx.objectStore('FileStorage');
                            var req = store[cmd].apply(store, args);
                            req.onsuccess = function () { return resolve(req.result); };
                            req.onerror = function () { return reject(req.error); };
                        });
                    })];
            });
        });
    };
    FilesystemPluginWeb.prototype.dbIndexRequest = function (indexName, cmd, args) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var readFlag;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                readFlag = this._writeCmds.indexOf(cmd) !== -1 ? 'readwrite' : 'readonly';
                return [2 /*return*/, this.initDb()
                        .then(function (conn) {
                        return new Promise(function (resolve, reject) {
                            var tx = conn.transaction(['FileStorage'], readFlag);
                            var store = tx.objectStore('FileStorage');
                            var index = store.index(indexName);
                            var req = index[cmd].apply(index, args);
                            req.onsuccess = function () { return resolve(req.result); };
                            req.onerror = function () { return reject(req.error); };
                        });
                    })];
            });
        });
    };
    FilesystemPluginWeb.prototype.getPath = function (directory, uriPath) {
        directory = directory || this.DEFAULT_DIRECTORY;
        var cleanedUriPath = uriPath !== undefined ? uriPath.replace(/^[/]+|[/]+$/g, '') : '';
        var fsPath = '/' + directory;
        if (uriPath !== '')
            fsPath += '/' + cleanedUriPath;
        return fsPath;
    };
    FilesystemPluginWeb.prototype.clear = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var conn, tx, store;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initDb()];
                    case 1:
                        conn = _a.sent();
                        tx = conn.transaction(['FileStorage'], 'readwrite');
                        store = tx.objectStore('FileStorage');
                        store.clear();
                        return [2 /*return*/, {}];
                }
            });
        });
    };
    /**
     * Read a file from disk
     * @param options options for the file read
     * @return a promise that resolves with the read file data result
     */
    FilesystemPluginWeb.prototype.readFile = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, entry;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 1:
                        entry = _a.sent();
                        if (entry === undefined)
                            throw Error('File does not exist.');
                        return [2 /*return*/, { data: entry.content }];
                }
            });
        });
    };
    /**
     * Write a file to disk in the specified location on device
     * @param options options for the file write
     * @return a promise that resolves with the file write result
     */
    FilesystemPluginWeb.prototype.writeFile = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, data, doRecursive, occupiedEntry, encoding, parentPath, parentEntry, subDirIndex, parentArgPath, now, pathObj;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        data = options.data;
                        doRecursive = options.recursive;
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 1:
                        occupiedEntry = _a.sent();
                        if (occupiedEntry && occupiedEntry.type === 'directory')
                            throw ('The supplied path is a directory.');
                        encoding = options.encoding;
                        parentPath = path.substr(0, path.lastIndexOf('/'));
                        return [4 /*yield*/, this.dbRequest('get', [parentPath])];
                    case 2:
                        parentEntry = _a.sent();
                        if (!(parentEntry === undefined)) return [3 /*break*/, 4];
                        subDirIndex = parentPath.indexOf('/', 1);
                        if (!(subDirIndex !== -1)) return [3 /*break*/, 4];
                        parentArgPath = parentPath.substr(subDirIndex);
                        return [4 /*yield*/, this.mkdir({ path: parentArgPath, directory: options.directory, recursive: doRecursive })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        now = Date.now();
                        pathObj = {
                            path: path,
                            folder: parentPath,
                            type: 'file',
                            size: data.length,
                            ctime: now,
                            mtime: now,
                            content: !encoding && data.indexOf(',') >= 0 ? data.split(',')[1] : data,
                        };
                        return [4 /*yield*/, this.dbRequest('put', [pathObj])];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, {
                                uri: pathObj.path
                            }];
                }
            });
        });
    };
    /**
     * Append to a file on disk in the specified location on device
     * @param options options for the file append
     * @return a promise that resolves with the file write result
     */
    FilesystemPluginWeb.prototype.appendFile = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, data, parentPath, now, ctime, occupiedEntry, parentEntry, subDirIndex, parentArgPath, pathObj;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        data = options.data;
                        parentPath = path.substr(0, path.lastIndexOf('/'));
                        now = Date.now();
                        ctime = now;
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 1:
                        occupiedEntry = _a.sent();
                        if (occupiedEntry && occupiedEntry.type === 'directory')
                            throw ('The supplied path is a directory.');
                        return [4 /*yield*/, this.dbRequest('get', [parentPath])];
                    case 2:
                        parentEntry = _a.sent();
                        if (!(parentEntry === undefined)) return [3 /*break*/, 4];
                        subDirIndex = parentPath.indexOf('/', 1);
                        if (!(subDirIndex !== -1)) return [3 /*break*/, 4];
                        parentArgPath = parentPath.substr(subDirIndex);
                        return [4 /*yield*/, this.mkdir({ path: parentArgPath, directory: options.directory, recursive: true })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        if (occupiedEntry !== undefined) {
                            data = occupiedEntry.content + data;
                            ctime = occupiedEntry.ctime;
                        }
                        pathObj = {
                            path: path,
                            folder: parentPath,
                            type: 'file',
                            size: data.length,
                            ctime: ctime,
                            mtime: now,
                            content: data
                        };
                        return [4 /*yield*/, this.dbRequest('put', [pathObj])];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, {}];
                }
            });
        });
    };
    /**
     * Delete a file from disk
     * @param options options for the file delete
     * @return a promise that resolves with the deleted file data result
     */
    FilesystemPluginWeb.prototype.deleteFile = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, entry, entries;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 1:
                        entry = _a.sent();
                        if (entry === undefined)
                            throw Error('File does not exist.');
                        return [4 /*yield*/, this.dbIndexRequest('by_folder', 'getAllKeys', [IDBKeyRange.only(path)])];
                    case 2:
                        entries = _a.sent();
                        if (entries.length !== 0)
                            throw Error('Folder is not empty.');
                        return [4 /*yield*/, this.dbRequest('delete', [path])];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, {}];
                }
            });
        });
    };
    /**
     * Create a directory.
     * @param options options for the mkdir
     * @return a promise that resolves with the mkdir result
     */
    FilesystemPluginWeb.prototype.mkdir = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, doRecursive, parentPath, depth, parentEntry, occupiedEntry, parentArgPath, now, pathObj;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        doRecursive = options.recursive;
                        parentPath = path.substr(0, path.lastIndexOf('/'));
                        depth = (path.match(/\//g) || []).length;
                        return [4 /*yield*/, this.dbRequest('get', [parentPath])];
                    case 1:
                        parentEntry = _a.sent();
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 2:
                        occupiedEntry = _a.sent();
                        if (depth === 1)
                            throw Error('Cannot create Root directory');
                        if (occupiedEntry !== undefined)
                            throw Error('Current directory does already exist.');
                        if (!doRecursive && depth !== 2 && parentEntry === undefined)
                            throw Error('Parent directory must exist');
                        if (!(doRecursive && depth !== 2 && parentEntry === undefined)) return [3 /*break*/, 4];
                        parentArgPath = parentPath.substr(parentPath.indexOf('/', 1));
                        return [4 /*yield*/, this.mkdir({
                                path: parentArgPath,
                                directory: options.directory,
                                recursive: doRecursive
                            })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        now = Date.now();
                        pathObj = { path: path, folder: parentPath, type: 'directory', size: 0, ctime: now, mtime: now };
                        return [4 /*yield*/, this.dbRequest('put', [pathObj])];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, {}];
                }
            });
        });
    };
    /**
     * Remove a directory
     * @param options the options for the directory remove
     */
    FilesystemPluginWeb.prototype.rmdir = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, directory, recursive, fullPath, entry, readDirResult, _i, _a, entry_1, entryPath, entryObj;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        path = options.path, directory = options.directory, recursive = options.recursive;
                        fullPath = this.getPath(directory, path);
                        return [4 /*yield*/, this.dbRequest('get', [fullPath])];
                    case 1:
                        entry = _b.sent();
                        if (entry === undefined)
                            throw Error('Folder does not exist.');
                        if (entry.type !== 'directory')
                            throw Error('Requested path is not a directory');
                        return [4 /*yield*/, this.readdir({ path: path, directory: directory })];
                    case 2:
                        readDirResult = _b.sent();
                        if (readDirResult.files.length !== 0 && !recursive)
                            throw Error('Folder is not empty');
                        _i = 0, _a = readDirResult.files;
                        _b.label = 3;
                    case 3:
                        if (!(_i < _a.length)) return [3 /*break*/, 9];
                        entry_1 = _a[_i];
                        entryPath = path + "/" + entry_1;
                        return [4 /*yield*/, this.stat({ path: entryPath, directory: directory })];
                    case 4:
                        entryObj = _b.sent();
                        if (!(entryObj.type === 'file')) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.deleteFile({ path: entryPath, directory: directory })];
                    case 5:
                        _b.sent();
                        return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, this.rmdir({ path: entryPath, directory: directory, recursive: recursive })];
                    case 7:
                        _b.sent();
                        _b.label = 8;
                    case 8:
                        _i++;
                        return [3 /*break*/, 3];
                    case 9: return [4 /*yield*/, this.dbRequest('delete', [fullPath])];
                    case 10:
                        _b.sent();
                        return [2 /*return*/, {}];
                }
            });
        });
    };
    /**
     * Return a list of files from the directory (not recursive)
     * @param options the options for the readdir operation
     * @return a promise that resolves with the readdir directory listing result
     */
    FilesystemPluginWeb.prototype.readdir = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, entry, entries, names;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 1:
                        entry = _a.sent();
                        if (options.path !== '' && entry === undefined)
                            throw Error('Folder does not exist.');
                        return [4 /*yield*/, this.dbIndexRequest('by_folder', 'getAllKeys', [IDBKeyRange.only(path)])];
                    case 2:
                        entries = _a.sent();
                        names = entries.map(function (e) {
                            return e.substring(path.length + 1);
                        });
                        return [2 /*return*/, { files: names }];
                }
            });
        });
    };
    /**
     * Return full File URI for a path and directory
     * @param options the options for the stat operation
     * @return a promise that resolves with the file stat result
     */
    FilesystemPluginWeb.prototype.getUri = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, entry;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 1:
                        entry = _a.sent();
                        if (!(entry === undefined)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.dbRequest('get', [path + '/'])];
                    case 2:
                        entry = (_a.sent());
                        _a.label = 3;
                    case 3:
                        if (entry === undefined)
                            throw Error('Entry does not exist.');
                        return [2 /*return*/, {
                                uri: entry.path
                            }];
                }
            });
        });
    };
    /**
     * Return data about a file
     * @param options the options for the stat operation
     * @return a promise that resolves with the file stat result
     */
    FilesystemPluginWeb.prototype.stat = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, entry;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 1:
                        entry = _a.sent();
                        if (!(entry === undefined)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.dbRequest('get', [path + '/'])];
                    case 2:
                        entry = (_a.sent());
                        _a.label = 3;
                    case 3:
                        if (entry === undefined)
                            throw Error('Entry does not exist.');
                        return [2 /*return*/, {
                                type: entry.type,
                                size: entry.size,
                                ctime: entry.ctime,
                                mtime: entry.mtime,
                                uri: entry.path
                            }];
                }
            });
        });
    };
    /**
     * Rename a file or directory
     * @param options the options for the rename operation
     * @return a promise that resolves with the rename result
     */
    FilesystemPluginWeb.prototype.rename = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this._copy(options, true)];
            });
        });
    };
    /**
     * Copy a file or directory
     * @param options the options for the copy operation
     * @return a promise that resolves with the copy result
     */
    FilesystemPluginWeb.prototype.copy = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this._copy(options, false)];
            });
        });
    };
    /**
     * Function that can perform a copy or a rename
     * @param options the options for the rename operation
     * @param doRename whether to perform a rename or copy operation
     * @return a promise that resolves with the result
     */
    FilesystemPluginWeb.prototype._copy = function (options, doRename) {
        if (doRename === void 0) { doRename = false; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var to, from, fromDirectory, toDirectory, fromPath, toPath, toObj, e_1, toPathComponents, toPath_1, toParentDirectory, fromObj, updateTime, _a, file, e_2, contents, _i, contents_1, filename;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        to = options.to, from = options.from, fromDirectory = options.directory, toDirectory = options.toDirectory;
                        if (!to || !from) {
                            throw Error('Both to and from must be provided');
                        }
                        // If no "to" directory is provided, use the "from" directory
                        if (!toDirectory) {
                            toDirectory = fromDirectory;
                        }
                        fromPath = this.getPath(fromDirectory, from);
                        toPath = this.getPath(toDirectory, to);
                        // Test that the "to" and "from" locations are different
                        if (fromPath === toPath) {
                            return [2 /*return*/, {}];
                        }
                        if (toPath.startsWith(fromPath)) {
                            throw Error('To path cannot contain the from path');
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 6]);
                        return [4 /*yield*/, this.stat({
                                path: to,
                                directory: toDirectory
                            })];
                    case 2:
                        toObj = _b.sent();
                        return [3 /*break*/, 6];
                    case 3:
                        e_1 = _b.sent();
                        toPathComponents = to.split('/');
                        toPathComponents.pop();
                        toPath_1 = toPathComponents.join('/');
                        if (!(toPathComponents.length > 0)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.stat({
                                path: toPath_1,
                                directory: toDirectory,
                            })];
                    case 4:
                        toParentDirectory = _b.sent();
                        if (toParentDirectory.type !== 'directory') {
                            throw new Error('Parent directory of the to path is a file');
                        }
                        _b.label = 5;
                    case 5: return [3 /*break*/, 6];
                    case 6:
                        // Cannot overwrite a directory
                        if (toObj && toObj.type === 'directory') {
                            throw new Error('Cannot overwrite a directory with a file');
                        }
                        return [4 /*yield*/, this.stat({
                                path: from,
                                directory: fromDirectory,
                            })];
                    case 7:
                        fromObj = _b.sent();
                        updateTime = function (path, ctime, mtime) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                            var fullPath, entry;
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        fullPath = this.getPath(toDirectory, path);
                                        return [4 /*yield*/, this.dbRequest('get', [fullPath])];
                                    case 1:
                                        entry = _a.sent();
                                        entry.ctime = ctime;
                                        entry.mtime = mtime;
                                        return [4 /*yield*/, this.dbRequest('put', [entry])];
                                    case 2:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); };
                        _a = fromObj.type;
                        switch (_a) {
                            case 'file': return [3 /*break*/, 8];
                            case 'directory': return [3 /*break*/, 15];
                        }
                        return [3 /*break*/, 28];
                    case 8: return [4 /*yield*/, this.readFile({
                            path: from,
                            directory: fromDirectory
                        })];
                    case 9:
                        file = _b.sent();
                        if (!doRename) return [3 /*break*/, 11];
                        return [4 /*yield*/, this.deleteFile({
                                path: from,
                                directory: fromDirectory
                            })];
                    case 10:
                        _b.sent();
                        _b.label = 11;
                    case 11: 
                    // Write the file to the new location
                    return [4 /*yield*/, this.writeFile({
                            path: to,
                            directory: toDirectory,
                            data: file.data
                        })];
                    case 12:
                        // Write the file to the new location
                        _b.sent();
                        if (!doRename) return [3 /*break*/, 14];
                        return [4 /*yield*/, updateTime(to, fromObj.ctime, fromObj.mtime)];
                    case 13:
                        _b.sent();
                        _b.label = 14;
                    case 14: 
                    // Resolve promise
                    return [2 /*return*/, {}];
                    case 15:
                        if (toObj) {
                            throw Error('Cannot move a directory over an existing object');
                        }
                        _b.label = 16;
                    case 16:
                        _b.trys.push([16, 20, , 21]);
                        // Create the to directory
                        return [4 /*yield*/, this.mkdir({
                                path: to,
                                directory: toDirectory,
                                recursive: false,
                            })];
                    case 17:
                        // Create the to directory
                        _b.sent();
                        if (!doRename) return [3 /*break*/, 19];
                        return [4 /*yield*/, updateTime(to, fromObj.ctime, fromObj.mtime)];
                    case 18:
                        _b.sent();
                        _b.label = 19;
                    case 19: return [3 /*break*/, 21];
                    case 20:
                        e_2 = _b.sent();
                        return [3 /*break*/, 21];
                    case 21: return [4 /*yield*/, this.readdir({
                            path: from,
                            directory: fromDirectory,
                        })];
                    case 22:
                        contents = (_b.sent()).files;
                        _i = 0, contents_1 = contents;
                        _b.label = 23;
                    case 23:
                        if (!(_i < contents_1.length)) return [3 /*break*/, 26];
                        filename = contents_1[_i];
                        // Move item from the from directory to the to directory
                        return [4 /*yield*/, this._copy({
                                from: from + "/" + filename,
                                to: to + "/" + filename,
                                directory: fromDirectory,
                                toDirectory: toDirectory,
                            }, doRename)];
                    case 24:
                        // Move item from the from directory to the to directory
                        _b.sent();
                        _b.label = 25;
                    case 25:
                        _i++;
                        return [3 /*break*/, 23];
                    case 26:
                        if (!doRename) return [3 /*break*/, 28];
                        return [4 /*yield*/, this.rmdir({
                                path: from,
                                directory: fromDirectory
                            })];
                    case 27:
                        _b.sent();
                        _b.label = 28;
                    case 28: return [2 /*return*/, {}];
                }
            });
        });
    };
    FilesystemPluginWeb._debug = true;
    return FilesystemPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Filesystem = new FilesystemPluginWeb();

//# sourceMappingURL=filesystem.js.map

/***/ }),

/***/ "sB/A":
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/modals.js ***!
  \*************************************************************/
/*! exports provided: ModalsPluginWeb, Modals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalsPluginWeb", function() { return ModalsPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modals", function() { return Modals; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "O1h7");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "6Fjf");


var ModalsPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ModalsPluginWeb, _super);
    function ModalsPluginWeb() {
        return _super.call(this, {
            name: 'Modals',
            platforms: ['web']
        }) || this;
    }
    ModalsPluginWeb.prototype.alert = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                window.alert(options.message);
                return [2 /*return*/, Promise.resolve()];
            });
        });
    };
    ModalsPluginWeb.prototype.prompt = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var val;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                val = window.prompt(options.message, options.inputText || '');
                return [2 /*return*/, Promise.resolve({
                        value: val,
                        cancelled: val === null
                    })];
            });
        });
    };
    ModalsPluginWeb.prototype.confirm = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var val;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                val = window.confirm(options.message);
                return [2 /*return*/, Promise.resolve({
                        value: val
                    })];
            });
        });
    };
    ModalsPluginWeb.prototype.showActions = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, _reject) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                        var actionSheet;
                        var _this = this;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                            actionSheet = document.querySelector('pwa-action-sheet');
                            if (!actionSheet) {
                                actionSheet = document.createElement('pwa-action-sheet');
                                document.body.appendChild(actionSheet);
                            }
                            actionSheet.header = options.title;
                            actionSheet.cancelable = false;
                            actionSheet.options = options.options;
                            actionSheet.addEventListener('onSelection', function (e) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                var selection;
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                    selection = e.detail;
                                    resolve({
                                        index: selection
                                    });
                                    return [2 /*return*/];
                                });
                            }); });
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    return ModalsPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Modals = new ModalsPluginWeb();

//# sourceMappingURL=modals.js.map

/***/ }),

/***/ "tXcl":
/*!********************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/accessibility.js ***!
  \********************************************************************/
/*! exports provided: AccessibilityPluginWeb, Accessibility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessibilityPluginWeb", function() { return AccessibilityPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Accessibility", function() { return Accessibility; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "O1h7");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "6Fjf");


var AccessibilityPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AccessibilityPluginWeb, _super);
    function AccessibilityPluginWeb() {
        return _super.call(this, {
            name: 'Accessibility',
            platforms: ['web']
        }) || this;
    }
    AccessibilityPluginWeb.prototype.isScreenReaderEnabled = function () {
        throw new Error('Feature not available in the browser');
    };
    AccessibilityPluginWeb.prototype.speak = function (options) {
        if (!('speechSynthesis' in window)) {
            return Promise.reject('Browser does not support the Speech Synthesis API');
        }
        var utterance = new SpeechSynthesisUtterance(options.value);
        if (options.language) {
            utterance.lang = options.language;
        }
        window.speechSynthesis.speak(utterance);
        return Promise.resolve();
    };
    return AccessibilityPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Accessibility = new AccessibilityPluginWeb();

//# sourceMappingURL=accessibility.js.map

/***/ }),

/***/ "uD+E":
/*!***************************************************************!*\
  !*** ./node_modules/@ionic-native/location-accuracy/index.js ***!
  \***************************************************************/
/*! exports provided: LocationAccuracy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationAccuracy", function() { return LocationAccuracy; });
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/core */ "C6fG");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var LocationAccuracyOriginal = /** @class */ (function (_super) {
    __extends(LocationAccuracyOriginal, _super);
    function LocationAccuracyOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.REQUEST_PRIORITY_NO_POWER = 0;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.REQUEST_PRIORITY_LOW_POWER = 1;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.REQUEST_PRIORITY_BALANCED_POWER_ACCURACY = 2;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.REQUEST_PRIORITY_HIGH_ACCURACY = 3;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.SUCCESS_SETTINGS_SATISFIED = 0;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.SUCCESS_USER_AGREED = 1;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.ERROR_ALREADY_REQUESTING = -1;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.ERROR_INVALID_ACTION = 0;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.ERROR_INVALID_ACCURACY = 1;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.ERROR_EXCEPTION = 1;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.ERROR_CANNOT_CHANGE_ACCURACY = 3;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.ERROR_USER_DISAGREED = 4;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.ERROR_GOOGLE_API_CONNECTION_FAILED = 4;
        return _this;
    }
    LocationAccuracyOriginal.prototype.canRequest = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "canRequest", {}, arguments); };
    LocationAccuracyOriginal.prototype.isRequesting = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "isRequesting", {}, arguments); };
    LocationAccuracyOriginal.prototype.request = function (accuracy) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "request", { "callbackOrder": "reverse" }, arguments); };
    LocationAccuracyOriginal.pluginName = "LocationAccuracy";
    LocationAccuracyOriginal.plugin = "cordova-plugin-request-location-accuracy";
    LocationAccuracyOriginal.pluginRef = "cordova.plugins.locationAccuracy";
    LocationAccuracyOriginal.repo = "https://github.com/dpa99c/cordova-plugin-request-location-accuracy";
    LocationAccuracyOriginal.platforms = ["Android", "iOS"];
    return LocationAccuracyOriginal;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["IonicNativePlugin"]));
var LocationAccuracy = new LocationAccuracyOriginal();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2xvY2F0aW9uLWFjY3VyYWN5L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXFDbEMsb0NBQWlCOzs7UUFDckQ7OztXQUdHO1FBQ0gsK0JBQXlCLEdBQUcsQ0FBQyxDQUFDO1FBQzlCOzs7V0FHRztRQUNILGdDQUEwQixHQUFHLENBQUMsQ0FBQztRQUMvQjs7O1dBR0c7UUFDSCw4Q0FBd0MsR0FBRyxDQUFDLENBQUM7UUFDN0M7OztXQUdHO1FBQ0gsb0NBQThCLEdBQUcsQ0FBQyxDQUFDO1FBQ25DOzs7V0FHRztRQUNILGdDQUEwQixHQUFHLENBQUMsQ0FBQztRQUMvQjs7O1dBR0c7UUFDSCx5QkFBbUIsR0FBRyxDQUFDLENBQUM7UUFDeEI7OztXQUdHO1FBQ0gsOEJBQXdCLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDOUI7OztXQUdHO1FBQ0gsMEJBQW9CLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCOzs7V0FHRztRQUNILDRCQUFzQixHQUFHLENBQUMsQ0FBQztRQUMzQjs7O1dBR0c7UUFDSCxxQkFBZSxHQUFHLENBQUMsQ0FBQztRQUNwQjs7O1dBR0c7UUFDSCxrQ0FBNEIsR0FBRyxDQUFDLENBQUM7UUFDakM7OztXQUdHO1FBQ0gsMEJBQW9CLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCOzs7V0FHRztRQUNILHdDQUFrQyxHQUFHLENBQUMsQ0FBQzs7O0lBT3ZDLHFDQUFVO0lBU1YsdUNBQVk7SUFVWixrQ0FBTyxhQUFDLFFBQWdCOzs7Ozs7MkJBakkxQjtFQXNDc0MsaUJBQWlCO1NBQTFDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIExvY2F0aW9uIEFjY3VyYWN5XG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgQ29yZG92YS9QaG9uZWdhcCBwbHVnaW4gZm9yIEFuZHJvaWQgYW5kIGlPUyB0byByZXF1ZXN0IGVuYWJsaW5nL2NoYW5naW5nIG9mIExvY2F0aW9uIFNlcnZpY2VzIGJ5IHRyaWdnZXJpbmcgYSBuYXRpdmUgZGlhbG9nIGZyb20gd2l0aGluIHRoZSBhcHAsIGF2b2lkaW5nIHRoZSBuZWVkIGZvciB0aGUgdXNlciB0byBsZWF2ZSB5b3VyIGFwcCB0byBjaGFuZ2UgbG9jYXRpb24gc2V0dGluZ3MgbWFudWFsbHkuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBMb2NhdGlvbkFjY3VyYWN5IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9sb2NhdGlvbi1hY2N1cmFjeS9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9jYXRpb25BY2N1cmFjeTogTG9jYXRpb25BY2N1cmFjeSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5sb2NhdGlvbkFjY3VyYWN5LmNhblJlcXVlc3QoKS50aGVuKChjYW5SZXF1ZXN0OiBib29sZWFuKSA9PiB7XG4gKlxuICogICBpZihjYW5SZXF1ZXN0KSB7XG4gKiAgICAgLy8gdGhlIGFjY3VyYWN5IG9wdGlvbiB3aWxsIGJlIGlnbm9yZWQgYnkgaU9TXG4gKiAgICAgdGhpcy5sb2NhdGlvbkFjY3VyYWN5LnJlcXVlc3QodGhpcy5sb2NhdGlvbkFjY3VyYWN5LlJFUVVFU1RfUFJJT1JJVFlfSElHSF9BQ0NVUkFDWSkudGhlbihcbiAqICAgICAgICgpID0+IGNvbnNvbGUubG9nKCdSZXF1ZXN0IHN1Y2Nlc3NmdWwnKSxcbiAqICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKCdFcnJvciByZXF1ZXN0aW5nIGxvY2F0aW9uIHBlcm1pc3Npb25zJywgZXJyb3IpXG4gKiAgICAgKTtcbiAqICAgfVxuICpcbiAqIH0pO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0xvY2F0aW9uQWNjdXJhY3knLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1yZXF1ZXN0LWxvY2F0aW9uLWFjY3VyYWN5JyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLmxvY2F0aW9uQWNjdXJhY3knLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2RwYTk5Yy9jb3Jkb3ZhLXBsdWdpbi1yZXF1ZXN0LWxvY2F0aW9uLWFjY3VyYWN5JyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2F0aW9uQWNjdXJhY3kgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgUkVRVUVTVF9QUklPUklUWV9OT19QT1dFUiA9IDA7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgUkVRVUVTVF9QUklPUklUWV9MT1dfUE9XRVIgPSAxO1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIFJFUVVFU1RfUFJJT1JJVFlfQkFMQU5DRURfUE9XRVJfQUNDVVJBQ1kgPSAyO1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIFJFUVVFU1RfUFJJT1JJVFlfSElHSF9BQ0NVUkFDWSA9IDM7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgU1VDQ0VTU19TRVRUSU5HU19TQVRJU0ZJRUQgPSAwO1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIFNVQ0NFU1NfVVNFUl9BR1JFRUQgPSAxO1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEVSUk9SX0FMUkVBRFlfUkVRVUVTVElORyA9IC0xO1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEVSUk9SX0lOVkFMSURfQUNUSU9OID0gMDtcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBFUlJPUl9JTlZBTElEX0FDQ1VSQUNZID0gMTtcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBFUlJPUl9FWENFUFRJT04gPSAxO1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEVSUk9SX0NBTk5PVF9DSEFOR0VfQUNDVVJBQ1kgPSAzO1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEVSUk9SX1VTRVJfRElTQUdSRUVEID0gNDtcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBFUlJPUl9HT09HTEVfQVBJX0NPTk5FQ1RJT05fRkFJTEVEID0gNDtcblxuICAvKipcbiAgICogSW5kaWNhdGVzIGlmIHlvdSBjYW4gcmVxdWVzdCBhY2N1cmF0ZSBsb2NhdGlvblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvdmxlcyB3aXRoIGEgYm9vbGVhbiB0aGF0IGluZGljYXRlcyBpZiB5b3UgY2FuIHJlcXVlc3QgYWNjdXJhdGUgbG9jYXRpb25cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY2FuUmVxdWVzdCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogSW5kaWNhdGVzIGlmIGEgcmVxdWVzdCBpcyBjdXJyZW50bHkgaW4gcHJvZ3Jlc3NcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgaWYgYSByZXF1ZXN0IGlzIGN1cnJlbnRseSBpbiBwcm9ncmVzc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc1JlcXVlc3RpbmcoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3RzIGFjY3VyYXRlIGxvY2F0aW9uXG4gICAqIEBwYXJhbSBhY2N1cmFjeSB7bnVtYmVyfSBBY2N1cmFjeSwgZnJvbSAwIHRvIDQuIFlvdSBjYW4gdXNlIHRoZSBzdGF0aWMgcHJvcGVydGllcyBvZiB0aGlzIGNsYXNzIHRoYXQgc3RhcnQgd2l0aCBSRVFVRVNUX1BSSU9SSVRZX1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIG9uIHN1Y2Nlc3MgYW5kIHJlamVjdHMgaWYgYW4gZXJyb3Igb2NjdXJyZWRcbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIHJlcXVlc3QoYWNjdXJhY3k6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "uhwm":
/*!******************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/permissions.js ***!
  \******************************************************************/
/*! exports provided: PermissionsPluginWeb, Permissions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsPluginWeb", function() { return PermissionsPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Permissions", function() { return Permissions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "O1h7");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "6Fjf");
/* harmony import */ var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core-plugin-definitions */ "I2A1");



var PermissionsPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PermissionsPluginWeb, _super);
    function PermissionsPluginWeb() {
        return _super.call(this, {
            name: 'Permissions'
        }) || this;
    }
    PermissionsPluginWeb.prototype.query = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var navigator, name, ret;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        navigator = window.navigator;
                        if (!navigator.permissions) {
                            return [2 /*return*/, Promise.reject('This browser does not support the Permissions API')];
                        }
                        name = options.name === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["PermissionType"].Photos ? 'camera' : options.name;
                        return [4 /*yield*/, navigator.permissions.query({ name: name })];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, {
                                state: ret.state
                            }];
                }
            });
        });
    };
    return PermissionsPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Permissions = new PermissionsPluginWeb();

//# sourceMappingURL=permissions.js.map

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_messaging_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/messaging.service */ "c7tv");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../location.service */ "YgRC");









const { Geolocation, Toast } = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"];
let HomePage = class HomePage {
    constructor(locationService, messagingService, alertCtrl, toastCtrl, NgZone, router) {
        this.locationService = locationService;
        this.messagingService = messagingService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.NgZone = NgZone;
        this.router = router;
        this.listenForMessages();
    }
    /////////////// REQUEST TOKEN TO NOTIFICATIONS
    listenForMessages() {
        this.messagingService.getMessages().subscribe((msg) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("NEW MESSAGE :", msg);
            console.log("FILETYPE NOTIFICATION ", typeof (msg));
            const alert = yield this.alertCtrl.create({
                header: msg.notification.title,
                subHeader: msg.notification.body,
                message: msg.data.info,
                buttons: ['OK'],
            });
            yield alert.present();
        }));
    }
    requestPermission() {
        this.messagingService.requestPemission().subscribe((token) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: "Got the token",
                duration: 2000
            });
            toast.present();
        }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: "Error",
                message: err,
                buttons: ["OK"],
            });
        }));
    }
    ///////// GPS SERVICES
    getMyLocation() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const hasPermission = yield this.locationService.checkGPSPermission();
            if (hasPermission) {
                if (_capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Capacitor"].isNative) {
                    const canUseGPS = yield this.locationService.askToTurnOnGPS();
                    this.postGPSPermission(canUseGPS);
                }
                else {
                    this.postGPSPermission(true);
                }
            }
            else {
                const permission = yield this.locationService.requestGPSPermission();
                if (permission === 'CAN_REQUEST' || permission === 'GOT_PERMISSION') {
                    if (_capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Capacitor"].isNative) {
                        const canUseGPS = yield this.locationService.askToTurnOnGPS();
                        this.postGPSPermission(canUseGPS);
                    }
                    else {
                        this.postGPSPermission(true);
                    }
                }
                else {
                    yield Toast.show({
                        text: 'User denied location permission'
                    });
                }
            }
        });
    }
    postGPSPermission(canUseGPS) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (canUseGPS) {
                this.watchPosition();
            }
            else {
                yield Toast.show({
                    text: 'Please turn on GPS to get location'
                });
            }
        });
    }
    watchPosition() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.watchId = Geolocation.watchPosition({}, (position, err) => {
                    this.NgZone.run(() => {
                        if (err) {
                            console.log('err', err);
                            return;
                        }
                        this.lat = position.coords.latitude;
                        this.lng = position.coords.longitude;
                        this.clearWatch();
                        console.log('Latitude: ' + this.lat);
                        console.log('Longitude: ' + this.lng);
                        const alert = document.createElement('ion-alert');
                        alert.header = 'GeoLocation Info';
                        alert.subHeader = 'Coordinate:';
                        alert.message = "Latitude:" + this.lat + " Longitude:" + this.lng;
                        alert.buttons = ['OK'];
                        document.body.appendChild(alert);
                        return alert.present();
                    });
                });
            }
            catch (err) {
                console.log('err', err);
            }
        });
    }
    clearWatch() {
        if (this.watchId != null) {
            Geolocation.clearWatch({ id: this.watchId });
        }
    }
    blepage() {
        this.getMyLocation();
        this.router.navigate(['/bluetooth']);
    }
    loginiotronic() {
        this.router.navigate(['/lightningrod']);
    }
};
HomePage.ctorParameters = () => [
    { type: _location_service__WEBPACK_IMPORTED_MODULE_8__["LocationService"] },
    { type: _services_messaging_service__WEBPACK_IMPORTED_MODULE_5__["MessagingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map