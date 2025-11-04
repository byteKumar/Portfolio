"use client";
import React, { useState, useEffect } from "react";

const VisitorCounter = () => {
  const [count, setCount] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch current count
    const fetchCount = async () => {
      try {
        const response = await fetch('/api/visitor-count');
        const data = await response.json();
        setCount(data.count);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching visitor count:', error);
        setIsLoading(false);
      }
    };

    // Increment count for this visit (only once per session)
    const incrementCount = async () => {
      const hasVisited = sessionStorage.getItem('hasVisited');
      if (!hasVisited) {
        try {
          const response = await fetch('/api/visitor-count', {
            method: 'POST',
          });
          const data = await response.json();
          setCount(data.count);
          sessionStorage.setItem('hasVisited', 'true');
        } catch (error) {
          console.error('Error incrementing visitor count:', error);
        }
      } else {
        // Just fetch the count if already visited in this session
        fetchCount();
      }
    };

    incrementCount();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center gap-2">
        <div className="h-8 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-0 rounded-md overflow-hidden shadow-sm border border-gray-200 dark:border-white/10">
      {/* Label Section */}
      <div className="bg-gray-700 dark:bg-gray-800 px-3 py-1.5 sm:px-4 sm:py-2 text-white text-xs sm:text-sm font-medium">
        Profile views
      </div>
      
      {/* Count Section */}
      <div className="bg-blue-600 dark:bg-blue-500 px-3 py-1.5 sm:px-4 sm:py-2 text-white text-xs sm:text-sm font-semibold">
        {count !== null ? count.toLocaleString() : '0'}
      </div>
    </div>
  );
};

export default VisitorCounter;

