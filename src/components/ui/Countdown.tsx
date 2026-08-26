'use client';
import { useEffect, useState } from 'react';

export default function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const update = () => {
      const diff = new Date(targetDate).getTime() - new Date().getTime();
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60)
        });
      }
    };
    const timer = setInterval(update, 1000);
    update();
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-4 text-aicon-bone">
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold">{timeLeft.days}</span>
        <span className="text-aicon-red uppercase text-sm font-bold">Days</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold">{timeLeft.hours}</span>
        <span className="text-aicon-red uppercase text-sm font-bold">Hours</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold">{timeLeft.minutes}</span>
        <span className="text-aicon-red uppercase text-sm font-bold">Minutes</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold">{timeLeft.seconds}</span>
        <span className="text-aicon-red uppercase text-sm font-bold">Seconds</span>
      </div>
    </div>
  );
}
