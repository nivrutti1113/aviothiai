import React, { useState } from 'react';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <div className="w-full max-w-md">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <div className="flex-grow">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              required
            />
            {error && <p className="mt-1 text-sm text-pink-400">{error}</p>}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              isSubmitting
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-pink-600 hover:bg-pink-700 active:scale-95'
            }`}
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      ) : (
        <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-center">
          <p className="text-green-400 font-medium">Thank you for subscribing!</p>
          <p className="text-white/80 text-sm mt-1">You'll receive our latest updates soon.</p>
        </div>
      )}
      <p className="text-white/60 text-xs mt-3">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
};

export default NewsletterForm;