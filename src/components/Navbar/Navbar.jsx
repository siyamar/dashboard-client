"use client"
import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom';
import SearchAppBar from './SearchAppBar';
import { AuthContext } from '@/Providers/AuthProvider';

export default function Navbar() {
    // const location = useLocation();
    // const noHeaderFooter = location.pathname.includes('login')
    const { user } = useContext(AuthContext);
  return (
    <div>
      { user && <SearchAppBar></SearchAppBar>}
    </div>
  )
}
