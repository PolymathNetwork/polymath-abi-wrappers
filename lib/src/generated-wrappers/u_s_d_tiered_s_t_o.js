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
var USDTieredSTOEvents;
(function (USDTieredSTOEvents) {
    USDTieredSTOEvents["SetAllowBeneficialInvestments"] = "SetAllowBeneficialInvestments";
    USDTieredSTOEvents["SetNonAccreditedLimit"] = "SetNonAccreditedLimit";
    USDTieredSTOEvents["SetAccredited"] = "SetAccredited";
    USDTieredSTOEvents["TokenPurchase"] = "TokenPurchase";
    USDTieredSTOEvents["FundsReceived"] = "FundsReceived";
    USDTieredSTOEvents["ReserveTokenMint"] = "ReserveTokenMint";
    USDTieredSTOEvents["SetAddresses"] = "SetAddresses";
    USDTieredSTOEvents["SetLimits"] = "SetLimits";
    USDTieredSTOEvents["SetTimes"] = "SetTimes";
    USDTieredSTOEvents["SetTiers"] = "SetTiers";
    USDTieredSTOEvents["SetFundRaiseTypes"] = "SetFundRaiseTypes";
    USDTieredSTOEvents["Pause"] = "Pause";
    USDTieredSTOEvents["Unpause"] = "Unpause";
})(USDTieredSTOEvents = exports.USDTieredSTOEvents || (exports.USDTieredSTOEvents = {}));
/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
var USDTieredSTOContract = /** @class */ (function (_super) {
    __extends(USDTieredSTOContract, _super);
    function USDTieredSTOContract(abi, address, provider, txDefaults, defaultEstimateGasFactor) {
        var _this = _super.call(this, 'USDTieredSTO', abi, address, provider, txDefaults) || this;
        _this.tiers = {
            callAsync: function (index_0, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'tiers(uint256)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [index_0
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), index_0 = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [index_0
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.tiers;
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
                                outputAbi = _.find(self.abi, { name: 'tiers' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.reclaimETH = {
            sendTransactionAsync: function (txData, estimateGasFactor) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('reclaimETH()').inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                encodedData = self._lookupEthersInterface('reclaimETH()').functions.reclaimETH.encode([]);
                                return [4 /*yield*/, self._web3Wrapper.getAvailableAddressesAsync()];
                            case 1:
                                defaultFromAddress = (_a.sent())[0];
                                contractDefaults = _.defaults(self._web3Wrapper.getContractDefaults(), {
                                    from: defaultFromAddress
                                });
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), contractDefaults, self.reclaimETH.estimateGasAsync.bind(self, estimateGasFactor))];
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
                                inputAbi = self._lookupAbi('reclaimETH()').inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString);
                                encodedData = self._lookupEthersInterface('reclaimETH()').functions.reclaimETH.encode([]);
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
                var inputAbi = self._lookupAbi('reclaimETH()').inputs;
                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString);
                var abiEncodedTransactionData = self._lookupEthersInterface('reclaimETH()').functions.reclaimETH.encode([]);
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
                                functionSignature = 'reclaimETH()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.reclaimETH;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'reclaimETH' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.investorsList = {
            callAsync: function (index_0, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'investorsList(uint256)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [index_0
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), index_0 = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [index_0
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.investorsList;
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
                                outputAbi = _.find(self.abi, { name: 'investorsList' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.allowBeneficialInvestments = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'allowBeneficialInvestments()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.allowBeneficialInvestments;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'allowBeneficialInvestments' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.endTime = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'endTime()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.endTime;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'endTime' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
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
        _this.nonAccreditedLimitUSD = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'nonAccreditedLimitUSD()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.nonAccreditedLimitUSD;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'nonAccreditedLimitUSD' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.wallet = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'wallet()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.wallet;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'wallet' }).outputs;
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
        _this.totalTokensSold = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'totalTokensSold()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.totalTokensSold;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'totalTokensSold' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.finalAmountReturned = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'finalAmountReturned()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.finalAmountReturned;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'finalAmountReturned' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
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
                                functionSignature = 'investors(address)';
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
        _this.stableCoinsRaised = {
            callAsync: function (index_0, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'stableCoinsRaised(address)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [index_0
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), index_0 = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [index_0
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.stableCoinsRaised;
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
                                outputAbi = _.find(self.abi, { name: 'stableCoinsRaised' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.startTime = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'startTime()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.startTime;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'startTime' }).outputs;
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
        _this.investorInvested = {
            callAsync: function (index_0, index_1, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'investorInvested(address,uint8)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [index_0,
                                    index_1
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), index_0 = _a[0], index_1 = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [index_0,
                                    index_1
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.investorInvested;
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
                                outputAbi = _.find(self.abi, { name: 'investorInvested' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
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
        _this.usdTokenEnabled = {
            callAsync: function (index_0, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'usdTokenEnabled(address)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [index_0
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), index_0 = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [index_0
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.usdTokenEnabled;
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
                                outputAbi = _.find(self.abi, { name: 'usdTokenEnabled' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.isFinalized = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'isFinalized()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.isFinalized;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'isFinalized' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.ETH_ORACLE = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'ETH_ORACLE()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.ETH_ORACLE;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'ETH_ORACLE' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.getRaised = {
            callAsync: function (_fundRaiseType, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'getRaised(uint8)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_fundRaiseType
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _fundRaiseType = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_fundRaiseType
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.getRaised;
                                encodedData = ethersFunction.encode([_fundRaiseType
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'getRaised' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.POLY_ORACLE = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'POLY_ORACLE()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.POLY_ORACLE;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'POLY_ORACLE' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.pausedTime = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'pausedTime()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.pausedTime;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'pausedTime' }).outputs;
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
        _this.usdTokens = {
            callAsync: function (index_0, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'usdTokens(uint256)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [index_0
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), index_0 = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [index_0
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.usdTokens;
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
                                outputAbi = _.find(self.abi, { name: 'usdTokens' }).outputs;
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
        _this.fundsRaised = {
            callAsync: function (index_0, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'fundsRaised(uint8)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [index_0
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), index_0 = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [index_0
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.fundsRaised;
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
                                outputAbi = _.find(self.abi, { name: 'fundsRaised' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.investorInvestedUSD = {
            callAsync: function (index_0, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'investorInvestedUSD(address)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [index_0
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), index_0 = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [index_0
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.investorInvestedUSD;
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
                                outputAbi = _.find(self.abi, { name: 'investorInvestedUSD' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.fundRaiseTypes = {
            callAsync: function (index_0, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'fundRaiseTypes(uint8)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [index_0
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), index_0 = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [index_0
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.fundRaiseTypes;
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
                                outputAbi = _.find(self.abi, { name: 'fundRaiseTypes' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.currentTier = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'currentTier()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.currentTier;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'currentTier' }).outputs;
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
        _this.reserveWallet = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'reserveWallet()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.reserveWallet;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'reserveWallet' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.investorCount = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'investorCount()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.investorCount;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'investorCount' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.minimumInvestmentUSD = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'minimumInvestmentUSD()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.minimumInvestmentUSD;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'minimumInvestmentUSD' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.fundsRaisedUSD = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'fundsRaisedUSD()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.fundsRaisedUSD;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'fundsRaisedUSD' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.configure = {
            sendTransactionAsync: function (_startTime, _endTime, _ratePerTier, _ratePerTierDiscountPoly, _tokensPerTierTotal, _tokensPerTierDiscountPoly, _nonAccreditedLimitUSD, _minimumInvestmentUSD, _fundRaiseTypes, _wallet, _reserveWallet, _usdTokens, txData, estimateGasFactor) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('configure(uint256,uint256,uint256[],uint256[],uint256[],uint256[],uint256,uint256,uint8[],address,address,address[])').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_startTime,
                                    _endTime,
                                    _ratePerTier,
                                    _ratePerTierDiscountPoly,
                                    _tokensPerTierTotal,
                                    _tokensPerTierDiscountPoly,
                                    _nonAccreditedLimitUSD,
                                    _minimumInvestmentUSD,
                                    _fundRaiseTypes,
                                    _wallet,
                                    _reserveWallet,
                                    _usdTokens
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 12), _startTime = _a[0], _endTime = _a[1], _ratePerTier = _a[2], _ratePerTierDiscountPoly = _a[3], _tokensPerTierTotal = _a[4], _tokensPerTierDiscountPoly = _a[5], _nonAccreditedLimitUSD = _a[6], _minimumInvestmentUSD = _a[7], _fundRaiseTypes = _a[8], _wallet = _a[9], _reserveWallet = _a[10], _usdTokens = _a[11];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_startTime,
                                    _endTime,
                                    _ratePerTier,
                                    _ratePerTierDiscountPoly,
                                    _tokensPerTierTotal,
                                    _tokensPerTierDiscountPoly,
                                    _nonAccreditedLimitUSD,
                                    _minimumInvestmentUSD,
                                    _fundRaiseTypes,
                                    _wallet,
                                    _reserveWallet,
                                    _usdTokens
                                ]);
                                encodedData = self._lookupEthersInterface('configure(uint256,uint256,uint256[],uint256[],uint256[],uint256[],uint256,uint256,uint8[],address,address,address[])').functions.configure.encode([_startTime,
                                    _endTime,
                                    _ratePerTier,
                                    _ratePerTierDiscountPoly,
                                    _tokensPerTierTotal,
                                    _tokensPerTierDiscountPoly,
                                    _nonAccreditedLimitUSD,
                                    _minimumInvestmentUSD,
                                    _fundRaiseTypes,
                                    _wallet,
                                    _reserveWallet,
                                    _usdTokens
                                ]);
                                return [4 /*yield*/, self._web3Wrapper.getAvailableAddressesAsync()];
                            case 1:
                                defaultFromAddress = (_b.sent())[0];
                                contractDefaults = _.defaults(self._web3Wrapper.getContractDefaults(), {
                                    from: defaultFromAddress
                                });
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), contractDefaults, self.configure.estimateGasAsync.bind(self, _startTime, _endTime, _ratePerTier, _ratePerTierDiscountPoly, _tokensPerTierTotal, _tokensPerTierDiscountPoly, _nonAccreditedLimitUSD, _minimumInvestmentUSD, _fundRaiseTypes, _wallet, _reserveWallet, _usdTokens, estimateGasFactor))];
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
            estimateGasAsync: function (_startTime, _endTime, _ratePerTier, _ratePerTierDiscountPoly, _tokensPerTierTotal, _tokensPerTierDiscountPoly, _nonAccreditedLimitUSD, _minimumInvestmentUSD, _fundRaiseTypes, _wallet, _reserveWallet, _usdTokens, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, gas, networkGasLimit, _factor, _safetyGasEstimation;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('configure(uint256,uint256,uint256[],uint256[],uint256[],uint256[],uint256,uint256,uint8[],address,address,address[])').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_startTime,
                                    _endTime,
                                    _ratePerTier,
                                    _ratePerTierDiscountPoly,
                                    _tokensPerTierTotal,
                                    _tokensPerTierDiscountPoly,
                                    _nonAccreditedLimitUSD,
                                    _minimumInvestmentUSD,
                                    _fundRaiseTypes,
                                    _wallet,
                                    _reserveWallet,
                                    _usdTokens
                                ], base_contract_1.BaseContract._bigNumberToString), 12), _startTime = _a[0], _endTime = _a[1], _ratePerTier = _a[2], _ratePerTierDiscountPoly = _a[3], _tokensPerTierTotal = _a[4], _tokensPerTierDiscountPoly = _a[5], _nonAccreditedLimitUSD = _a[6], _minimumInvestmentUSD = _a[7], _fundRaiseTypes = _a[8], _wallet = _a[9], _reserveWallet = _a[10], _usdTokens = _a[11];
                                encodedData = self._lookupEthersInterface('configure(uint256,uint256,uint256[],uint256[],uint256[],uint256[],uint256,uint256,uint8[],address,address,address[])').functions.configure.encode([_startTime,
                                    _endTime,
                                    _ratePerTier,
                                    _ratePerTierDiscountPoly,
                                    _tokensPerTierTotal,
                                    _tokensPerTierDiscountPoly,
                                    _nonAccreditedLimitUSD,
                                    _minimumInvestmentUSD,
                                    _fundRaiseTypes,
                                    _wallet,
                                    _reserveWallet,
                                    _usdTokens
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
            getABIEncodedTransactionData: function (_startTime, _endTime, _ratePerTier, _ratePerTierDiscountPoly, _tokensPerTierTotal, _tokensPerTierDiscountPoly, _nonAccreditedLimitUSD, _minimumInvestmentUSD, _fundRaiseTypes, _wallet, _reserveWallet, _usdTokens) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('configure(uint256,uint256,uint256[],uint256[],uint256[],uint256[],uint256,uint256,uint8[],address,address,address[])').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_startTime,
                    _endTime,
                    _ratePerTier,
                    _ratePerTierDiscountPoly,
                    _tokensPerTierTotal,
                    _tokensPerTierDiscountPoly,
                    _nonAccreditedLimitUSD,
                    _minimumInvestmentUSD,
                    _fundRaiseTypes,
                    _wallet,
                    _reserveWallet,
                    _usdTokens
                ], base_contract_1.BaseContract._bigNumberToString), 12), _startTime = _a[0], _endTime = _a[1], _ratePerTier = _a[2], _ratePerTierDiscountPoly = _a[3], _tokensPerTierTotal = _a[4], _tokensPerTierDiscountPoly = _a[5], _nonAccreditedLimitUSD = _a[6], _minimumInvestmentUSD = _a[7], _fundRaiseTypes = _a[8], _wallet = _a[9], _reserveWallet = _a[10], _usdTokens = _a[11];
                var abiEncodedTransactionData = self._lookupEthersInterface('configure(uint256,uint256,uint256[],uint256[],uint256[],uint256[],uint256,uint256,uint8[],address,address,address[])').functions.configure.encode([_startTime,
                    _endTime,
                    _ratePerTier,
                    _ratePerTierDiscountPoly,
                    _tokensPerTierTotal,
                    _tokensPerTierDiscountPoly,
                    _nonAccreditedLimitUSD,
                    _minimumInvestmentUSD,
                    _fundRaiseTypes,
                    _wallet,
                    _reserveWallet,
                    _usdTokens
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_startTime, _endTime, _ratePerTier, _ratePerTierDiscountPoly, _tokensPerTierTotal, _tokensPerTierDiscountPoly, _nonAccreditedLimitUSD, _minimumInvestmentUSD, _fundRaiseTypes, _wallet, _reserveWallet, _usdTokens, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'configure(uint256,uint256,uint256[],uint256[],uint256[],uint256[],uint256,uint256,uint8[],address,address,address[])';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_startTime,
                                    _endTime,
                                    _ratePerTier,
                                    _ratePerTierDiscountPoly,
                                    _tokensPerTierTotal,
                                    _tokensPerTierDiscountPoly,
                                    _nonAccreditedLimitUSD,
                                    _minimumInvestmentUSD,
                                    _fundRaiseTypes,
                                    _wallet,
                                    _reserveWallet,
                                    _usdTokens
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 12), _startTime = _a[0], _endTime = _a[1], _ratePerTier = _a[2], _ratePerTierDiscountPoly = _a[3], _tokensPerTierTotal = _a[4], _tokensPerTierDiscountPoly = _a[5], _nonAccreditedLimitUSD = _a[6], _minimumInvestmentUSD = _a[7], _fundRaiseTypes = _a[8], _wallet = _a[9], _reserveWallet = _a[10], _usdTokens = _a[11];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_startTime,
                                    _endTime,
                                    _ratePerTier,
                                    _ratePerTierDiscountPoly,
                                    _tokensPerTierTotal,
                                    _tokensPerTierDiscountPoly,
                                    _nonAccreditedLimitUSD,
                                    _minimumInvestmentUSD,
                                    _fundRaiseTypes,
                                    _wallet,
                                    _reserveWallet,
                                    _usdTokens
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.configure;
                                encodedData = ethersFunction.encode([_startTime,
                                    _endTime,
                                    _ratePerTier,
                                    _ratePerTierDiscountPoly,
                                    _tokensPerTierTotal,
                                    _tokensPerTierDiscountPoly,
                                    _nonAccreditedLimitUSD,
                                    _minimumInvestmentUSD,
                                    _fundRaiseTypes,
                                    _wallet,
                                    _reserveWallet,
                                    _usdTokens
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'configure' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.modifyFunding = {
            sendTransactionAsync: function (_fundRaiseTypes, txData, estimateGasFactor) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('modifyFunding(uint8[])').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_fundRaiseTypes
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _fundRaiseTypes = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_fundRaiseTypes
                                ]);
                                encodedData = self._lookupEthersInterface('modifyFunding(uint8[])').functions.modifyFunding.encode([_fundRaiseTypes
                                ]);
                                return [4 /*yield*/, self._web3Wrapper.getAvailableAddressesAsync()];
                            case 1:
                                defaultFromAddress = (_b.sent())[0];
                                contractDefaults = _.defaults(self._web3Wrapper.getContractDefaults(), {
                                    from: defaultFromAddress
                                });
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), contractDefaults, self.modifyFunding.estimateGasAsync.bind(self, _fundRaiseTypes, estimateGasFactor))];
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
            estimateGasAsync: function (_fundRaiseTypes, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, gas, networkGasLimit, _factor, _safetyGasEstimation;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('modifyFunding(uint8[])').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_fundRaiseTypes
                                ], base_contract_1.BaseContract._bigNumberToString), 1), _fundRaiseTypes = _a[0];
                                encodedData = self._lookupEthersInterface('modifyFunding(uint8[])').functions.modifyFunding.encode([_fundRaiseTypes
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
            getABIEncodedTransactionData: function (_fundRaiseTypes) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('modifyFunding(uint8[])').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_fundRaiseTypes
                ], base_contract_1.BaseContract._bigNumberToString), 1), _fundRaiseTypes = _a[0];
                var abiEncodedTransactionData = self._lookupEthersInterface('modifyFunding(uint8[])').functions.modifyFunding.encode([_fundRaiseTypes
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_fundRaiseTypes, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'modifyFunding(uint8[])';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_fundRaiseTypes
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _fundRaiseTypes = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_fundRaiseTypes
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.modifyFunding;
                                encodedData = ethersFunction.encode([_fundRaiseTypes
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'modifyFunding' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.modifyLimits = {
            sendTransactionAsync: function (_nonAccreditedLimitUSD, _minimumInvestmentUSD, txData, estimateGasFactor) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('modifyLimits(uint256,uint256)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_nonAccreditedLimitUSD,
                                    _minimumInvestmentUSD
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), _nonAccreditedLimitUSD = _a[0], _minimumInvestmentUSD = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_nonAccreditedLimitUSD,
                                    _minimumInvestmentUSD
                                ]);
                                encodedData = self._lookupEthersInterface('modifyLimits(uint256,uint256)').functions.modifyLimits.encode([_nonAccreditedLimitUSD,
                                    _minimumInvestmentUSD
                                ]);
                                return [4 /*yield*/, self._web3Wrapper.getAvailableAddressesAsync()];
                            case 1:
                                defaultFromAddress = (_b.sent())[0];
                                contractDefaults = _.defaults(self._web3Wrapper.getContractDefaults(), {
                                    from: defaultFromAddress
                                });
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), contractDefaults, self.modifyLimits.estimateGasAsync.bind(self, _nonAccreditedLimitUSD, _minimumInvestmentUSD, estimateGasFactor))];
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
            estimateGasAsync: function (_nonAccreditedLimitUSD, _minimumInvestmentUSD, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, gas, networkGasLimit, _factor, _safetyGasEstimation;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('modifyLimits(uint256,uint256)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_nonAccreditedLimitUSD,
                                    _minimumInvestmentUSD
                                ], base_contract_1.BaseContract._bigNumberToString), 2), _nonAccreditedLimitUSD = _a[0], _minimumInvestmentUSD = _a[1];
                                encodedData = self._lookupEthersInterface('modifyLimits(uint256,uint256)').functions.modifyLimits.encode([_nonAccreditedLimitUSD,
                                    _minimumInvestmentUSD
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
            getABIEncodedTransactionData: function (_nonAccreditedLimitUSD, _minimumInvestmentUSD) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('modifyLimits(uint256,uint256)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_nonAccreditedLimitUSD,
                    _minimumInvestmentUSD
                ], base_contract_1.BaseContract._bigNumberToString), 2), _nonAccreditedLimitUSD = _a[0], _minimumInvestmentUSD = _a[1];
                var abiEncodedTransactionData = self._lookupEthersInterface('modifyLimits(uint256,uint256)').functions.modifyLimits.encode([_nonAccreditedLimitUSD,
                    _minimumInvestmentUSD
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_nonAccreditedLimitUSD, _minimumInvestmentUSD, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'modifyLimits(uint256,uint256)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_nonAccreditedLimitUSD,
                                    _minimumInvestmentUSD
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), _nonAccreditedLimitUSD = _a[0], _minimumInvestmentUSD = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_nonAccreditedLimitUSD,
                                    _minimumInvestmentUSD
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.modifyLimits;
                                encodedData = ethersFunction.encode([_nonAccreditedLimitUSD,
                                    _minimumInvestmentUSD
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'modifyLimits' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.modifyTiers = {
            sendTransactionAsync: function (_ratePerTier, _ratePerTierDiscountPoly, _tokensPerTierTotal, _tokensPerTierDiscountPoly, txData, estimateGasFactor) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('modifyTiers(uint256[],uint256[],uint256[],uint256[])').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_ratePerTier,
                                    _ratePerTierDiscountPoly,
                                    _tokensPerTierTotal,
                                    _tokensPerTierDiscountPoly
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 4), _ratePerTier = _a[0], _ratePerTierDiscountPoly = _a[1], _tokensPerTierTotal = _a[2], _tokensPerTierDiscountPoly = _a[3];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_ratePerTier,
                                    _ratePerTierDiscountPoly,
                                    _tokensPerTierTotal,
                                    _tokensPerTierDiscountPoly
                                ]);
                                encodedData = self._lookupEthersInterface('modifyTiers(uint256[],uint256[],uint256[],uint256[])').functions.modifyTiers.encode([_ratePerTier,
                                    _ratePerTierDiscountPoly,
                                    _tokensPerTierTotal,
                                    _tokensPerTierDiscountPoly
                                ]);
                                return [4 /*yield*/, self._web3Wrapper.getAvailableAddressesAsync()];
                            case 1:
                                defaultFromAddress = (_b.sent())[0];
                                contractDefaults = _.defaults(self._web3Wrapper.getContractDefaults(), {
                                    from: defaultFromAddress
                                });
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), contractDefaults, self.modifyTiers.estimateGasAsync.bind(self, _ratePerTier, _ratePerTierDiscountPoly, _tokensPerTierTotal, _tokensPerTierDiscountPoly, estimateGasFactor))];
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
            estimateGasAsync: function (_ratePerTier, _ratePerTierDiscountPoly, _tokensPerTierTotal, _tokensPerTierDiscountPoly, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, gas, networkGasLimit, _factor, _safetyGasEstimation;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('modifyTiers(uint256[],uint256[],uint256[],uint256[])').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_ratePerTier,
                                    _ratePerTierDiscountPoly,
                                    _tokensPerTierTotal,
                                    _tokensPerTierDiscountPoly
                                ], base_contract_1.BaseContract._bigNumberToString), 4), _ratePerTier = _a[0], _ratePerTierDiscountPoly = _a[1], _tokensPerTierTotal = _a[2], _tokensPerTierDiscountPoly = _a[3];
                                encodedData = self._lookupEthersInterface('modifyTiers(uint256[],uint256[],uint256[],uint256[])').functions.modifyTiers.encode([_ratePerTier,
                                    _ratePerTierDiscountPoly,
                                    _tokensPerTierTotal,
                                    _tokensPerTierDiscountPoly
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
            getABIEncodedTransactionData: function (_ratePerTier, _ratePerTierDiscountPoly, _tokensPerTierTotal, _tokensPerTierDiscountPoly) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('modifyTiers(uint256[],uint256[],uint256[],uint256[])').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_ratePerTier,
                    _ratePerTierDiscountPoly,
                    _tokensPerTierTotal,
                    _tokensPerTierDiscountPoly
                ], base_contract_1.BaseContract._bigNumberToString), 4), _ratePerTier = _a[0], _ratePerTierDiscountPoly = _a[1], _tokensPerTierTotal = _a[2], _tokensPerTierDiscountPoly = _a[3];
                var abiEncodedTransactionData = self._lookupEthersInterface('modifyTiers(uint256[],uint256[],uint256[],uint256[])').functions.modifyTiers.encode([_ratePerTier,
                    _ratePerTierDiscountPoly,
                    _tokensPerTierTotal,
                    _tokensPerTierDiscountPoly
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_ratePerTier, _ratePerTierDiscountPoly, _tokensPerTierTotal, _tokensPerTierDiscountPoly, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'modifyTiers(uint256[],uint256[],uint256[],uint256[])';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_ratePerTier,
                                    _ratePerTierDiscountPoly,
                                    _tokensPerTierTotal,
                                    _tokensPerTierDiscountPoly
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 4), _ratePerTier = _a[0], _ratePerTierDiscountPoly = _a[1], _tokensPerTierTotal = _a[2], _tokensPerTierDiscountPoly = _a[3];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_ratePerTier,
                                    _ratePerTierDiscountPoly,
                                    _tokensPerTierTotal,
                                    _tokensPerTierDiscountPoly
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.modifyTiers;
                                encodedData = ethersFunction.encode([_ratePerTier,
                                    _ratePerTierDiscountPoly,
                                    _tokensPerTierTotal,
                                    _tokensPerTierDiscountPoly
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'modifyTiers' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.modifyTimes = {
            sendTransactionAsync: function (_startTime, _endTime, txData, estimateGasFactor) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('modifyTimes(uint256,uint256)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_startTime,
                                    _endTime
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), _startTime = _a[0], _endTime = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_startTime,
                                    _endTime
                                ]);
                                encodedData = self._lookupEthersInterface('modifyTimes(uint256,uint256)').functions.modifyTimes.encode([_startTime,
                                    _endTime
                                ]);
                                return [4 /*yield*/, self._web3Wrapper.getAvailableAddressesAsync()];
                            case 1:
                                defaultFromAddress = (_b.sent())[0];
                                contractDefaults = _.defaults(self._web3Wrapper.getContractDefaults(), {
                                    from: defaultFromAddress
                                });
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), contractDefaults, self.modifyTimes.estimateGasAsync.bind(self, _startTime, _endTime, estimateGasFactor))];
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
            estimateGasAsync: function (_startTime, _endTime, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, gas, networkGasLimit, _factor, _safetyGasEstimation;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('modifyTimes(uint256,uint256)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_startTime,
                                    _endTime
                                ], base_contract_1.BaseContract._bigNumberToString), 2), _startTime = _a[0], _endTime = _a[1];
                                encodedData = self._lookupEthersInterface('modifyTimes(uint256,uint256)').functions.modifyTimes.encode([_startTime,
                                    _endTime
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
            getABIEncodedTransactionData: function (_startTime, _endTime) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('modifyTimes(uint256,uint256)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_startTime,
                    _endTime
                ], base_contract_1.BaseContract._bigNumberToString), 2), _startTime = _a[0], _endTime = _a[1];
                var abiEncodedTransactionData = self._lookupEthersInterface('modifyTimes(uint256,uint256)').functions.modifyTimes.encode([_startTime,
                    _endTime
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_startTime, _endTime, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'modifyTimes(uint256,uint256)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_startTime,
                                    _endTime
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), _startTime = _a[0], _endTime = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_startTime,
                                    _endTime
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.modifyTimes;
                                encodedData = ethersFunction.encode([_startTime,
                                    _endTime
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'modifyTimes' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.modifyAddresses = {
            sendTransactionAsync: function (_wallet, _reserveWallet, _usdTokens, txData, estimateGasFactor) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('modifyAddresses(address,address,address[])').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_wallet,
                                    _reserveWallet,
                                    _usdTokens
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 3), _wallet = _a[0], _reserveWallet = _a[1], _usdTokens = _a[2];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_wallet,
                                    _reserveWallet,
                                    _usdTokens
                                ]);
                                encodedData = self._lookupEthersInterface('modifyAddresses(address,address,address[])').functions.modifyAddresses.encode([_wallet,
                                    _reserveWallet,
                                    _usdTokens
                                ]);
                                return [4 /*yield*/, self._web3Wrapper.getAvailableAddressesAsync()];
                            case 1:
                                defaultFromAddress = (_b.sent())[0];
                                contractDefaults = _.defaults(self._web3Wrapper.getContractDefaults(), {
                                    from: defaultFromAddress
                                });
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), contractDefaults, self.modifyAddresses.estimateGasAsync.bind(self, _wallet, _reserveWallet, _usdTokens, estimateGasFactor))];
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
            estimateGasAsync: function (_wallet, _reserveWallet, _usdTokens, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, gas, networkGasLimit, _factor, _safetyGasEstimation;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('modifyAddresses(address,address,address[])').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_wallet,
                                    _reserveWallet,
                                    _usdTokens
                                ], base_contract_1.BaseContract._bigNumberToString), 3), _wallet = _a[0], _reserveWallet = _a[1], _usdTokens = _a[2];
                                encodedData = self._lookupEthersInterface('modifyAddresses(address,address,address[])').functions.modifyAddresses.encode([_wallet,
                                    _reserveWallet,
                                    _usdTokens
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
            getABIEncodedTransactionData: function (_wallet, _reserveWallet, _usdTokens) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('modifyAddresses(address,address,address[])').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_wallet,
                    _reserveWallet,
                    _usdTokens
                ], base_contract_1.BaseContract._bigNumberToString), 3), _wallet = _a[0], _reserveWallet = _a[1], _usdTokens = _a[2];
                var abiEncodedTransactionData = self._lookupEthersInterface('modifyAddresses(address,address,address[])').functions.modifyAddresses.encode([_wallet,
                    _reserveWallet,
                    _usdTokens
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_wallet, _reserveWallet, _usdTokens, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'modifyAddresses(address,address,address[])';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_wallet,
                                    _reserveWallet,
                                    _usdTokens
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 3), _wallet = _a[0], _reserveWallet = _a[1], _usdTokens = _a[2];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_wallet,
                                    _reserveWallet,
                                    _usdTokens
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.modifyAddresses;
                                encodedData = ethersFunction.encode([_wallet,
                                    _reserveWallet,
                                    _usdTokens
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'modifyAddresses' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.finalize = {
            sendTransactionAsync: function (txData, estimateGasFactor) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('finalize()').inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                encodedData = self._lookupEthersInterface('finalize()').functions.finalize.encode([]);
                                return [4 /*yield*/, self._web3Wrapper.getAvailableAddressesAsync()];
                            case 1:
                                defaultFromAddress = (_a.sent())[0];
                                contractDefaults = _.defaults(self._web3Wrapper.getContractDefaults(), {
                                    from: defaultFromAddress
                                });
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), contractDefaults, self.finalize.estimateGasAsync.bind(self, estimateGasFactor))];
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
                                inputAbi = self._lookupAbi('finalize()').inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString);
                                encodedData = self._lookupEthersInterface('finalize()').functions.finalize.encode([]);
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
                var inputAbi = self._lookupAbi('finalize()').inputs;
                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString);
                var abiEncodedTransactionData = self._lookupEthersInterface('finalize()').functions.finalize.encode([]);
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
                                functionSignature = 'finalize()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.finalize;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'finalize' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.changeAccredited = {
            sendTransactionAsync: function (_investors, _accredited, txData, estimateGasFactor) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('changeAccredited(address[],bool[])').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_investors,
                                    _accredited
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), _investors = _a[0], _accredited = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_investors,
                                    _accredited
                                ]);
                                encodedData = self._lookupEthersInterface('changeAccredited(address[],bool[])').functions.changeAccredited.encode([_investors,
                                    _accredited
                                ]);
                                return [4 /*yield*/, self._web3Wrapper.getAvailableAddressesAsync()];
                            case 1:
                                defaultFromAddress = (_b.sent())[0];
                                contractDefaults = _.defaults(self._web3Wrapper.getContractDefaults(), {
                                    from: defaultFromAddress
                                });
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), contractDefaults, self.changeAccredited.estimateGasAsync.bind(self, _investors, _accredited, estimateGasFactor))];
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
            estimateGasAsync: function (_investors, _accredited, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, gas, networkGasLimit, _factor, _safetyGasEstimation;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('changeAccredited(address[],bool[])').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_investors,
                                    _accredited
                                ], base_contract_1.BaseContract._bigNumberToString), 2), _investors = _a[0], _accredited = _a[1];
                                encodedData = self._lookupEthersInterface('changeAccredited(address[],bool[])').functions.changeAccredited.encode([_investors,
                                    _accredited
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
            getABIEncodedTransactionData: function (_investors, _accredited) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('changeAccredited(address[],bool[])').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_investors,
                    _accredited
                ], base_contract_1.BaseContract._bigNumberToString), 2), _investors = _a[0], _accredited = _a[1];
                var abiEncodedTransactionData = self._lookupEthersInterface('changeAccredited(address[],bool[])').functions.changeAccredited.encode([_investors,
                    _accredited
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_investors, _accredited, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'changeAccredited(address[],bool[])';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_investors,
                                    _accredited
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), _investors = _a[0], _accredited = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_investors,
                                    _accredited
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.changeAccredited;
                                encodedData = ethersFunction.encode([_investors,
                                    _accredited
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'changeAccredited' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.changeNonAccreditedLimit = {
            sendTransactionAsync: function (_investors, _nonAccreditedLimit, txData, estimateGasFactor) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('changeNonAccreditedLimit(address[],uint256[])').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_investors,
                                    _nonAccreditedLimit
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), _investors = _a[0], _nonAccreditedLimit = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_investors,
                                    _nonAccreditedLimit
                                ]);
                                encodedData = self._lookupEthersInterface('changeNonAccreditedLimit(address[],uint256[])').functions.changeNonAccreditedLimit.encode([_investors,
                                    _nonAccreditedLimit
                                ]);
                                return [4 /*yield*/, self._web3Wrapper.getAvailableAddressesAsync()];
                            case 1:
                                defaultFromAddress = (_b.sent())[0];
                                contractDefaults = _.defaults(self._web3Wrapper.getContractDefaults(), {
                                    from: defaultFromAddress
                                });
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), contractDefaults, self.changeNonAccreditedLimit.estimateGasAsync.bind(self, _investors, _nonAccreditedLimit, estimateGasFactor))];
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
            estimateGasAsync: function (_investors, _nonAccreditedLimit, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, gas, networkGasLimit, _factor, _safetyGasEstimation;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('changeNonAccreditedLimit(address[],uint256[])').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_investors,
                                    _nonAccreditedLimit
                                ], base_contract_1.BaseContract._bigNumberToString), 2), _investors = _a[0], _nonAccreditedLimit = _a[1];
                                encodedData = self._lookupEthersInterface('changeNonAccreditedLimit(address[],uint256[])').functions.changeNonAccreditedLimit.encode([_investors,
                                    _nonAccreditedLimit
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
            getABIEncodedTransactionData: function (_investors, _nonAccreditedLimit) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('changeNonAccreditedLimit(address[],uint256[])').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_investors,
                    _nonAccreditedLimit
                ], base_contract_1.BaseContract._bigNumberToString), 2), _investors = _a[0], _nonAccreditedLimit = _a[1];
                var abiEncodedTransactionData = self._lookupEthersInterface('changeNonAccreditedLimit(address[],uint256[])').functions.changeNonAccreditedLimit.encode([_investors,
                    _nonAccreditedLimit
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_investors, _nonAccreditedLimit, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'changeNonAccreditedLimit(address[],uint256[])';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_investors,
                                    _nonAccreditedLimit
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), _investors = _a[0], _nonAccreditedLimit = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_investors,
                                    _nonAccreditedLimit
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.changeNonAccreditedLimit;
                                encodedData = ethersFunction.encode([_investors,
                                    _nonAccreditedLimit
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'changeNonAccreditedLimit' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.getAccreditedData = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'getAccreditedData()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.getAccreditedData;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'getAccreditedData' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.changeAllowBeneficialInvestments = {
            sendTransactionAsync: function (_allowBeneficialInvestments, txData, estimateGasFactor) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('changeAllowBeneficialInvestments(bool)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_allowBeneficialInvestments
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _allowBeneficialInvestments = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_allowBeneficialInvestments
                                ]);
                                encodedData = self._lookupEthersInterface('changeAllowBeneficialInvestments(bool)').functions.changeAllowBeneficialInvestments.encode([_allowBeneficialInvestments
                                ]);
                                return [4 /*yield*/, self._web3Wrapper.getAvailableAddressesAsync()];
                            case 1:
                                defaultFromAddress = (_b.sent())[0];
                                contractDefaults = _.defaults(self._web3Wrapper.getContractDefaults(), {
                                    from: defaultFromAddress
                                });
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), contractDefaults, self.changeAllowBeneficialInvestments.estimateGasAsync.bind(self, _allowBeneficialInvestments, estimateGasFactor))];
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
            estimateGasAsync: function (_allowBeneficialInvestments, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, gas, networkGasLimit, _factor, _safetyGasEstimation;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('changeAllowBeneficialInvestments(bool)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_allowBeneficialInvestments
                                ], base_contract_1.BaseContract._bigNumberToString), 1), _allowBeneficialInvestments = _a[0];
                                encodedData = self._lookupEthersInterface('changeAllowBeneficialInvestments(bool)').functions.changeAllowBeneficialInvestments.encode([_allowBeneficialInvestments
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
            getABIEncodedTransactionData: function (_allowBeneficialInvestments) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('changeAllowBeneficialInvestments(bool)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_allowBeneficialInvestments
                ], base_contract_1.BaseContract._bigNumberToString), 1), _allowBeneficialInvestments = _a[0];
                var abiEncodedTransactionData = self._lookupEthersInterface('changeAllowBeneficialInvestments(bool)').functions.changeAllowBeneficialInvestments.encode([_allowBeneficialInvestments
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_allowBeneficialInvestments, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'changeAllowBeneficialInvestments(bool)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_allowBeneficialInvestments
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _allowBeneficialInvestments = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_allowBeneficialInvestments
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.changeAllowBeneficialInvestments;
                                encodedData = ethersFunction.encode([_allowBeneficialInvestments
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'changeAllowBeneficialInvestments' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.buyWithETH = {
            sendTransactionAsync: function (_beneficiary, txData, estimateGasFactor) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('buyWithETH(address)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_beneficiary
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _beneficiary = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_beneficiary
                                ]);
                                encodedData = self._lookupEthersInterface('buyWithETH(address)').functions.buyWithETH.encode([_beneficiary
                                ]);
                                return [4 /*yield*/, self._web3Wrapper.getAvailableAddressesAsync()];
                            case 1:
                                defaultFromAddress = (_b.sent())[0];
                                contractDefaults = _.defaults(self._web3Wrapper.getContractDefaults(), {
                                    from: defaultFromAddress
                                });
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), contractDefaults, self.buyWithETH.estimateGasAsync.bind(self, _beneficiary, estimateGasFactor))];
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
            estimateGasAsync: function (_beneficiary, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, gas, networkGasLimit, _factor, _safetyGasEstimation;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('buyWithETH(address)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_beneficiary
                                ], base_contract_1.BaseContract._bigNumberToString), 1), _beneficiary = _a[0];
                                encodedData = self._lookupEthersInterface('buyWithETH(address)').functions.buyWithETH.encode([_beneficiary
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
            getABIEncodedTransactionData: function (_beneficiary) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('buyWithETH(address)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_beneficiary
                ], base_contract_1.BaseContract._bigNumberToString), 1), _beneficiary = _a[0];
                var abiEncodedTransactionData = self._lookupEthersInterface('buyWithETH(address)').functions.buyWithETH.encode([_beneficiary
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_beneficiary, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'buyWithETH(address)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_beneficiary
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _beneficiary = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_beneficiary
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.buyWithETH;
                                encodedData = ethersFunction.encode([_beneficiary
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'buyWithETH' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.buyWithPOLY = {
            sendTransactionAsync: function (_beneficiary, _investedPOLY, txData, estimateGasFactor) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('buyWithPOLY(address,uint256)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_beneficiary,
                                    _investedPOLY
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), _beneficiary = _a[0], _investedPOLY = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_beneficiary,
                                    _investedPOLY
                                ]);
                                encodedData = self._lookupEthersInterface('buyWithPOLY(address,uint256)').functions.buyWithPOLY.encode([_beneficiary,
                                    _investedPOLY
                                ]);
                                return [4 /*yield*/, self._web3Wrapper.getAvailableAddressesAsync()];
                            case 1:
                                defaultFromAddress = (_b.sent())[0];
                                contractDefaults = _.defaults(self._web3Wrapper.getContractDefaults(), {
                                    from: defaultFromAddress
                                });
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), contractDefaults, self.buyWithPOLY.estimateGasAsync.bind(self, _beneficiary, _investedPOLY, estimateGasFactor))];
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
            estimateGasAsync: function (_beneficiary, _investedPOLY, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, gas, networkGasLimit, _factor, _safetyGasEstimation;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('buyWithPOLY(address,uint256)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_beneficiary,
                                    _investedPOLY
                                ], base_contract_1.BaseContract._bigNumberToString), 2), _beneficiary = _a[0], _investedPOLY = _a[1];
                                encodedData = self._lookupEthersInterface('buyWithPOLY(address,uint256)').functions.buyWithPOLY.encode([_beneficiary,
                                    _investedPOLY
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
            getABIEncodedTransactionData: function (_beneficiary, _investedPOLY) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('buyWithPOLY(address,uint256)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_beneficiary,
                    _investedPOLY
                ], base_contract_1.BaseContract._bigNumberToString), 2), _beneficiary = _a[0], _investedPOLY = _a[1];
                var abiEncodedTransactionData = self._lookupEthersInterface('buyWithPOLY(address,uint256)').functions.buyWithPOLY.encode([_beneficiary,
                    _investedPOLY
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_beneficiary, _investedPOLY, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'buyWithPOLY(address,uint256)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_beneficiary,
                                    _investedPOLY
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), _beneficiary = _a[0], _investedPOLY = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_beneficiary,
                                    _investedPOLY
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.buyWithPOLY;
                                encodedData = ethersFunction.encode([_beneficiary,
                                    _investedPOLY
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'buyWithPOLY' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.buyWithUSD = {
            sendTransactionAsync: function (_beneficiary, _investedSC, _usdToken, txData, estimateGasFactor) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('buyWithUSD(address,uint256,address)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_beneficiary,
                                    _investedSC,
                                    _usdToken
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 3), _beneficiary = _a[0], _investedSC = _a[1], _usdToken = _a[2];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_beneficiary,
                                    _investedSC,
                                    _usdToken
                                ]);
                                encodedData = self._lookupEthersInterface('buyWithUSD(address,uint256,address)').functions.buyWithUSD.encode([_beneficiary,
                                    _investedSC,
                                    _usdToken
                                ]);
                                return [4 /*yield*/, self._web3Wrapper.getAvailableAddressesAsync()];
                            case 1:
                                defaultFromAddress = (_b.sent())[0];
                                contractDefaults = _.defaults(self._web3Wrapper.getContractDefaults(), {
                                    from: defaultFromAddress
                                });
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), contractDefaults, self.buyWithUSD.estimateGasAsync.bind(self, _beneficiary, _investedSC, _usdToken, estimateGasFactor))];
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
            estimateGasAsync: function (_beneficiary, _investedSC, _usdToken, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, gas, networkGasLimit, _factor, _safetyGasEstimation;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('buyWithUSD(address,uint256,address)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_beneficiary,
                                    _investedSC,
                                    _usdToken
                                ], base_contract_1.BaseContract._bigNumberToString), 3), _beneficiary = _a[0], _investedSC = _a[1], _usdToken = _a[2];
                                encodedData = self._lookupEthersInterface('buyWithUSD(address,uint256,address)').functions.buyWithUSD.encode([_beneficiary,
                                    _investedSC,
                                    _usdToken
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
            getABIEncodedTransactionData: function (_beneficiary, _investedSC, _usdToken) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('buyWithUSD(address,uint256,address)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_beneficiary,
                    _investedSC,
                    _usdToken
                ], base_contract_1.BaseContract._bigNumberToString), 3), _beneficiary = _a[0], _investedSC = _a[1], _usdToken = _a[2];
                var abiEncodedTransactionData = self._lookupEthersInterface('buyWithUSD(address,uint256,address)').functions.buyWithUSD.encode([_beneficiary,
                    _investedSC,
                    _usdToken
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_beneficiary, _investedSC, _usdToken, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'buyWithUSD(address,uint256,address)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_beneficiary,
                                    _investedSC,
                                    _usdToken
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 3), _beneficiary = _a[0], _investedSC = _a[1], _usdToken = _a[2];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_beneficiary,
                                    _investedSC,
                                    _usdToken
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.buyWithUSD;
                                encodedData = ethersFunction.encode([_beneficiary,
                                    _investedSC,
                                    _usdToken
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'buyWithUSD' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.buyWithETHRateLimited = {
            sendTransactionAsync: function (_beneficiary, _minTokens, txData, estimateGasFactor) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('buyWithETHRateLimited(address,uint256)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_beneficiary,
                                    _minTokens
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), _beneficiary = _a[0], _minTokens = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_beneficiary,
                                    _minTokens
                                ]);
                                encodedData = self._lookupEthersInterface('buyWithETHRateLimited(address,uint256)').functions.buyWithETHRateLimited.encode([_beneficiary,
                                    _minTokens
                                ]);
                                return [4 /*yield*/, self._web3Wrapper.getAvailableAddressesAsync()];
                            case 1:
                                defaultFromAddress = (_b.sent())[0];
                                contractDefaults = _.defaults(self._web3Wrapper.getContractDefaults(), {
                                    from: defaultFromAddress
                                });
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), contractDefaults, self.buyWithETHRateLimited.estimateGasAsync.bind(self, _beneficiary, _minTokens, estimateGasFactor))];
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
            estimateGasAsync: function (_beneficiary, _minTokens, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, gas, networkGasLimit, _factor, _safetyGasEstimation;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('buyWithETHRateLimited(address,uint256)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_beneficiary,
                                    _minTokens
                                ], base_contract_1.BaseContract._bigNumberToString), 2), _beneficiary = _a[0], _minTokens = _a[1];
                                encodedData = self._lookupEthersInterface('buyWithETHRateLimited(address,uint256)').functions.buyWithETHRateLimited.encode([_beneficiary,
                                    _minTokens
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
            getABIEncodedTransactionData: function (_beneficiary, _minTokens) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('buyWithETHRateLimited(address,uint256)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_beneficiary,
                    _minTokens
                ], base_contract_1.BaseContract._bigNumberToString), 2), _beneficiary = _a[0], _minTokens = _a[1];
                var abiEncodedTransactionData = self._lookupEthersInterface('buyWithETHRateLimited(address,uint256)').functions.buyWithETHRateLimited.encode([_beneficiary,
                    _minTokens
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_beneficiary, _minTokens, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'buyWithETHRateLimited(address,uint256)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_beneficiary,
                                    _minTokens
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), _beneficiary = _a[0], _minTokens = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_beneficiary,
                                    _minTokens
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.buyWithETHRateLimited;
                                encodedData = ethersFunction.encode([_beneficiary,
                                    _minTokens
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'buyWithETHRateLimited' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.buyWithPOLYRateLimited = {
            sendTransactionAsync: function (_beneficiary, _investedPOLY, _minTokens, txData, estimateGasFactor) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('buyWithPOLYRateLimited(address,uint256,uint256)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_beneficiary,
                                    _investedPOLY,
                                    _minTokens
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 3), _beneficiary = _a[0], _investedPOLY = _a[1], _minTokens = _a[2];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_beneficiary,
                                    _investedPOLY,
                                    _minTokens
                                ]);
                                encodedData = self._lookupEthersInterface('buyWithPOLYRateLimited(address,uint256,uint256)').functions.buyWithPOLYRateLimited.encode([_beneficiary,
                                    _investedPOLY,
                                    _minTokens
                                ]);
                                return [4 /*yield*/, self._web3Wrapper.getAvailableAddressesAsync()];
                            case 1:
                                defaultFromAddress = (_b.sent())[0];
                                contractDefaults = _.defaults(self._web3Wrapper.getContractDefaults(), {
                                    from: defaultFromAddress
                                });
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), contractDefaults, self.buyWithPOLYRateLimited.estimateGasAsync.bind(self, _beneficiary, _investedPOLY, _minTokens, estimateGasFactor))];
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
            estimateGasAsync: function (_beneficiary, _investedPOLY, _minTokens, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, gas, networkGasLimit, _factor, _safetyGasEstimation;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('buyWithPOLYRateLimited(address,uint256,uint256)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_beneficiary,
                                    _investedPOLY,
                                    _minTokens
                                ], base_contract_1.BaseContract._bigNumberToString), 3), _beneficiary = _a[0], _investedPOLY = _a[1], _minTokens = _a[2];
                                encodedData = self._lookupEthersInterface('buyWithPOLYRateLimited(address,uint256,uint256)').functions.buyWithPOLYRateLimited.encode([_beneficiary,
                                    _investedPOLY,
                                    _minTokens
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
            getABIEncodedTransactionData: function (_beneficiary, _investedPOLY, _minTokens) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('buyWithPOLYRateLimited(address,uint256,uint256)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_beneficiary,
                    _investedPOLY,
                    _minTokens
                ], base_contract_1.BaseContract._bigNumberToString), 3), _beneficiary = _a[0], _investedPOLY = _a[1], _minTokens = _a[2];
                var abiEncodedTransactionData = self._lookupEthersInterface('buyWithPOLYRateLimited(address,uint256,uint256)').functions.buyWithPOLYRateLimited.encode([_beneficiary,
                    _investedPOLY,
                    _minTokens
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_beneficiary, _investedPOLY, _minTokens, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'buyWithPOLYRateLimited(address,uint256,uint256)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_beneficiary,
                                    _investedPOLY,
                                    _minTokens
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 3), _beneficiary = _a[0], _investedPOLY = _a[1], _minTokens = _a[2];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_beneficiary,
                                    _investedPOLY,
                                    _minTokens
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.buyWithPOLYRateLimited;
                                encodedData = ethersFunction.encode([_beneficiary,
                                    _investedPOLY,
                                    _minTokens
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'buyWithPOLYRateLimited' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.buyWithUSDRateLimited = {
            sendTransactionAsync: function (_beneficiary, _investedSC, _minTokens, _usdToken, txData, estimateGasFactor) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, txHash, receipt;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('buyWithUSDRateLimited(address,uint256,uint256,address)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_beneficiary,
                                    _investedSC,
                                    _minTokens,
                                    _usdToken
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 4), _beneficiary = _a[0], _investedSC = _a[1], _minTokens = _a[2], _usdToken = _a[3];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_beneficiary,
                                    _investedSC,
                                    _minTokens,
                                    _usdToken
                                ]);
                                encodedData = self._lookupEthersInterface('buyWithUSDRateLimited(address,uint256,uint256,address)').functions.buyWithUSDRateLimited.encode([_beneficiary,
                                    _investedSC,
                                    _minTokens,
                                    _usdToken
                                ]);
                                return [4 /*yield*/, self._web3Wrapper.getAvailableAddressesAsync()];
                            case 1:
                                defaultFromAddress = (_b.sent())[0];
                                contractDefaults = _.defaults(self._web3Wrapper.getContractDefaults(), {
                                    from: defaultFromAddress
                                });
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), contractDefaults, self.buyWithUSDRateLimited.estimateGasAsync.bind(self, _beneficiary, _investedSC, _minTokens, _usdToken, estimateGasFactor))];
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
            estimateGasAsync: function (_beneficiary, _investedSC, _minTokens, _usdToken, factor, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, defaultFromAddress, contractDefaults, txDataWithDefaults, gas, networkGasLimit, _factor, _safetyGasEstimation;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('buyWithUSDRateLimited(address,uint256,uint256,address)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_beneficiary,
                                    _investedSC,
                                    _minTokens,
                                    _usdToken
                                ], base_contract_1.BaseContract._bigNumberToString), 4), _beneficiary = _a[0], _investedSC = _a[1], _minTokens = _a[2], _usdToken = _a[3];
                                encodedData = self._lookupEthersInterface('buyWithUSDRateLimited(address,uint256,uint256,address)').functions.buyWithUSDRateLimited.encode([_beneficiary,
                                    _investedSC,
                                    _minTokens,
                                    _usdToken
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
            getABIEncodedTransactionData: function (_beneficiary, _investedSC, _minTokens, _usdToken) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('buyWithUSDRateLimited(address,uint256,uint256,address)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_beneficiary,
                    _investedSC,
                    _minTokens,
                    _usdToken
                ], base_contract_1.BaseContract._bigNumberToString), 4), _beneficiary = _a[0], _investedSC = _a[1], _minTokens = _a[2], _usdToken = _a[3];
                var abiEncodedTransactionData = self._lookupEthersInterface('buyWithUSDRateLimited(address,uint256,uint256,address)').functions.buyWithUSDRateLimited.encode([_beneficiary,
                    _investedSC,
                    _minTokens,
                    _usdToken
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (_beneficiary, _investedSC, _minTokens, _usdToken, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'buyWithUSDRateLimited(address,uint256,uint256,address)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_beneficiary,
                                    _investedSC,
                                    _minTokens,
                                    _usdToken
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 4), _beneficiary = _a[0], _investedSC = _a[1], _minTokens = _a[2], _usdToken = _a[3];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_beneficiary,
                                    _investedSC,
                                    _minTokens,
                                    _usdToken
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.buyWithUSDRateLimited;
                                encodedData = ethersFunction.encode([_beneficiary,
                                    _investedSC,
                                    _minTokens,
                                    _usdToken
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'buyWithUSDRateLimited' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.buyTokensView = {
            callAsync: function (_beneficiary, _investmentValue, _fundRaiseType, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'buyTokensView(address,uint256,uint8)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_beneficiary,
                                    _investmentValue,
                                    _fundRaiseType
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 3), _beneficiary = _a[0], _investmentValue = _a[1], _fundRaiseType = _a[2];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_beneficiary,
                                    _investmentValue,
                                    _fundRaiseType
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.buyTokensView;
                                encodedData = ethersFunction.encode([_beneficiary,
                                    _investmentValue,
                                    _fundRaiseType
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'buyTokensView' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.isOpen = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'isOpen()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.isOpen;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'isOpen' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.capReached = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'capReached()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.capReached;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'capReached' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.getRate = {
            callAsync: function (_fundRaiseType, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'getRate(uint8)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_fundRaiseType
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _fundRaiseType = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_fundRaiseType
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.getRate;
                                encodedData = ethersFunction.encode([_fundRaiseType
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'getRate' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.convertToUSD = {
            callAsync: function (_fundRaiseType, _amount, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'convertToUSD(uint8,uint256)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_fundRaiseType,
                                    _amount
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), _fundRaiseType = _a[0], _amount = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_fundRaiseType,
                                    _amount
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.convertToUSD;
                                encodedData = ethersFunction.encode([_fundRaiseType,
                                    _amount
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'convertToUSD' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.convertFromUSD = {
            callAsync: function (_fundRaiseType, _amount, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'convertFromUSD(uint8,uint256)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_fundRaiseType,
                                    _amount
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), _fundRaiseType = _a[0], _amount = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_fundRaiseType,
                                    _amount
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.convertFromUSD;
                                encodedData = ethersFunction.encode([_fundRaiseType,
                                    _amount
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'convertFromUSD' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.getTokensSold = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'getTokensSold()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.getTokensSold;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'getTokensSold' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.getTokensMinted = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'getTokensMinted()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.getTokensMinted;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'getTokensMinted' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.getTokensSoldFor = {
            callAsync: function (_fundRaiseType, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'getTokensSoldFor(uint8)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_fundRaiseType
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _fundRaiseType = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_fundRaiseType
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.getTokensSoldFor;
                                encodedData = ethersFunction.encode([_fundRaiseType
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'getTokensSoldFor' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.getTokensMintedByTier = {
            callAsync: function (_tier, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'getTokensMintedByTier(uint256)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_tier
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _tier = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_tier
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.getTokensMintedByTier;
                                encodedData = ethersFunction.encode([_tier
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'getTokensMintedByTier' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.getTokensSoldByTier = {
            callAsync: function (_tier, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'getTokensSoldByTier(uint256)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_tier
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), _tier = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_tier
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.getTokensSoldByTier;
                                encodedData = ethersFunction.encode([_tier
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'getTokensSoldByTier' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.getNumberOfTiers = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'getNumberOfTiers()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.getNumberOfTiers;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'getNumberOfTiers' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.getUsdTokens = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'getUsdTokens()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.getUsdTokens;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'getUsdTokens' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
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
        _this.getSTODetails = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'getSTODetails()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.getSTODetails;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'getSTODetails' }).outputs;
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
        _this._defaultEstimateGasFactor = _.isUndefined(defaultEstimateGasFactor) ? 1.1 : defaultEstimateGasFactor;
        _this._web3Wrapper.abiDecoder.addABI(abi);
        utils_1.classUtils.bindAll(_this, ['_ethersInterfacesByFunctionSignature', 'address', 'abi', '_web3Wrapper', '_defaultEstimateGasFactor']);
        return _this;
    }
    return USDTieredSTOContract;
}(base_contract_1.BaseContract)); // tslint:disable:max-file-line-count
exports.USDTieredSTOContract = USDTieredSTOContract;
// tslint:enable:no-unbound-method
//# sourceMappingURL=u_s_d_tiered_s_t_o.js.map