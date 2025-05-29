'use client';
import { DatePicker } from '@/components/commons/DatePicker/DatePicker';
import React, { useState } from 'react';

export default function DatePickerTestPage() {
  const [selectedDate, setSelectedDate] = useState<Date>();

  return (
    <div>
      <p className="text-white">선택된 날짜: {selectedDate?.toString()}</p>
      <DatePicker value={selectedDate} onChange={setSelectedDate} />
    </div>
  );
}
