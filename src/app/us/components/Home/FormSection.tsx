'use client';
import React, { useState, useRef, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FormValues {
  fullName: string;
  email: string;
  contactNumber: string;
  budget: string;
  description: string;
  includeNDA: boolean;
  captcha: string;
  services: string;
}

interface FormField {
  id: keyof FormValues;  // Ensuring the id is one of the keys from FormValues
  label: string;
  type: string;
  placeholder?: string;
  required: boolean;
  options?: string[];
  rows?: number;
}

const formFields: FormField[] = [
  { label: 'Your Name*', type: 'text', id: 'fullName', required: true },
  { label: 'E-mail ID*', type: 'email', id: 'email', placeholder: 'Email', required: true },
  { label: 'Contact Number', type: 'tel', id: 'contactNumber', placeholder: 'Contact Number', required: false },
  {
    label: 'Select Services*',
    type: 'select',
    id: 'services',
    options: [
      'UI/UX Design',
      'Website Development',
      'Mobile App Development',
      'Software Development',
      'Cloud Services',
      'Data Analytics',
      'Cybersecurity',
      'IT Consulting',
      'Digital Marketing',
      'Frontend Development',
      'Backend Development',
      'Artificial Intelligence',
      'IoT',
      'Blockchain',
      'Others',
    ],
    required: true,
  },
  {
    label: 'Select a Budget Range',
    type: 'select',
    id: 'budget',
    options: ['Under $500', '$500 - $1000', '$1000 - $5000', '$5000 - $10,000'],
    required: false,
  },
  { label: 'Project Description*', type: 'textarea', id: 'description', placeholder: 'Describe your project', required: true, rows: 3 },
];

const points = [
  'Validation of the idea/scope of your project',
  'Industry-specific best practices that can be applied to improve your project',
  'Implementation and engagement plan of action',
  'Ballpark estimate and timeframe of development',
];

const ScrollableDropdown: React.FC<{
  options: string[];
  placeholder: string;
  onChange: (value: string) => void;
  required?: boolean;
}> = ({ options, placeholder, onChange, required }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectOption = (option: string) => {
    setSelectedOption(option);
    onChange(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={toggleDropdown}
        className="w-full p-3 text-sm bg-white rounded-lg text-left border border-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        {selectedOption || placeholder}
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-700 rounded-lg shadow-lg max-h-40 overflow-y-auto">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => selectOption(option)}
              className="p-3 text-sm text-black hover:bg-blue-600 hover:text-white cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const FormSection: React.FC = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormValues>();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);

    const formData = {
      ...data,
      captcha: (document.getElementById('captcha') as HTMLInputElement).value,
    };

    formData.includeNDA = data.includeNDA;

    if (formData.services === 'Select a Service' || formData.captcha !== '7') {
      toast.error('Please complete all required fields correctly.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success('Email sent successfully');
      } else {
        toast.error(result.error || 'Error sending email');
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative flex items-center min-h-screen overflow-x-hidden">
      <div className="absolute inset-0 z-0"></div>
      <div className="relative z-10 container mx-auto px-4 py-8 flex flex-col lg:flex-row items-stretch justify-between">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left px-4 md:px-8 lg:px-4 py-8 md:py-12">
          <h2 className="text-xl text-left md:text-2xl lg:text-2xl font-bold text-black mb-6 leading-tight">
            Let us understand your objectives and vision, set up milestones, estimate costs, and plan your project.
          </h2>
          <p className="text-sm md:text-base text-black leading-relaxed mb-6">
            After the consulting session, walk away with:
          </p>
          <ul className="space-y-4 md:space-y-6 list-disc text-left">
            {points.map((point, index) => (
              <li key={index} className="text-sm text-gray-700">
                {point}
              </li>
            ))}
          </ul>
          <p className="pt-6 text-sm md:text-base text-gray-800">
            <span className="font-bold text-sm md:text-base">Fill out the form now or reach out to us at </span>
            <a href="mailto:info@mcansey.com" className="text-blue-600 hover:underline">
              info@mcansey.com
            </a>
          </p>
        </div>

        <div className="lg:w-1/2 w-full bg-gradient-to-l from-blue-900 via-blue-800 to-blue-600 p-6 lg:p-8 rounded-lg shadow-lg">
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {formFields.map((field) => (
              <div key={field.id} className="w-full">
                <label htmlFor={field.id} className="block text-sm text-white">{field.label}</label>
                {field.type === 'select' ? (
                  <ScrollableDropdown
                    options={field.options || []}
                    placeholder="Select a Service"
                    onChange={(value) => setValue(field.id, value)}
                    required={field.required}
                  />
                ) : field.type === 'textarea' ? (
                  <textarea
                    id={field.id}
                    placeholder={field.placeholder}
                    rows={field.rows}
                    className="w-full p-3 mt-1 text-sm bg-white rounded-lg border border-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
                    {...register(field.id, { required: field.required })}
                  />
                ) : (
                  <input
                    type={field.type}
                    id={field.id}
                    placeholder={field.placeholder}
                    className="w-full p-3 mt-1 text-sm bg-white rounded-lg border border-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
                    {...register(field.id, { required: field.required })}
                  />
                )}
                {errors[field.id] && (
                  <span className="text-xs text-red-500">{`${field.label} is required.`}</span>
                )}
              </div>
            ))}

            <div className="w-full space-x-2">
              <label htmlFor="nda" className="text-sm text-white">Include NDA?</label>
              <input
                type="checkbox"
                id="nda"
                className="w-4 h-4 border-gray-700 text-blue-600"
                {...register('includeNDA')}
              />
            </div>

            <div className="w-full flex justify-between">
              <label htmlFor="captcha" className="text-sm text-white">What is 4 + 3?</label>
              <input
                type="text"
                id="captcha"
                className="w-20 p-2 text-sm bg-white rounded-lg border border-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Answer"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-6 rounded-lg text-sm font-semibold text-white transition ${
                isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700'
              }`}
            >
              {isLoading ? 'Sending...' : 'Send Now'}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default FormSection;
