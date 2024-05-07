import DatePicker from "react-datepicker";

import { useField, useFormikContext } from "formik";

interface DatePickerFieldProps {
  name: string; // Add the 'name' prop
  // Other props you might need
}

const DatePickerField = ({ ...props }: DatePickerFieldProps) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);

  return (
    <DatePicker
      {...field}
      {...props}
      selected={(field.value && new Date(field.value)) || null}
      onChange={(val) => {
        setFieldValue(field.name, val);
      }}
    />
  );
};

export default DatePickerField;
