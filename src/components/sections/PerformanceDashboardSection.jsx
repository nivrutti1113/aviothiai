import React from 'react';

const PerformanceDashboardSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Dashboard Image */}
          <div className="order-2 lg:order-1">
            <div className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-black flex items-center justify-center p-6">
                {/* Dashboard Content */}
                <div className="w-full h-full flex flex-col">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between p-4 border-b border-gray-700">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-gray-300 text-sm font-mono">dashboard/aviothic-ai</div>
                    <div className="w-16"></div>
                  </div>
                  
                  {/* Main Dashboard Area */}
                  <div className="flex-1 grid grid-cols-12 grid-rows-6 gap-2 p-4">
                    {/* Top Left - Analytics Chart */}
                    <div className="col-span-8 row-span-3 bg-gray-800 rounded-lg p-4 border border-gray-700">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-gray-200 text-sm font-medium">Performance Metrics</h3>
                        <div className="text-gray-400 text-xs">Live</div>
                      </div>
                      <div className="h-full flex items-end space-x-1">
                        {[...Array(20)].map((_, i) => (
                          <div 
                            key={i}
                            className="bg-gradient-to-t from-purple-600 to-purple-400 rounded-t"
                            style={{
                              height: `${Math.floor(Math.random() * 60) + 20}%`,
                              width: '4%',
                              minHeight: '10px'
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Top Right - Stats */}
                    <div className="col-span-4 row-span-3 grid grid-rows-2 gap-2">
                      <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
                        <div className="text-gray-400 text-xs mb-1">Active Sessions</div>
                        <div className="text-2xl font-bold text-white">24</div>
                        <div className="text-green-400 text-xs flex items-center mt-1">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                          +12%
                        </div>
                      </div>
                      
                      <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
                        <div className="text-gray-400 text-xs mb-1">Accuracy Rate</div>
                        <div className="text-2xl font-bold text-white">98.7%</div>
                        <div className="text-green-400 text-xs flex items-center mt-1">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                          +0.3%
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom Left - Processing Queue */}
                    <div className="col-span-6 row-span-3 bg-gray-800 rounded-lg p-4 border border-gray-700">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-gray-200 text-sm font-medium">Processing Queue</h3>
                        <div className="text-gray-400 text-xs">Priority</div>
                      </div>
                      <div className="space-y-2">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="flex items-center justify-between p-2 bg-gray-700 rounded">
                            <div className="flex items-center">
                              <div className={`w-2 h-2 rounded-full mr-2 ${i === 0 ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
                              <div className="text-gray-300 text-xs">Scan #{1000 + i}</div>
                            </div>
                            <div className={`text-xs ${i === 0 ? 'text-green-400' : 'text-gray-400'}`}>
                              {i === 0 ? 'Processing' : 'Queued'}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Bottom Right - Alerts */}
                    <div className="col-span-6 row-span-3 bg-gray-800 rounded-lg p-4 border border-gray-700">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-gray-200 text-sm font-medium">System Alerts</h3>
                        <div className="text-red-400 text-xs">3</div>
                      </div>
                      <div className="space-y-2">
                        <div className="p-2 bg-red-900/30 rounded border border-red-700">
                          <div className="text-red-400 text-xs flex items-center">
                            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.333 16.5c-.77.833.192 2.5 1.732 2.5z" />
                            </svg>
                            High Confidence Match
                          </div>
                          <div className="text-gray-300 text-xs mt-1">Case #45 detected</div>
                        </div>
                        
                        <div className="p-2 bg-yellow-900/30 rounded border border-yellow-700">
                          <div className="text-yellow-400 text-xs">System Maintenance</div>
                          <div className="text-gray-300 text-xs mt-1">Scheduled in 2h</div>
                        </div>
                        
                        <div className="p-2 bg-blue-900/30 rounded border border-blue-700">
                          <div className="text-blue-400 text-xs">New Protocol</div>
                          <div className="text-gray-300 text-xs mt-1">Updated guidelines</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Dashboard Footer */}
                  <div className="p-3 bg-gray-800 border-t border-gray-700 flex justify-between items-center">
                    <div className="text-gray-400 text-xs">Aviothic AI Platform v2.4.1</div>
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <div className="text-green-400 text-xs">Connected</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Text Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-medium text-slate-700 mb-6 leading-tight">
              Advanced Performance Analytics
            </h2>
            <p className="text-lg leading-relaxed text-slate-500 max-w-lg">
              Real-time monitoring and analytics dashboard providing comprehensive insights into AI performance metrics, processing efficiency, and clinical outcomes. Track key indicators and optimize your workflow with actionable data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceDashboardSection;