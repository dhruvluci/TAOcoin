/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BaseContractAPI } from '@reflexer-finance/geb-contract-base'
import { TransactionRequest } from '@reflexer-finance/geb-contract-base'
import { BytesLike } from '@ethersproject/bytes'
import { BigNumberish } from '@ethersproject/bignumber'

export class GebDeployPauseProxyActions extends BaseContractAPI {
    addAuthorization(
        pause: string,
        actions: string,
        who: string,
        to: string
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"pause","type":"address"},{"internalType":"address","name":"actions","type":"address"},{"internalType":"address","name":"who","type":"address"},{"internalType":"address","name":"to","type":"address"}],"name":"addAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [pause, actions, who, to])
    }

    modifyParameters(
        pause: string,
        actions: string,
        who: string,
        collateralType: BytesLike,
        parameter: BytesLike,
        data: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"pause","type":"address"},{"internalType":"address","name":"actions","type":"address"},{"internalType":"address","name":"who","type":"address"},{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"bytes32","name":"parameter","type":"bytes32"},{"internalType":"uint256","name":"data","type":"uint256"}],"name":"modifyParameters","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            pause,
            actions,
            who,
            collateralType,
            parameter,
            data,
        ])
    }

    setAuthorityAndDelay(
        pause: string,
        actions: string,
        newAuthority: string,
        newDelay: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"pause","type":"address"},{"internalType":"address","name":"actions","type":"address"},{"internalType":"address","name":"newAuthority","type":"address"},{"internalType":"uint256","name":"newDelay","type":"uint256"}],"name":"setAuthorityAndDelay","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            pause,
            actions,
            newAuthority,
            newDelay,
        ])
    }

    taxSingleAndModifyParameters(
        pause: string,
        actions: string,
        who: string,
        collateralType: BytesLike,
        parameter: BytesLike,
        data: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"pause","type":"address"},{"internalType":"address","name":"actions","type":"address"},{"internalType":"address","name":"who","type":"address"},{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"bytes32","name":"parameter","type":"bytes32"},{"internalType":"uint256","name":"data","type":"uint256"}],"name":"taxSingleAndModifyParameters","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            pause,
            actions,
            who,
            collateralType,
            parameter,
            data,
        ])
    }

    updateRateAndModifyParameters(
        pause: string,
        actions: string,
        who: string,
        parameter: BytesLike,
        data: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"pause","type":"address"},{"internalType":"address","name":"actions","type":"address"},{"internalType":"address","name":"who","type":"address"},{"internalType":"bytes32","name":"parameter","type":"bytes32"},{"internalType":"uint256","name":"data","type":"uint256"}],"name":"updateRateAndModifyParameters","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            pause,
            actions,
            who,
            parameter,
            data,
        ])
    }

    updateRedemptionRate(
        pause: string,
        actions: string,
        who: string,
        parameter: BytesLike,
        data: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"pause","type":"address"},{"internalType":"address","name":"actions","type":"address"},{"internalType":"address","name":"who","type":"address"},{"internalType":"bytes32","name":"parameter","type":"bytes32"},{"internalType":"uint256","name":"data","type":"uint256"}],"name":"updateRedemptionRate","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            pause,
            actions,
            who,
            parameter,
            data,
        ])
    }
}