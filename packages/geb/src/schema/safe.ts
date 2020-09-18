import { BigNumber, FixedNumber } from '@ethersproject/bignumber'
import { ContractApis } from '@reflexer-finance/geb-contract-api'
import { RAY, ETH_A } from '../utils'

/**
 * This object represents a GEB safe. It has the entire SAFE state and provides helper functions to calculate its liquidation price, collateralization ratio etc.
 */
export class Safe {
    constructor(
        private contracts: ContractApis,

        /**
         * SAFE handler in the SAFE Engine
         */
        public handler: string,
        /**
         * Amount of debt generated by the SAFE (WAD)
         */
        public debt: BigNumber,
        /**
         * Amount of collateral locked in the SAFE (WAD)
         */
        public collateral: BigNumber,
        /**
         * SAFE collateral type
         */
        public collateralType: string,
        /**
         * Whether the safe was opened using a SAFE manager
         */
        public isManaged: boolean
    ) {}

    /**
     * Ratio used to calculate the amount of debt that can be drawn. Returns null is ratio is +Infinity. !! Uses unsafe division that can lead to precision loss.
     * @returns Promise<FixedNumber> CRatio
     */
    public async getCRatio(): Promise<FixedNumber | null> {
        if (this.collateral.isZero()) {
            return FixedNumber.from('0')
        }

        if (this.debt.isZero()) {
            return null
        }

        const {
            accumulatedRate,
            safetyPrice,
        } = await this.contracts.safeEngine.collateralTypes(ETH_A)

        return FixedNumber.from(this.collateral.mul(safetyPrice)).divUnsafe(
            FixedNumber.from(this.debt.mul(accumulatedRate))
        )
    }

    /**
     * Ratio used for liquidating the SAFE. If LRatio <= 1 you can get liquidated, the greater LRatio the safer your safe is. Uses unsafe division which leads to precision loss.
     * @returns Promise<FixedNumber> LRatio
     */
    public async getLRatio(): Promise<FixedNumber | null> {
        if (this.collateral.isZero()) {
            return FixedNumber.from('0')
        }

        if (this.debt.isZero()) {
            return null
        }

        const {
            accumulatedRate,
            liquidationPrice,
        } = await this.contracts.safeEngine.collateralTypes(ETH_A)

        return FixedNumber.from(
            this.collateral.mul(liquidationPrice)
        ).divUnsafe(FixedNumber.from(this.debt.mul(accumulatedRate)))
    }

    /**
     * Price at which the SAFE will get liquidated.
     * @returns <FixedNumber> Liquidation price
     */
    public async liquidationPrice(): Promise<FixedNumber | null> {
        if (this.collateral.isZero()) {
            return FixedNumber.from('0')
        }

        if (this.debt.isZero()) {
            return null
        }

        const {
            accumulatedRate,
        } = await this.contracts.safeEngine.collateralTypes(ETH_A)
        const redemptionPrice = await this.contracts.oracleRelayer.redemptionPrice_readOnly()
        const liqCRatio = (
            await this.contracts.oracleRelayer.collateralTypes(ETH_A)
        ).liquidationCRatio

        // Formula:
        // (debt x accumulatedRate x redemptionPrice x liquidationCRatio) / collateral

        const numerator = this.debt
            .mul(accumulatedRate)
            .mul(redemptionPrice)
            .mul(liqCRatio)
            .div(RAY.pow(3)) // Make it a WAD
        return FixedNumber.from(numerator).divUnsafe(
            FixedNumber.from(this.collateral)
        )
    }
}
