import React from 'react';
import { motion } from 'motion/react';

// Skeleton loader for product cards
export const ProductCardSkeleton = ({ delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      className="p-2 shadow-lg bg-neutral-800 aspect-square rounded-xl relative"
    >
      <div className="relative">
        <div className="h-full w-full bg-gray-300 animate-pulse rounded-[4px]" />
        <div className="absolute bottom-2 right-2 w-10 h-10 bg-gray-400 animate-pulse rounded-full" />
        <div className="absolute top-2 right-2 w-8 h-8 bg-gray-400 animate-pulse rounded-full" />
      </div>

      <div className="flex p-4 gap-4 flex-col">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2 flex-1">
            <div className="h-5 bg-gray-300 animate-pulse rounded w-3/4" />
            <div className="h-3 bg-gray-400 animate-pulse rounded w-1/2" />
          </div>
          <div className="h-4 w-16 bg-gray-300 animate-pulse rounded" />
        </div>
        <div className="flex justify-between items-center">
          <div className="h-8 w-16 bg-gray-300 animate-pulse rounded" />
          <div className="h-10 w-10 bg-gray-300 animate-pulse rounded-full" />
        </div>
      </div>
    </motion.div>
  );
};

// Loading spinner
export const LoadingSpinner = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div className={`${sizeClasses[size]} border-4 border-stone-200 border-t-stone-800 rounded-full animate-spin`} />
    </div>
  );
};

// Full page loading
export const PageLoading = ({ message = 'Loading...' }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner size="xl" className="mb-4" />
        <p className="text-stone-600 text-lg">{message}</p>
      </div>
    </div>
  );
};

// Error state component
export const ErrorState = ({ 
  title = 'Something went wrong', 
  message = 'Please try again later.', 
  onRetry,
  showRetry = true 
}) => {
  return (
    <div className="text-center py-20">
      <div className="text-red-500 text-6xl mb-4">⚠️</div>
      <h2 className="text-2xl font-bold text-stone-800 mb-2">{title}</h2>
      <p className="text-stone-600 mb-6">{message}</p>
      {showRetry && onRetry && (
        <button
          onClick={onRetry}
          className="bg-stone-800 text-white px-6 py-3 rounded-lg hover:bg-stone-700 transition-colors"
        >
          Try Again
        </button>
      )}
    </div>
  );
};

// Empty state component
export const EmptyState = ({ 
  title = 'No items found', 
  message = 'Try adjusting your search or filters.', 
  icon = '📭',
  actionButton 
}) => {
  return (
    <div className="text-center py-20">
      <div className="text-6xl mb-4">{icon}</div>
      <h2 className="text-2xl font-bold text-stone-800 mb-2">{title}</h2>
      <p className="text-stone-600 mb-6">{message}</p>
      {actionButton}
    </div>
  );
};

// Products grid skeleton
export const ProductsGridSkeleton = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {Array.from({ length: count }).map((_, index) => (
        <ProductCardSkeleton key={index} delay={index * 0.1} />
      ))}
    </div>
  );
};
