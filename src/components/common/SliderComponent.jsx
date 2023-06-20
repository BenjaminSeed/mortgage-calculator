import PropTypes from "prop-types";
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
    <Stack my={1.4}>
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
          {unit} {min}
        </Typography>
        <Typography color="text.secondary" variant="caption">
          {unit} {max}
        </Typography>
      </Stack>
    </Stack>
  );
};

SliderComponent.propTypes = {
  label: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

export default SliderComponent;
