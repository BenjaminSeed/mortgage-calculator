/* eslint-disable react/prop-types */
import Slider from "@mui/material/Slider";

const SliderComponent = ({ min, max, defaultValue, step }) => {
  return (
    <Slider
      defaultValue={defaultValue}
      min={min}
      max={max}
      aria-label="Default"
      valueLabelDisplay="auto"
      marks
      step={step}
    />
  );
};

export default SliderComponent;
