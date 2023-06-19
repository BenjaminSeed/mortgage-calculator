import SliderComponent from "./common/SliderComponent";

const SliderSelect = () => {
  return (
    <div>
      <SliderComponent
        label="Home Value"
        min={50000}
        max={300000}
        defaultValue={150000}
        step={5000}
        onChange={(e) => console.log(e.target.value)}
        unit="£"
        amount={"300,000"}
      />
      <SliderComponent
        label="Deposit"
        min={50000}
        max={300000}
        defaultValue={150000}
        step={5000}
        onChange={(e) => console.log(e.target.value)}
        unit="£"
        amount={"20,000"}
      />
      <SliderComponent
        label="Loan Amount"
        min={50000}
        max={300000}
        defaultValue={150000}
        step={5000}
        onChange={(e) => console.log(e.target.value)}
        unit="£"
        amount={"190,000"}
      />
    </div>
  );
};

export default SliderSelect;
