//  'use client';

// import Image from 'next/image';
// import { FaGoogle, FaFacebook } from 'react-icons/fa';

// export default function SignInPage() {
//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-[#0d4c3e]">
//       {/* Background image */}
//       <Image
//         src="/living-room.jpg"
//         alt="Background"
//         layout="fill"
//         objectFit="cover"
//         className="z-0"
//         priority
//       />

//       {/* Sign In Card */}
//       <div className="relative z-10 max-w-4xl w-full grid md:grid-cols-2 gap-10 bg-white/90 rounded-3xl overflow-hidden p-8 m-4">
//         {/* Left Section with Image */}
//         <div className="hidden md:block relative w-full h-96">
//           <Image
//             src="/living-room.jpg"
//             alt="Design Preview"
//             layout="fill"
//             objectFit="cover"
//             className="rounded-2xl"
//           />
//         </div>

//         {/* Form Section */}
//         <div className="flex flex-col justify-center space-y-6 text-[#0d4c3e]">
//           <h2 className="text-3xl font-bold text-center">Sign In</h2>

//           <form className="space-y-5">
//             <div>
//               <label htmlFor="username" className="block mb-1 text-sm font-medium">
//                 Username
//               </label>
//               <input
//                 id="username"
//                 type="text"
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Username"
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="block mb-1 text-sm font-medium">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 type="password"
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Password"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full flex items-center justify-center gap-2 bg-[#0d4c3e] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#0b3d31] transition"
//             >
//               Sign in <span className="text-lg">→</span>
//             </button>
//           </form>

//           {/* Social Sign In */}
//           <div className="text-center">
//             <p className="text-sm">or sign in using</p>
//             <div className="flex justify-center gap-4 mt-2">
//               <button className="bg-white text-[#0d4c3e] p-2 rounded-full shadow hover:scale-105 transition">
//                 <FaGoogle size={20} />
//               </button>
//               <button className="bg-white text-[#0d4c3e] p-2 rounded-full shadow hover:scale-105 transition">
//                 <FaFacebook size={20} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';

// import Image from 'next/image';
// import { FaGoogle, FaFacebook } from 'react-icons/fa';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function SignInPage() {
//   const router = useRouter();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');

//     try {
//       const res = await fetch('https://interior-desgin.onrender.com/api/v1/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await res.json();
//       console.log('Login response:', res.status, data);

