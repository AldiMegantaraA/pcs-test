import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format, differenceInSeconds } from 'date-fns';
import { Clock, RotateCw } from 'lucide-react';
import { RootState } from '../store/store';
import { updateWorkingHours } from '../store/attendanceSlice';

const AttendanceCard: React.FC = () => {
  const dispatch = useDispatch();
  const { checkInTime, checkOutTime, workingHours, isCheckedIn } = useSelector(
    (state: RootState) => state.attendance
  );

  useEffect(() => {
    let interval: number;
    
    if (isCheckedIn) {
      interval = window.setInterval(() => {
        const seconds = differenceInSeconds(new Date(), new Date(checkInTime!));
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
        
        dispatch(updateWorkingHours(
          `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`
        ));
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isCheckedIn, checkInTime, dispatch]);

  return (
    <div className="p-4">
      
      <div className="grid grid-cols-3 gap-4 text-center">
        <div 
          className="flex flex-col items-center cursor-pointer"
        >
          <Clock className="h-8 w-8 text-red-500 mb-2" />
          <span className="text-sm font-medium">
            {checkInTime ? format(new Date(checkInTime), 'HH:mm') : '--:--'}
          </span>
          <span className="text-xs text-gray-500">Check In</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="h-8 w-8 flex items-center relative justify-center mb-2">
            <RotateCw className='text-red-500 h-8 w-8' />
            <span className="absolute text-red-500 font-semibold">8</span>
          </div>
          <span className="text-sm font-medium">{workingHours}</span>
          <span className="text-xs text-gray-500">Working Hours</span>
        </div>

        <div 
          className="flex flex-col items-center cursor-pointer"
        >
          <Clock className="h-8 w-8 text-red-500 mb-2" />
          <span className="text-sm font-medium">
            {checkOutTime ? format(new Date(checkOutTime), 'HH:mm') : '--:--'}
          </span>
          <span className="text-xs text-gray-500">Check Out</span>
        </div>
      </div>
    </div>
  );
};

export default AttendanceCard;