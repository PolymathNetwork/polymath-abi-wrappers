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
var ManualApprovalTransferManagerEvents;
(function (ManualApprovalTransferManagerEvents) {
    ManualApprovalTransferManagerEvents["AddManualApproval"] = "AddManualApproval";
    ManualApprovalTransferManagerEvents["ModifyManualApproval"] = "ModifyManualApproval";
    ManualApprovalTransferManagerEvents["RevokeManualApproval"] = "RevokeManualApproval";
    ManualApprovalTransferManagerEvents["Pause"] = "Pause";
    ManualApprovalTransferManagerEvents["Unpause"] = "Unpause";
})(ManualApprovalTransferManagerEvents = exports.ManualApprovalTransferManagerEvents || (exports.ManualApprovalTransferManagerEvents = {}));
/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
var ManualApprovalTransferManagerContract = /** @class */ (function (_super) {
    __extends(ManualApprovalTransferManagerContract, _super);
    function ManualApprovalTransferManagerContract(abi, address, provider, txDefaults, defaultEstimateGasFactor) {
        var _this = _super.call(this, 'ManualApprovalTransferManager', abi, address, provider, txDefaults) || this;
        _this.unpause = {
            sendTransactionAsync: function (txData, estimateGasFactor) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('unpause()').inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                encodedData = self._lookupEthersInterface('unpause()').functions.unpause.encode([]);
                                return [4 /*yield*/, self._web3Wrapper.getAvailableAddressesAsync()];
                            case 1:
                                defaultFromAddress = (_a.sent())[0];
                                contractDefaults = _.defaults(self._web3Wrapper.getContractDefaults(), {
                                    from: defaultFromAddress
                                });
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), contractDefaults, self.unpause.estimateGasAsync.bind(self, estimateGasFactor))];
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
                                inputAbi = self._lookupAbi('unpause()').inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString);
                                encodedData = self._lookupEthersInterface('unpause()').functions.unpause.encode([]);
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
        _this.approvalIndex = {
            callAsync: function (index_0, index_1, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'approvalIndex(address,address)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [index_0,
                                    index_1
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), index_0 = _a[0], index_1 = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [index_0,
                                    index_1
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.approvalIndex;
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
                                outputAbi = _.find(self.abi, { name: 'approvalIndex' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.takeFee = {
            sendTransactionAsync: function (_amount, txData, estimateGasFactor) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, txHash, receipt;
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
                                return [4 /*yield*/, self._web3Wrapper.getAvailableAddressesAsync()];
                            case 1:
                                defaultFromAddress = (_b.sent())[0];
                                contractDefaults = _.defaults(self._web3Wrapper.getContractDefaults(), {
                                    from: defaultFromAddress
                                });
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), contractDefaults, self.takeFee.estimateGasAsync.bind(self, _amount, estimateGasFactor))];
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
            estimateGasAsync: function (_amount, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, gas, networkGasLimit, _factor, _safetyGasEstimation;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('takeFee(uint256)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_amount
                                ], base_contract_1.BaseContract._bigNumberToString), 1), _amount = _a[0];
                                encodedData = self._lookupEthersInterface('takeFee(uint256)').functions.takeFee.encode([_amount
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
        _this.approvals = {
            callAsync: function (index_0, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'approvals(uint256)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [index_0
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), index_0 = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [index_0
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.approvals;
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
                                outputAbi = _.find(self.abi, { name: 'approvals' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
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
            sendTransactionAsync: function (txData, estimateGasFactor) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('pause()').inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                encodedData = self._lookupEthersInterface('pause()').functions.pause.encode([]);
                                return [4 /*yield*/, self._web3Wrapper.getAvailableAddressesAsync()];
                            case 1:
                                defaultFromAddress = (_a.sent())[0];
                                contractDefaults = _.defaults(self._web3Wrapper.getContractDefaults(), {
                                    from: defaultFromAddress
                                });
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), contractDefaults, self.pause.estimateGasAsync.bind(self, estimateGasFactor))];
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
                                inputAbi = self._lookupAbi('pause()').inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString);
                                encodedData = self._lookupEthersInterface('pause()').functions.pause.encode([]);
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
        _this.TRANSFER_APPROVAL = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'TRANSFER_APPROVAL()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.TRANSFER_APPROVAL;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'TRANSFER_APPROVAL' }).outputs;
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
        _this.verifyTransfer = {
            sendTransactionAsync: function (_from, _to, _amount, index_3, _isTransfer, txData, estimateGasFactor) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('verifyTransfer(address,address,uint256,bytes,bool)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _to,
                                    _amount,
                                    index_3,
                                    _isTransfer
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 5), _from = _a[0], _to = _a[1], _amount = _a[2], index_3 = _a[3], _isTransfer = _a[4];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
                                    _to,
                                    _amount,
                                    index_3,
                                    _isTransfer
                                ]);
                                encodedData = self._lookupEthersInterface('verifyTransfer(address,address,uint256,bytes,bool)').functions.verifyTransfer.encode([_from,
                                    _to,
                                    _amount,
                                    index_3,
                                    _isTransfer
                                ]);
                                return [4 /*yield*/, self._web3Wrapper.getAvailableAddressesAsync()];
                            case 1:
                                defaultFromAddress = (_b.sent())[0];
                                contractDefaults = _.defaults(self._web3Wrapper.getContractDefaults(), {
                                    from: defaultFromAddress
                                });
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), contractDefaults, self.verifyTransfer.estimateGasAsync.bind(self, _from, _to, _amount, index_3, _isTransfer, estimateGasFactor))];
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
            estimateGasAsync: function (_from, _to, _amount, index_3, _isTransfer, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, gas, networkGasLimit, _factor, _safetyGasEstimation;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('verifyTransfer(address,address,uint256,bytes,bool)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _to,
                                    _amount,
                                    index_3,
                                    _isTransfer
                                ], base_contract_1.BaseContract._bigNumberToString), 5), _from = _a[0], _to = _a[1], _amount = _a[2], index_3 = _a[3], _isTransfer = _a[4];
                                encodedData = self._lookupEthersInterface('verifyTransfer(address,address,uint256,bytes,bool)').functions.verifyTransfer.encode([_from,
                                    _to,
                                    _amount,
                                    index_3,
                                    _isTransfer
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
            getABIEncodedTransactionData: function (_from, _to, _amount, index_3, _isTransfer) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('verifyTransfer(address,address,uint256,bytes,bool)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                    _to,
                    _amount,
                    index_3,
                    _isTransfer
                ], base_contract_1.BaseContract._bigNumberToString), 5), _from = _a[0], _to = _a[1], _amount = _a[2], index_3 = _a[3], _isTransfer = _a[4];
                var abiEncodedTransactionData = self._lookupEthersInterface('verifyTransfer(address,address,uint256,bytes,bool)').functions.verifyTransfer.encode([_from,
                    _to,
                    _amount,
                    index_3,
                    _isTransfer
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_from, _to, _amount, index_3, _isTransfer, callData, defaultBlock) {
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
                                    _amount,
                                    index_3,
                                    _isTransfer
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 5), _from = _a[0], _to = _a[1], _amount = _a[2], index_3 = _a[3], _isTransfer = _a[4];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
                                    _to,
                                    _amount,
                                    index_3,
                                    _isTransfer
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.verifyTransfer;
                                encodedData = ethersFunction.encode([_from,
                                    _to,
                                    _amount,
                                    index_3,
                                    _isTransfer
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
        _this.addManualApproval = {
            sendTransactionAsync: function (_from, _to, _allowance, _expiryTime, _description, txData, estimateGasFactor) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('addManualApproval(address,address,uint256,uint256,bytes32)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _to,
                                    _allowance,
                                    _expiryTime,
                                    _description
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 5), _from = _a[0], _to = _a[1], _allowance = _a[2], _expiryTime = _a[3], _description = _a[4];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
                                    _to,
                                    _allowance,
                                    _expiryTime,
                                    _description
                                ]);
                                encodedData = self._lookupEthersInterface('addManualApproval(address,address,uint256,uint256,bytes32)').functions.addManualApproval.encode([_from,
                                    _to,
                                    _allowance,
                                    _expiryTime,
                                    _description
                                ]);
                                return [4 /*yield*/, self._web3Wrapper.getAvailableAddressesAsync()];
                            case 1:
                                defaultFromAddress = (_b.sent())[0];
                                contractDefaults = _.defaults(self._web3Wrapper.getContractDefaults(), {
                                    from: defaultFromAddress
                                });
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), contractDefaults, self.addManualApproval.estimateGasAsync.bind(self, _from, _to, _allowance, _expiryTime, _description, estimateGasFactor))];
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
            estimateGasAsync: function (_from, _to, _allowance, _expiryTime, _description, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, gas, networkGasLimit, _factor, _safetyGasEstimation;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('addManualApproval(address,address,uint256,uint256,bytes32)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _to,
                                    _allowance,
                                    _expiryTime,
                                    _description
                                ], base_contract_1.BaseContract._bigNumberToString), 5), _from = _a[0], _to = _a[1], _allowance = _a[2], _expiryTime = _a[3], _description = _a[4];
                                encodedData = self._lookupEthersInterface('addManualApproval(address,address,uint256,uint256,bytes32)').functions.addManualApproval.encode([_from,
                                    _to,
                                    _allowance,
                                    _expiryTime,
                                    _description
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
            getABIEncodedTransactionData: function (_from, _to, _allowance, _expiryTime, _description) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('addManualApproval(address,address,uint256,uint256,bytes32)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                    _to,
                    _allowance,
                    _expiryTime,
                    _description
                ], base_contract_1.BaseContract._bigNumberToString), 5), _from = _a[0], _to = _a[1], _allowance = _a[2], _expiryTime = _a[3], _description = _a[4];
                var abiEncodedTransactionData = self._lookupEthersInterface('addManualApproval(address,address,uint256,uint256,bytes32)').functions.addManualApproval.encode([_from,
                    _to,
                    _allowance,
                    _expiryTime,
                    _description
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_from, _to, _allowance, _expiryTime, _description, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'addManualApproval(address,address,uint256,uint256,bytes32)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _to,
                                    _allowance,
                                    _expiryTime,
                                    _description
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 5), _from = _a[0], _to = _a[1], _allowance = _a[2], _expiryTime = _a[3], _description = _a[4];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
                                    _to,
                                    _allowance,
                                    _expiryTime,
                                    _description
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.addManualApproval;
                                encodedData = ethersFunction.encode([_from,
                                    _to,
                                    _allowance,
                                    _expiryTime,
                                    _description
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'addManualApproval' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.addManualApprovalMulti = {
            sendTransactionAsync: function (_from, _to, _allowances, _expiryTimes, _descriptions, txData, estimateGasFactor) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('addManualApprovalMulti(address[],address[],uint256[],uint256[],bytes32[])').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _to,
                                    _allowances,
                                    _expiryTimes,
                                    _descriptions
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 5), _from = _a[0], _to = _a[1], _allowances = _a[2], _expiryTimes = _a[3], _descriptions = _a[4];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
                                    _to,
                                    _allowances,
                                    _expiryTimes,
                                    _descriptions
                                ]);
                                encodedData = self._lookupEthersInterface('addManualApprovalMulti(address[],address[],uint256[],uint256[],bytes32[])').functions.addManualApprovalMulti.encode([_from,
                                    _to,
                                    _allowances,
                                    _expiryTimes,
                                    _descriptions
                                ]);
                                return [4 /*yield*/, self._web3Wrapper.getAvailableAddressesAsync()];
                            case 1:
                                defaultFromAddress = (_b.sent())[0];
                                contractDefaults = _.defaults(self._web3Wrapper.getContractDefaults(), {
                                    from: defaultFromAddress
                                });
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), contractDefaults, self.addManualApprovalMulti.estimateGasAsync.bind(self, _from, _to, _allowances, _expiryTimes, _descriptions, estimateGasFactor))];
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
            estimateGasAsync: function (_from, _to, _allowances, _expiryTimes, _descriptions, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, gas, networkGasLimit, _factor, _safetyGasEstimation;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('addManualApprovalMulti(address[],address[],uint256[],uint256[],bytes32[])').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _to,
                                    _allowances,
                                    _expiryTimes,
                                    _descriptions
                                ], base_contract_1.BaseContract._bigNumberToString), 5), _from = _a[0], _to = _a[1], _allowances = _a[2], _expiryTimes = _a[3], _descriptions = _a[4];
                                encodedData = self._lookupEthersInterface('addManualApprovalMulti(address[],address[],uint256[],uint256[],bytes32[])').functions.addManualApprovalMulti.encode([_from,
                                    _to,
                                    _allowances,
                                    _expiryTimes,
                                    _descriptions
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
            getABIEncodedTransactionData: function (_from, _to, _allowances, _expiryTimes, _descriptions) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('addManualApprovalMulti(address[],address[],uint256[],uint256[],bytes32[])').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                    _to,
                    _allowances,
                    _expiryTimes,
                    _descriptions
                ], base_contract_1.BaseContract._bigNumberToString), 5), _from = _a[0], _to = _a[1], _allowances = _a[2], _expiryTimes = _a[3], _descriptions = _a[4];
                var abiEncodedTransactionData = self._lookupEthersInterface('addManualApprovalMulti(address[],address[],uint256[],uint256[],bytes32[])').functions.addManualApprovalMulti.encode([_from,
                    _to,
                    _allowances,
                    _expiryTimes,
                    _descriptions
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_from, _to, _allowances, _expiryTimes, _descriptions, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'addManualApprovalMulti(address[],address[],uint256[],uint256[],bytes32[])';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _to,
                                    _allowances,
                                    _expiryTimes,
                                    _descriptions
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 5), _from = _a[0], _to = _a[1], _allowances = _a[2], _expiryTimes = _a[3], _descriptions = _a[4];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
                                    _to,
                                    _allowances,
                                    _expiryTimes,
                                    _descriptions
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.addManualApprovalMulti;
                                encodedData = ethersFunction.encode([_from,
                                    _to,
                                    _allowances,
                                    _expiryTimes,
                                    _descriptions
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'addManualApprovalMulti' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.modifyManualApproval = {
            sendTransactionAsync: function (_from, _to, _expiryTime, _changedAllowance, _description, _change, txData, estimateGasFactor) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('modifyManualApproval(address,address,uint256,uint256,bytes32,uint8)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _to,
                                    _expiryTime,
                                    _changedAllowance,
                                    _description,
                                    _change
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 6), _from = _a[0], _to = _a[1], _expiryTime = _a[2], _changedAllowance = _a[3], _description = _a[4], _change = _a[5];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
                                    _to,
                                    _expiryTime,
                                    _changedAllowance,
                                    _description,
                                    _change
                                ]);
                                encodedData = self._lookupEthersInterface('modifyManualApproval(address,address,uint256,uint256,bytes32,uint8)').functions.modifyManualApproval.encode([_from,
                                    _to,
                                    _expiryTime,
                                    _changedAllowance,
                                    _description,
                                    _change
                                ]);
                                return [4 /*yield*/, self._web3Wrapper.getAvailableAddressesAsync()];
                            case 1:
                                defaultFromAddress = (_b.sent())[0];
                                contractDefaults = _.defaults(self._web3Wrapper.getContractDefaults(), {
                                    from: defaultFromAddress
                                });
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), contractDefaults, self.modifyManualApproval.estimateGasAsync.bind(self, _from, _to, _expiryTime, _changedAllowance, _description, _change, estimateGasFactor))];
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
            estimateGasAsync: function (_from, _to, _expiryTime, _changedAllowance, _description, _change, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, gas, networkGasLimit, _factor, _safetyGasEstimation;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('modifyManualApproval(address,address,uint256,uint256,bytes32,uint8)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _to,
                                    _expiryTime,
                                    _changedAllowance,
                                    _description,
                                    _change
                                ], base_contract_1.BaseContract._bigNumberToString), 6), _from = _a[0], _to = _a[1], _expiryTime = _a[2], _changedAllowance = _a[3], _description = _a[4], _change = _a[5];
                                encodedData = self._lookupEthersInterface('modifyManualApproval(address,address,uint256,uint256,bytes32,uint8)').functions.modifyManualApproval.encode([_from,
                                    _to,
                                    _expiryTime,
                                    _changedAllowance,
                                    _description,
                                    _change
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
            getABIEncodedTransactionData: function (_from, _to, _expiryTime, _changedAllowance, _description, _change) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('modifyManualApproval(address,address,uint256,uint256,bytes32,uint8)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                    _to,
                    _expiryTime,
                    _changedAllowance,
                    _description,
                    _change
                ], base_contract_1.BaseContract._bigNumberToString), 6), _from = _a[0], _to = _a[1], _expiryTime = _a[2], _changedAllowance = _a[3], _description = _a[4], _change = _a[5];
                var abiEncodedTransactionData = self._lookupEthersInterface('modifyManualApproval(address,address,uint256,uint256,bytes32,uint8)').functions.modifyManualApproval.encode([_from,
                    _to,
                    _expiryTime,
                    _changedAllowance,
                    _description,
                    _change
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_from, _to, _expiryTime, _changedAllowance, _description, _change, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'modifyManualApproval(address,address,uint256,uint256,bytes32,uint8)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _to,
                                    _expiryTime,
                                    _changedAllowance,
                                    _description,
                                    _change
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 6), _from = _a[0], _to = _a[1], _expiryTime = _a[2], _changedAllowance = _a[3], _description = _a[4], _change = _a[5];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
                                    _to,
                                    _expiryTime,
                                    _changedAllowance,
                                    _description,
                                    _change
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.modifyManualApproval;
                                encodedData = ethersFunction.encode([_from,
                                    _to,
                                    _expiryTime,
                                    _changedAllowance,
                                    _description,
                                    _change
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'modifyManualApproval' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.modifyManualApprovalMulti = {
            sendTransactionAsync: function (_from, _to, _expiryTimes, _changedAllowances, _descriptions, _changes, txData, estimateGasFactor) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('modifyManualApprovalMulti(address[],address[],uint256[],uint256[],bytes32[],uint8[])').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _to,
                                    _expiryTimes,
                                    _changedAllowances,
                                    _descriptions,
                                    _changes
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 6), _from = _a[0], _to = _a[1], _expiryTimes = _a[2], _changedAllowances = _a[3], _descriptions = _a[4], _changes = _a[5];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
                                    _to,
                                    _expiryTimes,
                                    _changedAllowances,
                                    _descriptions,
                                    _changes
                                ]);
                                encodedData = self._lookupEthersInterface('modifyManualApprovalMulti(address[],address[],uint256[],uint256[],bytes32[],uint8[])').functions.modifyManualApprovalMulti.encode([_from,
                                    _to,
                                    _expiryTimes,
                                    _changedAllowances,
                                    _descriptions,
                                    _changes
                                ]);
                                return [4 /*yield*/, self._web3Wrapper.getAvailableAddressesAsync()];
                            case 1:
                                defaultFromAddress = (_b.sent())[0];
                                contractDefaults = _.defaults(self._web3Wrapper.getContractDefaults(), {
                                    from: defaultFromAddress
                                });
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), contractDefaults, self.modifyManualApprovalMulti.estimateGasAsync.bind(self, _from, _to, _expiryTimes, _changedAllowances, _descriptions, _changes, estimateGasFactor))];
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
            estimateGasAsync: function (_from, _to, _expiryTimes, _changedAllowances, _descriptions, _changes, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, gas, networkGasLimit, _factor, _safetyGasEstimation;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('modifyManualApprovalMulti(address[],address[],uint256[],uint256[],bytes32[],uint8[])').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _to,
                                    _expiryTimes,
                                    _changedAllowances,
                                    _descriptions,
                                    _changes
                                ], base_contract_1.BaseContract._bigNumberToString), 6), _from = _a[0], _to = _a[1], _expiryTimes = _a[2], _changedAllowances = _a[3], _descriptions = _a[4], _changes = _a[5];
                                encodedData = self._lookupEthersInterface('modifyManualApprovalMulti(address[],address[],uint256[],uint256[],bytes32[],uint8[])').functions.modifyManualApprovalMulti.encode([_from,
                                    _to,
                                    _expiryTimes,
                                    _changedAllowances,
                                    _descriptions,
                                    _changes
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
            getABIEncodedTransactionData: function (_from, _to, _expiryTimes, _changedAllowances, _descriptions, _changes) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('modifyManualApprovalMulti(address[],address[],uint256[],uint256[],bytes32[],uint8[])').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                    _to,
                    _expiryTimes,
                    _changedAllowances,
                    _descriptions,
                    _changes
                ], base_contract_1.BaseContract._bigNumberToString), 6), _from = _a[0], _to = _a[1], _expiryTimes = _a[2], _changedAllowances = _a[3], _descriptions = _a[4], _changes = _a[5];
                var abiEncodedTransactionData = self._lookupEthersInterface('modifyManualApprovalMulti(address[],address[],uint256[],uint256[],bytes32[],uint8[])').functions.modifyManualApprovalMulti.encode([_from,
                    _to,
                    _expiryTimes,
                    _changedAllowances,
                    _descriptions,
                    _changes
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_from, _to, _expiryTimes, _changedAllowances, _descriptions, _changes, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'modifyManualApprovalMulti(address[],address[],uint256[],uint256[],bytes32[],uint8[])';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _to,
                                    _expiryTimes,
                                    _changedAllowances,
                                    _descriptions,
                                    _changes
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 6), _from = _a[0], _to = _a[1], _expiryTimes = _a[2], _changedAllowances = _a[3], _descriptions = _a[4], _changes = _a[5];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
                                    _to,
                                    _expiryTimes,
                                    _changedAllowances,
                                    _descriptions,
                                    _changes
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.modifyManualApprovalMulti;
                                encodedData = ethersFunction.encode([_from,
                                    _to,
                                    _expiryTimes,
                                    _changedAllowances,
                                    _descriptions,
                                    _changes
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'modifyManualApprovalMulti' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.revokeManualApproval = {
            sendTransactionAsync: function (_from, _to, txData, estimateGasFactor) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('revokeManualApproval(address,address)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _to
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), _from = _a[0], _to = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
                                    _to
                                ]);
                                encodedData = self._lookupEthersInterface('revokeManualApproval(address,address)').functions.revokeManualApproval.encode([_from,
                                    _to
                                ]);
                                return [4 /*yield*/, self._web3Wrapper.getAvailableAddressesAsync()];
                            case 1:
                                defaultFromAddress = (_b.sent())[0];
                                contractDefaults = _.defaults(self._web3Wrapper.getContractDefaults(), {
                                    from: defaultFromAddress
                                });
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), contractDefaults, self.revokeManualApproval.estimateGasAsync.bind(self, _from, _to, estimateGasFactor))];
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
            estimateGasAsync: function (_from, _to, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, gas, networkGasLimit, _factor, _safetyGasEstimation;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('revokeManualApproval(address,address)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _to
                                ], base_contract_1.BaseContract._bigNumberToString), 2), _from = _a[0], _to = _a[1];
                                encodedData = self._lookupEthersInterface('revokeManualApproval(address,address)').functions.revokeManualApproval.encode([_from,
                                    _to
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
            getABIEncodedTransactionData: function (_from, _to) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('revokeManualApproval(address,address)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                    _to
                ], base_contract_1.BaseContract._bigNumberToString), 2), _from = _a[0], _to = _a[1];
                var abiEncodedTransactionData = self._lookupEthersInterface('revokeManualApproval(address,address)').functions.revokeManualApproval.encode([_from,
                    _to
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_from, _to, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'revokeManualApproval(address,address)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _to
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), _from = _a[0], _to = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
                                    _to
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.revokeManualApproval;
                                encodedData = ethersFunction.encode([_from,
                                    _to
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'revokeManualApproval' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.revokeManualApprovalMulti = {
            sendTransactionAsync: function (_from, _to, txData, estimateGasFactor) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('revokeManualApprovalMulti(address[],address[])').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _to
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), _from = _a[0], _to = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
                                    _to
                                ]);
                                encodedData = self._lookupEthersInterface('revokeManualApprovalMulti(address[],address[])').functions.revokeManualApprovalMulti.encode([_from,
                                    _to
                                ]);
                                return [4 /*yield*/, self._web3Wrapper.getAvailableAddressesAsync()];
                            case 1:
                                defaultFromAddress = (_b.sent())[0];
                                contractDefaults = _.defaults(self._web3Wrapper.getContractDefaults(), {
                                    from: defaultFromAddress
                                });
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), contractDefaults, self.revokeManualApprovalMulti.estimateGasAsync.bind(self, _from, _to, estimateGasFactor))];
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
            estimateGasAsync: function (_from, _to, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, gas, networkGasLimit, _factor, _safetyGasEstimation;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('revokeManualApprovalMulti(address[],address[])').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _to
                                ], base_contract_1.BaseContract._bigNumberToString), 2), _from = _a[0], _to = _a[1];
                                encodedData = self._lookupEthersInterface('revokeManualApprovalMulti(address[],address[])').functions.revokeManualApprovalMulti.encode([_from,
                                    _to
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
            getABIEncodedTransactionData: function (_from, _to) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('revokeManualApprovalMulti(address[],address[])').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                    _to
                ], base_contract_1.BaseContract._bigNumberToString), 2), _from = _a[0], _to = _a[1];
                var abiEncodedTransactionData = self._lookupEthersInterface('revokeManualApprovalMulti(address[],address[])').functions.revokeManualApprovalMulti.encode([_from,
                    _to
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_from, _to, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'revokeManualApprovalMulti(address[],address[])';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _to
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), _from = _a[0], _to = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
                                    _to
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.revokeManualApprovalMulti;
                                encodedData = ethersFunction.encode([_from,
                                    _to
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'revokeManualApprovalMulti' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.getActiveApprovalsToUser = {
            callAsync: function (_user, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'getActiveApprovalsToUser(address)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_user
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _user = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_user
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.getActiveApprovalsToUser;
                                encodedData = ethersFunction.encode([_user
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'getActiveApprovalsToUser' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.getApprovalDetails = {
            callAsync: function (_from, _to, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'getApprovalDetails(address,address)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                                    _to
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), _from = _a[0], _to = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
                                    _to
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.getApprovalDetails;
                                encodedData = ethersFunction.encode([_from,
                                    _to
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'getApprovalDetails' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.getTotalApprovalsLength = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'getTotalApprovalsLength()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.getTotalApprovalsLength;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'getTotalApprovalsLength' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.getAllApprovals = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'getAllApprovals()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.getAllApprovals;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'getAllApprovals' }).outputs;
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
        _this._defaultEstimateGasFactor = _.isUndefined(defaultEstimateGasFactor) ? 1 : defaultEstimateGasFactor;
        _this._web3Wrapper.abiDecoder.addABI(abi);
        utils_1.classUtils.bindAll(_this, ['_ethersInterfacesByFunctionSignature', 'address', 'abi', '_web3Wrapper', '_defaultEstimateGasFactor']);
        return _this;
    }
    return ManualApprovalTransferManagerContract;
}(base_contract_1.BaseContract)); // tslint:disable:max-file-line-count
exports.ManualApprovalTransferManagerContract = ManualApprovalTransferManagerContract;
// tslint:enable:no-unbound-method
//# sourceMappingURL=manual_approval_transfer_manager.js.map