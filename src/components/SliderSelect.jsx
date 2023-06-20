/* eslint-disable react/prop-types */
import SliderComponent from "./common/SliderComponent";

const SliderSelect = ({ data, setData }) => {
  console.log(data);

  const bank_limit = 10000;

  return (
    <div>
      <SliderComponent
        label="Home Value"
        min={1000}
        max={bank_limit}
        defaultValue={data.homeValue}
        value={data.homeValue}
        step={100}
        onChange={(e, value) =>
          setData({
            ...data,
            // deposit: value * 0.2,
            // loanAmount: value * 0.8,
            homeValue: value,
          })
        }
        unit="£"
        amount={data.homeValue}
      />
      <SliderComponent
        label="Deposit"
        min={0}
        max={data.homeValue}
        defaultValue={data.deposit}
        value={data.deposit}
        step={100}
        onChange={(e, value) =>
          setData({
            ...data,
            // loanAmount: data.homeValue - value,
            deposit: value,
          })
        }
        unit="£"
        amount={data.deposit}
      />
      <SliderComponent
        label="Loan Amount"
        min={0}
        max={data.homeValue}
        defaultValue={data.loanAmount}
        value={data.loanAmount}
        step={100}
        onChange={(e, value) =>
          setData({
            ...data,
            // deposit: data.homeValue - value,
            loanAmount: value,
          })
        }
        unit="£"
        amount={data.loanAmount}
      />
      <SliderComponent
        label="Interest Rate"
        min={2}
        max={18}
        defaultValue={data.interestRate}
        value={data.interestRate}
        step={0.2}
        onChange={(e, value) =>
          setData({
            ...data,
            interestRate: value,
          })
        }
        unit="%"
        amount={data.interestRate}
      />
    </div>
  );
};

export default SliderSelect;
