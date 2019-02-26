"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-consecutive-blank-lines ordered-imports align trailing-comma whitespace class-name
// tslint:disable:no-unused-variable
// tslint:disable:no-unbound-method
var base_contract_1 = require("@0x/base-contract");
var utils_1 = require("@0x/utils");
var polyResponse_1 = require("../polyResponse");
var _ = require("lodash");
var PolymathRegistryEvents;
(function (PolymathRegistryEvents) {
    PolymathRegistryEvents["ChangeAddress"] = "ChangeAddress";
    PolymathRegistryEvents["OwnershipRenounced"] = "OwnershipRenounced";
    PolymathRegistryEvents["OwnershipTransferred"] = "OwnershipTransferred";
})(PolymathRegistryEvents = exports.PolymathRegistryEvents || (exports.PolymathRegistryEvents = {}));
/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
var PolymathRegistryContract = /** @class */ (function (_super) {
    __extends(PolymathRegistryContract, _super);
    function PolymathRegistryContract(abi, address, provider, txDefaults, defaultEstimateGasFactor) {
        var _this = _super.call(this, 'PolymathRegistry', abi, address, provider, txDefaults) || this;
        _this.storedAddresses = {
            callAsync: function (index_0, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'storedAddresses(bytes32)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [index_0
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), index_0 = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [index_0
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.storedAddresses;
                                encodedData = ethersFunction.encode([index_0
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'storedAddresses' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.renounceOwnership = {
            sendTransactionAsync: function (txData, estimateGasFactor) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('renounceOwnership()').inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                encodedData = self._lookupEthersInterface('renounceOwnership()').functions.renounceOwnership.encode([]);
                                return [4 /*yield*/, self._web3Wrapper.getAvailableAddressesAsync()];
                            case 1:
                                defaultFromAddress = (_a.sent())[0];
                                contractDefaults = _.defaults(self._web3Wrapper.getContractDefaults(), {
                                    from: defaultFromAddress
                                });
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), contractDefaults, self.renounceOwnership.estimateGasAsync.bind(self, estimateGasFactor))];
                            case 2:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 3:
                                txHash = _a.sent();
                                receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
                                return [2 /*return*/, new polyResponse_1.PolyResponse(txHash, receipt)];
                        }
                    });
                });
            },
            estimateGasAsync: function (factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, gas, networkGasLimit, _factor, _safetyGasEstimation;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('renounceOwnership()').inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString);
                                encodedData = self._lookupEthersInterface('renounceOwnership()').functions.renounceOwnership.encode([]);
                                return [4 /*yield*/, self._web3Wrapper.getAvailableAddressesAsync()];
                            case 1:
                                defaultFromAddress = (_a.sent())[0];
                                contractDefaults = _.defaults(self._web3Wrapper.getContractDefaults(), {
                                    from: defaultFromAddress
                                });
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), contractDefaults)];
                            case 2:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 3:
                                gas = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.getBlockWithTransactionDataAsync('latest')];
                            case 4:
                                networkGasLimit = (_a.sent()).gasLimit;
                                _factor = _.isUndefined(factor) ? self._defaultEstimateGasFactor : factor;
                                _safetyGasEstimation = Math.round(_factor * gas);
                                return [2 /*return*/, (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                var self = this;
                var inputAbi = self._lookupAbi('renounceOwnership()').inputs;
                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString);
                var abiEncodedTransactionData = self._lookupEthersInterface('renounceOwnership()').functions.renounceOwnership.encode([]);
                return abiEncodedTransactionData;
            },
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'renounceOwnership()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.renounceOwnership;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'renounceOwnership' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.reclaimERC20 = {
            sendTransactionAsync: function (_tokenContract, txData, estimateGasFactor) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('reclaimERC20(address)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_tokenContract
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _tokenContract = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_tokenContract
                                ]);
                                encodedData = self._lookupEthersInterface('reclaimERC20(address)').functions.reclaimERC20.encode([_tokenContract
                                ]);
                                return [4 /*yield*/, self._web3Wrapper.getAvailableAddressesAsync()];
                            case 1:
                                defaultFromAddress = (_b.sent())[0];
                                contractDefaults = _.defaults(self._web3Wrapper.getContractDefaults(), {
                                    from: defaultFromAddress
                                });
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), contractDefaults, self.reclaimERC20.estimateGasAsync.bind(self, _tokenContract, estimateGasFactor))];
                            case 2:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 3:
                                txHash = _b.sent();
                                receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
                                return [2 /*return*/, new polyResponse_1.PolyResponse(txHash, receipt)];
                        }
                    });
                });
            },
            estimateGasAsync: function (_tokenContract, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, gas, networkGasLimit, _factor, _safetyGasEstimation;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('reclaimERC20(address)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_tokenContract
                                ], base_contract_1.BaseContract._bigNumberToString), 1), _tokenContract = _a[0];
                                encodedData = self._lookupEthersInterface('reclaimERC20(address)').functions.reclaimERC20.encode([_tokenContract
                                ]);
                                return [4 /*yield*/, self._web3Wrapper.getAvailableAddressesAsync()];
                            case 1:
                                defaultFromAddress = (_b.sent())[0];
                                contractDefaults = _.defaults(self._web3Wrapper.getContractDefaults(), {
                                    from: defaultFromAddress
                                });
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), contractDefaults)];
                            case 2:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 3:
                                gas = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.getBlockWithTransactionDataAsync('latest')];
                            case 4:
                                networkGasLimit = (_b.sent()).gasLimit;
                                _factor = _.isUndefined(factor) ? self._defaultEstimateGasFactor : factor;
                                _safetyGasEstimation = Math.round(_factor * gas);
                                return [2 /*return*/, (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_tokenContract) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('reclaimERC20(address)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_tokenContract
                ], base_contract_1.BaseContract._bigNumberToString), 1), _tokenContract = _a[0];
                var abiEncodedTransactionData = self._lookupEthersInterface('reclaimERC20(address)').functions.reclaimERC20.encode([_tokenContract
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_tokenContract, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'reclaimERC20(address)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_tokenContract
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _tokenContract = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_tokenContract
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.reclaimERC20;
                                encodedData = ethersFunction.encode([_tokenContract
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'reclaimERC20' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.owner = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'owner()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.owner;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'owner' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.transferOwnership = {
            sendTransactionAsync: function (_newOwner, txData, estimateGasFactor) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('transferOwnership(address)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_newOwner
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _newOwner = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_newOwner
                                ]);
                                encodedData = self._lookupEthersInterface('transferOwnership(address)').functions.transferOwnership.encode([_newOwner
                                ]);
                                return [4 /*yield*/, self._web3Wrapper.getAvailableAddressesAsync()];
                            case 1:
                                defaultFromAddress = (_b.sent())[0];
                                contractDefaults = _.defaults(self._web3Wrapper.getContractDefaults(), {
                                    from: defaultFromAddress
                                });
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), contractDefaults, self.transferOwnership.estimateGasAsync.bind(self, _newOwner, estimateGasFactor))];
                            case 2:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 3:
                                txHash = _b.sent();
                                receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
                                return [2 /*return*/, new polyResponse_1.PolyResponse(txHash, receipt)];
                        }
                    });
                });
            },
            estimateGasAsync: function (_newOwner, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, gas, networkGasLimit, _factor, _safetyGasEstimation;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('transferOwnership(address)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_newOwner
                                ], base_contract_1.BaseContract._bigNumberToString), 1), _newOwner = _a[0];
                                encodedData = self._lookupEthersInterface('transferOwnership(address)').functions.transferOwnership.encode([_newOwner
                                ]);
                                return [4 /*yield*/, self._web3Wrapper.getAvailableAddressesAsync()];
                            case 1:
                                defaultFromAddress = (_b.sent())[0];
                                contractDefaults = _.defaults(self._web3Wrapper.getContractDefaults(), {
                                    from: defaultFromAddress
                                });
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), contractDefaults)];
                            case 2:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 3:
                                gas = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.getBlockWithTransactionDataAsync('latest')];
                            case 4:
                                networkGasLimit = (_b.sent()).gasLimit;
                                _factor = _.isUndefined(factor) ? self._defaultEstimateGasFactor : factor;
                                _safetyGasEstimation = Math.round(_factor * gas);
                                return [2 /*return*/, (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_newOwner) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('transferOwnership(address)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_newOwner
                ], base_contract_1.BaseContract._bigNumberToString), 1), _newOwner = _a[0];
                var abiEncodedTransactionData = self._lookupEthersInterface('transferOwnership(address)').functions.transferOwnership.encode([_newOwner
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_newOwner, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'transferOwnership(address)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_newOwner
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _newOwner = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_newOwner
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.transferOwnership;
                                encodedData = ethersFunction.encode([_newOwner
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'transferOwnership' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.getAddress = {
            callAsync: function (_nameKey, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'getAddress(string)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_nameKey
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _nameKey = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_nameKey
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.getAddress;
                                encodedData = ethersFunction.encode([_nameKey
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'getAddress' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.changeAddress = {
            sendTransactionAsync: function (_nameKey, _newAddress, txData, estimateGasFactor) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('changeAddress(string,address)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_nameKey,
                                    _newAddress
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), _nameKey = _a[0], _newAddress = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_nameKey,
                                    _newAddress
                                ]);
                                encodedData = self._lookupEthersInterface('changeAddress(string,address)').functions.changeAddress.encode([_nameKey,
                                    _newAddress
                                ]);
                                return [4 /*yield*/, self._web3Wrapper.getAvailableAddressesAsync()];
                            case 1:
                                defaultFromAddress = (_b.sent())[0];
                                contractDefaults = _.defaults(self._web3Wrapper.getContractDefaults(), {
                                    from: defaultFromAddress
                                });
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), contractDefaults, self.changeAddress.estimateGasAsync.bind(self, _nameKey, _newAddress, estimateGasFactor))];
                            case 2:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 3:
                                txHash = _b.sent();
                                receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
                                return [2 /*return*/, new polyResponse_1.PolyResponse(txHash, receipt)];
                        }
                    });
                });
            },
            estimateGasAsync: function (_nameKey, _newAddress, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, gas, networkGasLimit, _factor, _safetyGasEstimation;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('changeAddress(string,address)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_nameKey,
                                    _newAddress
                                ], base_contract_1.BaseContract._bigNumberToString), 2), _nameKey = _a[0], _newAddress = _a[1];
                                encodedData = self._lookupEthersInterface('changeAddress(string,address)').functions.changeAddress.encode([_nameKey,
                                    _newAddress
                                ]);
                                return [4 /*yield*/, self._web3Wrapper.getAvailableAddressesAsync()];
                            case 1:
                                defaultFromAddress = (_b.sent())[0];
                                contractDefaults = _.defaults(self._web3Wrapper.getContractDefaults(), {
                                    from: defaultFromAddress
                                });
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), contractDefaults)];
                            case 2:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 3:
                                gas = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.getBlockWithTransactionDataAsync('latest')];
                            case 4:
                                networkGasLimit = (_b.sent()).gasLimit;
                                _factor = _.isUndefined(factor) ? self._defaultEstimateGasFactor : factor;
                                _safetyGasEstimation = Math.round(_factor * gas);
                                return [2 /*return*/, (_safetyGasEstimation > networkGasLimit) ? networkGasLimit : _safetyGasEstimation];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_nameKey, _newAddress) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('changeAddress(string,address)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_nameKey,
                    _newAddress
                ], base_contract_1.BaseContract._bigNumberToString), 2), _nameKey = _a[0], _newAddress = _a[1];
                var abiEncodedTransactionData = self._lookupEthersInterface('changeAddress(string,address)').functions.changeAddress.encode([_nameKey,
                    _newAddress
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_nameKey, _newAddress, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'changeAddress(string,address)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_nameKey,
                                    _newAddress
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), _nameKey = _a[0], _newAddress = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_nameKey,
                                    _newAddress
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.changeAddress;
                                encodedData = ethersFunction.encode([_nameKey,
                                    _newAddress
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'changeAddress' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this._defaultEstimateGasFactor = _.isUndefined(defaultEstimateGasFactor) ? 1.1 : defaultEstimateGasFactor;
        _this._web3Wrapper.abiDecoder.addABI(abi);
        utils_1.classUtils.bindAll(_this, ['_ethersInterfacesByFunctionSignature', 'address', 'abi', '_web3Wrapper', '_defaultEstimateGasFactor']);
        return _this;
    }
    return PolymathRegistryContract;
}(base_contract_1.BaseContract)); // tslint:disable:max-file-line-count
exports.PolymathRegistryContract = PolymathRegistryContract;
// tslint:enable:no-unbound-method
//# sourceMappingURL=polymath_registry.js.map