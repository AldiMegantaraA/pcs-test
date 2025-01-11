
import { Employee } from '../types';
export default function CardEmployee({ currentEmployee }: { currentEmployee: Employee }) {
  
    return (
        <div className="mt-4 bg-red-500 flex flex-col gap-4 justify-between rounded-xl p-4 h-40 text-white">
            <div className="flex justify-between gap-4 items-center">
                <div className="flex gap-4 items-center">
                    <img src={currentEmployee.avatar} alt={currentEmployee.name} className="w-12 h-12 rounded-full" />
                    <div>
                        <h2 className="font-semibold">{currentEmployee.name}</h2>
                        <p className="text-xs opacity-90"><i>{currentEmployee.role}</i></p>
                    </div>
                </div>

                <div className="text-right">
                    <p className="opacity-90 text-xs"><i>Member since</i></p>
                    <p className="font-medium">{currentEmployee.memberSince}</p>
                </div>
            </div>
            <div className="mt-3 flex justify-between items-center text-sm">
                <div>
                    <p className="opacity-90 text-xs">Location</p>
                    <p className="font-medium">{currentEmployee.location}</p>
                </div>
                <div>
                    <p className="opacity-90 text-xs mt-4"><i>ICO</i></p>
                </div>
            </div>
        </div>
    );
}