//       if (res.ok) {
//         if (data.token) {
//           localStorage.setItem('token', data.token);
//         }
//         router.push('/home');
//       } else {
//         setError(data.message || 'Sign‑in failed');
//       }
//     } catch (err) {
//       console.error(err);
//       setError('Network error, try again');
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-[#0d4c3e]">
//       <Image
//         src="/living-room.jpg"
//         alt="Background"
//         layout="fill"
//         objectFit="cover"
//         className="z-0"
//         priority
//       />

//       <div className="relative z-10 max-w-4xl w-full grid md:grid-cols-2 gap-10 bg-white/90 rounded-3xl overflow-hidden p-8 m-4">
//         <div className="hidden md:block relative w-full h-96">
//           <Image
//             src="/living-room.jpg"
//             alt="Preview"
//             layout="fill"
//             objectFit="cover"
//             className="rounded-2xl"
//           />
//         </div>

//         <div className="flex flex-col justify-center space-y-6 text-[#0d4c3e]">
//           <h2 className="text-3xl font-bold text-center">Sign In</h2>

//           <form className="space-y-5" onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="username" className="block mb-1 text-sm">
//                 Username
//               </label>
//               <input
//                 id="username"
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 className="w-full px-4 py-2 rounded-full bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Username"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="block mb-1 text-sm">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full px-4 py-2 rounded-full bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Password"
//                 required
//               />
//             </div>

//             {error && (
//               <p className="text-red-600 text-center">
//                 {error}
//               </p>
//             )}

//             <button
//               type="submit"
//               className="w-full flex items-center justify-center gap-2 bg-[#0d4c3e] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#0b3d31] transition"
//             >
//               Sign in <span className="text-lg">→</span>
//             </button>
//           </form>

//           <div className="text-center">
//             <p className="text-sm">or sign in using</p>
//             <div className="flex justify-center gap-4 mt-2">
//               <button className="bg-white text-[#0d4c3e] p-2 rounded-full shadow hover:scale-105 transition">
//                 <FaGoogle size={20} />
//               </button>
//               <button className="bg-white text-[#0d4c3e] p-2 rounded-full shadow hover:scale-105 transition">
//                 <FaFacebook size={20} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';

// import Image from 'next/image';
// import { FaGoogle, FaFacebook } from 'react-icons/fa';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function SignInPage() {
//   const router = useRouter();
//   const [form, setForm] = useState({ username: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');
//     setLoading(true);

//     try {
//       const res = await fetch('/api/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();
//       console.log('[LOGIN] Proxy response:', res.status, data);

//       if (res.ok && data.token) {
//         localStorage.setItem('token', data.token);
//         setSuccess('Logged in successfully!');
//         setTimeout(() => router.push('/home'), 1200);
//       } else {
//         setError(data.message || 'Login failed');
//       }
//     } catch (err: any) {
//       console.error('[LOGIN] Unexpected error:', err.message);
//       setError('Server unavailable, please try again shortly.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-[#0d4c3e]">
//       {/* Background */}
//       <Image
//         src="/living-room.jpg"
//         alt="Background"
//         fill
//         className="object-cover z-0"
//         sizes="100vw"
//         priority
//       />

//       <div className="relative z-10 max-w-4xl w-full grid md:grid-cols-2 gap-10 bg-white/90 rounded-3xl overflow-hidden p-8 m-4 shadow-2xl">
//         {/* Left image */}
//         <div className="hidden md:block relative w-full h-96">
//           <Image
//             src="/living-room.jpg"
//             alt="Preview"
//             fill
//             className="object-cover rounded-2xl"
//             sizes="(min-width: 768px) 50vw, 100vw"
//             priority
//           />
//         </div>

//         {/* Form */}
//         <div className="flex flex-col justify-center space-y-6 text-[#0d4c3e]">
//           <h2 className="text-3xl font-bold text-center">Sign In</h2>

//           <form className="space-y-5" onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="username" className="block mb-1 text-sm font-medium">
//                 Username
//               </label>
//               <input
//                 id="username"
//                 type="text"
//                 value={form.username}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-full bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Username"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="block mb-1 text-sm font-medium">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 type="password"
//                 value={form.password}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-full bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Password"
//                 required
//               />
//             </div>

//             {loading && (
//               <p className="text-sm text-gray-600 text-center">Connecting to server...</p>
//             )}
//             {error && <p className="text-red-600 text-center">{error}</p>}
//             {success && <p className="text-green-600 text-center">{success}</p>}

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full flex items-center justify-center gap-2 bg-[#0d4c3e] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#0b3d31] transition disabled:opacity-60"
//             >
//               {loading ? 'Signing in...' : 'Sign in →'}
//             </button>
//           </form>

//           {/* Social Buttons */}
//           <div className="text-center">
//             <p className="text-sm">or sign in using</p>
//             <div className="flex justify-center gap-4 mt-2">
//               <button className="bg-white text-[#0d4c3e] p-2 rounded-full shadow hover:scale-105 transition">
//                 <FaGoogle size={20} />
//               </button>
//               <button className="bg-white text-[#0d4c3e] p-2 rounded-full shadow hover:scale-105 transition">
//                 <FaFacebook size={20} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';

// import Image from 'next/image';
// import { FaGoogle, FaFacebook } from 'react-icons/fa';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function SignInPage() {
//   const router = useRouter();
//   const [form, setForm] = useState({ email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     if (!form.email || !form.password) {
//       setError('Email and password are required.');
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch('http://13.48.25.101:8000/api/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           Email: form.email,
//           Password: form.password,
//         }),
//       });

//       const data = await res.json();
//       console.log('[LOGIN]', res.status, data);

//       if (res.ok && data.token) {
//         localStorage.setItem('token', data.token);
//         setSuccess('Logged in successfully!');
//         setTimeout(() => router.push('/home'), 1200);
//       } else {
//         setError(data.message || 'Login failed');
//       }
//     } catch (err: any) {
//       console.error('[LOGIN ERROR]', err.message);
//       setError('Server unavailable, please try again shortly.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-[#0d4c3e]">
//       {/* Background image */}
//       <Image
//         src="/living-room.jpg"
//         alt="Background"
//         fill
//         className="object-cover z-0"
//         sizes="100vw"
//         priority
//       />

//       <div className="relative z-10 max-w-4xl w-full grid md:grid-cols-2 gap-10 bg-white/90 rounded-3xl overflow-hidden p-8 m-4 shadow-2xl">
//         {/* Left Section */}
//         <div className="hidden md:block relative w-full h-96">
//           <Image
//             src="/living-room.jpg"
//             alt="Preview"
//             fill
//             className="object-cover rounded-2xl"
//             sizes="(min-width: 768px) 50vw, 100vw"
//             priority
//           />
//         </div>

//         {/* Form section */}
//         <div className="flex flex-col justify-center space-y-6 text-[#0d4c3e]">
//           <h2 className="text-3xl font-bold text-center">Sign In</h2>

//           <form className="space-y-5" onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="email" className="block mb-1 text-sm font-medium">
//                 Email
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-full bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Email"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="block mb-1 text-sm font-medium">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 type="password"
//                 value={form.password}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-full bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Password"
//                 required
//               />
//             </div>

//             {loading && (
//               <p className="text-sm text-gray-600 text-center">Connecting to server...</p>
//             )}
//             {error && <p className="text-red-600 text-center">{error}</p>}
//             {success && <p className="text-green-600 text-center">{success}</p>}

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full flex items-center justify-center gap-2 bg-[#0d4c3e] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#0b3d31] transition disabled:opacity-60"
//             >
//               {loading ? 'Signing in...' : 'Sign in →'}
//             </button>
//           </form>

//           {/* Social logins */}
//           <div className="text-center">
//             <p className="text-sm">or sign in using</p>
//             <div className="flex justify-center gap-4 mt-2">
//               <button className="bg-white text-[#0d4c3e] p-2 rounded-full shadow hover:scale-105 transition">
//                 <FaGoogle size={20} />
//               </button>
//               <button className="bg-white text-[#0d4c3e] p-2 rounded-full shadow hover:scale-105 transition">
//                 <FaFacebook size={20} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignInPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!form.email || !form.password) {
      setError('Email and password are required.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('http://13.48.25.101:8000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          Email: form.email,
          Password: form.password,
        }),
      });

      const data = await res.json();
      console.log('[LOGIN]', res.status, data);

      if (res.ok && data.token) {
        localStorage.setItem('token', data.token);
        setSuccess('Logged in successfully!');
        setTimeout(() => router.push('/home'), 1200);
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err: any) {
      console.error('[LOGIN ERROR]', err.message);
      setError('Server unavailable, please try again shortly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#0d4c3e]">
      {/* Background image */}
      <Image
        src="/4.jpg"
        //  src="/4.jpg"
        alt="Background"
        fill
        className="object-cover z-0"
        sizes="100vw"
        priority
      />

      <div className="relative z-10 max-w-4xl w-full grid md:grid-cols-2 gap-10 bg-white/90 rounded-3xl overflow-hidden p-8 m-4 shadow-2xl">
        {/* Left Section */}
        <div className="hidden md:block relative w-full h-96">
          <Image
            src="/5.png"
            alt="Preview"
            fill
            className="object-cover rounded-2xl"
            sizes="(min-width: 768px) 50vw, 100vw"
            priority
          />
        </div>

        {/* Form section */}
        <div className="flex flex-col justify-center space-y-6 text-[#0d4c3e]">
          <h2 className="text-3xl font-bold text-center">Sign In</h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-full bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
                placeholder="Your Email"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-1 text-sm font-medium">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-full bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
                placeholder="Your Password"
                required
              />
            </div>

            {loading && (
              <p className="text-sm text-gray-600 text-center">Connecting to server...</p>
            )}
            {error && <p className="text-red-600 text-center">{error}</p>}
            {success && <p className="text-green-600 text-center">{success}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-[#0d4c3e] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#0b3d31] transition disabled:opacity-60"
            >
              {loading ? 'Signing in...' : 'Sign in →'}
            </button>
          </form>

          {/* Sign up redirect */}
          <div className="text-center text-sm mt-4">
            <span>Don’t have an account? </span>
            <button
              onClick={() => router.push('/signup')}
              className="text-[#0d4c3e] font-semibold underline hover:text-[#0b3d31] transition"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
