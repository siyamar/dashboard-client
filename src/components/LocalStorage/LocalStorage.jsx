"use client"
import React, { useState, useEffect } from 'react';

const LocalStorage = () => {
  const [storedData, setStoredData] = useState('');

  useEffect(() => {
    // Retrieve stored data on component mount
    const dataFromStorage = localStorage.getItem('email');
    if (dataFromStorage) {
      setStoredData(dataFromStorage);
    }
  }, []);


  return storedData;
};

export default LocalStorage;
