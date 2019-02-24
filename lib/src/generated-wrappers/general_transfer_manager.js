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
var GeneralTransferManagerEvents;
(function (GeneralTransferManagerEvents) {
    GeneralTransferManagerEvents["ChangeIssuanceAddress"] = "ChangeIssuanceAddress";
    GeneralTransferManagerEvents["AllowAllTransfers"] = "AllowAllTransfers";
    GeneralTransferManagerEvents["AllowAllWhitelistTransfers"] = "AllowAllWhitelistTransfers";
    GeneralTransferManagerEvents["AllowAllWhitelistIssuances"] = "AllowAllWhitelistIssuances";
    GeneralTransferManagerEvents["AllowAllBurnTransfers"] = "AllowAllBurnTransfers";
    GeneralTransferManagerEvents["ChangeSigningAddress"] = "ChangeSigningAddress";
    GeneralTransferManagerEvents["ChangeDefaults"] = "ChangeDefaults";
    GeneralTransferManagerEvents["ModifyWhitelist"] = "ModifyWhitelist";
    GeneralTransferManagerEvents["Pause"] = "Pause";
    GeneralTransferManagerEvents["Unpause"] = "Unpause";
})(GeneralTransferManagerEvents = exports.GeneralTransferManagerEvents || (exports.GeneralTransferManagerEvents = {}));
/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
var GeneralTransferManagerContract = /** @class */ (function (_super) {
    __extends(GeneralTransferManagerContract, _super);
    function GeneralTransferManagerContract(abi, address, provider, txDefaults) {
        var _this = _super.call(this, 'GeneralTransferManager', abi, address, provider, txDefaults) || this;
        _this.allowAllBurnTransfers = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'allowAllBurnTransfers()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.allowAllBurnTransfers;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'allowAllBurnTransfers' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.WHITELIST = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'WHITELIST()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.WHITELIST;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'WHITELIST' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.allowAllWhitelistTransfers = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'allowAllWhitelistTransfers()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.allowAllWhitelistTransfers;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'allowAllWhitelistTransfers' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.unpause = {
            sendTransactionAsync: function (txData, factor) {
                if (txData === void 0) { txData = {}; }
                if (factor === void 0) { factor = 1.2; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('unpause()').inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                encodedData = self._lookupEthersInterface('unpause()').functions.unpause.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.unpause.estimateGasAsync.bind(self, factor))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
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
                    var self, inputAbi, encodedData, txDataWithDefaults, gas, networkGasLimit, _factorGas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('unpause()').inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString);
                                encodedData = self._lookupEthersInterface('unpause()').functions.unpause.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.getBlockWithTransactionDataAsync('latest')];
                            case 3:
                                networkGasLimit = (_a.sent()).gasLimit;
                                _factorGas = Math.round(factor * gas);
                                return [2 /*return*/, (_factorGas > networkGasLimit) ? networkGasLimit : _factorGas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                var self = this;
                var inputAbi = self._lookupAbi('unpause()').inputs;
                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString);
                var abiEncodedTransactionData = self._lookupEthersInterface('unpause()').functions.unpause.encode([]);
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
                                functionSignature = 'unpause()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.unpause;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'unpause' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.investors = {
            callAsync: function (index_0, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'investors(uint256)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [index_0
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), index_0 = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [index_0
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.investors;
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
                                outputAbi = _.find(self.abi, { name: 'investors' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.paused = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'paused()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.paused;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'paused' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.takeFee = {
            sendTransactionAsync: function (_amount, txData, factor) {
                if (txData === void 0) { txData = {}; }
                if (factor === void 0) { factor = 1.2; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('takeFee(uint256)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_amount
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _amount = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_amount
                                ]);
                                encodedData = self._lookupEthersInterface('takeFee(uint256)').functions.takeFee.encode([_amount
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.takeFee.estimateGasAsync.bind(self, _amount, factor))];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _b.sent();
                                receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
                                return [2 /*return*/, new polyResponse_1.PolyResponse(txHash, receipt)];
                        }
                    });
                });
            },
            estimateGasAsync: function (_amount, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas, networkGasLimit, _factorGas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('takeFee(uint256)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_amount
                                ], base_contract_1.BaseContract._bigNumberToString), 1), _amount = _a[0];
                                encodedData = self._lookupEthersInterface('takeFee(uint256)').functions.takeFee.encode([_amount
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.getBlockWithTransactionDataAsync('latest')];
                            case 3:
                                networkGasLimit = (_b.sent()).gasLimit;
                                _factorGas = Math.round(factor * gas);
                                return [2 /*return*/, (_factorGas > networkGasLimit) ? networkGasLimit : _factorGas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_amount) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('takeFee(uint256)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_amount
                ], base_contract_1.BaseContract._bigNumberToString), 1), _amount = _a[0];
                var abiEncodedTransactionData = self._lookupEthersInterface('takeFee(uint256)').functions.takeFee.encode([_amount
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_amount, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'takeFee(uint256)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_amount
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _amount = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_amount
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.takeFee;
                                encodedData = ethersFunction.encode([_amount
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'takeFee' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.polyToken = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'polyToken()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.polyToken;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'polyToken' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.pause = {
            sendTransactionAsync: function (txData, factor) {
                if (txData === void 0) { txData = {}; }
                if (factor === void 0) { factor = 1.2; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('pause()').inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                encodedData = self._lookupEthersInterface('pause()').functions.pause.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.pause.estimateGasAsync.bind(self, factor))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
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
                    var self, inputAbi, encodedData, txDataWithDefaults, gas, networkGasLimit, _factorGas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('pause()').inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString);
                                encodedData = self._lookupEthersInterface('pause()').functions.pause.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.getBlockWithTransactionDataAsync('latest')];
                            case 3:
                                networkGasLimit = (_a.sent()).gasLimit;
                                _factorGas = Math.round(factor * gas);
                                return [2 /*return*/, (_factorGas > networkGasLimit) ? networkGasLimit : _factorGas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                var self = this;
                var inputAbi = self._lookupAbi('pause()').inputs;
                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString);
                var abiEncodedTransactionData = self._lookupEthersInterface('pause()').functions.pause.encode([]);
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
                                functionSignature = 'pause()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.pause;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'pause' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.FLAGS = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'FLAGS()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.FLAGS;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'FLAGS' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.whitelist = {
            callAsync: function (index_0, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'whitelist(address)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [index_0
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), index_0 = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [index_0
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.whitelist;
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
                                outputAbi = _.find(self.abi, { name: 'whitelist' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.nonceMap = {
            callAsync: function (index_0, index_1, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'nonceMap(address,uint256)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [index_0,
                                    index_1
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), index_0 = _a[0], index_1 = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [index_0,
                                    index_1
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.nonceMap;
                                encodedData = ethersFunction.encode([index_0,
                                    index_1
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'nonceMap' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.allowAllTransfers = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'allowAllTransfers()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.allowAllTransfers;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'allowAllTransfers' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.signingAddress = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'signingAddress()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.signingAddress;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'signingAddress' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.issuanceAddress = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'issuanceAddress()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.issuanceAddress;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'issuanceAddress' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.securityToken = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'securityToken()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.securityToken;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'securityToken' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.factory = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'factory()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.factory;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'factory' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.FEE_ADMIN = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'FEE_ADMIN()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.FEE_ADMIN;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'FEE_ADMIN' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.allowAllWhitelistIssuances = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'allowAllWhitelistIssuances()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.allowAllWhitelistIssuances;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'allowAllWhitelistIssuances' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.defaults = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'defaults()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.defaults;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'defaults' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.getInitFunction = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'getInitFunction()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.getInitFunction;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'getInitFunction' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.changeDefaults = {
            sendTransactionAsync: function (_defaultFromTime, _defaultToTime, txData, factor) {
                if (txData === void 0) { txData = {}; }
                if (factor === void 0) { factor = 1.2; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('changeDefaults(uint64,uint64)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_defaultFromTime,
                                    _defaultToTime
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), _defaultFromTime = _a[0], _defaultToTime = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_defaultFromTime,
                                    _defaultToTime
                                ]);
                                encodedData = self._lookupEthersInterface('changeDefaults(uint64,uint64)').functions.changeDefaults.encode([_defaultFromTime,
                                    _defaultToTime
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.changeDefaults.estimateGasAsync.bind(self, _defaultFromTime, _defaultToTime, factor))];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _b.sent();
                                receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
                                return [2 /*return*/, new polyResponse_1.PolyResponse(txHash, receipt)];
                        }
                    });
                });
            },
            estimateGasAsync: function (_defaultFromTime, _defaultToTime, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas, networkGasLimit, _factorGas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('changeDefaults(uint64,uint64)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_defaultFromTime,
                                    _defaultToTime
                                ], base_contract_1.BaseContract._bigNumberToString), 2), _defaultFromTime = _a[0], _defaultToTime = _a[1];
                                encodedData = self._lookupEthersInterface('changeDefaults(uint64,uint64)').functions.changeDefaults.encode([_defaultFromTime,
                                    _defaultToTime
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.getBlockWithTransactionDataAsync('latest')];
                            case 3:
                                networkGasLimit = (_b.sent()).gasLimit;
                                _factorGas = Math.round(factor * gas);
                                return [2 /*return*/, (_factorGas > networkGasLimit) ? networkGasLimit : _factorGas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_defaultFromTime, _defaultToTime) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('changeDefaults(uint64,uint64)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_defaultFromTime,
                    _defaultToTime
                ], base_contract_1.BaseContract._bigNumberToString), 2), _defaultFromTime = _a[0], _defaultToTime = _a[1];
                var abiEncodedTransactionData = self._lookupEthersInterface('changeDefaults(uint64,uint64)').functions.changeDefaults.encode([_defaultFromTime,
                    _defaultToTime
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_defaultFromTime, _defaultToTime, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'changeDefaults(uint64,uint64)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_defaultFromTime,
                                    _defaultToTime
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), _defaultFromTime = _a[0], _defaultToTime = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_defaultFromTime,
                                    _defaultToTime
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.changeDefaults;
                                encodedData = ethersFunction.encode([_defaultFromTime,
                                    _defaultToTime
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'changeDefaults' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.changeIssuanceAddress = {
            sendTransactionAsync: function (_issuanceAddress, txData, factor) {
                if (txData === void 0) { txData = {}; }
                if (factor === void 0) { factor = 1.2; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('changeIssuanceAddress(address)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_issuanceAddress
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _issuanceAddress = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_issuanceAddress
                                ]);
                                encodedData = self._lookupEthersInterface('changeIssuanceAddress(address)').functions.changeIssuanceAddress.encode([_issuanceAddress
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.changeIssuanceAddress.estimateGasAsync.bind(self, _issuanceAddress, factor))];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _b.sent();
                                receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
                                return [2 /*return*/, new polyResponse_1.PolyResponse(txHash, receipt)];
                        }
                    });
                });
            },
            estimateGasAsync: function (_issuanceAddress, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas, networkGasLimit, _factorGas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('changeIssuanceAddress(address)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_issuanceAddress
                                ], base_contract_1.BaseContract._bigNumberToString), 1), _issuanceAddress = _a[0];
                                encodedData = self._lookupEthersInterface('changeIssuanceAddress(address)').functions.changeIssuanceAddress.encode([_issuanceAddress
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.getBlockWithTransactionDataAsync('latest')];
                            case 3:
                                networkGasLimit = (_b.sent()).gasLimit;
                                _factorGas = Math.round(factor * gas);
                                return [2 /*return*/, (_factorGas > networkGasLimit) ? networkGasLimit : _factorGas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_issuanceAddress) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('changeIssuanceAddress(address)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_issuanceAddress
                ], base_contract_1.BaseContract._bigNumberToString), 1), _issuanceAddress = _a[0];
                var abiEncodedTransactionData = self._lookupEthersInterface('changeIssuanceAddress(address)').functions.changeIssuanceAddress.encode([_issuanceAddress
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_issuanceAddress, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'changeIssuanceAddress(address)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_issuanceAddress
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _issuanceAddress = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_issuanceAddress
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.changeIssuanceAddress;
                                encodedData = ethersFunction.encode([_issuanceAddress
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'changeIssuanceAddress' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.changeSigningAddress = {
            sendTransactionAsync: function (_signingAddress, txData, factor) {
                if (txData === void 0) { txData = {}; }
                if (factor === void 0) { factor = 1.2; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('changeSigningAddress(address)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_signingAddress
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _signingAddress = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_signingAddress
                                ]);
                                encodedData = self._lookupEthersInterface('changeSigningAddress(address)').functions.changeSigningAddress.encode([_signingAddress
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.changeSigningAddress.estimateGasAsync.bind(self, _signingAddress, factor))];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _b.sent();
                                receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
                                return [2 /*return*/, new polyResponse_1.PolyResponse(txHash, receipt)];
                        }
                    });
                });
            },
            estimateGasAsync: function (_signingAddress, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas, networkGasLimit, _factorGas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('changeSigningAddress(address)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_signingAddress
                                ], base_contract_1.BaseContract._bigNumberToString), 1), _signingAddress = _a[0];
                                encodedData = self._lookupEthersInterface('changeSigningAddress(address)').functions.changeSigningAddress.encode([_signingAddress
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.getBlockWithTransactionDataAsync('latest')];
                            case 3:
                                networkGasLimit = (_b.sent()).gasLimit;
                                _factorGas = Math.round(factor * gas);
                                return [2 /*return*/, (_factorGas > networkGasLimit) ? networkGasLimit : _factorGas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_signingAddress) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('changeSigningAddress(address)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_signingAddress
                ], base_contract_1.BaseContract._bigNumberToString), 1), _signingAddress = _a[0];
                var abiEncodedTransactionData = self._lookupEthersInterface('changeSigningAddress(address)').functions.changeSigningAddress.encode([_signingAddress
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_signingAddress, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'changeSigningAddress(address)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_signingAddress
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _signingAddress = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_signingAddress
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.changeSigningAddress;
                                encodedData = ethersFunction.encode([_signingAddress
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'changeSigningAddress' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.changeAllowAllTransfers = {
            sendTransactionAsync: function (_allowAllTransfers, txData, factor) {
                if (txData === void 0) { txData = {}; }
                if (factor === void 0) { factor = 1.2; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('changeAllowAllTransfers(bool)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_allowAllTransfers
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _allowAllTransfers = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_allowAllTransfers
                                ]);
                                encodedData = self._lookupEthersInterface('changeAllowAllTransfers(bool)').functions.changeAllowAllTransfers.encode([_allowAllTransfers
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.changeAllowAllTransfers.estimateGasAsync.bind(self, _allowAllTransfers, factor))];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _b.sent();
                                receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
                                return [2 /*return*/, new polyResponse_1.PolyResponse(txHash, receipt)];
                        }
                    });
                });
            },
            estimateGasAsync: function (_allowAllTransfers, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas, networkGasLimit, _factorGas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('changeAllowAllTransfers(bool)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_allowAllTransfers
                                ], base_contract_1.BaseContract._bigNumberToString), 1), _allowAllTransfers = _a[0];
                                encodedData = self._lookupEthersInterface('changeAllowAllTransfers(bool)').functions.changeAllowAllTransfers.encode([_allowAllTransfers
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.getBlockWithTransactionDataAsync('latest')];
                            case 3:
                                networkGasLimit = (_b.sent()).gasLimit;
                                _factorGas = Math.round(factor * gas);
                                return [2 /*return*/, (_factorGas > networkGasLimit) ? networkGasLimit : _factorGas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_allowAllTransfers) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('changeAllowAllTransfers(bool)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_allowAllTransfers
                ], base_contract_1.BaseContract._bigNumberToString), 1), _allowAllTransfers = _a[0];
                var abiEncodedTransactionData = self._lookupEthersInterface('changeAllowAllTransfers(bool)').functions.changeAllowAllTransfers.encode([_allowAllTransfers
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_allowAllTransfers, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'changeAllowAllTransfers(bool)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_allowAllTransfers
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _allowAllTransfers = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_allowAllTransfers
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.changeAllowAllTransfers;
                                encodedData = ethersFunction.encode([_allowAllTransfers
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'changeAllowAllTransfers' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.changeAllowAllWhitelistTransfers = {
            sendTransactionAsync: function (_allowAllWhitelistTransfers, txData, factor) {
                if (txData === void 0) { txData = {}; }
                if (factor === void 0) { factor = 1.2; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('changeAllowAllWhitelistTransfers(bool)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_allowAllWhitelistTransfers
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _allowAllWhitelistTransfers = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_allowAllWhitelistTransfers
                                ]);
                                encodedData = self._lookupEthersInterface('changeAllowAllWhitelistTransfers(bool)').functions.changeAllowAllWhitelistTransfers.encode([_allowAllWhitelistTransfers
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.changeAllowAllWhitelistTransfers.estimateGasAsync.bind(self, _allowAllWhitelistTransfers, factor))];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _b.sent();
                                receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
                                return [2 /*return*/, new polyResponse_1.PolyResponse(txHash, receipt)];
                        }
                    });
                });
            },
            estimateGasAsync: function (_allowAllWhitelistTransfers, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas, networkGasLimit, _factorGas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('changeAllowAllWhitelistTransfers(bool)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_allowAllWhitelistTransfers
                                ], base_contract_1.BaseContract._bigNumberToString), 1), _allowAllWhitelistTransfers = _a[0];
                                encodedData = self._lookupEthersInterface('changeAllowAllWhitelistTransfers(bool)').functions.changeAllowAllWhitelistTransfers.encode([_allowAllWhitelistTransfers
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.getBlockWithTransactionDataAsync('latest')];
                            case 3:
                                networkGasLimit = (_b.sent()).gasLimit;
                                _factorGas = Math.round(factor * gas);
                                return [2 /*return*/, (_factorGas > networkGasLimit) ? networkGasLimit : _factorGas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_allowAllWhitelistTransfers) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('changeAllowAllWhitelistTransfers(bool)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_allowAllWhitelistTransfers
                ], base_contract_1.BaseContract._bigNumberToString), 1), _allowAllWhitelistTransfers = _a[0];
                var abiEncodedTransactionData = self._lookupEthersInterface('changeAllowAllWhitelistTransfers(bool)').functions.changeAllowAllWhitelistTransfers.encode([_allowAllWhitelistTransfers
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_allowAllWhitelistTransfers, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'changeAllowAllWhitelistTransfers(bool)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_allowAllWhitelistTransfers
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _allowAllWhitelistTransfers = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_allowAllWhitelistTransfers
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.changeAllowAllWhitelistTransfers;
                                encodedData = ethersFunction.encode([_allowAllWhitelistTransfers
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'changeAllowAllWhitelistTransfers' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.changeAllowAllWhitelistIssuances = {
            sendTransactionAsync: function (_allowAllWhitelistIssuances, txData, factor) {
                if (txData === void 0) { txData = {}; }
                if (factor === void 0) { factor = 1.2; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('changeAllowAllWhitelistIssuances(bool)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_allowAllWhitelistIssuances
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _allowAllWhitelistIssuances = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_allowAllWhitelistIssuances
                                ]);
                                encodedData = self._lookupEthersInterface('changeAllowAllWhitelistIssuances(bool)').functions.changeAllowAllWhitelistIssuances.encode([_allowAllWhitelistIssuances
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.changeAllowAllWhitelistIssuances.estimateGasAsync.bind(self, _allowAllWhitelistIssuances, factor))];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _b.sent();
                                receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
                                return [2 /*return*/, new polyResponse_1.PolyResponse(txHash, receipt)];
                        }
                    });
                });
            },
            estimateGasAsync: function (_allowAllWhitelistIssuances, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas, networkGasLimit, _factorGas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('changeAllowAllWhitelistIssuances(bool)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_allowAllWhitelistIssuances
                                ], base_contract_1.BaseContract._bigNumberToString), 1), _allowAllWhitelistIssuances = _a[0];
                                encodedData = self._lookupEthersInterface('changeAllowAllWhitelistIssuances(bool)').functions.changeAllowAllWhitelistIssuances.encode([_allowAllWhitelistIssuances
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.getBlockWithTransactionDataAsync('latest')];
                            case 3:
                                networkGasLimit = (_b.sent()).gasLimit;
                                _factorGas = Math.round(factor * gas);
                                return [2 /*return*/, (_factorGas > networkGasLimit) ? networkGasLimit : _factorGas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_allowAllWhitelistIssuances) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('changeAllowAllWhitelistIssuances(bool)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_allowAllWhitelistIssuances
                ], base_contract_1.BaseContract._bigNumberToString), 1), _allowAllWhitelistIssuances = _a[0];
                var abiEncodedTransactionData = self._lookupEthersInterface('changeAllowAllWhitelistIssuances(bool)').functions.changeAllowAllWhitelistIssuances.encode([_allowAllWhitelistIssuances
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_allowAllWhitelistIssuances, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'changeAllowAllWhitelistIssuances(bool)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_allowAllWhitelistIssuances
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _allowAllWhitelistIssuances = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_allowAllWhitelistIssuances
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.changeAllowAllWhitelistIssuances;
                                encodedData = ethersFunction.encode([_allowAllWhitelistIssuances
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'changeAllowAllWhitelistIssuances' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.changeAllowAllBurnTransfers = {
            sendTransactionAsync: function (_allowAllBurnTransfers, txData, factor) {
                if (txData === void 0) { txData = {}; }
                if (factor === void 0) { factor = 1.2; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('changeAllowAllBurnTransfers(bool)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_allowAllBurnTransfers
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _allowAllBurnTransfers = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_allowAllBurnTransfers
                                ]);
                                encodedData = self._lookupEthersInterface('changeAllowAllBurnTransfers(bool)').functions.changeAllowAllBurnTransfers.encode([_allowAllBurnTransfers
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.changeAllowAllBurnTransfers.estimateGasAsync.bind(self, _allowAllBurnTransfers, factor))];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _b.sent();
                                receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
                                return [2 /*return*/, new polyResponse_1.PolyResponse(txHash, receipt)];
                        }
                    });
                });
            },
            estimateGasAsync: function (_allowAllBurnTransfers, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas, networkGasLimit, _factorGas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('changeAllowAllBurnTransfers(bool)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_allowAllBurnTransfers
                                ], base_contract_1.BaseContract._bigNumberToString), 1), _allowAllBurnTransfers = _a[0];
                                encodedData = self._lookupEthersInterface('changeAllowAllBurnTransfers(bool)').functions.changeAllowAllBurnTransfers.encode([_allowAllBurnTransfers
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.getBlockWithTransactionDataAsync('latest')];
                            case 3:
                                networkGasLimit = (_b.sent()).gasLimit;
                                _factorGas = Math.round(factor * gas);
                                return [2 /*return*/, (_factorGas > networkGasLimit) ? networkGasLimit : _factorGas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_allowAllBurnTransfers) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('changeAllowAllBurnTransfers(bool)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_allowAllBurnTransfers
                ], base_contract_1.BaseContract._bigNumberToString), 1), _allowAllBurnTransfers = _a[0];
                var abiEncodedTransactionData = self._lookupEthersInterface('changeAllowAllBurnTransfers(bool)').functions.changeAllowAllBurnTransfers.encode([_allowAllBurnTransfers
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_allowAllBurnTransfers, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'changeAllowAllBurnTransfers(bool)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_allowAllBurnTransfers
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _allowAllBurnTransfers = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_allowAllBurnTransfers
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.changeAllowAllBurnTransfers;
                                encodedData = ethersFunction.encode([_allowAllBurnTransfers
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'changeAllowAllBurnTransfers' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.verifyTransfer = {
            sendTransactionAsync: function (_from, _to, index_2, index_3, index_4, txData, factor) {
                if (txData === void 0) { txData = {}; }
                if (factor === void 0) { factor = 1.2; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('verifyTransfer(address,address,uint256,bytes,bool)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _to,
                                    index_2,
                                    index_3,
                                    index_4
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 5), _from = _a[0], _to = _a[1], index_2 = _a[2], index_3 = _a[3], index_4 = _a[4];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
                                    _to,
                                    index_2,
                                    index_3,
                                    index_4
                                ]);
                                encodedData = self._lookupEthersInterface('verifyTransfer(address,address,uint256,bytes,bool)').functions.verifyTransfer.encode([_from,
                                    _to,
                                    index_2,
                                    index_3,
                                    index_4
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.verifyTransfer.estimateGasAsync.bind(self, _from, _to, index_2, index_3, index_4, factor))];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _b.sent();
                                receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
                                return [2 /*return*/, new polyResponse_1.PolyResponse(txHash, receipt)];
                        }
                    });
                });
            },
            estimateGasAsync: function (_from, _to, index_2, index_3, index_4, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas, networkGasLimit, _factorGas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('verifyTransfer(address,address,uint256,bytes,bool)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _to,
                                    index_2,
                                    index_3,
                                    index_4
                                ], base_contract_1.BaseContract._bigNumberToString), 5), _from = _a[0], _to = _a[1], index_2 = _a[2], index_3 = _a[3], index_4 = _a[4];
                                encodedData = self._lookupEthersInterface('verifyTransfer(address,address,uint256,bytes,bool)').functions.verifyTransfer.encode([_from,
                                    _to,
                                    index_2,
                                    index_3,
                                    index_4
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.getBlockWithTransactionDataAsync('latest')];
                            case 3:
                                networkGasLimit = (_b.sent()).gasLimit;
                                _factorGas = Math.round(factor * gas);
                                return [2 /*return*/, (_factorGas > networkGasLimit) ? networkGasLimit : _factorGas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_from, _to, index_2, index_3, index_4) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('verifyTransfer(address,address,uint256,bytes,bool)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                    _to,
                    index_2,
                    index_3,
                    index_4
                ], base_contract_1.BaseContract._bigNumberToString), 5), _from = _a[0], _to = _a[1], index_2 = _a[2], index_3 = _a[3], index_4 = _a[4];
                var abiEncodedTransactionData = self._lookupEthersInterface('verifyTransfer(address,address,uint256,bytes,bool)').functions.verifyTransfer.encode([_from,
                    _to,
                    index_2,
                    index_3,
                    index_4
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_from, _to, index_2, index_3, index_4, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'verifyTransfer(address,address,uint256,bytes,bool)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _to,
                                    index_2,
                                    index_3,
                                    index_4
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 5), _from = _a[0], _to = _a[1], index_2 = _a[2], index_3 = _a[3], index_4 = _a[4];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
                                    _to,
                                    index_2,
                                    index_3,
                                    index_4
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.verifyTransfer;
                                encodedData = ethersFunction.encode([_from,
                                    _to,
                                    index_2,
                                    index_3,
                                    index_4
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'verifyTransfer' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.modifyWhitelist = {
            sendTransactionAsync: function (_investor, _fromTime, _toTime, _expiryTime, _canBuyFromSTO, txData, factor) {
                if (txData === void 0) { txData = {}; }
                if (factor === void 0) { factor = 1.2; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('modifyWhitelist(address,uint256,uint256,uint256,bool)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_investor,
                                    _fromTime,
                                    _toTime,
                                    _expiryTime,
                                    _canBuyFromSTO
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 5), _investor = _a[0], _fromTime = _a[1], _toTime = _a[2], _expiryTime = _a[3], _canBuyFromSTO = _a[4];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_investor,
                                    _fromTime,
                                    _toTime,
                                    _expiryTime,
                                    _canBuyFromSTO
                                ]);
                                encodedData = self._lookupEthersInterface('modifyWhitelist(address,uint256,uint256,uint256,bool)').functions.modifyWhitelist.encode([_investor,
                                    _fromTime,
                                    _toTime,
                                    _expiryTime,
                                    _canBuyFromSTO
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.modifyWhitelist.estimateGasAsync.bind(self, _investor, _fromTime, _toTime, _expiryTime, _canBuyFromSTO, factor))];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _b.sent();
                                receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
                                return [2 /*return*/, new polyResponse_1.PolyResponse(txHash, receipt)];
                        }
                    });
                });
            },
            estimateGasAsync: function (_investor, _fromTime, _toTime, _expiryTime, _canBuyFromSTO, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas, networkGasLimit, _factorGas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('modifyWhitelist(address,uint256,uint256,uint256,bool)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_investor,
                                    _fromTime,
                                    _toTime,
                                    _expiryTime,
                                    _canBuyFromSTO
                                ], base_contract_1.BaseContract._bigNumberToString), 5), _investor = _a[0], _fromTime = _a[1], _toTime = _a[2], _expiryTime = _a[3], _canBuyFromSTO = _a[4];
                                encodedData = self._lookupEthersInterface('modifyWhitelist(address,uint256,uint256,uint256,bool)').functions.modifyWhitelist.encode([_investor,
                                    _fromTime,
                                    _toTime,
                                    _expiryTime,
                                    _canBuyFromSTO
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.getBlockWithTransactionDataAsync('latest')];
                            case 3:
                                networkGasLimit = (_b.sent()).gasLimit;
                                _factorGas = Math.round(factor * gas);
                                return [2 /*return*/, (_factorGas > networkGasLimit) ? networkGasLimit : _factorGas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_investor, _fromTime, _toTime, _expiryTime, _canBuyFromSTO) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('modifyWhitelist(address,uint256,uint256,uint256,bool)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_investor,
                    _fromTime,
                    _toTime,
                    _expiryTime,
                    _canBuyFromSTO
                ], base_contract_1.BaseContract._bigNumberToString), 5), _investor = _a[0], _fromTime = _a[1], _toTime = _a[2], _expiryTime = _a[3], _canBuyFromSTO = _a[4];
                var abiEncodedTransactionData = self._lookupEthersInterface('modifyWhitelist(address,uint256,uint256,uint256,bool)').functions.modifyWhitelist.encode([_investor,
                    _fromTime,
                    _toTime,
                    _expiryTime,
                    _canBuyFromSTO
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_investor, _fromTime, _toTime, _expiryTime, _canBuyFromSTO, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'modifyWhitelist(address,uint256,uint256,uint256,bool)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_investor,
                                    _fromTime,
                                    _toTime,
                                    _expiryTime,
                                    _canBuyFromSTO
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 5), _investor = _a[0], _fromTime = _a[1], _toTime = _a[2], _expiryTime = _a[3], _canBuyFromSTO = _a[4];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_investor,
                                    _fromTime,
                                    _toTime,
                                    _expiryTime,
                                    _canBuyFromSTO
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.modifyWhitelist;
                                encodedData = ethersFunction.encode([_investor,
                                    _fromTime,
                                    _toTime,
                                    _expiryTime,
                                    _canBuyFromSTO
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'modifyWhitelist' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.modifyWhitelistMulti = {
            sendTransactionAsync: function (_investors, _fromTimes, _toTimes, _expiryTimes, _canBuyFromSTO, txData, factor) {
                if (txData === void 0) { txData = {}; }
                if (factor === void 0) { factor = 1.2; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('modifyWhitelistMulti(address[],uint256[],uint256[],uint256[],bool[])').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_investors,
                                    _fromTimes,
                                    _toTimes,
                                    _expiryTimes,
                                    _canBuyFromSTO
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 5), _investors = _a[0], _fromTimes = _a[1], _toTimes = _a[2], _expiryTimes = _a[3], _canBuyFromSTO = _a[4];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_investors,
                                    _fromTimes,
                                    _toTimes,
                                    _expiryTimes,
                                    _canBuyFromSTO
                                ]);
                                encodedData = self._lookupEthersInterface('modifyWhitelistMulti(address[],uint256[],uint256[],uint256[],bool[])').functions.modifyWhitelistMulti.encode([_investors,
                                    _fromTimes,
                                    _toTimes,
                                    _expiryTimes,
                                    _canBuyFromSTO
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.modifyWhitelistMulti.estimateGasAsync.bind(self, _investors, _fromTimes, _toTimes, _expiryTimes, _canBuyFromSTO, factor))];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _b.sent();
                                receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
                                return [2 /*return*/, new polyResponse_1.PolyResponse(txHash, receipt)];
                        }
                    });
                });
            },
            estimateGasAsync: function (_investors, _fromTimes, _toTimes, _expiryTimes, _canBuyFromSTO, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas, networkGasLimit, _factorGas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('modifyWhitelistMulti(address[],uint256[],uint256[],uint256[],bool[])').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_investors,
                                    _fromTimes,
                                    _toTimes,
                                    _expiryTimes,
                                    _canBuyFromSTO
                                ], base_contract_1.BaseContract._bigNumberToString), 5), _investors = _a[0], _fromTimes = _a[1], _toTimes = _a[2], _expiryTimes = _a[3], _canBuyFromSTO = _a[4];
                                encodedData = self._lookupEthersInterface('modifyWhitelistMulti(address[],uint256[],uint256[],uint256[],bool[])').functions.modifyWhitelistMulti.encode([_investors,
                                    _fromTimes,
                                    _toTimes,
                                    _expiryTimes,
                                    _canBuyFromSTO
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.getBlockWithTransactionDataAsync('latest')];
                            case 3:
                                networkGasLimit = (_b.sent()).gasLimit;
                                _factorGas = Math.round(factor * gas);
                                return [2 /*return*/, (_factorGas > networkGasLimit) ? networkGasLimit : _factorGas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_investors, _fromTimes, _toTimes, _expiryTimes, _canBuyFromSTO) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('modifyWhitelistMulti(address[],uint256[],uint256[],uint256[],bool[])').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_investors,
                    _fromTimes,
                    _toTimes,
                    _expiryTimes,
                    _canBuyFromSTO
                ], base_contract_1.BaseContract._bigNumberToString), 5), _investors = _a[0], _fromTimes = _a[1], _toTimes = _a[2], _expiryTimes = _a[3], _canBuyFromSTO = _a[4];
                var abiEncodedTransactionData = self._lookupEthersInterface('modifyWhitelistMulti(address[],uint256[],uint256[],uint256[],bool[])').functions.modifyWhitelistMulti.encode([_investors,
                    _fromTimes,
                    _toTimes,
                    _expiryTimes,
                    _canBuyFromSTO
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_investors, _fromTimes, _toTimes, _expiryTimes, _canBuyFromSTO, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'modifyWhitelistMulti(address[],uint256[],uint256[],uint256[],bool[])';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_investors,
                                    _fromTimes,
                                    _toTimes,
                                    _expiryTimes,
                                    _canBuyFromSTO
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 5), _investors = _a[0], _fromTimes = _a[1], _toTimes = _a[2], _expiryTimes = _a[3], _canBuyFromSTO = _a[4];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_investors,
                                    _fromTimes,
                                    _toTimes,
                                    _expiryTimes,
                                    _canBuyFromSTO
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.modifyWhitelistMulti;
                                encodedData = ethersFunction.encode([_investors,
                                    _fromTimes,
                                    _toTimes,
                                    _expiryTimes,
                                    _canBuyFromSTO
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'modifyWhitelistMulti' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.modifyWhitelistSigned = {
            sendTransactionAsync: function (_investor, _fromTime, _toTime, _expiryTime, _canBuyFromSTO, _validFrom, _validTo, _nonce, _v, _r, _s, txData, factor) {
                if (txData === void 0) { txData = {}; }
                if (factor === void 0) { factor = 1.2; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('modifyWhitelistSigned(address,uint256,uint256,uint256,bool,uint256,uint256,uint256,uint8,bytes32,bytes32)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_investor,
                                    _fromTime,
                                    _toTime,
                                    _expiryTime,
                                    _canBuyFromSTO,
                                    _validFrom,
                                    _validTo,
                                    _nonce,
                                    _v,
                                    _r,
                                    _s
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 11), _investor = _a[0], _fromTime = _a[1], _toTime = _a[2], _expiryTime = _a[3], _canBuyFromSTO = _a[4], _validFrom = _a[5], _validTo = _a[6], _nonce = _a[7], _v = _a[8], _r = _a[9], _s = _a[10];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_investor,
                                    _fromTime,
                                    _toTime,
                                    _expiryTime,
                                    _canBuyFromSTO,
                                    _validFrom,
                                    _validTo,
                                    _nonce,
                                    _v,
                                    _r,
                                    _s
                                ]);
                                encodedData = self._lookupEthersInterface('modifyWhitelistSigned(address,uint256,uint256,uint256,bool,uint256,uint256,uint256,uint8,bytes32,bytes32)').functions.modifyWhitelistSigned.encode([_investor,
                                    _fromTime,
                                    _toTime,
                                    _expiryTime,
                                    _canBuyFromSTO,
                                    _validFrom,
                                    _validTo,
                                    _nonce,
                                    _v,
                                    _r,
                                    _s
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.modifyWhitelistSigned.estimateGasAsync.bind(self, _investor, _fromTime, _toTime, _expiryTime, _canBuyFromSTO, _validFrom, _validTo, _nonce, _v, _r, _s, factor))];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _b.sent();
                                receipt = self._web3Wrapper.awaitTransactionSuccessAsync(txHash);
                                return [2 /*return*/, new polyResponse_1.PolyResponse(txHash, receipt)];
                        }
                    });
                });
            },
            estimateGasAsync: function (_investor, _fromTime, _toTime, _expiryTime, _canBuyFromSTO, _validFrom, _validTo, _nonce, _v, _r, _s, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas, networkGasLimit, _factorGas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('modifyWhitelistSigned(address,uint256,uint256,uint256,bool,uint256,uint256,uint256,uint8,bytes32,bytes32)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_investor,
                                    _fromTime,
                                    _toTime,
                                    _expiryTime,
                                    _canBuyFromSTO,
                                    _validFrom,
                                    _validTo,
                                    _nonce,
                                    _v,
                                    _r,
                                    _s
                                ], base_contract_1.BaseContract._bigNumberToString), 11), _investor = _a[0], _fromTime = _a[1], _toTime = _a[2], _expiryTime = _a[3], _canBuyFromSTO = _a[4], _validFrom = _a[5], _validTo = _a[6], _nonce = _a[7], _v = _a[8], _r = _a[9], _s = _a[10];
                                encodedData = self._lookupEthersInterface('modifyWhitelistSigned(address,uint256,uint256,uint256,bool,uint256,uint256,uint256,uint8,bytes32,bytes32)').functions.modifyWhitelistSigned.encode([_investor,
                                    _fromTime,
                                    _toTime,
                                    _expiryTime,
                                    _canBuyFromSTO,
                                    _validFrom,
                                    _validTo,
                                    _nonce,
                                    _v,
                                    _r,
                                    _s
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.getBlockWithTransactionDataAsync('latest')];
                            case 3:
                                networkGasLimit = (_b.sent()).gasLimit;
                                _factorGas = Math.round(factor * gas);
                                return [2 /*return*/, (_factorGas > networkGasLimit) ? networkGasLimit : _factorGas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_investor, _fromTime, _toTime, _expiryTime, _canBuyFromSTO, _validFrom, _validTo, _nonce, _v, _r, _s) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('modifyWhitelistSigned(address,uint256,uint256,uint256,bool,uint256,uint256,uint256,uint8,bytes32,bytes32)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_investor,
                    _fromTime,
                    _toTime,
                    _expiryTime,
                    _canBuyFromSTO,
                    _validFrom,
                    _validTo,
                    _nonce,
                    _v,
                    _r,
                    _s
                ], base_contract_1.BaseContract._bigNumberToString), 11), _investor = _a[0], _fromTime = _a[1], _toTime = _a[2], _expiryTime = _a[3], _canBuyFromSTO = _a[4], _validFrom = _a[5], _validTo = _a[6], _nonce = _a[7], _v = _a[8], _r = _a[9], _s = _a[10];
                var abiEncodedTransactionData = self._lookupEthersInterface('modifyWhitelistSigned(address,uint256,uint256,uint256,bool,uint256,uint256,uint256,uint8,bytes32,bytes32)').functions.modifyWhitelistSigned.encode([_investor,
                    _fromTime,
                    _toTime,
                    _expiryTime,
                    _canBuyFromSTO,
                    _validFrom,
                    _validTo,
                    _nonce,
                    _v,
                    _r,
                    _s
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_investor, _fromTime, _toTime, _expiryTime, _canBuyFromSTO, _validFrom, _validTo, _nonce, _v, _r, _s, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'modifyWhitelistSigned(address,uint256,uint256,uint256,bool,uint256,uint256,uint256,uint8,bytes32,bytes32)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_investor,
                                    _fromTime,
                                    _toTime,
                                    _expiryTime,
                                    _canBuyFromSTO,
                                    _validFrom,
                                    _validTo,
                                    _nonce,
                                    _v,
                                    _r,
                                    _s
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 11), _investor = _a[0], _fromTime = _a[1], _toTime = _a[2], _expiryTime = _a[3], _canBuyFromSTO = _a[4], _validFrom = _a[5], _validTo = _a[6], _nonce = _a[7], _v = _a[8], _r = _a[9], _s = _a[10];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_investor,
                                    _fromTime,
                                    _toTime,
                                    _expiryTime,
                                    _canBuyFromSTO,
                                    _validFrom,
                                    _validTo,
                                    _nonce,
                                    _v,
                                    _r,
                                    _s
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.modifyWhitelistSigned;
                                encodedData = ethersFunction.encode([_investor,
                                    _fromTime,
                                    _toTime,
                                    _expiryTime,
                                    _canBuyFromSTO,
                                    _validFrom,
                                    _validTo,
                                    _nonce,
                                    _v,
                                    _r,
                                    _s
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'modifyWhitelistSigned' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.getInvestors = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'getInvestors()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.getInvestors;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'getInvestors' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.getAllInvestorsData = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'getAllInvestorsData()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.getAllInvestorsData;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'getAllInvestorsData' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.getInvestorsData = {
            callAsync: function (_investors, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'getInvestorsData(address[])';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_investors
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _investors = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_investors
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.getInvestorsData;
                                encodedData = ethersFunction.encode([_investors
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'getInvestorsData' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.getPermissions = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'getPermissions()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.getPermissions;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'getPermissions' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        utils_1.classUtils.bindAll(_this, ['_ethersInterfacesByFunctionSignature', 'address', 'abi', '_web3Wrapper']);
        return _this;
    }
    return GeneralTransferManagerContract;
}(base_contract_1.BaseContract)); // tslint:disable:max-file-line-count
exports.GeneralTransferManagerContract = GeneralTransferManagerContract;
// tslint:enable:no-unbound-method
//# sourceMappingURL=general_transfer_manager.js.map