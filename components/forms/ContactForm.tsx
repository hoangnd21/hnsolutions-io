'use client';

import { useState } from 'react';
import { Button } from '../ui/Button';
import { IDictionary, IContactFormData } from '@/types';

interface ContactFormProps {
  dict: IDictionary;
}

export function ContactForm({ dict }: ContactFormProps) {
  const [formData, setFormData] = useState<IContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
        });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2 dark:text-white">
          {dict.contact.form.name}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-border dark:border-gray-700 rounded-lg bg-background dark:bg-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2 dark:text-white">
          {dict.contact.form.email}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-border dark:border-gray-700 rounded-lg bg-background dark:bg-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-500"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2 dark:text-white">
          {dict.contact.form.phone}
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-border dark:border-gray-700 rounded-lg bg-background dark:bg-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-500"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium mb-2 dark:text-white">
          {dict.contact.form.company}
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-border dark:border-gray-700 rounded-lg bg-background dark:bg-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-500"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2 dark:text-white">
          {dict.contact.form.message}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-2 border border-border dark:border-gray-700 rounded-lg bg-background dark:bg-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-500 resize-none"
        />
      </div>

      {status === 'success' && (
        <div className="p-4 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg">
          {dict.contact.form.success}
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg">
          {dict.contact.form.error}
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? dict.contact.form.sending : dict.contact.form.submit}
      </Button>
    </form>
  );
}

