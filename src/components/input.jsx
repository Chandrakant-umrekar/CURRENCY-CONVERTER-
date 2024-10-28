import { React, useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "USD",
  amountDisable = false,
  className = "",
}) {
  const randomInputId = useId();

  return (
    <>
      <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className="w-1/2">
          <label htmlFor={randomInputId} className="text-black/40 mb-2">
            {label}
          </label>
          <input
            id={randomInputId}
            type="number"
            className="outline-none w-full bg-transparent py-1.5 text-black"
            placeholder="Amount"
            value={amount}
            disabled={amountDisable}
            onChange={(evt) => onAmountChange(Number(evt.target.value))}
          />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right text-black">
          <p className="text-black/40 mb-2 w-full">Currency Type</p>
          <select
            className="rounded-lg p-1 bg-gray-100 cursor-pointer outline-none"
            value={selectCurrency}
            onChange={(evt) => onCurrencyChange(evt.target.value)}
          >
            {currencyOptions.map((curr) => (
              <option key={curr} value={curr}>
                {curr}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default InputBox;
