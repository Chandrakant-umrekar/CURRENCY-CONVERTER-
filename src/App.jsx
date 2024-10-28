import { useState, useEffect } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { InputBox } from "./components";
function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from, to);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    if (currencyInfo && currencyInfo[to]) {
      const rate = currencyInfo[to];
      setConvertedAmount(amount * rate);
    } else {
      console.error("Currency data not loaded or 'to' currency not found");
    }
  };

  return (
    <>
      <div
        className="w-screen h-screen flex flex-col justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(
            "https://img.freepik.com/premium-vector/global-currency-background_115579-405.jpg?semt=ais_hybrid"
          )`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(evt) => {
                evt.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  onAmountChange={(amount) => setAmount(amount)}
                  selectCurrency={from}
                />
                <div className="relative w-full h-0.5">
                  <button
                    type="button"
                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                    onClick={swap}
                  >
                    swap
                  </button>
                </div>
                <div className="w-full mt-1 mb-4">
                  <InputBox
                    label="To"
                    amount={convertedAmount}
                    currencyOptions={options}
                    onCurrencyChange={(currency) => setTo(currency)}
                    selectCurrency={to}
                    amountDisable //true
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                >
                  Convert {from} to {to}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
