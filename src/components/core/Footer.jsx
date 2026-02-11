import React from 'react';
import NewsletterForm from '@/components/ui/NewsletterForm';

const Footer = () => {
  return (
    <footer className="relative z-10 px-4 md:px-6 lg:px-20 py-8 md:py-12 bg-gray-100 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-semibold mb-4 text-indigo-600">HealthAI</h4>
            <p className="text-gray-700 text-sm">
              Transforming healthcare through trusted AI solutions for better patient outcomes.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Company</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Product</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Solutions</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Support</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-900">Stay Updated</h4>
              <NewsletterForm />
            </div>
            
            <div className="flex justify-center lg:justify-end space-x-4">
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-200 text-center text-gray-500 text-sm mt-8">
            © {new Date().getFullYear()} HealthAI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;