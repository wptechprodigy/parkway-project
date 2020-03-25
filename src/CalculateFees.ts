/**
 *
 * @interface IFees
 */
interface IFees {
  minAmount: number;
  maxAmount: number;
  feeAmount: number;
}

/**
 * Calculate Fees on transfer amount based on provided
 * config
 *
 * @export
 * @class CalculateFees
 */
export class CalculateFees {
  private feesConfig: IFees[];

  constructor(feesConfig: IFees[]) {
    this.feesConfig = feesConfig;
  }

  getTransferFees(amount: number): number | undefined {
    const amountChargedList: (number | undefined)[] = this.feesConfig.map((feeType: IFees) => {
      const { feeAmount, minAmount, maxAmount } = feeType;

      if (minAmount <= amount && amount <= maxAmount) {
        return feeAmount;
      }
    });

    const amountCharged: number | undefined = amountChargedList.filter(
			(eachOutcome: number | undefined) => eachOutcome !== undefined,
		)[0];

    return amountCharged;
  }
}
