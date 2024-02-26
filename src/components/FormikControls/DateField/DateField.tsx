import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';

export default function DatePickerValue() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));

  return (
    <LocalizationProvider dateAdapter={AdapterLuxon} adapterLocale="fa">
        <DatePicker
          label="Controlled picker"
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
    </LocalizationProvider>
  );
}