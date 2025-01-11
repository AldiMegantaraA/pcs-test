import { Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import { currentEmployee, onlineEmployees } from '../data';
import Navigation from '../components/Navigation';
import CardEmployee from '../components/CardEmployee';
import CardActivity from '../components/CardActivity';
import CardNews from '../components/CardNews';

export default function Home() {

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-red-500">KerjaYuk!</h1>
          <Link to="/notifications">
            <Bell className="w-6 h-6 text-gray-600" />
          </Link>
        </div>

        <h2 className="font-normal mt-8 mb-3">Hi, Good Morning!</h2>
        
        <CardEmployee currentEmployee={currentEmployee} />
      </header>

      <section className="p-4">
        <h2 className="font-semibold mb-4">Today's activity</h2>
        <CardActivity />
      </section>

      <section className="p-4">
        <h2 className="font-semibold mb-4">PCS News</h2>
        <CardNews />
      </section>

      <section className="p-4 mb-10">
        <h2 className="font-semibold mb-4">Online</h2>
        <div className="flex overflow-x-auto pb-2">
          {onlineEmployees.map((employee, index) => (
            <div key={index} className={`flex flex-col items-center min-w-[60px] ${index !== 0 ? 'ml-[-20px]' : ''}`}>
              <img src={employee.avatar} alt={employee.name} className="w-12 h-12 rounded-full border-2 border-white" />
              <p className="text-xs mt-1">{employee.name}</p>
              <p className="text-xs text-gray-500">{employee.location}</p>
            </div>
          ))}
          <div className="flex flex-col items-center min-w-[60px] ml-[-20px]">
            <div className="w-12 h-12 rounded-full bg-red-500 flex flex-col items-center justify-center">
              <span className="text-sm font-medium text-white">10</span>
              <p className="text-xs text-white">more</p>
            </div>
          </div>
        </div>
      </section>

      <Navigation />
    </div>
  );
}