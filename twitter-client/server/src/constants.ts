export const ARB_SEPOLIA_EXCHANGE_ROUTER = "0xbbb774b00102e2866677b9d238b2Ee489779E532";
export const WRAPPED_NATIVE_TOKEN = "0x980B62Da83eFf3D4576C647993b0c1D7faf17c73";
export const USDC_TOKEN = "0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d"
export const ORDER_VAULT = "0xD2A2044f62D7cD77470AC237408f9f59AcB5965E"
export const MARKET_TOKEN = "0xBb532Ab4923C23c2bfA455151B14fec177a34C0D"
export const INITIAL_COLLATERAL_TOKEN = "0x3321Fd36aEaB0d5CdfD26f4A3A93E2D2aAcCB99f"


export const exchangeRouterAbi = {
    "42161": [
        {
            "inputs": [
                {
                    "internalType": "contract Router",
                    "name": "_router",
                    "type": "address"
                },
                {
                    "internalType": "contract RoleStore",
                    "name": "_roleStore",
                    "type": "address"
                },
                {
                    "internalType": "contract DataStore",
                    "name": "_dataStore",
                    "type": "address"
                },
                {
                    "internalType": "contract EventEmitter",
                    "name": "_eventEmitter",
                    "type": "address"
                },
                {
                    "internalType": "contract IDepositHandler",
                    "name": "_depositHandler",
                    "type": "address"
                },
                {
                    "internalType": "contract IWithdrawalHandler",
                    "name": "_withdrawalHandler",
                    "type": "address"
                },
                {
                    "internalType": "contract IShiftHandler",
                    "name": "_shiftHandler",
                    "type": "address"
                },
                {
                    "internalType": "contract IOrderHandler",
                    "name": "_orderHandler",
                    "type": "address"
                },
                {
                    "internalType": "contract IExternalHandler",
                    "name": "_externalHandler",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "adjustedClaimableAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "claimedAmount",
                    "type": "uint256"
                }
            ],
            "name": "CollateralAlreadyClaimed",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "key",
                    "type": "bytes32"
                }
            ],
            "name": "DisabledFeature",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "market",
                    "type": "address"
                }
            ],
            "name": "DisabledMarket",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "market",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                }
            ],
            "name": "EmptyAddressInMarketTokenBalanceValidation",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "EmptyDeposit",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "EmptyHoldingAddress",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "EmptyMarket",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "EmptyOrder",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "EmptyReceiver",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                }
            ],
            "name": "EmptyTokenTranferGasLimit",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "marketsLength",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "tokensLength",
                    "type": "uint256"
                }
            ],
            "name": "InvalidClaimAffiliateRewardsInput",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "marketsLength",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "tokensLength",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "timeKeysLength",
                    "type": "uint256"
                }
            ],
            "name": "InvalidClaimCollateralInput",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "marketsLength",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "tokensLength",
                    "type": "uint256"
                }
            ],
            "name": "InvalidClaimFundingFeesInput",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "marketsLength",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "tokensLength",
                    "type": "uint256"
                }
            ],
            "name": "InvalidClaimUiFeesInput",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "InvalidClaimableFactor",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "market",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "balance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "expectedMinBalance",
                    "type": "uint256"
                }
            ],
            "name": "InvalidMarketTokenBalance",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "market",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "balance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "claimableFundingFeeAmount",
                    "type": "uint256"
                }
            ],
            "name": "InvalidMarketTokenBalanceForClaimableFunding",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "market",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "balance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "collateralAmount",
                    "type": "uint256"
                }
            ],
            "name": "InvalidMarketTokenBalanceForCollateralAmount",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "uiFeeFactor",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "maxUiFeeFactor",
                    "type": "uint256"
                }
            ],
            "name": "InvalidUiFeeFactor",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "TokenTransferError",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "msgSender",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "role",
                    "type": "string"
                }
            ],
            "name": "Unauthorized",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "key",
                    "type": "bytes32"
                }
            ],
            "name": "cancelDeposit",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "key",
                    "type": "bytes32"
                }
            ],
            "name": "cancelOrder",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "key",
                    "type": "bytes32"
                }
            ],
            "name": "cancelShift",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "key",
                    "type": "bytes32"
                }
            ],
            "name": "cancelWithdrawal",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "markets",
                    "type": "address[]"
                },
                {
                    "internalType": "address[]",
                    "name": "tokens",
                    "type": "address[]"
                },
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                }
            ],
            "name": "claimAffiliateRewards",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "markets",
                    "type": "address[]"
                },
                {
                    "internalType": "address[]",
                    "name": "tokens",
                    "type": "address[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "timeKeys",
                    "type": "uint256[]"
                },
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                }
            ],
            "name": "claimCollateral",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "markets",
                    "type": "address[]"
                },
                {
                    "internalType": "address[]",
                    "name": "tokens",
                    "type": "address[]"
                },
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                }
            ],
            "name": "claimFundingFees",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "markets",
                    "type": "address[]"
                },
                {
                    "internalType": "address[]",
                    "name": "tokens",
                    "type": "address[]"
                },
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                }
            ],
            "name": "claimUiFees",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "receiver",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "callbackContract",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "uiFeeReceiver",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "market",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "initialLongToken",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "initialShortToken",
                            "type": "address"
                        },
                        {
                            "internalType": "address[]",
                            "name": "longTokenSwapPath",
                            "type": "address[]"
                        },
                        {
                            "internalType": "address[]",
                            "name": "shortTokenSwapPath",
                            "type": "address[]"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minMarketTokens",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bool",
                            "name": "shouldUnwrapNativeToken",
                            "type": "bool"
                        },
                        {
                            "internalType": "uint256",
                            "name": "executionFee",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "callbackGasLimit",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct DepositUtils.CreateDepositParams",
                    "name": "params",
                    "type": "tuple"
                }
            ],
            "name": "createDeposit",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "receiver",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "cancellationReceiver",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "callbackContract",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "uiFeeReceiver",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "market",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "initialCollateralToken",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address[]",
                                    "name": "swapPath",
                                    "type": "address[]"
                                }
                            ],
                            "internalType": "struct IBaseOrderUtils.CreateOrderParamsAddresses",
                            "name": "addresses",
                            "type": "tuple"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "sizeDeltaUsd",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "initialCollateralDeltaAmount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "triggerPrice",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "acceptablePrice",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "executionFee",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "callbackGasLimit",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "minOutputAmount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "validFromTime",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct IBaseOrderUtils.CreateOrderParamsNumbers",
                            "name": "numbers",
                            "type": "tuple"
                        },
                        {
                            "internalType": "enum Order.OrderType",
                            "name": "orderType",
                            "type": "uint8"
                        },
                        {
                            "internalType": "enum Order.DecreasePositionSwapType",
                            "name": "decreasePositionSwapType",
                            "type": "uint8"
                        },
                        {
                            "internalType": "bool",
                            "name": "isLong",
                            "type": "bool"
                        },
                        {
                            "internalType": "bool",
                            "name": "shouldUnwrapNativeToken",
                            "type": "bool"
                        },
                        {
                            "internalType": "bool",
                            "name": "autoCancel",
                            "type": "bool"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "referralCode",
                            "type": "bytes32"
                        }
                    ],
                    "internalType": "struct IBaseOrderUtils.CreateOrderParams",
                    "name": "params",
                    "type": "tuple"
                }
            ],
            "name": "createOrder",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "receiver",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "callbackContract",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "uiFeeReceiver",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "fromMarket",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "toMarket",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minMarketTokens",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "executionFee",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "callbackGasLimit",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct ShiftUtils.CreateShiftParams",
                    "name": "params",
                    "type": "tuple"
                }
            ],
            "name": "createShift",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "receiver",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "callbackContract",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "uiFeeReceiver",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "market",
                            "type": "address"
                        },
                        {
                            "internalType": "address[]",
                            "name": "longTokenSwapPath",
                            "type": "address[]"
                        },
                        {
                            "internalType": "address[]",
                            "name": "shortTokenSwapPath",
                            "type": "address[]"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minLongTokenAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minShortTokenAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bool",
                            "name": "shouldUnwrapNativeToken",
                            "type": "bool"
                        },
                        {
                            "internalType": "uint256",
                            "name": "executionFee",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "callbackGasLimit",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct WithdrawalUtils.CreateWithdrawalParams",
                    "name": "params",
                    "type": "tuple"
                }
            ],
            "name": "createWithdrawal",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "dataStore",
            "outputs": [
                {
                    "internalType": "contract DataStore",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "depositHandler",
            "outputs": [
                {
                    "internalType": "contract IDepositHandler",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "eventEmitter",
            "outputs": [
                {
                    "internalType": "contract EventEmitter",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "receiver",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "callbackContract",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "uiFeeReceiver",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "market",
                            "type": "address"
                        },
                        {
                            "internalType": "address[]",
                            "name": "longTokenSwapPath",
                            "type": "address[]"
                        },
                        {
                            "internalType": "address[]",
                            "name": "shortTokenSwapPath",
                            "type": "address[]"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minLongTokenAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minShortTokenAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bool",
                            "name": "shouldUnwrapNativeToken",
                            "type": "bool"
                        },
                        {
                            "internalType": "uint256",
                            "name": "executionFee",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "callbackGasLimit",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct WithdrawalUtils.CreateWithdrawalParams",
                    "name": "params",
                    "type": "tuple"
                },
                {
                    "components": [
                        {
                            "internalType": "address[]",
                            "name": "tokens",
                            "type": "address[]"
                        },
                        {
                            "internalType": "address[]",
                            "name": "providers",
                            "type": "address[]"
                        },
                        {
                            "internalType": "bytes[]",
                            "name": "data",
                            "type": "bytes[]"
                        }
                    ],
                    "internalType": "struct OracleUtils.SetPricesParams",
                    "name": "oracleParams",
                    "type": "tuple"
                }
            ],
            "name": "executeAtomicWithdrawal",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "externalHandler",
            "outputs": [
                {
                    "internalType": "contract IExternalHandler",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "externalCallTargets",
                    "type": "address[]"
                },
                {
                    "internalType": "bytes[]",
                    "name": "externalCallDataList",
                    "type": "bytes[]"
                },
                {
                    "internalType": "address[]",
                    "name": "refundTokens",
                    "type": "address[]"
                },
                {
                    "internalType": "address[]",
                    "name": "refundReceivers",
                    "type": "address[]"
                }
            ],
            "name": "makeExternalCalls",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes[]",
                    "name": "data",
                    "type": "bytes[]"
                }
            ],
            "name": "multicall",
            "outputs": [
                {
                    "internalType": "bytes[]",
                    "name": "results",
                    "type": "bytes[]"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "orderHandler",
            "outputs": [
                {
                    "internalType": "contract IOrderHandler",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "roleStore",
            "outputs": [
                {
                    "internalType": "contract RoleStore",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "router",
            "outputs": [
                {
                    "internalType": "contract Router",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "sendNativeToken",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "sendTokens",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "sendWnt",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "market",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "callbackContract",
                    "type": "address"
                }
            ],
            "name": "setSavedCallbackContract",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "uiFeeFactor",
                    "type": "uint256"
                }
            ],
            "name": "setUiFeeFactor",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "shiftHandler",
            "outputs": [
                {
                    "internalType": "contract IShiftHandler",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "key",
                    "type": "bytes32"
                },
                {
                    "components": [
                        {
                            "internalType": "address[]",
                            "name": "primaryTokens",
                            "type": "address[]"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "min",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "max",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct Price.Props[]",
                            "name": "primaryPrices",
                            "type": "tuple[]"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minTimestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "maxTimestamp",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct OracleUtils.SimulatePricesParams",
                    "name": "simulatedOracleParams",
                    "type": "tuple"
                }
            ],
            "name": "simulateExecuteDeposit",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "address[]",
                            "name": "primaryTokens",
                            "type": "address[]"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "min",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "max",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct Price.Props[]",
                            "name": "primaryPrices",
                            "type": "tuple[]"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minTimestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "maxTimestamp",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct OracleUtils.SimulatePricesParams",
                    "name": "simulatedOracleParams",
                    "type": "tuple"
                }
            ],
            "name": "simulateExecuteLatestDeposit",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "address[]",
                            "name": "primaryTokens",
                            "type": "address[]"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "min",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "max",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct Price.Props[]",
                            "name": "primaryPrices",
                            "type": "tuple[]"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minTimestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "maxTimestamp",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct OracleUtils.SimulatePricesParams",
                    "name": "simulatedOracleParams",
                    "type": "tuple"
                }
            ],
            "name": "simulateExecuteLatestOrder",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "address[]",
                            "name": "primaryTokens",
                            "type": "address[]"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "min",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "max",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct Price.Props[]",
                            "name": "primaryPrices",
                            "type": "tuple[]"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minTimestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "maxTimestamp",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct OracleUtils.SimulatePricesParams",
                    "name": "simulatedOracleParams",
                    "type": "tuple"
                }
            ],
            "name": "simulateExecuteLatestShift",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "address[]",
                            "name": "primaryTokens",
                            "type": "address[]"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "min",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "max",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct Price.Props[]",
                            "name": "primaryPrices",
                            "type": "tuple[]"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minTimestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "maxTimestamp",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct OracleUtils.SimulatePricesParams",
                    "name": "simulatedOracleParams",
                    "type": "tuple"
                },
                {
                    "internalType": "enum ISwapPricingUtils.SwapPricingType",
                    "name": "swapPricingType",
                    "type": "uint8"
                }
            ],
            "name": "simulateExecuteLatestWithdrawal",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "key",
                    "type": "bytes32"
                },
                {
                    "components": [
                        {
                            "internalType": "address[]",
                            "name": "primaryTokens",
                            "type": "address[]"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "min",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "max",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct Price.Props[]",
                            "name": "primaryPrices",
                            "type": "tuple[]"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minTimestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "maxTimestamp",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct OracleUtils.SimulatePricesParams",
                    "name": "simulatedOracleParams",
                    "type": "tuple"
                }
            ],
            "name": "simulateExecuteOrder",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "key",
                    "type": "bytes32"
                },
                {
                    "components": [
                        {
                            "internalType": "address[]",
                            "name": "primaryTokens",
                            "type": "address[]"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "min",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "max",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct Price.Props[]",
                            "name": "primaryPrices",
                            "type": "tuple[]"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minTimestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "maxTimestamp",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct OracleUtils.SimulatePricesParams",
                    "name": "simulatedOracleParams",
                    "type": "tuple"
                }
            ],
            "name": "simulateExecuteShift",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "key",
                    "type": "bytes32"
                },
                {
                    "components": [
                        {
                            "internalType": "address[]",
                            "name": "primaryTokens",
                            "type": "address[]"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "min",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "max",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct Price.Props[]",
                            "name": "primaryPrices",
                            "type": "tuple[]"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minTimestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "maxTimestamp",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct OracleUtils.SimulatePricesParams",
                    "name": "simulatedOracleParams",
                    "type": "tuple"
                },
                {
                    "internalType": "enum ISwapPricingUtils.SwapPricingType",
                    "name": "swapPricingType",
                    "type": "uint8"
                }
            ],
            "name": "simulateExecuteWithdrawal",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "key",
                    "type": "bytes32"
                },
                {
                    "internalType": "uint256",
                    "name": "sizeDeltaUsd",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "acceptablePrice",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "triggerPrice",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "minOutputAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "validFromTime",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "autoCancel",
                    "type": "bool"
                }
            ],
            "name": "updateOrder",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "withdrawalHandler",
            "outputs": [
                {
                    "internalType": "contract IWithdrawalHandler",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],
    "43113": [
        {
            "inputs": [
                {
                    "internalType": "contract Router",
                    "name": "_router",
                    "type": "address"
                },
                {
                    "internalType": "contract RoleStore",
                    "name": "_roleStore",
                    "type": "address"
                },
                {
                    "internalType": "contract DataStore",
                    "name": "_dataStore",
                    "type": "address"
                },
                {
                    "internalType": "contract EventEmitter",
                    "name": "_eventEmitter",
                    "type": "address"
                },
                {
                    "internalType": "contract IDepositHandler",
                    "name": "_depositHandler",
                    "type": "address"
                },
                {
                    "internalType": "contract IWithdrawalHandler",
                    "name": "_withdrawalHandler",
                    "type": "address"
                },
                {
                    "internalType": "contract IShiftHandler",
                    "name": "_shiftHandler",
                    "type": "address"
                },
                {
                    "internalType": "contract IOrderHandler",
                    "name": "_orderHandler",
                    "type": "address"
                },
                {
                    "internalType": "contract IExternalHandler",
                    "name": "_externalHandler",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "adjustedClaimableAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "claimedAmount",
                    "type": "uint256"
                }
            ],
            "name": "CollateralAlreadyClaimed",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "key",
                    "type": "bytes32"
                }
            ],
            "name": "DisabledFeature",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "market",
                    "type": "address"
                }
            ],
            "name": "DisabledMarket",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "market",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                }
            ],
            "name": "EmptyAddressInMarketTokenBalanceValidation",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "EmptyDeposit",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "EmptyHoldingAddress",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "EmptyMarket",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "EmptyOrder",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "EmptyReceiver",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                }
            ],
            "name": "EmptyTokenTranferGasLimit",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "marketsLength",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "tokensLength",
                    "type": "uint256"
                }
            ],
            "name": "InvalidClaimAffiliateRewardsInput",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "marketsLength",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "tokensLength",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "timeKeysLength",
                    "type": "uint256"
                }
            ],
            "name": "InvalidClaimCollateralInput",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "marketsLength",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "tokensLength",
                    "type": "uint256"
                }
            ],
            "name": "InvalidClaimFundingFeesInput",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "marketsLength",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "tokensLength",
                    "type": "uint256"
                }
            ],
            "name": "InvalidClaimUiFeesInput",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "InvalidClaimableFactor",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "market",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "balance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "expectedMinBalance",
                    "type": "uint256"
                }
            ],
            "name": "InvalidMarketTokenBalance",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "market",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "balance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "claimableFundingFeeAmount",
                    "type": "uint256"
                }
            ],
            "name": "InvalidMarketTokenBalanceForClaimableFunding",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "market",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "balance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "collateralAmount",
                    "type": "uint256"
                }
            ],
            "name": "InvalidMarketTokenBalanceForCollateralAmount",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "uiFeeFactor",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "maxUiFeeFactor",
                    "type": "uint256"
                }
            ],
            "name": "InvalidUiFeeFactor",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "TokenTransferError",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "msgSender",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "role",
                    "type": "string"
                }
            ],
            "name": "Unauthorized",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "key",
                    "type": "bytes32"
                }
            ],
            "name": "cancelDeposit",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "key",
                    "type": "bytes32"
                }
            ],
            "name": "cancelOrder",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "key",
                    "type": "bytes32"
                }
            ],
            "name": "cancelShift",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "key",
                    "type": "bytes32"
                }
            ],
            "name": "cancelWithdrawal",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "markets",
                    "type": "address[]"
                },
                {
                    "internalType": "address[]",
                    "name": "tokens",
                    "type": "address[]"
                },
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                }
            ],
            "name": "claimAffiliateRewards",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "markets",
                    "type": "address[]"
                },
                {
                    "internalType": "address[]",
                    "name": "tokens",
                    "type": "address[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "timeKeys",
                    "type": "uint256[]"
                },
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                }
            ],
            "name": "claimCollateral",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "markets",
                    "type": "address[]"
                },
                {
                    "internalType": "address[]",
                    "name": "tokens",
                    "type": "address[]"
                },
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                }
            ],
            "name": "claimFundingFees",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "markets",
                    "type": "address[]"
                },
                {
                    "internalType": "address[]",
                    "name": "tokens",
                    "type": "address[]"
                },
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                }
            ],
            "name": "claimUiFees",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "receiver",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "callbackContract",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "uiFeeReceiver",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "market",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "initialLongToken",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "initialShortToken",
                            "type": "address"
                        },
                        {
                            "internalType": "address[]",
                            "name": "longTokenSwapPath",
                            "type": "address[]"
                        },
                        {
                            "internalType": "address[]",
                            "name": "shortTokenSwapPath",
                            "type": "address[]"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minMarketTokens",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bool",
                            "name": "shouldUnwrapNativeToken",
                            "type": "bool"
                        },
                        {
                            "internalType": "uint256",
                            "name": "executionFee",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "callbackGasLimit",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct DepositUtils.CreateDepositParams",
                    "name": "params",
                    "type": "tuple"
                }
            ],
            "name": "createDeposit",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "receiver",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "cancellationReceiver",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "callbackContract",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "uiFeeReceiver",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "market",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "initialCollateralToken",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address[]",
                                    "name": "swapPath",
                                    "type": "address[]"
                                }
                            ],
                            "internalType": "struct IBaseOrderUtils.CreateOrderParamsAddresses",
                            "name": "addresses",
                            "type": "tuple"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "sizeDeltaUsd",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "initialCollateralDeltaAmount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "triggerPrice",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "acceptablePrice",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "executionFee",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "callbackGasLimit",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "minOutputAmount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "validFromTime",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct IBaseOrderUtils.CreateOrderParamsNumbers",
                            "name": "numbers",
                            "type": "tuple"
                        },
                        {
                            "internalType": "enum Order.OrderType",
                            "name": "orderType",
                            "type": "uint8"
                        },
                        {
                            "internalType": "enum Order.DecreasePositionSwapType",
                            "name": "decreasePositionSwapType",
                            "type": "uint8"
                        },
                        {
                            "internalType": "bool",
                            "name": "isLong",
                            "type": "bool"
                        },
                        {
                            "internalType": "bool",
                            "name": "shouldUnwrapNativeToken",
                            "type": "bool"
                        },
                        {
                            "internalType": "bool",
                            "name": "autoCancel",
                            "type": "bool"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "referralCode",
                            "type": "bytes32"
                        }
                    ],
                    "internalType": "struct IBaseOrderUtils.CreateOrderParams",
                    "name": "params",
                    "type": "tuple"
                }
            ],
            "name": "createOrder",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "receiver",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "callbackContract",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "uiFeeReceiver",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "fromMarket",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "toMarket",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minMarketTokens",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "executionFee",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "callbackGasLimit",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct ShiftUtils.CreateShiftParams",
                    "name": "params",
                    "type": "tuple"
                }
            ],
            "name": "createShift",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "receiver",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "callbackContract",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "uiFeeReceiver",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "market",
                            "type": "address"
                        },
                        {
                            "internalType": "address[]",
                            "name": "longTokenSwapPath",
                            "type": "address[]"
                        },
                        {
                            "internalType": "address[]",
                            "name": "shortTokenSwapPath",
                            "type": "address[]"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minLongTokenAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minShortTokenAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bool",
                            "name": "shouldUnwrapNativeToken",
                            "type": "bool"
                        },
                        {
                            "internalType": "uint256",
                            "name": "executionFee",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "callbackGasLimit",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct WithdrawalUtils.CreateWithdrawalParams",
                    "name": "params",
                    "type": "tuple"
                }
            ],
            "name": "createWithdrawal",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "dataStore",
            "outputs": [
                {
                    "internalType": "contract DataStore",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "depositHandler",
            "outputs": [
                {
                    "internalType": "contract IDepositHandler",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "eventEmitter",
            "outputs": [
                {
                    "internalType": "contract EventEmitter",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "receiver",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "callbackContract",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "uiFeeReceiver",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "market",
                            "type": "address"
                        },
                        {
                            "internalType": "address[]",
                            "name": "longTokenSwapPath",
                            "type": "address[]"
                        },
                        {
                            "internalType": "address[]",
                            "name": "shortTokenSwapPath",
                            "type": "address[]"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minLongTokenAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minShortTokenAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bool",
                            "name": "shouldUnwrapNativeToken",
                            "type": "bool"
                        },
                        {
                            "internalType": "uint256",
                            "name": "executionFee",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "callbackGasLimit",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct WithdrawalUtils.CreateWithdrawalParams",
                    "name": "params",
                    "type": "tuple"
                },
                {
                    "components": [
                        {
                            "internalType": "address[]",
                            "name": "tokens",
                            "type": "address[]"
                        },
                        {
                            "internalType": "address[]",
                            "name": "providers",
                            "type": "address[]"
                        },
                        {
                            "internalType": "bytes[]",
                            "name": "data",
                            "type": "bytes[]"
                        }
                    ],
                    "internalType": "struct OracleUtils.SetPricesParams",
                    "name": "oracleParams",
                    "type": "tuple"
                }
            ],
            "name": "executeAtomicWithdrawal",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "externalHandler",
            "outputs": [
                {
                    "internalType": "contract IExternalHandler",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "externalCallTargets",
                    "type": "address[]"
                },
                {
                    "internalType": "bytes[]",
                    "name": "externalCallDataList",
                    "type": "bytes[]"
                },
                {
                    "internalType": "address[]",
                    "name": "refundTokens",
                    "type": "address[]"
                },
                {
                    "internalType": "address[]",
                    "name": "refundReceivers",
                    "type": "address[]"
                }
            ],
            "name": "makeExternalCalls",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes[]",
                    "name": "data",
                    "type": "bytes[]"
                }
            ],
            "name": "multicall",
            "outputs": [
                {
                    "internalType": "bytes[]",
                    "name": "results",
                    "type": "bytes[]"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "orderHandler",
            "outputs": [
                {
                    "internalType": "contract IOrderHandler",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "roleStore",
            "outputs": [
                {
                    "internalType": "contract RoleStore",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "router",
            "outputs": [
                {
                    "internalType": "contract Router",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "sendNativeToken",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "sendTokens",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "sendWnt",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "market",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "callbackContract",
                    "type": "address"
                }
            ],
            "name": "setSavedCallbackContract",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "uiFeeFactor",
                    "type": "uint256"
                }
            ],
            "name": "setUiFeeFactor",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "shiftHandler",
            "outputs": [
                {
                    "internalType": "contract IShiftHandler",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "key",
                    "type": "bytes32"
                },
                {
                    "components": [
                        {
                            "internalType": "address[]",
                            "name": "primaryTokens",
                            "type": "address[]"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "min",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "max",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct Price.Props[]",
                            "name": "primaryPrices",
                            "type": "tuple[]"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minTimestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "maxTimestamp",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct OracleUtils.SimulatePricesParams",
                    "name": "simulatedOracleParams",
                    "type": "tuple"
                }
            ],
            "name": "simulateExecuteDeposit",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "address[]",
                            "name": "primaryTokens",
                            "type": "address[]"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "min",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "max",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct Price.Props[]",
                            "name": "primaryPrices",
                            "type": "tuple[]"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minTimestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "maxTimestamp",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct OracleUtils.SimulatePricesParams",
                    "name": "simulatedOracleParams",
                    "type": "tuple"
                }
            ],
            "name": "simulateExecuteLatestDeposit",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "address[]",
                            "name": "primaryTokens",
                            "type": "address[]"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "min",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "max",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct Price.Props[]",
                            "name": "primaryPrices",
                            "type": "tuple[]"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minTimestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "maxTimestamp",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct OracleUtils.SimulatePricesParams",
                    "name": "simulatedOracleParams",
                    "type": "tuple"
                }
            ],
            "name": "simulateExecuteLatestOrder",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "address[]",
                            "name": "primaryTokens",
                            "type": "address[]"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "min",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "max",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct Price.Props[]",
                            "name": "primaryPrices",
                            "type": "tuple[]"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minTimestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "maxTimestamp",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct OracleUtils.SimulatePricesParams",
                    "name": "simulatedOracleParams",
                    "type": "tuple"
                },
                {
                    "internalType": "enum ISwapPricingUtils.SwapPricingType",
                    "name": "swapPricingType",
                    "type": "uint8"
                }
            ],
            "name": "simulateExecuteLatestWithdrawal",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "key",
                    "type": "bytes32"
                },
                {
                    "components": [
                        {
                            "internalType": "address[]",
                            "name": "primaryTokens",
                            "type": "address[]"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "min",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "max",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct Price.Props[]",
                            "name": "primaryPrices",
                            "type": "tuple[]"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minTimestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "maxTimestamp",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct OracleUtils.SimulatePricesParams",
                    "name": "simulatedOracleParams",
                    "type": "tuple"
                }
            ],
            "name": "simulateExecuteOrder",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "key",
                    "type": "bytes32"
                },
                {
                    "components": [
                        {
                            "internalType": "address[]",
                            "name": "primaryTokens",
                            "type": "address[]"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "min",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "max",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct Price.Props[]",
                            "name": "primaryPrices",
                            "type": "tuple[]"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minTimestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "maxTimestamp",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct OracleUtils.SimulatePricesParams",
                    "name": "simulatedOracleParams",
                    "type": "tuple"
                }
            ],
            "name": "simulateExecuteShift",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "key",
                    "type": "bytes32"
                },
                {
                    "components": [
                        {
                            "internalType": "address[]",
                            "name": "primaryTokens",
                            "type": "address[]"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "min",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "max",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct Price.Props[]",
                            "name": "primaryPrices",
                            "type": "tuple[]"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minTimestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "maxTimestamp",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct OracleUtils.SimulatePricesParams",
                    "name": "simulatedOracleParams",
                    "type": "tuple"
                },
                {
                    "internalType": "enum ISwapPricingUtils.SwapPricingType",
                    "name": "swapPricingType",
                    "type": "uint8"
                }
            ],
            "name": "simulateExecuteWithdrawal",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "key",
                    "type": "bytes32"
                },
                {
                    "internalType": "uint256",
                    "name": "sizeDeltaUsd",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "acceptablePrice",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "triggerPrice",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "minOutputAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "validFromTime",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "autoCancel",
                    "type": "bool"
                }
            ],
            "name": "updateOrder",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "withdrawalHandler",
            "outputs": [
                {
                    "internalType": "contract IWithdrawalHandler",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],
    "421614": [
        {
            "inputs": [
                {
                    "internalType": "contract Router",
                    "name": "_router",
                    "type": "address"
                },
                {
                    "internalType": "contract RoleStore",
                    "name": "_roleStore",
                    "type": "address"
                },
                {
                    "internalType": "contract DataStore",
                    "name": "_dataStore",
                    "type": "address"
                },
                {
                    "internalType": "contract EventEmitter",
                    "name": "_eventEmitter",
                    "type": "address"
                },
                {
                    "internalType": "contract IDepositHandler",
                    "name": "_depositHandler",
                    "type": "address"
                },
                {
                    "internalType": "contract IWithdrawalHandler",
                    "name": "_withdrawalHandler",
                    "type": "address"
                },
                {
                    "internalType": "contract IOrderHandler",
                    "name": "_orderHandler",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "adjustedClaimableAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "claimedAmount",
                    "type": "uint256"
                }
            ],
            "name": "CollateralAlreadyClaimed",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "key",
                    "type": "bytes32"
                }
            ],
            "name": "DisabledFeature",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "market",
                    "type": "address"
                }
            ],
            "name": "DisabledMarket",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "market",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                }
            ],
            "name": "EmptyAddressInMarketTokenBalanceValidation",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "EmptyDeposit",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "EmptyHoldingAddress",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "EmptyMarket",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "EmptyOrder",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "EmptyReceiver",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                }
            ],
            "name": "EmptyTokenTranferGasLimit",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "marketsLength",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "tokensLength",
                    "type": "uint256"
                }
            ],
            "name": "InvalidClaimAffiliateRewardsInput",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "marketsLength",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "tokensLength",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "timeKeysLength",
                    "type": "uint256"
                }
            ],
            "name": "InvalidClaimCollateralInput",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "marketsLength",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "tokensLength",
                    "type": "uint256"
                }
            ],
            "name": "InvalidClaimFundingFeesInput",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "marketsLength",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "tokensLength",
                    "type": "uint256"
                }
            ],
            "name": "InvalidClaimUiFeesInput",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "market",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "balance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "expectedMinBalance",
                    "type": "uint256"
                }
            ],
            "name": "InvalidMarketTokenBalance",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "market",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "balance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "claimableFundingFeeAmount",
                    "type": "uint256"
                }
            ],
            "name": "InvalidMarketTokenBalanceForClaimableFunding",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "market",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "balance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "collateralAmount",
                    "type": "uint256"
                }
            ],
            "name": "InvalidMarketTokenBalanceForCollateralAmount",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "uiFeeFactor",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "maxUiFeeFactor",
                    "type": "uint256"
                }
            ],
            "name": "InvalidUiFeeFactor",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "TokenTransferError",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "msgSender",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "role",
                    "type": "string"
                }
            ],
            "name": "Unauthorized",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "key",
                    "type": "bytes32"
                }
            ],
            "name": "cancelDeposit",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "key",
                    "type": "bytes32"
                }
            ],
            "name": "cancelOrder",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "key",
                    "type": "bytes32"
                }
            ],
            "name": "cancelWithdrawal",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "markets",
                    "type": "address[]"
                },
                {
                    "internalType": "address[]",
                    "name": "tokens",
                    "type": "address[]"
                },
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                }
            ],
            "name": "claimAffiliateRewards",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "markets",
                    "type": "address[]"
                },
                {
                    "internalType": "address[]",
                    "name": "tokens",
                    "type": "address[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "timeKeys",
                    "type": "uint256[]"
                },
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                }
            ],
            "name": "claimCollateral",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "markets",
                    "type": "address[]"
                },
                {
                    "internalType": "address[]",
                    "name": "tokens",
                    "type": "address[]"
                },
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                }
            ],
            "name": "claimFundingFees",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "markets",
                    "type": "address[]"
                },
                {
                    "internalType": "address[]",
                    "name": "tokens",
                    "type": "address[]"
                },
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                }
            ],
            "name": "claimUiFees",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "receiver",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "callbackContract",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "uiFeeReceiver",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "market",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "initialLongToken",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "initialShortToken",
                            "type": "address"
                        },
                        {
                            "internalType": "address[]",
                            "name": "longTokenSwapPath",
                            "type": "address[]"
                        },
                        {
                            "internalType": "address[]",
                            "name": "shortTokenSwapPath",
                            "type": "address[]"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minMarketTokens",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bool",
                            "name": "shouldUnwrapNativeToken",
                            "type": "bool"
                        },
                        {
                            "internalType": "uint256",
                            "name": "executionFee",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "callbackGasLimit",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct DepositUtils.CreateDepositParams",
                    "name": "params",
                    "type": "tuple"
                }
            ],
            "name": "createDeposit",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "receiver",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "callbackContract",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "uiFeeReceiver",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "market",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "initialCollateralToken",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address[]",
                                    "name": "swapPath",
                                    "type": "address[]"
                                }
                            ],
                            "internalType": "struct IBaseOrderUtils.CreateOrderParamsAddresses",
                            "name": "addresses",
                            "type": "tuple"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "sizeDeltaUsd",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "initialCollateralDeltaAmount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "triggerPrice",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "acceptablePrice",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "executionFee",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "callbackGasLimit",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "minOutputAmount",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct IBaseOrderUtils.CreateOrderParamsNumbers",
                            "name": "numbers",
                            "type": "tuple"
                        },
                        {
                            "internalType": "enum Order.OrderType",
                            "name": "orderType",
                            "type": "uint8"
                        },
                        {
                            "internalType": "enum Order.DecreasePositionSwapType",
                            "name": "decreasePositionSwapType",
                            "type": "uint8"
                        },
                        {
                            "internalType": "bool",
                            "name": "isLong",
                            "type": "bool"
                        },
                        {
                            "internalType": "bool",
                            "name": "shouldUnwrapNativeToken",
                            "type": "bool"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "referralCode",
                            "type": "bytes32"
                        }
                    ],
                    "internalType": "struct IBaseOrderUtils.CreateOrderParams",
                    "name": "params",
                    "type": "tuple"
                }
            ],
            "name": "createOrder",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "receiver",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "callbackContract",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "uiFeeReceiver",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "market",
                            "type": "address"
                        },
                        {
                            "internalType": "address[]",
                            "name": "longTokenSwapPath",
                            "type": "address[]"
                        },
                        {
                            "internalType": "address[]",
                            "name": "shortTokenSwapPath",
                            "type": "address[]"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minLongTokenAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minShortTokenAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bool",
                            "name": "shouldUnwrapNativeToken",
                            "type": "bool"
                        },
                        {
                            "internalType": "uint256",
                            "name": "executionFee",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "callbackGasLimit",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct WithdrawalUtils.CreateWithdrawalParams",
                    "name": "params",
                    "type": "tuple"
                }
            ],
            "name": "createWithdrawal",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "dataStore",
            "outputs": [
                {
                    "internalType": "contract DataStore",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "depositHandler",
            "outputs": [
                {
                    "internalType": "contract IDepositHandler",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "eventEmitter",
            "outputs": [
                {
                    "internalType": "contract EventEmitter",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes[]",
                    "name": "data",
                    "type": "bytes[]"
                }
            ],
            "name": "multicall",
            "outputs": [
                {
                    "internalType": "bytes[]",
                    "name": "results",
                    "type": "bytes[]"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "orderHandler",
            "outputs": [
                {
                    "internalType": "contract IOrderHandler",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "roleStore",
            "outputs": [
                {
                    "internalType": "contract RoleStore",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "router",
            "outputs": [
                {
                    "internalType": "contract Router",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "sendNativeToken",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "sendTokens",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "sendWnt",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "market",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "callbackContract",
                    "type": "address"
                }
            ],
            "name": "setSavedCallbackContract",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "uiFeeFactor",
                    "type": "uint256"
                }
            ],
            "name": "setUiFeeFactor",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "key",
                    "type": "bytes32"
                },
                {
                    "components": [
                        {
                            "internalType": "address[]",
                            "name": "primaryTokens",
                            "type": "address[]"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "min",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "max",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct Price.Props[]",
                            "name": "primaryPrices",
                            "type": "tuple[]"
                        }
                    ],
                    "internalType": "struct OracleUtils.SimulatePricesParams",
                    "name": "simulatedOracleParams",
                    "type": "tuple"
                }
            ],
            "name": "simulateExecuteDeposit",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "key",
                    "type": "bytes32"
                },
                {
                    "components": [
                        {
                            "internalType": "address[]",
                            "name": "primaryTokens",
                            "type": "address[]"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "min",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "max",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct Price.Props[]",
                            "name": "primaryPrices",
                            "type": "tuple[]"
                        }
                    ],
                    "internalType": "struct OracleUtils.SimulatePricesParams",
                    "name": "simulatedOracleParams",
                    "type": "tuple"
                }
            ],
            "name": "simulateExecuteOrder",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "key",
                    "type": "bytes32"
                },
                {
                    "components": [
                        {
                            "internalType": "address[]",
                            "name": "primaryTokens",
                            "type": "address[]"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "min",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "max",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct Price.Props[]",
                            "name": "primaryPrices",
                            "type": "tuple[]"
                        }
                    ],
                    "internalType": "struct OracleUtils.SimulatePricesParams",
                    "name": "simulatedOracleParams",
                    "type": "tuple"
                }
            ],
            "name": "simulateExecuteWithdrawal",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "key",
                    "type": "bytes32"
                },
                {
                    "internalType": "uint256",
                    "name": "sizeDeltaUsd",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "acceptablePrice",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "triggerPrice",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "minOutputAmount",
                    "type": "uint256"
                }
            ],
            "name": "updateOrder",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "withdrawalHandler",
            "outputs": [
                {
                    "internalType": "contract IWithdrawalHandler",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],
    "43114": [
        {
            "inputs": [
                {
                    "internalType": "contract Router",
                    "name": "_router",
                    "type": "address"
                },
                {
                    "internalType": "contract RoleStore",
                    "name": "_roleStore",
                    "type": "address"
                },
                {
                    "internalType": "contract DataStore",
                    "name": "_dataStore",
                    "type": "address"
                },
                {
                    "internalType": "contract EventEmitter",
                    "name": "_eventEmitter",
                    "type": "address"
                },
                {
                    "internalType": "contract IDepositHandler",
                    "name": "_depositHandler",
                    "type": "address"
                },
                {
                    "internalType": "contract IWithdrawalHandler",
                    "name": "_withdrawalHandler",
                    "type": "address"
                },
                {
                    "internalType": "contract IShiftHandler",
                    "name": "_shiftHandler",
                    "type": "address"
                },
                {
                    "internalType": "contract IOrderHandler",
                    "name": "_orderHandler",
                    "type": "address"
                },
                {
                    "internalType": "contract IExternalHandler",
                    "name": "_externalHandler",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "adjustedClaimableAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "claimedAmount",
                    "type": "uint256"
                }
            ],
            "name": "CollateralAlreadyClaimed",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "key",
                    "type": "bytes32"
                }
            ],
            "name": "DisabledFeature",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "market",
                    "type": "address"
                }
            ],
            "name": "DisabledMarket",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "market",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                }
            ],
            "name": "EmptyAddressInMarketTokenBalanceValidation",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "EmptyDeposit",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "EmptyHoldingAddress",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "EmptyMarket",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "EmptyOrder",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "EmptyReceiver",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                }
            ],
            "name": "EmptyTokenTranferGasLimit",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "marketsLength",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "tokensLength",
                    "type": "uint256"
                }
            ],
            "name": "InvalidClaimAffiliateRewardsInput",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "marketsLength",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "tokensLength",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "timeKeysLength",
                    "type": "uint256"
                }
            ],
            "name": "InvalidClaimCollateralInput",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "marketsLength",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "tokensLength",
                    "type": "uint256"
                }
            ],
            "name": "InvalidClaimFundingFeesInput",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "marketsLength",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "tokensLength",
                    "type": "uint256"
                }
            ],
            "name": "InvalidClaimUiFeesInput",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "InvalidClaimableFactor",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "market",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "balance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "expectedMinBalance",
                    "type": "uint256"
                }
            ],
            "name": "InvalidMarketTokenBalance",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "market",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "balance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "claimableFundingFeeAmount",
                    "type": "uint256"
                }
            ],
            "name": "InvalidMarketTokenBalanceForClaimableFunding",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "market",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "balance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "collateralAmount",
                    "type": "uint256"
                }
            ],
            "name": "InvalidMarketTokenBalanceForCollateralAmount",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "uiFeeFactor",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "maxUiFeeFactor",
                    "type": "uint256"
                }
            ],
            "name": "InvalidUiFeeFactor",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "TokenTransferError",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "msgSender",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "role",
                    "type": "string"
                }
            ],
            "name": "Unauthorized",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "key",
                    "type": "bytes32"
                }
            ],
            "name": "cancelDeposit",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "key",
                    "type": "bytes32"
                }
            ],
            "name": "cancelOrder",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "key",
                    "type": "bytes32"
                }
            ],
            "name": "cancelShift",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "key",
                    "type": "bytes32"
                }
            ],
            "name": "cancelWithdrawal",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "markets",
                    "type": "address[]"
                },
                {
                    "internalType": "address[]",
                    "name": "tokens",
                    "type": "address[]"
                },
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                }
            ],
            "name": "claimAffiliateRewards",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "markets",
                    "type": "address[]"
                },
                {
                    "internalType": "address[]",
                    "name": "tokens",
                    "type": "address[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "timeKeys",
                    "type": "uint256[]"
                },
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                }
            ],
            "name": "claimCollateral",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "markets",
                    "type": "address[]"
                },
                {
                    "internalType": "address[]",
                    "name": "tokens",
                    "type": "address[]"
                },
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                }
            ],
            "name": "claimFundingFees",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "markets",
                    "type": "address[]"
                },
                {
                    "internalType": "address[]",
                    "name": "tokens",
                    "type": "address[]"
                },
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                }
            ],
            "name": "claimUiFees",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "receiver",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "callbackContract",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "uiFeeReceiver",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "market",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "initialLongToken",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "initialShortToken",
                            "type": "address"
                        },
                        {
                            "internalType": "address[]",
                            "name": "longTokenSwapPath",
                            "type": "address[]"
                        },
                        {
                            "internalType": "address[]",
                            "name": "shortTokenSwapPath",
                            "type": "address[]"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minMarketTokens",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bool",
                            "name": "shouldUnwrapNativeToken",
                            "type": "bool"
                        },
                        {
                            "internalType": "uint256",
                            "name": "executionFee",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "callbackGasLimit",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct DepositUtils.CreateDepositParams",
                    "name": "params",
                    "type": "tuple"
                }
            ],
            "name": "createDeposit",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "receiver",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "cancellationReceiver",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "callbackContract",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "uiFeeReceiver",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "market",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "initialCollateralToken",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address[]",
                                    "name": "swapPath",
                                    "type": "address[]"
                                }
                            ],
                            "internalType": "struct IBaseOrderUtils.CreateOrderParamsAddresses",
                            "name": "addresses",
                            "type": "tuple"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "sizeDeltaUsd",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "initialCollateralDeltaAmount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "triggerPrice",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "acceptablePrice",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "executionFee",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "callbackGasLimit",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "minOutputAmount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "validFromTime",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct IBaseOrderUtils.CreateOrderParamsNumbers",
                            "name": "numbers",
                            "type": "tuple"
                        },
                        {
                            "internalType": "enum Order.OrderType",
                            "name": "orderType",
                            "type": "uint8"
                        },
                        {
                            "internalType": "enum Order.DecreasePositionSwapType",
                            "name": "decreasePositionSwapType",
                            "type": "uint8"
                        },
                        {
                            "internalType": "bool",
                            "name": "isLong",
                            "type": "bool"
                        },
                        {
                            "internalType": "bool",
                            "name": "shouldUnwrapNativeToken",
                            "type": "bool"
                        },
                        {
                            "internalType": "bool",
                            "name": "autoCancel",
                            "type": "bool"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "referralCode",
                            "type": "bytes32"
                        }
                    ],
                    "internalType": "struct IBaseOrderUtils.CreateOrderParams",
                    "name": "params",
                    "type": "tuple"
                }
            ],
            "name": "createOrder",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "receiver",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "callbackContract",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "uiFeeReceiver",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "fromMarket",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "toMarket",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minMarketTokens",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "executionFee",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "callbackGasLimit",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct ShiftUtils.CreateShiftParams",
                    "name": "params",
                    "type": "tuple"
                }
            ],
            "name": "createShift",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "receiver",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "callbackContract",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "uiFeeReceiver",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "market",
                            "type": "address"
                        },
                        {
                            "internalType": "address[]",
                            "name": "longTokenSwapPath",
                            "type": "address[]"
                        },
                        {
                            "internalType": "address[]",
                            "name": "shortTokenSwapPath",
                            "type": "address[]"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minLongTokenAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minShortTokenAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bool",
                            "name": "shouldUnwrapNativeToken",
                            "type": "bool"
                        },
                        {
                            "internalType": "uint256",
                            "name": "executionFee",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "callbackGasLimit",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct WithdrawalUtils.CreateWithdrawalParams",
                    "name": "params",
                    "type": "tuple"
                }
            ],
            "name": "createWithdrawal",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "dataStore",
            "outputs": [
                {
                    "internalType": "contract DataStore",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "depositHandler",
            "outputs": [
                {
                    "internalType": "contract IDepositHandler",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "eventEmitter",
            "outputs": [
                {
                    "internalType": "contract EventEmitter",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "receiver",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "callbackContract",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "uiFeeReceiver",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "market",
                            "type": "address"
                        },
                        {
                            "internalType": "address[]",
                            "name": "longTokenSwapPath",
                            "type": "address[]"
                        },
                        {
                            "internalType": "address[]",
                            "name": "shortTokenSwapPath",
                            "type": "address[]"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minLongTokenAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minShortTokenAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bool",
                            "name": "shouldUnwrapNativeToken",
                            "type": "bool"
                        },
                        {
                            "internalType": "uint256",
                            "name": "executionFee",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "callbackGasLimit",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct WithdrawalUtils.CreateWithdrawalParams",
                    "name": "params",
                    "type": "tuple"
                },
                {
                    "components": [
                        {
                            "internalType": "address[]",
                            "name": "tokens",
                            "type": "address[]"
                        },
                        {
                            "internalType": "address[]",
                            "name": "providers",
                            "type": "address[]"
                        },
                        {
                            "internalType": "bytes[]",
                            "name": "data",
                            "type": "bytes[]"
                        }
                    ],
                    "internalType": "struct OracleUtils.SetPricesParams",
                    "name": "oracleParams",
                    "type": "tuple"
                }
            ],
            "name": "executeAtomicWithdrawal",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "externalHandler",
            "outputs": [
                {
                    "internalType": "contract IExternalHandler",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "externalCallTargets",
                    "type": "address[]"
                },
                {
                    "internalType": "bytes[]",
                    "name": "externalCallDataList",
                    "type": "bytes[]"
                },
                {
                    "internalType": "address[]",
                    "name": "refundTokens",
                    "type": "address[]"
                },
                {
                    "internalType": "address[]",
                    "name": "refundReceivers",
                    "type": "address[]"
                }
            ],
            "name": "makeExternalCalls",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes[]",
                    "name": "data",
                    "type": "bytes[]"
                }
            ],
            "name": "multicall",
            "outputs": [
                {
                    "internalType": "bytes[]",
                    "name": "results",
                    "type": "bytes[]"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "orderHandler",
            "outputs": [
                {
                    "internalType": "contract IOrderHandler",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "roleStore",
            "outputs": [
                {
                    "internalType": "contract RoleStore",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "router",
            "outputs": [
                {
                    "internalType": "contract Router",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "sendNativeToken",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "sendTokens",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "sendWnt",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "market",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "callbackContract",
                    "type": "address"
                }
            ],
            "name": "setSavedCallbackContract",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "uiFeeFactor",
                    "type": "uint256"
                }
            ],
            "name": "setUiFeeFactor",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "shiftHandler",
            "outputs": [
                {
                    "internalType": "contract IShiftHandler",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "key",
                    "type": "bytes32"
                },
                {
                    "components": [
                        {
                            "internalType": "address[]",
                            "name": "primaryTokens",
                            "type": "address[]"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "min",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "max",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct Price.Props[]",
                            "name": "primaryPrices",
                            "type": "tuple[]"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minTimestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "maxTimestamp",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct OracleUtils.SimulatePricesParams",
                    "name": "simulatedOracleParams",
                    "type": "tuple"
                }
            ],
            "name": "simulateExecuteDeposit",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "address[]",
                            "name": "primaryTokens",
                            "type": "address[]"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "min",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "max",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct Price.Props[]",
                            "name": "primaryPrices",
                            "type": "tuple[]"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minTimestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "maxTimestamp",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct OracleUtils.SimulatePricesParams",
                    "name": "simulatedOracleParams",
                    "type": "tuple"
                }
            ],
            "name": "simulateExecuteLatestDeposit",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "address[]",
                            "name": "primaryTokens",
                            "type": "address[]"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "min",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "max",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct Price.Props[]",
                            "name": "primaryPrices",
                            "type": "tuple[]"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minTimestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "maxTimestamp",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct OracleUtils.SimulatePricesParams",
                    "name": "simulatedOracleParams",
                    "type": "tuple"
                }
            ],
            "name": "simulateExecuteLatestOrder",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "address[]",
                            "name": "primaryTokens",
                            "type": "address[]"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "min",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "max",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct Price.Props[]",
                            "name": "primaryPrices",
                            "type": "tuple[]"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minTimestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "maxTimestamp",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct OracleUtils.SimulatePricesParams",
                    "name": "simulatedOracleParams",
                    "type": "tuple"
                }
            ],
            "name": "simulateExecuteLatestShift",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "address[]",
                            "name": "primaryTokens",
                            "type": "address[]"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "min",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "max",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct Price.Props[]",
                            "name": "primaryPrices",
                            "type": "tuple[]"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minTimestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "maxTimestamp",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct OracleUtils.SimulatePricesParams",
                    "name": "simulatedOracleParams",
                    "type": "tuple"
                },
                {
                    "internalType": "enum ISwapPricingUtils.SwapPricingType",
                    "name": "swapPricingType",
                    "type": "uint8"
                }
            ],
            "name": "simulateExecuteLatestWithdrawal",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "key",
                    "type": "bytes32"
                },
                {
                    "components": [
                        {
                            "internalType": "address[]",
                            "name": "primaryTokens",
                            "type": "address[]"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "min",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "max",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct Price.Props[]",
                            "name": "primaryPrices",
                            "type": "tuple[]"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minTimestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "maxTimestamp",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct OracleUtils.SimulatePricesParams",
                    "name": "simulatedOracleParams",
                    "type": "tuple"
                }
            ],
            "name": "simulateExecuteOrder",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "key",
                    "type": "bytes32"
                },
                {
                    "components": [
                        {
                            "internalType": "address[]",
                            "name": "primaryTokens",
                            "type": "address[]"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "min",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "max",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct Price.Props[]",
                            "name": "primaryPrices",
                            "type": "tuple[]"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minTimestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "maxTimestamp",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct OracleUtils.SimulatePricesParams",
                    "name": "simulatedOracleParams",
                    "type": "tuple"
                }
            ],
            "name": "simulateExecuteShift",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "key",
                    "type": "bytes32"
                },
                {
                    "components": [
                        {
                            "internalType": "address[]",
                            "name": "primaryTokens",
                            "type": "address[]"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "min",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "max",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct Price.Props[]",
                            "name": "primaryPrices",
                            "type": "tuple[]"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minTimestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "maxTimestamp",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct OracleUtils.SimulatePricesParams",
                    "name": "simulatedOracleParams",
                    "type": "tuple"
                },
                {
                    "internalType": "enum ISwapPricingUtils.SwapPricingType",
                    "name": "swapPricingType",
                    "type": "uint8"
                }
            ],
            "name": "simulateExecuteWithdrawal",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "key",
                    "type": "bytes32"
                },
                {
                    "internalType": "uint256",
                    "name": "sizeDeltaUsd",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "acceptablePrice",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "triggerPrice",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "minOutputAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "validFromTime",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "autoCancel",
                    "type": "bool"
                }
            ],
            "name": "updateOrder",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "withdrawalHandler",
            "outputs": [
                {
                    "internalType": "contract IWithdrawalHandler",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
}
