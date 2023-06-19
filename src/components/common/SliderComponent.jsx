/* eslint-disable react/prop-types */
import { Stack, Typography } from "@mui/material";
import Slider from "@mui/material/Slider";

const SliderComponent = ({
  min,
  max,
  defaultValue,
  step,
  onChange,
  value,
  label,
  unit,
  amount,
}) => {
  return (
    <>
      <Stack gap={1}>
        <Typography variant="subtitle2">{label}</Typography>
        <Typography variant="h5">
          {unit} {amount}{" "}
        </Typography>
      </Stack>
      <Slider
        defaultValue={defaultValue}
        min={min}
        max={max}
        aria-label="Default"
        valueLabelDisplay="auto"
        marks
        step={step}
        onChange={onChange}
        value={value}
      />
      <Stack direction="row" justifyContent="space-between">
        <Typography color="text.secondary" variant="caption">
          £50,000
        </Typography>
        <Typography color="text.secondary" variant="caption">
          £3000,000
        </Typography>
      </Stack>
    </>
  );
};

export default SliderComponent;
