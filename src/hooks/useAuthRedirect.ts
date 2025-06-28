
// hooks/useAuthRedirect.ts
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function useAuthRedirect(): boolean {
  const router = useRouter();
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.replace('/signin'); // 🔁 Redirect to login if not logged in
    } else {
      setIsAuthChecked(true); // ✅ Allow access if token exists
    }
  }, [router]);

  return isAuthChecked;
}
