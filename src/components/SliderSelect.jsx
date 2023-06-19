import SliderComponent from "./common/SliderComponent";

const SliderSelect = () => {
  return (
    <div>
      <SliderComponent min={0} max={500} defaultValue={250} step={10} />
    </div>
  );
};

export default SliderSelect;
