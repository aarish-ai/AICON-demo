'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';

const schema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  org: z.string().min(1, 'University/Company is required'),
  track: z.string().min(1, 'Please select a track')
});

type FormData = z.infer<typeof schema>;

export default function Registration() {
  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, trigger } = useForm<FormData>({ 
    resolver: zodResolver(schema),
    defaultValues: { track: 'Workshops' }
  });

  const nextStep = async () => {
    let isValid = false;
    if (step === 1) isValid = await trigger(['firstName', 'lastName', 'email', 'org']);
    if (step === 2) isValid = await trigger(['track']);
    if (isValid) setStep(step + 1);
  };

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch('/api/register', { method: 'POST', body: JSON.stringify(data) });
      if (res.ok) {
        setSuccess(true);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#1532B1', '#FCDC58', '#7D0202', '#FDF8E9']
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section id="registration" className="py-32 bg-aicon-bone">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-5xl font-black text-aicon-ink uppercase mb-12 text-center">Secure Your Spot</h2>
        
        <div className="mb-8 flex h-2 bg-gray-300 w-full">
          <div className="h-full bg-aicon-red transition-all duration-500" style={{ width: `${(step / 3) * 100}%` }} />
        </div>

        <div className="bg-white p-8 md:p-12 shadow-[10px_10px_0px_0px_rgba(21,50,177,1)] border-4 border-aicon-ink relative overflow-hidden">
          <AnimatePresence mode="wait">
            {success ? (
              <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-10">
                <h3 className="text-4xl font-black text-aicon-blue uppercase mb-4">You&apos;re In!</h3>
                <p className="text-xl">See you at AICON &apos;26.</p>
              </motion.div>
            ) : (
              <motion.form key="form" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                
                {step === 1 && (
                  <div className="flex flex-col gap-6">
                    <h3 className="text-2xl font-bold uppercase mb-4">Basic Info</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <input {...register('firstName')} placeholder="First Name" className="w-full p-4 border-2 border-aicon-ink bg-transparent font-bold focus:outline-none focus:border-aicon-blue" />
                        {errors.firstName && <span className="text-aicon-red text-sm font-bold mt-1 block">{errors.firstName.message}</span>}
                      </div>
                      <div>
                        <input {...register('lastName')} placeholder="Last Name" className="w-full p-4 border-2 border-aicon-ink bg-transparent font-bold focus:outline-none focus:border-aicon-blue" />
                        {errors.lastName && <span className="text-aicon-red text-sm font-bold mt-1 block">{errors.lastName.message}</span>}
                      </div>
                    </div>
                    <div>
                      <input {...register('email')} placeholder="Email" className="w-full p-4 border-2 border-aicon-ink bg-transparent font-bold focus:outline-none focus:border-aicon-blue" />
                      {errors.email && <span className="text-aicon-red text-sm font-bold mt-1 block">{errors.email.message}</span>}
                    </div>
                    <div>
                      <input {...register('org')} placeholder="University / Company" className="w-full p-4 border-2 border-aicon-ink bg-transparent font-bold focus:outline-none focus:border-aicon-blue" />
                      {errors.org && <span className="text-aicon-red text-sm font-bold mt-1 block">{errors.org.message}</span>}
                    </div>
                    <button type="button" onClick={nextStep} className="bg-aicon-ink text-aicon-bone py-4 font-black uppercase tracking-wider hover:bg-aicon-blue transition-colors">Next Step</button>
                  </div>
                )}

                {step === 2 && (
                  <div className="flex flex-col gap-6">
                    <h3 className="text-2xl font-bold uppercase mb-4">Track Selection</h3>
                    <select {...register('track')} className="w-full p-4 border-2 border-aicon-ink bg-transparent font-bold focus:outline-none focus:border-aicon-blue appearance-none rounded-none">
                      <option value="Workshops">Workshops</option>
                      <option value="Talks">Talks</option>
                      <option value="Hackathon">Hackathon</option>
                      <option value="Networking">Networking</option>
                    </select>
                    {errors.track && <span className="text-aicon-red text-sm font-bold mt-1 block">{errors.track.message}</span>}
                    <div className="flex gap-4">
                      <button type="button" onClick={() => setStep(1)} className="w-1/3 border-2 border-aicon-ink text-aicon-ink py-4 font-black uppercase hover:bg-gray-100 transition-colors">Back</button>
                      <button type="button" onClick={nextStep} className="w-2/3 bg-aicon-ink text-aicon-bone py-4 font-black uppercase tracking-wider hover:bg-aicon-blue transition-colors">Review</button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="flex flex-col gap-6">
                    <h3 className="text-2xl font-bold uppercase mb-4">Confirm</h3>
                    <p className="text-lg">You are registering for AICON &apos;26.</p>
                    <div className="flex gap-4 mt-4">
                      <button type="button" onClick={() => setStep(2)} className="w-1/3 border-2 border-aicon-ink text-aicon-ink py-4 font-black uppercase hover:bg-gray-100 transition-colors">Back</button>
                      <button type="submit" className="w-2/3 bg-aicon-yellow text-aicon-ink py-4 font-black uppercase tracking-wider border-2 border-aicon-ink hover:bg-aicon-red hover:text-aicon-bone hover:border-aicon-red transition-colors">Submit</button>
                    </div>
                  </div>
                )}

              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
