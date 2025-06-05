'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface ShimmerSkeletonProps {
  className?: string;
}

export default function ShimmerSkeleton({ className }: ShimmerSkeletonProps) {
  return (
    <div className={`relative overflow-hidden bg-[#3a3a3a] ${className}`}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#4b4b4b] to-transparent"
        style={{ transform: 'rotate(15deg)' }}
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: 'linear',
        }}
      />
    </div>
  );
}
