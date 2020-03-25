import { fees as feesConfig } from '../fees.config.json';
import { CalculateFees } from './CalculateFees';

const calculateFees = new CalculateFees(feesConfig);

const transactionInput = <HTMLInputElement>(
	document.getElementById('transaction-amount')
);
const displayArea = document.getElementById('display__result');
const calculateButton = document.getElementById('main__submitbutton');

if (calculateButton) {
	calculateButton.addEventListener('click', () => {
    const amount: number = parseFloat(transactionInput.value);

		if (isNaN(amount) || amount < 1) {
      alert('Please provide a valid transfer amount');

      transactionInput.value = '';

      if (displayArea) displayArea.innerText = '';
      return;
    }

		if (displayArea) {
      displayArea.innerText = `The transfer fees for NGN${amount} is NGN${String(calculateFees.getTransferFees(amount))}`;

      transactionInput.value = '';
		}
  });

  transactionInput.value = '';
}
