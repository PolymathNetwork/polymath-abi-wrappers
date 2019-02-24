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
var SecurityTokenEvents;
(function (SecurityTokenEvents) {
    SecurityTokenEvents["ModuleAdded"] = "ModuleAdded";
    SecurityTokenEvents["UpdateTokenDetails"] = "UpdateTokenDetails";
    SecurityTokenEvents["GranularityChanged"] = "GranularityChanged";
    SecurityTokenEvents["ModuleArchived"] = "ModuleArchived";
    SecurityTokenEvents["ModuleUnarchived"] = "ModuleUnarchived";
    SecurityTokenEvents["ModuleRemoved"] = "ModuleRemoved";
    SecurityTokenEvents["ModuleBudgetChanged"] = "ModuleBudgetChanged";
    SecurityTokenEvents["FreezeTransfers"] = "FreezeTransfers";
    SecurityTokenEvents["CheckpointCreated"] = "CheckpointCreated";
    SecurityTokenEvents["FreezeMinting"] = "FreezeMinting";
    SecurityTokenEvents["Minted"] = "Minted";
    SecurityTokenEvents["Burnt"] = "Burnt";
    SecurityTokenEvents["SetController"] = "SetController";
    SecurityTokenEvents["ForceTransfer"] = "ForceTransfer";
    SecurityTokenEvents["ForceBurn"] = "ForceBurn";
    SecurityTokenEvents["DisableController"] = "DisableController";
    SecurityTokenEvents["OwnershipRenounced"] = "OwnershipRenounced";
    SecurityTokenEvents["OwnershipTransferred"] = "OwnershipTransferred";
    SecurityTokenEvents["Approval"] = "Approval";
    SecurityTokenEvents["Transfer"] = "Transfer";
})(SecurityTokenEvents = exports.SecurityTokenEvents || (exports.SecurityTokenEvents = {}));
/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
var SecurityTokenContract = /** @class */ (function (_super) {
    __extends(SecurityTokenContract, _super);
    function SecurityTokenContract(abi, address, provider, txDefaults) {
        var _this = _super.call(this, 'SecurityToken', abi, address, provider, txDefaults) || this;
        _this.name = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'name()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.name;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'name' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.approve = {
            sendTransactionAsync: function (_spender, _value, txData, factor) {
                if (txData === void 0) { txData = {}; }
                if (factor === void 0) { factor = 1.2; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('approve(address,uint256)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_spender,
                                    _value
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), _spender = _a[0], _value = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_spender,
                                    _value
                                ]);
                                encodedData = self._lookupEthersInterface('approve(address,uint256)').functions.approve.encode([_spender,
                                    _value
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.approve.estimateGasAsync.bind(self, _spender, _value, factor))];
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
            estimateGasAsync: function (_spender, _value, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas, networkGasLimit, _factorGas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('approve(address,uint256)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_spender,
                                    _value
                                ], base_contract_1.BaseContract._bigNumberToString), 2), _spender = _a[0], _value = _a[1];
                                encodedData = self._lookupEthersInterface('approve(address,uint256)').functions.approve.encode([_spender,
                                    _value
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
            getABIEncodedTransactionData: function (_spender, _value) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('approve(address,uint256)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_spender,
                    _value
                ], base_contract_1.BaseContract._bigNumberToString), 2), _spender = _a[0], _value = _a[1];
                var abiEncodedTransactionData = self._lookupEthersInterface('approve(address,uint256)').functions.approve.encode([_spender,
                    _value
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_spender, _value, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'approve(address,uint256)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_spender,
                                    _value
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), _spender = _a[0], _value = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_spender,
                                    _value
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.approve;
                                encodedData = ethersFunction.encode([_spender,
                                    _value
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'approve' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.totalSupply = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'totalSupply()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.totalSupply;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'totalSupply' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.decimals = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'decimals()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.decimals;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'decimals' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.currentCheckpointId = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'currentCheckpointId()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.currentCheckpointId;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'currentCheckpointId' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.granularity = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'granularity()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.granularity;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'granularity' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.decreaseApproval = {
            sendTransactionAsync: function (_spender, _subtractedValue, txData, factor) {
                if (txData === void 0) { txData = {}; }
                if (factor === void 0) { factor = 1.2; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('decreaseApproval(address,uint256)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_spender,
                                    _subtractedValue
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), _spender = _a[0], _subtractedValue = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_spender,
                                    _subtractedValue
                                ]);
                                encodedData = self._lookupEthersInterface('decreaseApproval(address,uint256)').functions.decreaseApproval.encode([_spender,
                                    _subtractedValue
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.decreaseApproval.estimateGasAsync.bind(self, _spender, _subtractedValue, factor))];
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
            estimateGasAsync: function (_spender, _subtractedValue, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas, networkGasLimit, _factorGas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('decreaseApproval(address,uint256)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_spender,
                                    _subtractedValue
                                ], base_contract_1.BaseContract._bigNumberToString), 2), _spender = _a[0], _subtractedValue = _a[1];
                                encodedData = self._lookupEthersInterface('decreaseApproval(address,uint256)').functions.decreaseApproval.encode([_spender,
                                    _subtractedValue
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
            getABIEncodedTransactionData: function (_spender, _subtractedValue) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('decreaseApproval(address,uint256)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_spender,
                    _subtractedValue
                ], base_contract_1.BaseContract._bigNumberToString), 2), _spender = _a[0], _subtractedValue = _a[1];
                var abiEncodedTransactionData = self._lookupEthersInterface('decreaseApproval(address,uint256)').functions.decreaseApproval.encode([_spender,
                    _subtractedValue
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_spender, _subtractedValue, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'decreaseApproval(address,uint256)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_spender,
                                    _subtractedValue
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), _spender = _a[0], _subtractedValue = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_spender,
                                    _subtractedValue
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.decreaseApproval;
                                encodedData = ethersFunction.encode([_spender,
                                    _subtractedValue
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'decreaseApproval' }).outputs;
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
        _this.balanceOf = {
            callAsync: function (_owner, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'balanceOf(address)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_owner
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _owner = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_owner
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.balanceOf;
                                encodedData = ethersFunction.encode([_owner
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'balanceOf' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.renounceOwnership = {
            sendTransactionAsync: function (txData, factor) {
                if (txData === void 0) { txData = {}; }
                if (factor === void 0) { factor = 1.2; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('renounceOwnership()').inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                encodedData = self._lookupEthersInterface('renounceOwnership()').functions.renounceOwnership.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.renounceOwnership.estimateGasAsync.bind(self, factor))];
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
                                inputAbi = self._lookupAbi('renounceOwnership()').inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString);
                                encodedData = self._lookupEthersInterface('renounceOwnership()').functions.renounceOwnership.encode([]);
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
        _this.polymathRegistry = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'polymathRegistry()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.polymathRegistry;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'polymathRegistry' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.controllerDisabled = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'controllerDisabled()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.controllerDisabled;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'controllerDisabled' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
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
        _this.symbol = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'symbol()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.symbol;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'symbol' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.mintingFrozen = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'mintingFrozen()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.mintingFrozen;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'mintingFrozen' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.moduleRegistry = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'moduleRegistry()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.moduleRegistry;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'moduleRegistry' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.featureRegistry = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'featureRegistry()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.featureRegistry;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'featureRegistry' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.securityTokenRegistry = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'securityTokenRegistry()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.securityTokenRegistry;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'securityTokenRegistry' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.tokenDetails = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'tokenDetails()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.tokenDetails;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'tokenDetails' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.increaseApproval = {
            sendTransactionAsync: function (_spender, _addedValue, txData, factor) {
                if (txData === void 0) { txData = {}; }
                if (factor === void 0) { factor = 1.2; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('increaseApproval(address,uint256)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_spender,
                                    _addedValue
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), _spender = _a[0], _addedValue = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_spender,
                                    _addedValue
                                ]);
                                encodedData = self._lookupEthersInterface('increaseApproval(address,uint256)').functions.increaseApproval.encode([_spender,
                                    _addedValue
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.increaseApproval.estimateGasAsync.bind(self, _spender, _addedValue, factor))];
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
            estimateGasAsync: function (_spender, _addedValue, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas, networkGasLimit, _factorGas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('increaseApproval(address,uint256)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_spender,
                                    _addedValue
                                ], base_contract_1.BaseContract._bigNumberToString), 2), _spender = _a[0], _addedValue = _a[1];
                                encodedData = self._lookupEthersInterface('increaseApproval(address,uint256)').functions.increaseApproval.encode([_spender,
                                    _addedValue
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
            getABIEncodedTransactionData: function (_spender, _addedValue) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('increaseApproval(address,uint256)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_spender,
                    _addedValue
                ], base_contract_1.BaseContract._bigNumberToString), 2), _spender = _a[0], _addedValue = _a[1];
                var abiEncodedTransactionData = self._lookupEthersInterface('increaseApproval(address,uint256)').functions.increaseApproval.encode([_spender,
                    _addedValue
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_spender, _addedValue, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'increaseApproval(address,uint256)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_spender,
                                    _addedValue
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), _spender = _a[0], _addedValue = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_spender,
                                    _addedValue
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.increaseApproval;
                                encodedData = ethersFunction.encode([_spender,
                                    _addedValue
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'increaseApproval' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.allowance = {
            callAsync: function (_owner, _spender, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'allowance(address,address)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_owner,
                                    _spender
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), _owner = _a[0], _spender = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_owner,
                                    _spender
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.allowance;
                                encodedData = ethersFunction.encode([_owner,
                                    _spender
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'allowance' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.transfersFrozen = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'transfersFrozen()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.transfersFrozen;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'transfersFrozen' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.transferOwnership = {
            sendTransactionAsync: function (_newOwner, txData, factor) {
                if (txData === void 0) { txData = {}; }
                if (factor === void 0) { factor = 1.2; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash, receipt;
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
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.transferOwnership.estimateGasAsync.bind(self, _newOwner, factor))];
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
            estimateGasAsync: function (_newOwner, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas, networkGasLimit, _factorGas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('transferOwnership(address)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_newOwner
                                ], base_contract_1.BaseContract._bigNumberToString), 1), _newOwner = _a[0];
                                encodedData = self._lookupEthersInterface('transferOwnership(address)').functions.transferOwnership.encode([_newOwner
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
        _this.updateFromRegistry = {
            sendTransactionAsync: function (txData, factor) {
                if (txData === void 0) { txData = {}; }
                if (factor === void 0) { factor = 1.2; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('updateFromRegistry()').inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                encodedData = self._lookupEthersInterface('updateFromRegistry()').functions.updateFromRegistry.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.updateFromRegistry.estimateGasAsync.bind(self, factor))];
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
                                inputAbi = self._lookupAbi('updateFromRegistry()').inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString);
                                encodedData = self._lookupEthersInterface('updateFromRegistry()').functions.updateFromRegistry.encode([]);
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
                var inputAbi = self._lookupAbi('updateFromRegistry()').inputs;
                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString);
                var abiEncodedTransactionData = self._lookupEthersInterface('updateFromRegistry()').functions.updateFromRegistry.encode([]);
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
                                functionSignature = 'updateFromRegistry()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.updateFromRegistry;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'updateFromRegistry' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.controller = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'controller()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.controller;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'controller' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.addModule = {
            sendTransactionAsync: function (_moduleFactory, _data, _maxCost, _budget, txData, factor) {
                if (txData === void 0) { txData = {}; }
                if (factor === void 0) { factor = 1.2; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('addModule(address,bytes,uint256,uint256)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_moduleFactory,
                                    _data,
                                    _maxCost,
                                    _budget
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 4), _moduleFactory = _a[0], _data = _a[1], _maxCost = _a[2], _budget = _a[3];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_moduleFactory,
                                    _data,
                                    _maxCost,
                                    _budget
                                ]);
                                encodedData = self._lookupEthersInterface('addModule(address,bytes,uint256,uint256)').functions.addModule.encode([_moduleFactory,
                                    _data,
                                    _maxCost,
                                    _budget
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.addModule.estimateGasAsync.bind(self, _moduleFactory, _data, _maxCost, _budget, factor))];
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
            estimateGasAsync: function (_moduleFactory, _data, _maxCost, _budget, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas, networkGasLimit, _factorGas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('addModule(address,bytes,uint256,uint256)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_moduleFactory,
                                    _data,
                                    _maxCost,
                                    _budget
                                ], base_contract_1.BaseContract._bigNumberToString), 4), _moduleFactory = _a[0], _data = _a[1], _maxCost = _a[2], _budget = _a[3];
                                encodedData = self._lookupEthersInterface('addModule(address,bytes,uint256,uint256)').functions.addModule.encode([_moduleFactory,
                                    _data,
                                    _maxCost,
                                    _budget
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
            getABIEncodedTransactionData: function (_moduleFactory, _data, _maxCost, _budget) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('addModule(address,bytes,uint256,uint256)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_moduleFactory,
                    _data,
                    _maxCost,
                    _budget
                ], base_contract_1.BaseContract._bigNumberToString), 4), _moduleFactory = _a[0], _data = _a[1], _maxCost = _a[2], _budget = _a[3];
                var abiEncodedTransactionData = self._lookupEthersInterface('addModule(address,bytes,uint256,uint256)').functions.addModule.encode([_moduleFactory,
                    _data,
                    _maxCost,
                    _budget
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_moduleFactory, _data, _maxCost, _budget, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'addModule(address,bytes,uint256,uint256)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_moduleFactory,
                                    _data,
                                    _maxCost,
                                    _budget
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 4), _moduleFactory = _a[0], _data = _a[1], _maxCost = _a[2], _budget = _a[3];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_moduleFactory,
                                    _data,
                                    _maxCost,
                                    _budget
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.addModule;
                                encodedData = ethersFunction.encode([_moduleFactory,
                                    _data,
                                    _maxCost,
                                    _budget
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'addModule' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.archiveModule = {
            sendTransactionAsync: function (_module, txData, factor) {
                if (txData === void 0) { txData = {}; }
                if (factor === void 0) { factor = 1.2; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('archiveModule(address)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_module
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _module = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_module
                                ]);
                                encodedData = self._lookupEthersInterface('archiveModule(address)').functions.archiveModule.encode([_module
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.archiveModule.estimateGasAsync.bind(self, _module, factor))];
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
            estimateGasAsync: function (_module, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas, networkGasLimit, _factorGas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('archiveModule(address)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_module
                                ], base_contract_1.BaseContract._bigNumberToString), 1), _module = _a[0];
                                encodedData = self._lookupEthersInterface('archiveModule(address)').functions.archiveModule.encode([_module
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
            getABIEncodedTransactionData: function (_module) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('archiveModule(address)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_module
                ], base_contract_1.BaseContract._bigNumberToString), 1), _module = _a[0];
                var abiEncodedTransactionData = self._lookupEthersInterface('archiveModule(address)').functions.archiveModule.encode([_module
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_module, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'archiveModule(address)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_module
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _module = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_module
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.archiveModule;
                                encodedData = ethersFunction.encode([_module
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'archiveModule' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.unarchiveModule = {
            sendTransactionAsync: function (_module, txData, factor) {
                if (txData === void 0) { txData = {}; }
                if (factor === void 0) { factor = 1.2; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('unarchiveModule(address)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_module
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _module = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_module
                                ]);
                                encodedData = self._lookupEthersInterface('unarchiveModule(address)').functions.unarchiveModule.encode([_module
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.unarchiveModule.estimateGasAsync.bind(self, _module, factor))];
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
            estimateGasAsync: function (_module, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas, networkGasLimit, _factorGas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('unarchiveModule(address)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_module
                                ], base_contract_1.BaseContract._bigNumberToString), 1), _module = _a[0];
                                encodedData = self._lookupEthersInterface('unarchiveModule(address)').functions.unarchiveModule.encode([_module
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
            getABIEncodedTransactionData: function (_module) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('unarchiveModule(address)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_module
                ], base_contract_1.BaseContract._bigNumberToString), 1), _module = _a[0];
                var abiEncodedTransactionData = self._lookupEthersInterface('unarchiveModule(address)').functions.unarchiveModule.encode([_module
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_module, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'unarchiveModule(address)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_module
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _module = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_module
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.unarchiveModule;
                                encodedData = ethersFunction.encode([_module
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'unarchiveModule' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.removeModule = {
            sendTransactionAsync: function (_module, txData, factor) {
                if (txData === void 0) { txData = {}; }
                if (factor === void 0) { factor = 1.2; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('removeModule(address)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_module
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _module = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_module
                                ]);
                                encodedData = self._lookupEthersInterface('removeModule(address)').functions.removeModule.encode([_module
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.removeModule.estimateGasAsync.bind(self, _module, factor))];
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
            estimateGasAsync: function (_module, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas, networkGasLimit, _factorGas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('removeModule(address)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_module
                                ], base_contract_1.BaseContract._bigNumberToString), 1), _module = _a[0];
                                encodedData = self._lookupEthersInterface('removeModule(address)').functions.removeModule.encode([_module
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
            getABIEncodedTransactionData: function (_module) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('removeModule(address)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_module
                ], base_contract_1.BaseContract._bigNumberToString), 1), _module = _a[0];
                var abiEncodedTransactionData = self._lookupEthersInterface('removeModule(address)').functions.removeModule.encode([_module
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_module, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'removeModule(address)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_module
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _module = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_module
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.removeModule;
                                encodedData = ethersFunction.encode([_module
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'removeModule' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.getModule = {
            callAsync: function (_module, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'getModule(address)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_module
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _module = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_module
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.getModule;
                                encodedData = ethersFunction.encode([_module
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'getModule' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.getModulesByName = {
            callAsync: function (_name, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'getModulesByName(bytes32)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_name
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _name = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_name
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.getModulesByName;
                                encodedData = ethersFunction.encode([_name
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'getModulesByName' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.getModulesByType = {
            callAsync: function (_type, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'getModulesByType(uint8)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_type
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _type = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_type
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.getModulesByType;
                                encodedData = ethersFunction.encode([_type
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'getModulesByType' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.withdrawERC20 = {
            sendTransactionAsync: function (_tokenContract, _value, txData, factor) {
                if (txData === void 0) { txData = {}; }
                if (factor === void 0) { factor = 1.2; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('withdrawERC20(address,uint256)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_tokenContract,
                                    _value
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), _tokenContract = _a[0], _value = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_tokenContract,
                                    _value
                                ]);
                                encodedData = self._lookupEthersInterface('withdrawERC20(address,uint256)').functions.withdrawERC20.encode([_tokenContract,
                                    _value
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.withdrawERC20.estimateGasAsync.bind(self, _tokenContract, _value, factor))];
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
            estimateGasAsync: function (_tokenContract, _value, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas, networkGasLimit, _factorGas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('withdrawERC20(address,uint256)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_tokenContract,
                                    _value
                                ], base_contract_1.BaseContract._bigNumberToString), 2), _tokenContract = _a[0], _value = _a[1];
                                encodedData = self._lookupEthersInterface('withdrawERC20(address,uint256)').functions.withdrawERC20.encode([_tokenContract,
                                    _value
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
            getABIEncodedTransactionData: function (_tokenContract, _value) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('withdrawERC20(address,uint256)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_tokenContract,
                    _value
                ], base_contract_1.BaseContract._bigNumberToString), 2), _tokenContract = _a[0], _value = _a[1];
                var abiEncodedTransactionData = self._lookupEthersInterface('withdrawERC20(address,uint256)').functions.withdrawERC20.encode([_tokenContract,
                    _value
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_tokenContract, _value, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'withdrawERC20(address,uint256)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_tokenContract,
                                    _value
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), _tokenContract = _a[0], _value = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_tokenContract,
                                    _value
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.withdrawERC20;
                                encodedData = ethersFunction.encode([_tokenContract,
                                    _value
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'withdrawERC20' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.changeModuleBudget = {
            sendTransactionAsync: function (_module, _change, _increase, txData, factor) {
                if (txData === void 0) { txData = {}; }
                if (factor === void 0) { factor = 1.2; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('changeModuleBudget(address,uint256,bool)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_module,
                                    _change,
                                    _increase
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 3), _module = _a[0], _change = _a[1], _increase = _a[2];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_module,
                                    _change,
                                    _increase
                                ]);
                                encodedData = self._lookupEthersInterface('changeModuleBudget(address,uint256,bool)').functions.changeModuleBudget.encode([_module,
                                    _change,
                                    _increase
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.changeModuleBudget.estimateGasAsync.bind(self, _module, _change, _increase, factor))];
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
            estimateGasAsync: function (_module, _change, _increase, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas, networkGasLimit, _factorGas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('changeModuleBudget(address,uint256,bool)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_module,
                                    _change,
                                    _increase
                                ], base_contract_1.BaseContract._bigNumberToString), 3), _module = _a[0], _change = _a[1], _increase = _a[2];
                                encodedData = self._lookupEthersInterface('changeModuleBudget(address,uint256,bool)').functions.changeModuleBudget.encode([_module,
                                    _change,
                                    _increase
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
            getABIEncodedTransactionData: function (_module, _change, _increase) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('changeModuleBudget(address,uint256,bool)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_module,
                    _change,
                    _increase
                ], base_contract_1.BaseContract._bigNumberToString), 3), _module = _a[0], _change = _a[1], _increase = _a[2];
                var abiEncodedTransactionData = self._lookupEthersInterface('changeModuleBudget(address,uint256,bool)').functions.changeModuleBudget.encode([_module,
                    _change,
                    _increase
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_module, _change, _increase, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'changeModuleBudget(address,uint256,bool)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_module,
                                    _change,
                                    _increase
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 3), _module = _a[0], _change = _a[1], _increase = _a[2];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_module,
                                    _change,
                                    _increase
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.changeModuleBudget;
                                encodedData = ethersFunction.encode([_module,
                                    _change,
                                    _increase
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'changeModuleBudget' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.updateTokenDetails = {
            sendTransactionAsync: function (_newTokenDetails, txData, factor) {
                if (txData === void 0) { txData = {}; }
                if (factor === void 0) { factor = 1.2; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('updateTokenDetails(string)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_newTokenDetails
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _newTokenDetails = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_newTokenDetails
                                ]);
                                encodedData = self._lookupEthersInterface('updateTokenDetails(string)').functions.updateTokenDetails.encode([_newTokenDetails
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.updateTokenDetails.estimateGasAsync.bind(self, _newTokenDetails, factor))];
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
            estimateGasAsync: function (_newTokenDetails, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas, networkGasLimit, _factorGas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('updateTokenDetails(string)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_newTokenDetails
                                ], base_contract_1.BaseContract._bigNumberToString), 1), _newTokenDetails = _a[0];
                                encodedData = self._lookupEthersInterface('updateTokenDetails(string)').functions.updateTokenDetails.encode([_newTokenDetails
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
            getABIEncodedTransactionData: function (_newTokenDetails) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('updateTokenDetails(string)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_newTokenDetails
                ], base_contract_1.BaseContract._bigNumberToString), 1), _newTokenDetails = _a[0];
                var abiEncodedTransactionData = self._lookupEthersInterface('updateTokenDetails(string)').functions.updateTokenDetails.encode([_newTokenDetails
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_newTokenDetails, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'updateTokenDetails(string)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_newTokenDetails
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _newTokenDetails = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_newTokenDetails
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.updateTokenDetails;
                                encodedData = ethersFunction.encode([_newTokenDetails
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'updateTokenDetails' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.changeGranularity = {
            sendTransactionAsync: function (_granularity, txData, factor) {
                if (txData === void 0) { txData = {}; }
                if (factor === void 0) { factor = 1.2; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('changeGranularity(uint256)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_granularity
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _granularity = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_granularity
                                ]);
                                encodedData = self._lookupEthersInterface('changeGranularity(uint256)').functions.changeGranularity.encode([_granularity
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.changeGranularity.estimateGasAsync.bind(self, _granularity, factor))];
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
            estimateGasAsync: function (_granularity, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas, networkGasLimit, _factorGas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('changeGranularity(uint256)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_granularity
                                ], base_contract_1.BaseContract._bigNumberToString), 1), _granularity = _a[0];
                                encodedData = self._lookupEthersInterface('changeGranularity(uint256)').functions.changeGranularity.encode([_granularity
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
            getABIEncodedTransactionData: function (_granularity) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('changeGranularity(uint256)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_granularity
                ], base_contract_1.BaseContract._bigNumberToString), 1), _granularity = _a[0];
                var abiEncodedTransactionData = self._lookupEthersInterface('changeGranularity(uint256)').functions.changeGranularity.encode([_granularity
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_granularity, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'changeGranularity(uint256)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_granularity
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _granularity = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_granularity
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.changeGranularity;
                                encodedData = ethersFunction.encode([_granularity
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'changeGranularity' }).outputs;
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
        _this.getInvestorsAt = {
            callAsync: function (_checkpointId, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'getInvestorsAt(uint256)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_checkpointId
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _checkpointId = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_checkpointId
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.getInvestorsAt;
                                encodedData = ethersFunction.encode([_checkpointId
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'getInvestorsAt' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.iterateInvestors = {
            callAsync: function (_start, _end, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'iterateInvestors(uint256,uint256)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_start,
                                    _end
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), _start = _a[0], _end = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_start,
                                    _end
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.iterateInvestors;
                                encodedData = ethersFunction.encode([_start,
                                    _end
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'iterateInvestors' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.getInvestorCount = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'getInvestorCount()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.getInvestorCount;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'getInvestorCount' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.freezeTransfers = {
            sendTransactionAsync: function (txData, factor) {
                if (txData === void 0) { txData = {}; }
                if (factor === void 0) { factor = 1.2; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('freezeTransfers()').inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                encodedData = self._lookupEthersInterface('freezeTransfers()').functions.freezeTransfers.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.freezeTransfers.estimateGasAsync.bind(self, factor))];
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
                                inputAbi = self._lookupAbi('freezeTransfers()').inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString);
                                encodedData = self._lookupEthersInterface('freezeTransfers()').functions.freezeTransfers.encode([]);
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
                var inputAbi = self._lookupAbi('freezeTransfers()').inputs;
                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString);
                var abiEncodedTransactionData = self._lookupEthersInterface('freezeTransfers()').functions.freezeTransfers.encode([]);
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
                                functionSignature = 'freezeTransfers()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.freezeTransfers;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'freezeTransfers' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.unfreezeTransfers = {
            sendTransactionAsync: function (txData, factor) {
                if (txData === void 0) { txData = {}; }
                if (factor === void 0) { factor = 1.2; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('unfreezeTransfers()').inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                encodedData = self._lookupEthersInterface('unfreezeTransfers()').functions.unfreezeTransfers.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.unfreezeTransfers.estimateGasAsync.bind(self, factor))];
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
                                inputAbi = self._lookupAbi('unfreezeTransfers()').inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString);
                                encodedData = self._lookupEthersInterface('unfreezeTransfers()').functions.unfreezeTransfers.encode([]);
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
                var inputAbi = self._lookupAbi('unfreezeTransfers()').inputs;
                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString);
                var abiEncodedTransactionData = self._lookupEthersInterface('unfreezeTransfers()').functions.unfreezeTransfers.encode([]);
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
                                functionSignature = 'unfreezeTransfers()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.unfreezeTransfers;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'unfreezeTransfers' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.transfer = {
            sendTransactionAsync: function (_to, _value, txData, factor) {
                if (txData === void 0) { txData = {}; }
                if (factor === void 0) { factor = 1.2; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('transfer(address,uint256)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_to,
                                    _value
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), _to = _a[0], _value = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_to,
                                    _value
                                ]);
                                encodedData = self._lookupEthersInterface('transfer(address,uint256)').functions.transfer.encode([_to,
                                    _value
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.transfer.estimateGasAsync.bind(self, _to, _value, factor))];
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
            estimateGasAsync: function (_to, _value, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas, networkGasLimit, _factorGas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('transfer(address,uint256)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_to,
                                    _value
                                ], base_contract_1.BaseContract._bigNumberToString), 2), _to = _a[0], _value = _a[1];
                                encodedData = self._lookupEthersInterface('transfer(address,uint256)').functions.transfer.encode([_to,
                                    _value
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
            getABIEncodedTransactionData: function (_to, _value) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('transfer(address,uint256)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_to,
                    _value
                ], base_contract_1.BaseContract._bigNumberToString), 2), _to = _a[0], _value = _a[1];
                var abiEncodedTransactionData = self._lookupEthersInterface('transfer(address,uint256)').functions.transfer.encode([_to,
                    _value
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_to, _value, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'transfer(address,uint256)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_to,
                                    _value
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), _to = _a[0], _value = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_to,
                                    _value
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.transfer;
                                encodedData = ethersFunction.encode([_to,
                                    _value
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'transfer' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.transferWithData = {
            sendTransactionAsync: function (_to, _value, _data, txData, factor) {
                if (txData === void 0) { txData = {}; }
                if (factor === void 0) { factor = 1.2; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('transferWithData(address,uint256,bytes)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_to,
                                    _value,
                                    _data
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 3), _to = _a[0], _value = _a[1], _data = _a[2];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_to,
                                    _value,
                                    _data
                                ]);
                                encodedData = self._lookupEthersInterface('transferWithData(address,uint256,bytes)').functions.transferWithData.encode([_to,
                                    _value,
                                    _data
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.transferWithData.estimateGasAsync.bind(self, _to, _value, _data, factor))];
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
            estimateGasAsync: function (_to, _value, _data, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas, networkGasLimit, _factorGas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('transferWithData(address,uint256,bytes)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_to,
                                    _value,
                                    _data
                                ], base_contract_1.BaseContract._bigNumberToString), 3), _to = _a[0], _value = _a[1], _data = _a[2];
                                encodedData = self._lookupEthersInterface('transferWithData(address,uint256,bytes)').functions.transferWithData.encode([_to,
                                    _value,
                                    _data
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
            getABIEncodedTransactionData: function (_to, _value, _data) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('transferWithData(address,uint256,bytes)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_to,
                    _value,
                    _data
                ], base_contract_1.BaseContract._bigNumberToString), 3), _to = _a[0], _value = _a[1], _data = _a[2];
                var abiEncodedTransactionData = self._lookupEthersInterface('transferWithData(address,uint256,bytes)').functions.transferWithData.encode([_to,
                    _value,
                    _data
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_to, _value, _data, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'transferWithData(address,uint256,bytes)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_to,
                                    _value,
                                    _data
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 3), _to = _a[0], _value = _a[1], _data = _a[2];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_to,
                                    _value,
                                    _data
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.transferWithData;
                                encodedData = ethersFunction.encode([_to,
                                    _value,
                                    _data
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'transferWithData' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.transferFrom = {
            sendTransactionAsync: function (_from, _to, _value, txData, factor) {
                if (txData === void 0) { txData = {}; }
                if (factor === void 0) { factor = 1.2; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('transferFrom(address,address,uint256)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _to,
                                    _value
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 3), _from = _a[0], _to = _a[1], _value = _a[2];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
                                    _to,
                                    _value
                                ]);
                                encodedData = self._lookupEthersInterface('transferFrom(address,address,uint256)').functions.transferFrom.encode([_from,
                                    _to,
                                    _value
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.transferFrom.estimateGasAsync.bind(self, _from, _to, _value, factor))];
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
            estimateGasAsync: function (_from, _to, _value, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas, networkGasLimit, _factorGas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('transferFrom(address,address,uint256)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _to,
                                    _value
                                ], base_contract_1.BaseContract._bigNumberToString), 3), _from = _a[0], _to = _a[1], _value = _a[2];
                                encodedData = self._lookupEthersInterface('transferFrom(address,address,uint256)').functions.transferFrom.encode([_from,
                                    _to,
                                    _value
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
            getABIEncodedTransactionData: function (_from, _to, _value) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('transferFrom(address,address,uint256)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                    _to,
                    _value
                ], base_contract_1.BaseContract._bigNumberToString), 3), _from = _a[0], _to = _a[1], _value = _a[2];
                var abiEncodedTransactionData = self._lookupEthersInterface('transferFrom(address,address,uint256)').functions.transferFrom.encode([_from,
                    _to,
                    _value
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_from, _to, _value, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'transferFrom(address,address,uint256)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _to,
                                    _value
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 3), _from = _a[0], _to = _a[1], _value = _a[2];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
                                    _to,
                                    _value
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.transferFrom;
                                encodedData = ethersFunction.encode([_from,
                                    _to,
                                    _value
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'transferFrom' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.transferFromWithData = {
            sendTransactionAsync: function (_from, _to, _value, _data, txData, factor) {
                if (txData === void 0) { txData = {}; }
                if (factor === void 0) { factor = 1.2; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('transferFromWithData(address,address,uint256,bytes)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _to,
                                    _value,
                                    _data
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 4), _from = _a[0], _to = _a[1], _value = _a[2], _data = _a[3];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
                                    _to,
                                    _value,
                                    _data
                                ]);
                                encodedData = self._lookupEthersInterface('transferFromWithData(address,address,uint256,bytes)').functions.transferFromWithData.encode([_from,
                                    _to,
                                    _value,
                                    _data
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.transferFromWithData.estimateGasAsync.bind(self, _from, _to, _value, _data, factor))];
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
            estimateGasAsync: function (_from, _to, _value, _data, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas, networkGasLimit, _factorGas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('transferFromWithData(address,address,uint256,bytes)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _to,
                                    _value,
                                    _data
                                ], base_contract_1.BaseContract._bigNumberToString), 4), _from = _a[0], _to = _a[1], _value = _a[2], _data = _a[3];
                                encodedData = self._lookupEthersInterface('transferFromWithData(address,address,uint256,bytes)').functions.transferFromWithData.encode([_from,
                                    _to,
                                    _value,
                                    _data
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
            getABIEncodedTransactionData: function (_from, _to, _value, _data) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('transferFromWithData(address,address,uint256,bytes)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                    _to,
                    _value,
                    _data
                ], base_contract_1.BaseContract._bigNumberToString), 4), _from = _a[0], _to = _a[1], _value = _a[2], _data = _a[3];
                var abiEncodedTransactionData = self._lookupEthersInterface('transferFromWithData(address,address,uint256,bytes)').functions.transferFromWithData.encode([_from,
                    _to,
                    _value,
                    _data
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_from, _to, _value, _data, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'transferFromWithData(address,address,uint256,bytes)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _to,
                                    _value,
                                    _data
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 4), _from = _a[0], _to = _a[1], _value = _a[2], _data = _a[3];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
                                    _to,
                                    _value,
                                    _data
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.transferFromWithData;
                                encodedData = ethersFunction.encode([_from,
                                    _to,
                                    _value,
                                    _data
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'transferFromWithData' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.verifyTransfer = {
            sendTransactionAsync: function (_from, _to, _value, _data, txData, factor) {
                if (txData === void 0) { txData = {}; }
                if (factor === void 0) { factor = 1.2; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('verifyTransfer(address,address,uint256,bytes)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _to,
                                    _value,
                                    _data
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 4), _from = _a[0], _to = _a[1], _value = _a[2], _data = _a[3];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
                                    _to,
                                    _value,
                                    _data
                                ]);
                                encodedData = self._lookupEthersInterface('verifyTransfer(address,address,uint256,bytes)').functions.verifyTransfer.encode([_from,
                                    _to,
                                    _value,
                                    _data
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.verifyTransfer.estimateGasAsync.bind(self, _from, _to, _value, _data, factor))];
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
            estimateGasAsync: function (_from, _to, _value, _data, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas, networkGasLimit, _factorGas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('verifyTransfer(address,address,uint256,bytes)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _to,
                                    _value,
                                    _data
                                ], base_contract_1.BaseContract._bigNumberToString), 4), _from = _a[0], _to = _a[1], _value = _a[2], _data = _a[3];
                                encodedData = self._lookupEthersInterface('verifyTransfer(address,address,uint256,bytes)').functions.verifyTransfer.encode([_from,
                                    _to,
                                    _value,
                                    _data
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
            getABIEncodedTransactionData: function (_from, _to, _value, _data) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('verifyTransfer(address,address,uint256,bytes)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                    _to,
                    _value,
                    _data
                ], base_contract_1.BaseContract._bigNumberToString), 4), _from = _a[0], _to = _a[1], _value = _a[2], _data = _a[3];
                var abiEncodedTransactionData = self._lookupEthersInterface('verifyTransfer(address,address,uint256,bytes)').functions.verifyTransfer.encode([_from,
                    _to,
                    _value,
                    _data
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_from, _to, _value, _data, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'verifyTransfer(address,address,uint256,bytes)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _to,
                                    _value,
                                    _data
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 4), _from = _a[0], _to = _a[1], _value = _a[2], _data = _a[3];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
                                    _to,
                                    _value,
                                    _data
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.verifyTransfer;
                                encodedData = ethersFunction.encode([_from,
                                    _to,
                                    _value,
                                    _data
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
        _this.freezeMinting = {
            sendTransactionAsync: function (txData, factor) {
                if (txData === void 0) { txData = {}; }
                if (factor === void 0) { factor = 1.2; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('freezeMinting()').inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                encodedData = self._lookupEthersInterface('freezeMinting()').functions.freezeMinting.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.freezeMinting.estimateGasAsync.bind(self, factor))];
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
                                inputAbi = self._lookupAbi('freezeMinting()').inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString);
                                encodedData = self._lookupEthersInterface('freezeMinting()').functions.freezeMinting.encode([]);
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
                var inputAbi = self._lookupAbi('freezeMinting()').inputs;
                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString);
                var abiEncodedTransactionData = self._lookupEthersInterface('freezeMinting()').functions.freezeMinting.encode([]);
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
                                functionSignature = 'freezeMinting()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.freezeMinting;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'freezeMinting' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.mint = {
            sendTransactionAsync: function (_investor, _value, txData, factor) {
                if (txData === void 0) { txData = {}; }
                if (factor === void 0) { factor = 1.2; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('mint(address,uint256)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_investor,
                                    _value
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), _investor = _a[0], _value = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_investor,
                                    _value
                                ]);
                                encodedData = self._lookupEthersInterface('mint(address,uint256)').functions.mint.encode([_investor,
                                    _value
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.mint.estimateGasAsync.bind(self, _investor, _value, factor))];
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
            estimateGasAsync: function (_investor, _value, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas, networkGasLimit, _factorGas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('mint(address,uint256)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_investor,
                                    _value
                                ], base_contract_1.BaseContract._bigNumberToString), 2), _investor = _a[0], _value = _a[1];
                                encodedData = self._lookupEthersInterface('mint(address,uint256)').functions.mint.encode([_investor,
                                    _value
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
            getABIEncodedTransactionData: function (_investor, _value) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('mint(address,uint256)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_investor,
                    _value
                ], base_contract_1.BaseContract._bigNumberToString), 2), _investor = _a[0], _value = _a[1];
                var abiEncodedTransactionData = self._lookupEthersInterface('mint(address,uint256)').functions.mint.encode([_investor,
                    _value
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_investor, _value, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'mint(address,uint256)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_investor,
                                    _value
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), _investor = _a[0], _value = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_investor,
                                    _value
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.mint;
                                encodedData = ethersFunction.encode([_investor,
                                    _value
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'mint' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.mintWithData = {
            sendTransactionAsync: function (_investor, _value, _data, txData, factor) {
                if (txData === void 0) { txData = {}; }
                if (factor === void 0) { factor = 1.2; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('mintWithData(address,uint256,bytes)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_investor,
                                    _value,
                                    _data
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 3), _investor = _a[0], _value = _a[1], _data = _a[2];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_investor,
                                    _value,
                                    _data
                                ]);
                                encodedData = self._lookupEthersInterface('mintWithData(address,uint256,bytes)').functions.mintWithData.encode([_investor,
                                    _value,
                                    _data
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.mintWithData.estimateGasAsync.bind(self, _investor, _value, _data, factor))];
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
            estimateGasAsync: function (_investor, _value, _data, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas, networkGasLimit, _factorGas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('mintWithData(address,uint256,bytes)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_investor,
                                    _value,
                                    _data
                                ], base_contract_1.BaseContract._bigNumberToString), 3), _investor = _a[0], _value = _a[1], _data = _a[2];
                                encodedData = self._lookupEthersInterface('mintWithData(address,uint256,bytes)').functions.mintWithData.encode([_investor,
                                    _value,
                                    _data
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
            getABIEncodedTransactionData: function (_investor, _value, _data) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('mintWithData(address,uint256,bytes)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_investor,
                    _value,
                    _data
                ], base_contract_1.BaseContract._bigNumberToString), 3), _investor = _a[0], _value = _a[1], _data = _a[2];
                var abiEncodedTransactionData = self._lookupEthersInterface('mintWithData(address,uint256,bytes)').functions.mintWithData.encode([_investor,
                    _value,
                    _data
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_investor, _value, _data, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'mintWithData(address,uint256,bytes)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_investor,
                                    _value,
                                    _data
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 3), _investor = _a[0], _value = _a[1], _data = _a[2];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_investor,
                                    _value,
                                    _data
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.mintWithData;
                                encodedData = ethersFunction.encode([_investor,
                                    _value,
                                    _data
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'mintWithData' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.mintMulti = {
            sendTransactionAsync: function (_investors, _values, txData, factor) {
                if (txData === void 0) { txData = {}; }
                if (factor === void 0) { factor = 1.2; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('mintMulti(address[],uint256[])').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_investors,
                                    _values
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), _investors = _a[0], _values = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_investors,
                                    _values
                                ]);
                                encodedData = self._lookupEthersInterface('mintMulti(address[],uint256[])').functions.mintMulti.encode([_investors,
                                    _values
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.mintMulti.estimateGasAsync.bind(self, _investors, _values, factor))];
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
            estimateGasAsync: function (_investors, _values, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas, networkGasLimit, _factorGas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('mintMulti(address[],uint256[])').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_investors,
                                    _values
                                ], base_contract_1.BaseContract._bigNumberToString), 2), _investors = _a[0], _values = _a[1];
                                encodedData = self._lookupEthersInterface('mintMulti(address[],uint256[])').functions.mintMulti.encode([_investors,
                                    _values
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
            getABIEncodedTransactionData: function (_investors, _values) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('mintMulti(address[],uint256[])').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_investors,
                    _values
                ], base_contract_1.BaseContract._bigNumberToString), 2), _investors = _a[0], _values = _a[1];
                var abiEncodedTransactionData = self._lookupEthersInterface('mintMulti(address[],uint256[])').functions.mintMulti.encode([_investors,
                    _values
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_investors, _values, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'mintMulti(address[],uint256[])';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_investors,
                                    _values
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), _investors = _a[0], _values = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_investors,
                                    _values
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.mintMulti;
                                encodedData = ethersFunction.encode([_investors,
                                    _values
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'mintMulti' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.checkPermission = {
            callAsync: function (_delegate, _module, _perm, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'checkPermission(address,address,bytes32)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_delegate,
                                    _module,
                                    _perm
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 3), _delegate = _a[0], _module = _a[1], _perm = _a[2];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_delegate,
                                    _module,
                                    _perm
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.checkPermission;
                                encodedData = ethersFunction.encode([_delegate,
                                    _module,
                                    _perm
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'checkPermission' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.burnWithData = {
            sendTransactionAsync: function (_value, _data, txData, factor) {
                if (txData === void 0) { txData = {}; }
                if (factor === void 0) { factor = 1.2; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('burnWithData(uint256,bytes)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_value,
                                    _data
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), _value = _a[0], _data = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_value,
                                    _data
                                ]);
                                encodedData = self._lookupEthersInterface('burnWithData(uint256,bytes)').functions.burnWithData.encode([_value,
                                    _data
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.burnWithData.estimateGasAsync.bind(self, _value, _data, factor))];
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
            estimateGasAsync: function (_value, _data, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas, networkGasLimit, _factorGas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('burnWithData(uint256,bytes)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_value,
                                    _data
                                ], base_contract_1.BaseContract._bigNumberToString), 2), _value = _a[0], _data = _a[1];
                                encodedData = self._lookupEthersInterface('burnWithData(uint256,bytes)').functions.burnWithData.encode([_value,
                                    _data
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
            getABIEncodedTransactionData: function (_value, _data) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('burnWithData(uint256,bytes)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_value,
                    _data
                ], base_contract_1.BaseContract._bigNumberToString), 2), _value = _a[0], _data = _a[1];
                var abiEncodedTransactionData = self._lookupEthersInterface('burnWithData(uint256,bytes)').functions.burnWithData.encode([_value,
                    _data
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_value, _data, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'burnWithData(uint256,bytes)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_value,
                                    _data
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), _value = _a[0], _data = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_value,
                                    _data
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.burnWithData;
                                encodedData = ethersFunction.encode([_value,
                                    _data
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'burnWithData' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.burnFromWithData = {
            sendTransactionAsync: function (_from, _value, _data, txData, factor) {
                if (txData === void 0) { txData = {}; }
                if (factor === void 0) { factor = 1.2; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('burnFromWithData(address,uint256,bytes)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _value,
                                    _data
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 3), _from = _a[0], _value = _a[1], _data = _a[2];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
                                    _value,
                                    _data
                                ]);
                                encodedData = self._lookupEthersInterface('burnFromWithData(address,uint256,bytes)').functions.burnFromWithData.encode([_from,
                                    _value,
                                    _data
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.burnFromWithData.estimateGasAsync.bind(self, _from, _value, _data, factor))];
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
            estimateGasAsync: function (_from, _value, _data, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas, networkGasLimit, _factorGas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('burnFromWithData(address,uint256,bytes)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _value,
                                    _data
                                ], base_contract_1.BaseContract._bigNumberToString), 3), _from = _a[0], _value = _a[1], _data = _a[2];
                                encodedData = self._lookupEthersInterface('burnFromWithData(address,uint256,bytes)').functions.burnFromWithData.encode([_from,
                                    _value,
                                    _data
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
            getABIEncodedTransactionData: function (_from, _value, _data) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('burnFromWithData(address,uint256,bytes)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                    _value,
                    _data
                ], base_contract_1.BaseContract._bigNumberToString), 3), _from = _a[0], _value = _a[1], _data = _a[2];
                var abiEncodedTransactionData = self._lookupEthersInterface('burnFromWithData(address,uint256,bytes)').functions.burnFromWithData.encode([_from,
                    _value,
                    _data
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_from, _value, _data, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'burnFromWithData(address,uint256,bytes)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _value,
                                    _data
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 3), _from = _a[0], _value = _a[1], _data = _a[2];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
                                    _value,
                                    _data
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.burnFromWithData;
                                encodedData = ethersFunction.encode([_from,
                                    _value,
                                    _data
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'burnFromWithData' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.createCheckpoint = {
            sendTransactionAsync: function (txData, factor) {
                if (txData === void 0) { txData = {}; }
                if (factor === void 0) { factor = 1.2; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('createCheckpoint()').inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                encodedData = self._lookupEthersInterface('createCheckpoint()').functions.createCheckpoint.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.createCheckpoint.estimateGasAsync.bind(self, factor))];
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
                                inputAbi = self._lookupAbi('createCheckpoint()').inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString);
                                encodedData = self._lookupEthersInterface('createCheckpoint()').functions.createCheckpoint.encode([]);
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
                var inputAbi = self._lookupAbi('createCheckpoint()').inputs;
                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString);
                var abiEncodedTransactionData = self._lookupEthersInterface('createCheckpoint()').functions.createCheckpoint.encode([]);
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
                                functionSignature = 'createCheckpoint()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.createCheckpoint;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'createCheckpoint' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.getCheckpointTimes = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'getCheckpointTimes()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.getCheckpointTimes;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'getCheckpointTimes' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.totalSupplyAt = {
            callAsync: function (_checkpointId, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'totalSupplyAt(uint256)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_checkpointId
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _checkpointId = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_checkpointId
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.totalSupplyAt;
                                encodedData = ethersFunction.encode([_checkpointId
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'totalSupplyAt' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.balanceOfAt = {
            callAsync: function (_investor, _checkpointId, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'balanceOfAt(address,uint256)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_investor,
                                    _checkpointId
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), _investor = _a[0], _checkpointId = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_investor,
                                    _checkpointId
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.balanceOfAt;
                                encodedData = ethersFunction.encode([_investor,
                                    _checkpointId
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'balanceOfAt' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.setController = {
            sendTransactionAsync: function (_controller, txData, factor) {
                if (txData === void 0) { txData = {}; }
                if (factor === void 0) { factor = 1.2; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('setController(address)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_controller
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _controller = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_controller
                                ]);
                                encodedData = self._lookupEthersInterface('setController(address)').functions.setController.encode([_controller
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.setController.estimateGasAsync.bind(self, _controller, factor))];
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
            estimateGasAsync: function (_controller, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas, networkGasLimit, _factorGas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('setController(address)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_controller
                                ], base_contract_1.BaseContract._bigNumberToString), 1), _controller = _a[0];
                                encodedData = self._lookupEthersInterface('setController(address)').functions.setController.encode([_controller
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
            getABIEncodedTransactionData: function (_controller) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('setController(address)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_controller
                ], base_contract_1.BaseContract._bigNumberToString), 1), _controller = _a[0];
                var abiEncodedTransactionData = self._lookupEthersInterface('setController(address)').functions.setController.encode([_controller
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_controller, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'setController(address)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_controller
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _controller = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_controller
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.setController;
                                encodedData = ethersFunction.encode([_controller
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'setController' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.disableController = {
            sendTransactionAsync: function (txData, factor) {
                if (txData === void 0) { txData = {}; }
                if (factor === void 0) { factor = 1.2; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('disableController()').inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                encodedData = self._lookupEthersInterface('disableController()').functions.disableController.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.disableController.estimateGasAsync.bind(self, factor))];
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
                                inputAbi = self._lookupAbi('disableController()').inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString);
                                encodedData = self._lookupEthersInterface('disableController()').functions.disableController.encode([]);
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
                var inputAbi = self._lookupAbi('disableController()').inputs;
                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString);
                var abiEncodedTransactionData = self._lookupEthersInterface('disableController()').functions.disableController.encode([]);
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
                                functionSignature = 'disableController()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.disableController;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'disableController' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.forceTransfer = {
            sendTransactionAsync: function (_from, _to, _value, _data, _log, txData, factor) {
                if (txData === void 0) { txData = {}; }
                if (factor === void 0) { factor = 1.2; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('forceTransfer(address,address,uint256,bytes,bytes)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _to,
                                    _value,
                                    _data,
                                    _log
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 5), _from = _a[0], _to = _a[1], _value = _a[2], _data = _a[3], _log = _a[4];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
                                    _to,
                                    _value,
                                    _data,
                                    _log
                                ]);
                                encodedData = self._lookupEthersInterface('forceTransfer(address,address,uint256,bytes,bytes)').functions.forceTransfer.encode([_from,
                                    _to,
                                    _value,
                                    _data,
                                    _log
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.forceTransfer.estimateGasAsync.bind(self, _from, _to, _value, _data, _log, factor))];
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
            estimateGasAsync: function (_from, _to, _value, _data, _log, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas, networkGasLimit, _factorGas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('forceTransfer(address,address,uint256,bytes,bytes)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _to,
                                    _value,
                                    _data,
                                    _log
                                ], base_contract_1.BaseContract._bigNumberToString), 5), _from = _a[0], _to = _a[1], _value = _a[2], _data = _a[3], _log = _a[4];
                                encodedData = self._lookupEthersInterface('forceTransfer(address,address,uint256,bytes,bytes)').functions.forceTransfer.encode([_from,
                                    _to,
                                    _value,
                                    _data,
                                    _log
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
            getABIEncodedTransactionData: function (_from, _to, _value, _data, _log) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('forceTransfer(address,address,uint256,bytes,bytes)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                    _to,
                    _value,
                    _data,
                    _log
                ], base_contract_1.BaseContract._bigNumberToString), 5), _from = _a[0], _to = _a[1], _value = _a[2], _data = _a[3], _log = _a[4];
                var abiEncodedTransactionData = self._lookupEthersInterface('forceTransfer(address,address,uint256,bytes,bytes)').functions.forceTransfer.encode([_from,
                    _to,
                    _value,
                    _data,
                    _log
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_from, _to, _value, _data, _log, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'forceTransfer(address,address,uint256,bytes,bytes)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _to,
                                    _value,
                                    _data,
                                    _log
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 5), _from = _a[0], _to = _a[1], _value = _a[2], _data = _a[3], _log = _a[4];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
                                    _to,
                                    _value,
                                    _data,
                                    _log
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.forceTransfer;
                                encodedData = ethersFunction.encode([_from,
                                    _to,
                                    _value,
                                    _data,
                                    _log
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'forceTransfer' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.forceBurn = {
            sendTransactionAsync: function (_from, _value, _data, _log, txData, factor) {
                if (txData === void 0) { txData = {}; }
                if (factor === void 0) { factor = 1.2; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('forceBurn(address,uint256,bytes,bytes)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _value,
                                    _data,
                                    _log
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 4), _from = _a[0], _value = _a[1], _data = _a[2], _log = _a[3];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
                                    _value,
                                    _data,
                                    _log
                                ]);
                                encodedData = self._lookupEthersInterface('forceBurn(address,uint256,bytes,bytes)').functions.forceBurn.encode([_from,
                                    _value,
                                    _data,
                                    _log
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.forceBurn.estimateGasAsync.bind(self, _from, _value, _data, _log, factor))];
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
            estimateGasAsync: function (_from, _value, _data, _log, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas, networkGasLimit, _factorGas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('forceBurn(address,uint256,bytes,bytes)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _value,
                                    _data,
                                    _log
                                ], base_contract_1.BaseContract._bigNumberToString), 4), _from = _a[0], _value = _a[1], _data = _a[2], _log = _a[3];
                                encodedData = self._lookupEthersInterface('forceBurn(address,uint256,bytes,bytes)').functions.forceBurn.encode([_from,
                                    _value,
                                    _data,
                                    _log
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
            getABIEncodedTransactionData: function (_from, _value, _data, _log) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('forceBurn(address,uint256,bytes,bytes)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                    _value,
                    _data,
                    _log
                ], base_contract_1.BaseContract._bigNumberToString), 4), _from = _a[0], _value = _a[1], _data = _a[2], _log = _a[3];
                var abiEncodedTransactionData = self._lookupEthersInterface('forceBurn(address,uint256,bytes,bytes)').functions.forceBurn.encode([_from,
                    _value,
                    _data,
                    _log
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_from, _value, _data, _log, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'forceBurn(address,uint256,bytes,bytes)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _value,
                                    _data,
                                    _log
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 4), _from = _a[0], _value = _a[1], _data = _a[2], _log = _a[3];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
                                    _value,
                                    _data,
                                    _log
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.forceBurn;
                                encodedData = ethersFunction.encode([_from,
                                    _value,
                                    _data,
                                    _log
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'forceBurn' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.getVersion = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'getVersion()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.getVersion;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'getVersion' }).outputs;
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
    return SecurityTokenContract;
}(base_contract_1.BaseContract)); // tslint:disable:max-file-line-count
exports.SecurityTokenContract = SecurityTokenContract;
// tslint:enable:no-unbound-method
//# sourceMappingURL=security_token.js.map