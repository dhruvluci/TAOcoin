/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BaseContractAPI } from '@reflexer-finance/geb-contract-base'
import { MulticallRequest } from '@reflexer-finance/geb-contract-base'
import { TransactionRequest } from '@reflexer-finance/geb-contract-base'
import { BytesLike } from '@ethersproject/bytes'
import { BigNumberish } from '@ethersproject/bignumber'
import { BigNumber } from '@ethersproject/bignumber'

export class SaviourCRatioSetter extends BaseContractAPI {
    CRATIO_SCALE_DOWN(): Promise<BigNumber>
    CRATIO_SCALE_DOWN(multicall: true): MulticallRequest<BigNumber>
    CRATIO_SCALE_DOWN(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"CRATIO_SCALE_DOWN","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    MAX_CRATIO(): Promise<BigNumber>
    MAX_CRATIO(multicall: true): MulticallRequest<BigNumber>
    MAX_CRATIO(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"MAX_CRATIO","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    addAuthorization(account: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [account])
    }

    authorizedAccounts(address: string): Promise<BigNumber>
    authorizedAccounts(
        address: string,
        multicall: true
    ): MulticallRequest<BigNumber>
    authorizedAccounts(
        address: string,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"authorizedAccounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [address], multicall)
    }

    defaultDesiredCollateralizationRatios(bytes: BytesLike): Promise<BigNumber>
    defaultDesiredCollateralizationRatios(
        bytes: BytesLike,
        multicall: true
    ): MulticallRequest<BigNumber>
    defaultDesiredCollateralizationRatios(
        bytes: BytesLike,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"defaultDesiredCollateralizationRatios","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [bytes], multicall)
    }

    desiredCollateralizationRatios(
        bytes: BytesLike,
        address: string
    ): Promise<BigNumber>
    desiredCollateralizationRatios(
        bytes: BytesLike,
        address: string,
        multicall: true
    ): MulticallRequest<BigNumber>
    desiredCollateralizationRatios(
        bytes: BytesLike,
        address: string,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"}],"name":"desiredCollateralizationRatios","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [bytes, address], multicall)
    }

    minDesiredCollateralizationRatios(bytes: BytesLike): Promise<BigNumber>
    minDesiredCollateralizationRatios(
        bytes: BytesLike,
        multicall: true
    ): MulticallRequest<BigNumber>
    minDesiredCollateralizationRatios(
        bytes: BytesLike,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"minDesiredCollateralizationRatios","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [bytes], multicall)
    }

    modifyParameters(parameter: BytesLike, data: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"parameter","type":"bytes32"},{"internalType":"address","name":"data","type":"address"}],"name":"modifyParameters","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [parameter, data])
    }

    oracleRelayer(): Promise<string>
    oracleRelayer(multicall: true): MulticallRequest<string>
    oracleRelayer(
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"oracleRelayer","outputs":[{"internalType":"contract OracleRelayerLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    removeAuthorization(account: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"removeAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [account])
    }

    safeManager(): Promise<string>
    safeManager(multicall: true): MulticallRequest<string>
    safeManager(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"safeManager","outputs":[{"internalType":"contract GebSafeManagerLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    setDefaultCRatio(
        collateralType: BytesLike,
        cRatio: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"uint256","name":"cRatio","type":"uint256"}],"name":"setDefaultCRatio","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [collateralType, cRatio])
    }

    setDesiredCollateralizationRatio(
        collateralType: BytesLike,
        safeID: BigNumberish,
        cRatio: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"uint256","name":"safeID","type":"uint256"},{"internalType":"uint256","name":"cRatio","type":"uint256"}],"name":"setDesiredCollateralizationRatio","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [collateralType, safeID, cRatio])
    }

    setMinDesiredCollateralizationRatio(
        collateralType: BytesLike,
        cRatio: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"uint256","name":"cRatio","type":"uint256"}],"name":"setMinDesiredCollateralizationRatio","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [collateralType, cRatio])
    }
}