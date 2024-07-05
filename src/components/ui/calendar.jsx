import { Calendar as DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const Calendar = ({ mode, selected, onSelect, className }) => {
  return (
    <DayPicker
      mode={mode}
      selected={selected}
      onSelect={onSelect}
      className={className}
    />
  );
};

export { Calendar };