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
// 'use client';

// import Image from 'next/image';
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
//         src="/4.jpg"
//         //  src="/4.jpg"
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
//             src="/5.png"
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

//           {/* Sign up redirect */}
//           <div className="text-center text-sm mt-4">
//             <span>Don’t have an account? </span>
//             <button
//               onClick={() => router.push('/signup')}
//               className="text-[#0d4c3e] font-semibold underline hover:text-[#0b3d31] transition"
//             >
//               Sign up
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';

// import Image from 'next/image';
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
//         setTimeout(() => router.push('/'), 1200); // ✅ fixed path to homepage
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
//         src="/4.jpg"
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
//             src="/5.png"
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

//           {/* Sign up redirect */}
//           <div className="text-center text-sm mt-4">
//             <span>Don’t have an account? </span>
//             <button
//               onClick={() => router.push('/signup')}
//               className="text-[#0d4c3e] font-semibold underline hover:text-[#0b3d31] transition"
//             >
//               Sign up
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';

// import Image from 'next/image';
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
//         localStorage.setItem('userName', data.user?.Name || 'User'); // ✅ save user's name
//         setSuccess('Logged in successfully!');
//         setTimeout(() => router.push('/'), 1200); // Redirect to homepage
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
//         src="/4.jpg"
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
//             src="/5.png"
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

//           {/* Sign up redirect */}
//           <div className="text-center text-sm mt-4">
//             <span>Don’t have an account? </span>
//             <button
//               onClick={() => router.push('/signup')}
//               className="text-[#0d4c3e] font-semibold underline hover:text-[#0b3d31] transition"
//             >
//               Sign up
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';

// import Image from 'next/image';
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
//         localStorage.setItem('userName', data.user?.Name || 'User'); // ✅ store userName
//         setSuccess('Logged in successfully!');
//         setTimeout(() => router.push('/'), 1000); // go to home after login
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
//       <Image
//         src="/4.jpg"
//         alt="Background"
//         fill
//         className="object-cover z-0"
//         sizes="100vw"
//         priority
//       />

//       <div className="relative z-10 max-w-4xl w-full grid md:grid-cols-2 gap-10 bg-white/90 rounded-3xl overflow-hidden p-8 m-4 shadow-2xl">
//         <div className="hidden md:block relative w-full h-96">
//           <Image
//             src="/5.png"
//             alt="Preview"
//             fill
//             className="object-cover rounded-2xl"
//             sizes="(min-width: 768px) 50vw, 100vw"
//             priority
//           />
//         </div>

//         <div className="flex flex-col justify-center space-y-6 text-[#0d4c3e]">
//           <h2 className="text-3xl font-bold text-center">Sign In</h2>

//           <form className="space-y-5" onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
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
//               <label htmlFor="password" className="block mb-1 text-sm font-medium">Password</label>
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

//             {loading && <p className="text-sm text-gray-600 text-center">Connecting to server...</p>}
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

//           <div className="text-center text-sm mt-4">
//             <span>Don’t have an account? </span>
//             <button
//               onClick={() => router.push('/signup')}
//               className="text-[#0d4c3e] font-semibold underline hover:text-[#0b3d31] transition"
//             >
//               Sign up
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// 'use client';

// import Image from 'next/image';
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
//         localStorage.setItem('userName', data.user?.Name || 'User'); // ✅ Store user name
//         setSuccess('Logged in successfully!');
//         setTimeout(() => router.push('/'), 1000); // Go to home
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
//       <Image
//         src="/4.jpg"
//         alt="Background"
//         fill
//         className="object-cover z-0"
//         sizes="100vw"
//         priority
//       />

//       <div className="relative z-10 max-w-4xl w-full grid md:grid-cols-2 gap-10 bg-white/90 rounded-3xl overflow-hidden p-8 m-4 shadow-2xl">
//         <div className="hidden md:block relative w-full h-96">
//           <Image
//             src="/5.png"
//             alt="Preview"
//             fill
//             className="object-cover rounded-2xl"
//             sizes="(min-width: 768px) 50vw, 100vw"
//             priority
//           />
//         </div>

//         <div className="flex flex-col justify-center space-y-6 text-[#0d4c3e]">
//           <h2 className="text-3xl font-bold text-center">Sign In</h2>

//           <form className="space-y-5" onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
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
//               <label htmlFor="password" className="block mb-1 text-sm font-medium">Password</label>
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

//             {loading && <p className="text-sm text-gray-600 text-center">Connecting to server...</p>}
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

//           <div className="text-center text-sm mt-4">
//             <span>Don’t have an account? </span>
//             <button
//               onClick={() => router.push('/signup')}
//               className="text-[#0d4c3e] font-semibold underline hover:text-[#0b3d31] transition"
//             >
//               Sign up
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';

// import Image from 'next/image';
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
//         localStorage.setItem('userName', data.user?.Name || 'User');
//         setSuccess('Logged in successfully!');

//         // Delay router push slightly then force reload to update Navbar
//         setTimeout(() => {
//           router.push('/');
//           setTimeout(() => {
//             window.location.reload();
//           }, 300);
//         }, 100);
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
//       <Image
//         src="/4.jpg"
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
//             src="/5.png"
//             alt="Preview"
//             fill
//             className="object-cover rounded-2xl"
//             sizes="(min-width: 768px) 50vw, 100vw"
//             priority
//           />
//         </div>

//         {/* Form Section */}
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

//           <div className="text-center text-sm mt-4">
//             <span>Don’t have an account? </span>
//             <button
//               onClick={() => router.push('/signup')}
//               className="text-[#0d4c3e] font-semibold underline hover:text-[#0b3d31] transition"
//             >
//               Sign up
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';

// import Image from 'next/image';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// interface LoginResponse {
//   token?: string;
//   message?: string;
//   user?: {
//     Name?: string;
//     [key: string]: any;
//   };
//   [key: string]: any;
// }

// export default function SignInPage() {
//   const router = useRouter();
//   const [form, setForm] = useState({ email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

//       const data: LoginResponse = await res.json();

//       if (res.ok && data.token) {
//         localStorage.setItem('token', data.token);
//         localStorage.setItem('userName', data.user?.Name || 'User');
//         setSuccess('Logged in successfully!');

//         setTimeout(() => {
//           router.push('/');
//           setTimeout(() => {
//             window.location.reload();
//           }, 300);
//         }, 100);
//       } else {
//         setError(data.message || 'Login failed');
//       }
//     } catch (err) {
//       const errorMessage = err instanceof Error ? err.message : 'Server unavailable, please try again shortly.';
//       setError(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-[#0d4c3e]">
//       <Image
//         src="/4.jpg"
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
//             src="/5.png"
//             alt="Preview"
//             fill
//             className="object-cover rounded-2xl"
//             sizes="(min-width: 768px) 50vw, 100vw"
//             priority
//           />
//         </div>

//         {/* Form Section */}
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

//           <div className="text-center text-sm mt-4">
//             <span>Don’t have an account? </span>
//             <button
//               onClick={() => router.push('/signup')}
//               className="text-[#0d4c3e] font-semibold underline hover:text-[#0b3d31] transition"
//             >
//               Sign up
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';

// import Image from 'next/image';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// interface LoginResponse {
//   token?: string;
//   message?: string;
//   user?: {
//     Name?: string;
//     [key: string]: any;
//   };
//   [key: string]: any;
// }

// export default function SignInPage() {
//   const router = useRouter();
//   const [form, setForm] = useState({ email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

//       const data: LoginResponse = await res.json();

//       if (res.ok && data.token) {
//         localStorage.setItem('token', data.token);
//         localStorage.setItem('userName', data.user?.Name || 'User');
//         setSuccess('Logged in successfully!');
//         setTimeout(() => {
//           router.push('/');
//           setTimeout(() => window.location.reload(), 300);
//         }, 100);
//       } else {
//         setError(data.message || 'Login failed');
//       }
//     } catch (err) {
//       const errorMessage = err instanceof Error ? err.message : 'Server unavailable, please try again shortly.';
//       setError(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#f3f8f7] px-4 py-8">
//       <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 bg-white rounded-[30px] overflow-hidden shadow-2xl">
//         {/* Form Section */}
//         <div className="px-10 py-12 bg-[#eef4f3] flex flex-col justify-center">
//           <h2 className="text-3xl font-bold text-[#0d4c3e] mb-1">Login</h2>
//           <p className="text-sm text-gray-600 mb-8">If you are already a member, easily log in</p>

//           <form onSubmit={handleSubmit} className="space-y-5">
//             <div>
//               <input
//                 id="email"
//                 type="email"
//                 placeholder="Email"
//                 value={form.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//               />
//             </div>

//             <div>
//               <input
//                 id="password"
//                 type="password"
//                 placeholder="Password"
//                 value={form.password}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//               />
//             </div>

//             {loading && <p className="text-sm text-gray-600">Connecting to server...</p>}
//             {error && <p className="text-sm text-red-500">{error}</p>}
//             {success && <p className="text-sm text-green-600">{success}</p>}

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-[#0d4c3e] text-white py-3 rounded-xl font-semibold hover:bg-[#0b3d31] transition"
//             >
//               {loading ? 'Signing in...' : 'Login'}
//             </button>

//             <div className="relative flex items-center justify-center">
//               <div className="absolute h-px bg-gray-300 w-full"></div>
//               <span className="bg-[#eef4f3] px-3 text-sm text-gray-500">OR</span>
//             </div>

             
//           </form>

//           <div className="text-sm text-gray-600 mt-4 flex justify-between items-center">
//             <button className="underline hover:text-[#0d4c3e] transition">Forgot my password</button>
//             <div>
//               <span>Don't have an account?</span>
//               <button
//                 onClick={() => router.push('/signup')}
//                 className="ml-1 font-semibold underline hover:text-[#0d4c3e]"
//               >
//                 Register
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Illustration Side */}
//         <div className="relative w-full h-[500px] md:h-auto bg-[#0d4c3e]">
//           <Image
//             src="/your-illustration.jpg" // Replace with your actual path (e.g., from the uploaded image)
//             alt="3D Illustration"
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';

// import Image from 'next/image';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// interface LoginResponse {
//   token?: string;
//   message?: string;
//   user?: {
//     Name?: string;
//     [key: string]: any;
//   };
//   [key: string]: any;
// }

// export default function SignInPage() {
//   const router = useRouter();
//   const [form, setForm] = useState({ email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

//       const data: LoginResponse = await res.json();

//       if (res.ok && data.token) {
//         localStorage.setItem('token', data.token);
//         localStorage.setItem('userName', data.user?.Name || 'User');
//         setSuccess('Logged in successfully!');
//         setTimeout(() => {
//           router.push('/');
//           setTimeout(() => {
//             window.location.reload();
//           }, 300);
//         }, 100);
//       } else {
//         setError(data.message || 'Login failed');
//       }
//     } catch (err) {
//       const errorMessage = err instanceof Error ? err.message : 'Server unavailable, please try again shortly.';
//       setError(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#f3f8f7] p-4">
//       <div className="w-full max-w-5xl flex flex-col md:flex-row rounded-[30px] bg-white overflow-hidden shadow-2xl">
//         {/* Left Form Side */}
//         <div className="w-full md:w-1/2 px-10 py-12 bg-[#eef4f3] flex flex-col justify-center">
//           <h2 className="text-3xl font-bold text-[#0d4c3e] mb-1">Login</h2>
//           <p className="text-sm text-gray-600 mb-8">If you are already a member, easily log in</p>

//           <form onSubmit={handleSubmit} className="space-y-5">
//             <input
//               id="email"
//               type="email"
//               placeholder="Email"
//               value={form.email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             <input
//               id="password"
//               type="password"
//               placeholder="Password"
//               value={form.password}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />

//             {loading && <p className="text-sm text-gray-600">Connecting to server...</p>}
//             {error && <p className="text-sm text-red-500">{error}</p>}
//             {success && <p className="text-sm text-green-600">{success}</p>}

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-[#0d4c3e] text-white py-3 rounded-xl font-semibold hover:bg-[#0b3d31] transition"
//             >
//               {loading ? 'Signing in...' : 'Login'}
//             </button>

//             <div className="relative flex items-center justify-center">
//               <div className="absolute h-px bg-gray-300 w-full"></div>
//               <span className="bg-[#eef4f3] px-3 text-sm text-gray-500">OR</span>
//             </div>

             
//           </form>

//           <div className="text-sm text-gray-600 mt-4 flex justify-between items-center">
//             <button className="underline hover:text-[#0d4c3e] transition">Forgot my password</button>
//             <div>
//               <span>Don't have an account?</span>
//               <button
//                 onClick={() => router.push('/signup')}
//                 className="ml-1 font-semibold underline hover:text-[#0d4c3e]"
//               >
//                 Register
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Right 3D Illustration Side */}
//         <div className="w-full md:w-1/2 relative h-[400px] md:h-auto">
//           <Image
//             src="/3d-room.jpg" // Replace with your actual image path (like your uploaded file)
//             alt="3D Room"
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';

// import Image from 'next/image';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// interface LoginResponse {
//   token?: string;
//   message?: string;
//   user?: {
//     Name?: string;
//     [key: string]: any;
//   };
//   [key: string]: any;
// }

// export default function SignInPage() {
//   const router = useRouter();
//   const [form, setForm] = useState({ email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

//       const data: LoginResponse = await res.json();

//       if (res.ok && data.token) {
//         localStorage.setItem('token', data.token);
//         localStorage.setItem('userName', data.user?.Name || 'User');
//         setSuccess('Logged in successfully!');
//         setTimeout(() => {
//           router.push('/');
//           setTimeout(() => {
//             window.location.reload();
//           }, 300);
//         }, 100);
//       } else {
//         setError(data.message || 'Login failed');
//       }
//     } catch (err) {
//       const errorMessage = err instanceof Error ? err.message : 'Server unavailable, please try again shortly.';
//       setError(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden">
//       {/* Background Image */}
//       <Image
//         src="/l.png"
//         alt="Background"
//         fill
//         className="absolute inset-0 object-cover z-0"
//         priority
//       />

//       {/* Foreground Card */}
//       <div className="relative z-10 w-full max-w-5xl flex flex-col md:flex-row rounded-[30px] bg-white/90 backdrop-blur-sm overflow-hidden shadow-2xl">
//         {/* Left Form Side */}
//         <div className="w-full md:w-1/2 px-10 py-12 bg-[#eef4f3]/80 flex flex-col justify-center">
//           <h2 className="text-3xl font-bold text-[#0d4c3e] mb-1">Login</h2>
//           <p className="text-sm text-gray-600 mb-8">If you are already a member, easily log in</p>

//           <form onSubmit={handleSubmit} className="space-y-5">
//             <input
//               id="email"
//               type="email"
//               placeholder="Email"
//               value={form.email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             <input
//               id="password"
//               type="password"
//               placeholder="Password"
//               value={form.password}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />

//             {loading && <p className="text-sm text-gray-600">Connecting to server...</p>}
//             {error && <p className="text-sm text-red-500">{error}</p>}
//             {success && <p className="text-sm text-green-600">{success}</p>}

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-[#0d4c3e] text-white py-3 rounded-xl font-semibold hover:bg-[#0b3d31] transition"
//             >
//               {loading ? 'Signing in...' : 'Login'}
//             </button>

//             <div className="relative flex items-center justify-center">
//               <div className="absolute h-px bg-gray-300 w-full"></div>
//               <span className="bg-[#eef4f3] px-3 text-sm text-gray-500">OR</span>
//             </div>
//           </form>

//           <div className="text-sm text-gray-600 mt-4 flex justify-between items-center">
//             <button className="underline hover:text-[#0d4c3e] transition">Forgot my password</button>
//             <div>
//               <span>Don't have an account?</span>
//               <button
//                 onClick={() => router.push('/signup')}
//                 className="ml-1 font-semibold underline hover:text-[#0d4c3e]"
//               >
//                 Register
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Right 3D Illustration Side */}
//         <div className="w-full md:w-1/2 relative h-[400px] md:h-auto">
//           <Image
//             src="/3d-room.jpg"
//             alt="3D Room"
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';

// import Image from 'next/image';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// interface LoginResponse {
//   token?: string;
//   message?: string;
//   user?: {
//     Name?: string;
//     [key: string]: any;
//   };
//   [key: string]: any;
// }

// export default function SignInPage() {
//   const router = useRouter();
//   const [form, setForm] = useState({ email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

//       const data: LoginResponse = await res.json();

//       if (res.ok && data.token) {
//         localStorage.setItem('token', data.token);
//         localStorage.setItem('userName', data.user?.Name || 'User');
//         setSuccess('Logged in successfully!');
//         setTimeout(() => {
//           router.push('/');
//           setTimeout(() => {
//             window.location.reload();
//           }, 300);
//         }, 100);
//       } else {
//         setError(data.message || 'Login failed');
//       }
//     } catch (err) {
//       const errorMessage = err instanceof Error ? err.message : 'Server unavailable, please try again shortly.';
//       setError(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden">
//       {/* Background Image */}
//       <Image
//         src="/l.png"
//         alt="Background"
//         fill
//         className="absolute inset-0 object-cover z-0"
//         priority
//       />

//       {/* Foreground Card */}
//       <div className="relative z-10 w-full max-w-5xl min-h-[600px] flex flex-col md:flex-row rounded-[30px] bg-white/90 backdrop-blur-sm overflow-hidden shadow-2xl">
//         {/* Left Form Side */}
//         <div className="w-full md:w-1/2 px-10 py-12 bg-[#eef4f3]/80 flex flex-col justify-center">
//           <h2 className="text-3xl font-bold text-[#0d4c3e] mb-1">Login</h2>
//           <p className="text-sm text-gray-600 mb-8">If you are already a member, easily log in</p>

//           <form onSubmit={handleSubmit} className="space-y-5">
//             <input
//               id="email"
//               type="email"
//               placeholder="Email"
//               value={form.email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             <input
//               id="password"
//               type="password"
//               placeholder="Password"
//               value={form.password}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />

//             {loading && <p className="text-sm text-gray-600">Connecting to server...</p>}
//             {error && <p className="text-sm text-red-500">{error}</p>}
//             {success && <p className="text-sm text-green-600">{success}</p>}

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-[#0d4c3e] text-white py-3 rounded-xl font-semibold hover:bg-[#0b3d31] transition"
//             >
//               {loading ? 'Signing in...' : 'Login'}
//             </button>

//             <div className="relative flex items-center justify-center">
//               <div className="absolute h-px bg-gray-300 w-full"></div>
//               <span className="bg-[#eef4f3] px-3 text-sm text-gray-500">OR</span>
//             </div>
//           </form>

//           <div className="text-sm text-gray-600 mt-4 flex justify-between items-center">
//             <button className="underline hover:text-[#0d4c3e] transition">Forgot my password</button>
//             <div>
//               <span>Don't have an account?</span>
//               <button
//                 onClick={() => router.push('/signup')}
//                 className="ml-1 font-semibold underline hover:text-[#0d4c3e]"
//               >
//                 Register
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Right 3D Illustration Side */}
//         <div className="w-full md:w-1/2 relative h-[400px] md:h-auto">
//           <Image
//             src="/3d-room.jpg"
//             alt="3D Room"
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';

// import Image from 'next/image';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// interface LoginResponse {
//   token?: string;
//   message?: string;
//   user?: {
//     Name?: string;
//     [key: string]: any;
//   };
//   [key: string]: any;
// }

// export default function SignInPage() {
//   const router = useRouter();
//   const [form, setForm] = useState({ email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

//       const data: LoginResponse = await res.json();

//       if (res.ok && data.token) {
//         localStorage.setItem('token', data.token);
//         localStorage.setItem('userName', data.user?.Name || 'User');
//         setSuccess('Logged in successfully!');
//         router.push('/'); // 🔁 Immediate redirect to home
//       } else {
//         setError(data.message || 'Login failed');
//       }
//     } catch (err) {
//       const errorMessage = err instanceof Error ? err.message : 'Server unavailable, please try again shortly.';
//       setError(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden">
//       {/* Background Image */}
//       <Image
//         src="/l.png"
//         alt="Background"
//         fill
//         className="absolute inset-0 object-cover z-0"
//         priority
//       />

//       {/* Foreground Card */}
//       <div className="relative z-10 w-full max-w-5xl min-h-[500px] flex flex-col md:flex-row rounded-[30px] bg-white/90 backdrop-blur-sm overflow-hidden shadow-2xl">
//         {/* Left Form Side */}
//         <div className="w-full md:w-1/2 px-10 py-12 bg-[#eef4f3]/80 flex flex-col justify-center">
//           <h2 className="text-3xl font-bold text-[#0d4c3e] mb-1">Login</h2>
//           <p className="text-sm text-gray-600 mb-8">If you are already a member, easily log in</p>

//           <form onSubmit={handleSubmit} className="space-y-5">
//             <input
//               id="email"
//               type="email"
//               placeholder="Email"
//               value={form.email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             <input
//               id="password"
//               type="password"
//               placeholder="Password"
//               value={form.password}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />

//             {loading && <p className="text-sm text-gray-600">Connecting to server...</p>}
//             {error && <p className="text-sm text-red-500">{error}</p>}
//             {success && <p className="text-sm text-green-600">{success}</p>}

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-[#0d4c3e] text-white py-3 rounded-xl font-semibold hover:bg-[#0b3d31] transition"
//             >
//               {loading ? 'Signing in...' : 'Login'}
//             </button>

//             <div className="relative flex items-center justify-center">
//               <div className="absolute h-px bg-gray-300 w-full"></div>
//               <span className="bg-[#eef4f3] px-3 text-sm text-gray-500">OR</span>
//             </div>
//           </form>

//           <div className="text-sm text-gray-600 mt-4 flex justify-between items-center">
//             <button className="underline hover:text-[#0d4c3e] transition"></button>
//             <div>
//               <span>Don't have an account?</span>
//               <button
//                 onClick={() => router.push('/signup')}
//                 className="ml-1 font-semibold underline hover:text-[#0d4c3e]"
//               >
//                 Register
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Right 3D Illustration Side */}
//         <div className="w-full md:w-1/2 relative h-[400px] md:h-auto">
//           <Image
//             src="/3d-room.jpg"
//             alt="3D Room"
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';

// import Image from 'next/image';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// interface LoginResponse {
//   token?: string;
//   message?: string;
//   user?: {
//     Name?: string;
//     [key: string]: any;
//   };
//   [key: string]: any;
// }

// export default function SignInPage() {
//   const router = useRouter();
//   const [form, setForm] = useState({ email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

//       const data: LoginResponse = await res.json();

//       if (res.ok && data.token) {
//         localStorage.setItem('token', data.token);
//         localStorage.setItem('userName', data.user?.Name || 'User');
//         setSuccess('Logged in successfully!');
//         router.push('/');
//       } else {
//         setError(data.message || 'Login failed');
//       }
//     } catch (err) {
//       const errorMessage = err instanceof Error ? err.message : 'Server unavailable, please try again shortly.';
//       setError(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden">
//       {/* Background Image */}
//       <Image
//         src="/l.png"
//         alt="Background"
//         fill
//         className="absolute inset-0 object-cover z-0"
//         priority
//       />

//       {/* Foreground Card */}
//       <div className="relative z-10 w-full max-w-5xl min-h-[500px] flex flex-col md:flex-row rounded-[30px] bg-white/90 backdrop-blur-sm overflow-hidden shadow-2xl">
//         {/* Left Form Side */}
//         <div className="w-full md:w-1/2 px-10 py-12 bg-[#eef4f3]/80 flex flex-col justify-center">
//           <h2 className="text-3xl font-bold text-[#0d4c3e] mb-1">Login</h2>
//           <p className="text-sm text-gray-600 mb-8">If you are already a member, easily log in</p>

//           <form onSubmit={handleSubmit} className="space-y-5">
//             <input
//               id="email"
//               type="email"
//               placeholder="Email"
//               value={form.email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             <input
//               id="password"
//               type="password"
//               placeholder="Password"
//               value={form.password}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />

//             {loading && <p className="text-sm text-gray-600">Connecting to server...</p>}
//             {error && <p className="text-sm text-red-500">{error}</p>}
//             {success && <p className="text-sm text-green-600">{success}</p>}

//             <button
//               type="submit"
//               disabled={loading}
//               className={`w-full text-white py-3 rounded-xl font-semibold transition-all duration-500
//                 ${loading
//                 ? 'bg-gray-400 cursor-not-allowed'
//                 : 'bg-[#0d4c3e] hover:bg-[#0b3d31] shadow-[0_0_12px_#0d4c3e80] hover:shadow-[0_0_20px_#0d4c3eff]'
//               }`}
//             >
//               {loading ? 'Signing in...' : 'Login'}
//             </button>

//             <div className="relative flex items-center justify-center">
//               <div className="absolute h-px bg-gray-300 w-full"></div>
//               <span className="bg-[#eef4f3] px-3 text-sm text-gray-500">OR</span>
//             </div>
//           </form>

//           <div className="text-sm text-gray-600 mt-4 flex justify-between items-center">
//             <button className="underline hover:text-[#0d4c3e] transition"></button>
//             <div>
//               <span>Don't have an account?</span>
//               <button
//                 onClick={() => router.push('/signup')}
//                 className="ml-1 font-semibold underline hover:text-[#0d4c3e]"
//               >
//                 Register
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Right 3D Illustration Side */}
//         <div className="w-full md:w-1/2 relative h-[400px] md:h-auto">
//           <Image
//             src="/3d-room.jpg"
//             alt="3D Room"
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';

// import Image from 'next/image';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// interface User {
//   Name?: string;
//   Email?: string;
// }

// interface LoginResponse {
//   token?: string;
//   message?: string;
//   user?: User;
// }

// export default function SignInPage() {
//   const router = useRouter();
//   const [form, setForm] = useState({ email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

//       const data: LoginResponse = await res.json();

//       if (res.ok && data.token) {
//         localStorage.setItem('token', data.token);
//         localStorage.setItem('userName', data.user?.Name || 'User');
//         setSuccess('Logged in successfully!');
//         router.push('/');
//       } else {
//         setError(data.message || 'Login failed');
//       }
//     } catch (err) {
//       const errorMessage =
//         err instanceof Error ? err.message : 'Server unavailable, please try again shortly.';
//       setError(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden">
//       {/* Background Image */}
//       <Image
//         src="/l.png"
//         alt="Background"
//         fill
//         className="absolute inset-0 object-cover z-0"
//         priority
//       />

//       {/* Login Card */}
//       <div className="relative z-10 w-full max-w-5xl min-h-[500px] flex flex-col md:flex-row rounded-[30px] bg-white/90 backdrop-blur-sm overflow-hidden shadow-2xl">
//         {/* Form Side */}
//         <div className="w-full md:w-1/2 px-10 py-12 bg-[#eef4f3]/80 flex flex-col justify-center">
//           <h2 className="text-3xl font-bold text-[#0d4c3e] mb-1">Login</h2>
//           <p className="text-sm text-gray-600 mb-8">If you are already a member, easily log in</p>

//           <form onSubmit={handleSubmit} className="space-y-5">
//             <input
//               id="email"
//               type="email"
//               placeholder="Email"
//               value={form.email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             <input
//               id="password"
//               type="password"
//               placeholder="Password"
//               value={form.password}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />

//             {loading && <p className="text-sm text-gray-600">Connecting to server...</p>}
//             {error && <p className="text-sm text-red-500">{error}</p>}
//             {success && <p className="text-sm text-green-600">{success}</p>}

//             <button
//               type="submit"
//               disabled={loading}
//               className={`w-full text-white py-3 rounded-xl font-semibold transition-all duration-500
//                 ${loading
//                   ? 'bg-gray-400 cursor-not-allowed'
//                   : 'bg-[#0d4c3e] hover:bg-[#0b3d31] shadow-[0_0_15px_#0d4c3eaa] hover:shadow-[0_0_25px_#0d4c3eff]'}`}
//             >
//               {loading ? 'Signing in...' : 'Login'}
//             </button>

//             <div className="relative flex items-center justify-center">
//               <div className="absolute h-px bg-gray-300 w-full"></div>
//               <span className="bg-[#eef4f3] px-3 text-sm text-gray-500">OR</span>
//             </div>
//           </form>

//           <div className="text-sm text-gray-600 mt-4 flex justify-between items-center">
//             <span></span>
//             <div>
//               <span>Don't have an account?</span>
//               <button
//                 onClick={() => router.push('/signup')}
//                 className="ml-1 font-semibold underline hover:text-[#0d4c3e]"
//               >
//                 Register
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Illustration Side */}
//         <div className="w-full md:w-1/2 relative h-[400px] md:h-auto">
//           <Image
//             src="/3d-room.jpg"
//             alt="3D Room"
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';

// import Image from 'next/image';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// interface User {
//   Name?: string;
//   Email?: string;
// }

// interface LoginResponse {
//   token?: string;
//   message?: string;
//   user?: User;
// }

// export default function SignInPage() {
//   const router = useRouter();
//   const [form, setForm] = useState({ email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

//       const data: LoginResponse = await res.json();

//       if (res.ok && data.token) {
//         localStorage.setItem('token', data.token);
//         localStorage.setItem('userName', data.user?.Name || 'User');
//         setSuccess('Logged in successfully!');
//         router.push('/');
//       } else {
//         setError(data.message || 'Login failed');
//       }
//     } catch (err) {
//       const errorMessage =
//         err instanceof Error ? err.message : 'Server unavailable, please try again shortly.';
//       setError(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center px-4 py-8 overflow-hidden">
//       {/* Background */}
//       <Image
//         src="/l.png"
//         alt="Background"
//         fill
//         className="absolute inset-0 object-cover z-0"
//         priority
//       />

//       {/* Card */}
//       <div className="relative z-10 w-full max-w-5xl min-h-[500px] flex flex-col lg:flex-row rounded-[30px] bg-white/90 backdrop-blur-sm overflow-hidden shadow-2xl">
//         {/* Form Side */}
//         <div className="w-full lg:w-1/2 px-6 sm:px-10 py-8 sm:py-12 bg-[#eef4f3]/80 flex flex-col justify-center">
//           <h2 className="text-2xl sm:text-3xl font-bold text-[#0d4c3e] mb-1">Login</h2>
//           <p className="text-sm text-gray-600 mb-8">If you are already a member, easily log in</p>

//           <form onSubmit={handleSubmit} className="space-y-5">
//             <input
//               id="email"
//               type="email"
//               placeholder="Email"
//               value={form.email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             <input
//               id="password"
//               type="password"
//               placeholder="Password"
//               value={form.password}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />

//             {loading && <p className="text-sm text-gray-600">Connecting to server...</p>}
//             {error && <p className="text-sm text-red-500">{error}</p>}
//             {success && <p className="text-sm text-green-600">{success}</p>}

//             <button
//               type="submit"
//               disabled={loading}
//               className={`w-full text-white py-3 rounded-xl font-semibold transition-all duration-500
//                 ${loading
//                   ? 'bg-gray-400 cursor-not-allowed'
//                   : 'bg-[#0d4c3e] hover:bg-[#0b3d31] shadow-[0_0_15px_#0d4c3eaa] hover:shadow-[0_0_25px_#0d4c3eff]'
//                 }`}
//             >
//               {loading ? 'Signing in...' : 'Login'}
//             </button>

//             <div className="relative flex items-center justify-center">
//               <div className="absolute h-px bg-gray-300 w-full"></div>
//               <span className="bg-[#eef4f3] px-3 text-sm text-gray-500">OR</span>
//             </div>
//           </form>

//           <div className="text-sm text-gray-600 mt-4 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
//             <span></span>
//             <div>
//               <span>Don't have an account?</span>
//               <button
//                 onClick={() => router.push('/signup')}
//                 className="ml-1 font-semibold underline hover:text-[#0d4c3e]"
//               >
//                 Register
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Image Side */}
//         <div className="w-full lg:w-1/2 relative h-64 sm:h-80 lg:h-auto">
//           <Image
//             src="/3d-room.jpg"
//             alt="3D Room"
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';

// import Image from 'next/image';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// interface User {
//   Name?: string;
//   Email?: string;
// }

// interface LoginResponse {
//   token?: string;
//   message?: string;
//   user?: User;
// }

// export default function SignInPage() {
//   const router = useRouter();
//   const [form, setForm] = useState({ email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

//       const data: LoginResponse = await res.json();

//       if (res.ok && data.token) {
//         localStorage.setItem('token', data.token);
//         localStorage.setItem('userName', data.user?.Name || 'User');
//         setSuccess('Logged in successfully!');
//         router.push('/');
//       } else {
//         setError(data.message || 'Login failed');
//       }
//     } catch (err) {
//       const errorMessage =
//         err instanceof Error ? err.message : 'Server unavailable, please try again shortly.';
//       setError(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center px-4 py-8 overflow-hidden">
//       {/* Background */}
//       <Image
//         src="/great_wave_laptop_wallpaper .svg"
//         alt="Background"
//         fill
//         className="absolute inset-0 object-cover z-0"
//         priority
//       />

//       {/* Card */}
//       <div className="relative z-10 w-full max-w-5xl min-h-[500px] flex flex-col lg:flex-row rounded-[30px] bg-white/90 backdrop-blur-sm overflow-hidden shadow-2xl">
//         {/* Form Side */}
//         <div className="w-full lg:w-1/2 px-6 sm:px-10 py-8 sm:py-12 bg-[#eef4f3]/80 flex flex-col justify-center">
//           <h2 className="text-2xl sm:text-3xl font-bold text-[#0d4c3e] mb-1">Login</h2>
//           <p className="text-sm text-gray-600 mb-8">If you are already a member, easily log in</p>

//           <form onSubmit={handleSubmit} className="space-y-5">
//             <input
//               id="email"
//               type="email"
//               placeholder="Email"
//               value={form.email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             <input
//               id="password"
//               type="password"
//               placeholder="Password"
//               value={form.password}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />

//             {loading && <p className="text-sm text-gray-600">Connecting to server...</p>}
//             {error && <p className="text-sm text-red-500">{error}</p>}
//             {success && <p className="text-sm text-green-600">{success}</p>}

//             <button
//               type="submit"
//               disabled={loading}
//               className={`w-full text-white py-3 rounded-xl font-semibold transition-all duration-500
//                 ${loading
//                   ? 'bg-gray-400 cursor-not-allowed'
//                   : 'bg-[#0d4c3e] hover:bg-[#0b3d31] shadow-[0_0_15px_#0d4c3eaa] hover:shadow-[0_0_25px_#0d4c3eff]'
//                 }`}
//             >
//               {loading ? 'Signing in...' : 'Login'}
//             </button>

//             <div className="relative flex items-center justify-center">
//               <div className="absolute h-px bg-gray-300 w-full"></div>
//               <span className="bg-[#eef4f3] px-3 text-sm text-gray-500">OR</span>
//             </div>
//           </form>

//           <div className="text-sm text-gray-600 mt-4 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
//             <span></span>
//             <div>
//               <span>Don't have an account?</span>
//               <button
//                 onClick={() => router.push('/signup')}
//                 className="ml-1 font-semibold underline hover:text-[#0d4c3e]"
//               >
//                 Sign Up
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Illustration Side - Hidden on small screens */}
//         <div className="hidden lg:block w-1/2 relative">
//           <div className="absolute inset-0">
//             <Image
//               src="/3d-room.jpg"
//               alt="3D Room"
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';

// import Image from 'next/image';
// import { useState, Suspense, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';

// interface User {
//   Name?: string;
//   Email?: string;
// }

// interface LoginResponse {
//   token?: string;
//   message?: string;
//   user?: User;
// }

// // 3D Model Loader
// function Model({ url }: { url: string }) {
//   const { scene } = useGLTF(url);
//   return <primitive object={scene} scale={1.5} />;
// }
// useGLTF.preload('/room.glb');

// export default function SignInPage() {
//   const router = useRouter();
//   const [form, setForm] = useState({ email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

//       const data: LoginResponse = await res.json();

//       if (res.ok && data.token) {
//         localStorage.setItem('token', data.token);
//         localStorage.setItem('userName', data.user?.Name || 'User');
//         setSuccess('Logged in successfully!');
//         router.push('/');
//       } else {
//         setError(data.message || 'Login failed');
//       }
//     } catch (err) {
//       const errorMessage =
//         err instanceof Error ? err.message : 'Server unavailable, please try again shortly.';
//       setError(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center px-4 py-8 overflow-hidden">
//       {/* Background */}
//       <Image
//         src="/great_wave_laptop_wallpaper .svg"
//         alt="Background"
//         fill
//         className="absolute inset-0 object-cover z-0"
//         priority
//       />

//       {/* Card */}
//       <div className="relative z-10 w-full max-w-5xl min-h-[500px] flex flex-col lg:flex-row rounded-[30px] bg-white/90 backdrop-blur-sm overflow-hidden shadow-2xl">
//         {/* Form Side */}
//         <div className="w-full lg:w-1/2 px-6 sm:px-10 py-8 sm:py-12 bg-[#eef4f3]/80 flex flex-col justify-center">
//           <h2 className="text-2xl sm:text-3xl font-bold text-[#0d4c3e] mb-1">Login</h2>
//           <p className="text-sm text-gray-600 mb-8">If you are already a member, easily log in</p>

//           <form onSubmit={handleSubmit} className="space-y-5">
//             <input
//               id="email"
//               type="email"
//               placeholder="Email"
//               value={form.email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             <input
//               id="password"
//               type="password"
//               placeholder="Password"
//               value={form.password}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />

//             {loading && <p className="text-sm text-gray-600">Connecting to server...</p>}
//             {error && <p className="text-sm text-red-500">{error}</p>}
//             {success && <p className="text-sm text-green-600">{success}</p>}

//             <button
//               type="submit"
//               disabled={loading}
//               className={`w-full text-white py-3 rounded-xl font-semibold transition-all duration-500
//                 ${loading
//                   ? 'bg-gray-400 cursor-not-allowed'
//                   : 'bg-[#0d4c3e] hover:bg-[#0b3d31] shadow-[0_0_15px_#0d4c3eaa] hover:shadow-[0_0_25px_#0d4c3eff]'
//                 }`}
//             >
//               {loading ? 'Signing in...' : 'Login'}
//             </button>

//             <div className="relative flex items-center justify-center">
//               <div className="absolute h-px bg-gray-300 w-full"></div>
//               <span className="bg-[#eef4f3] px-3 text-sm text-gray-500">OR</span>
//             </div>
//           </form>

//           <div className="text-sm text-gray-600 mt-4 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
//             <span></span>
//             <div>
//               <span>Don't have an account?</span>
//               <button
//                 onClick={() => router.push('/signup')}
//                 className="ml-1 font-semibold underline hover:text-[#0d4c3e]"
//               >
//                 Sign Up
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* 3D Model Side */}
//         <div className="hidden lg:block w-1/2 relative">
//           <div className="absolute inset-0">
//             <Canvas camera={{ position: [0, 0, 5], fov: 50 }} style={{ background: '#f9f9f9' }}>
//               <ambientLight intensity={0.7} />
//               <directionalLight position={[5, 5, 5]} intensity={1} />
//               <Suspense fallback={null}>
//                 <Model url="/room.glb" />
//               </Suspense>
//               <OrbitControls enableZoom enablePan enableRotate />
//             </Canvas>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';

// import Image from 'next/image';
// import { useState, Suspense } from 'react';
// import { useRouter } from 'next/navigation';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';

// interface User {
//   Name?: string;
//   Email?: string;
// }

// interface LoginResponse {
//   token?: string;
//   message?: string;
//   user?: User;
// }

// // 3D Model Loader
// function Model({ url }: { url: string }) {
//   const { scene } = useGLTF(url);
//   return <primitive object={scene} scale={1.5} />;
// }
// useGLTF.preload('/room.glb');

// export default function SignInPage() {
//   const router = useRouter();
//   const [form, setForm] = useState({ email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

//       const data: LoginResponse = await res.json();

//       if (res.ok && data.token) {
//         localStorage.setItem('token', data.token);
//         localStorage.setItem('userName', data.user?.Name || 'User');
//         setSuccess('Logged in successfully!');
//         router.push('/');
//       } else {
//         setError(data.message || 'Login failed');
//       }
//     } catch (err) {
//       const errorMessage =
//         err instanceof Error ? err.message : 'Server unavailable, please try again shortly.';
//       setError(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center px-4 py-8 overflow-hidden">
//       {/* Background */}
//       <Image
//         src="/great_wave_laptop_wallpaper .svg"
//         alt="Background"
//         fill
//         className="absolute inset-0 object-cover z-0"
//         priority
//       />

//       {/* Card */}
//       <div className="relative z-10 w-full max-w-5xl min-h-[500px] flex flex-col lg:flex-row rounded-[30px] bg-white/90 backdrop-blur-sm overflow-hidden shadow-2xl">
//         {/* Form Side */}
//         <div className="w-full lg:w-1/2 px-6 sm:px-10 py-8 sm:py-12 bg-[#eef4f3]/80 flex flex-col justify-center">
//           <h2 className="text-2xl sm:text-3xl font-bold text-[#0d4c3e] mb-1">Login</h2>
//           <p className="text-sm text-gray-600 mb-8">If you are already a member, easily log in</p>

//           <form onSubmit={handleSubmit} className="space-y-5">
//             <input
//               id="email"
//               type="email"
//               placeholder="Email"
//               value={form.email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             <input
//               id="password"
//               type="password"
//               placeholder="Password"
//               value={form.password}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />

//             {loading && <p className="text-sm text-gray-600">Connecting to server...</p>}
//             {error && <p className="text-sm text-red-500">{error}</p>}
//             {success && <p className="text-sm text-green-600">{success}</p>}

//             <button
//               type="submit"
//               disabled={loading}
//               className={`w-full text-white py-3 rounded-xl font-semibold transition-all duration-500
//                 ${loading
//                   ? 'bg-gray-400 cursor-not-allowed'
//                   : 'bg-[#0d4c3e] hover:bg-[#0b3d31] shadow-[0_0_15px_#0d4c3eaa] hover:shadow-[0_0_25px_#0d4c3eff]'
//                 }`}
//             >
//               {loading ? 'Signing in...' : 'Login'}
//             </button>

//             <div className="relative flex items-center justify-center">
//               <div className="absolute h-px bg-gray-300 w-full"></div>
//               <span className="bg-[#eef4f3] px-3 text-sm text-gray-500">OR</span>
//             </div>
//           </form>

//           <div className="text-sm text-gray-600 mt-4 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
//             <span></span>
//             <div>
//               <span>Don't have an account?</span>
//               <button
//                 onClick={() => router.push('/signup')}
//                 className="ml-1 font-semibold underline hover:text-[#0d4c3e]"
//               >
//                 Sign Up
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* 3D Model Side */}
//         <div className="hidden lg:block w-1/2 relative">
//           <div className="absolute inset-0">
//             <Canvas camera={{ position: [0, 0, 5], fov: 50 }} style={{ background: '#f9f9f9' }}>
//               <ambientLight intensity={0.7} />
//               <directionalLight position={[5, 5, 5]} intensity={1} />
//               <Suspense fallback={null}>
//                 <Model url="/room.glb" />
//               </Suspense>
//               <OrbitControls
//                 autoRotate={false}
//                 autoRotateSpeed={1.5}
//                 enableZoom={false}
//                 enablePan={false}
//                 maxPolarAngle={Math.PI / 2}
//                 minPolarAngle={Math.PI / 2.5}
//                 maxAzimuthAngle={Math.PI / 2}
//                 minAzimuthAngle={-Math.PI / 2}
//               />
//             </Canvas>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';

// import Image from 'next/image';
// import { useState, Suspense, useEffect } from 'react'; // ⬅️ added useEffect
// import { useRouter } from 'next/navigation';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';

// interface User {
//   Name?: string;
//   Email?: string;
// }

// interface LoginResponse {
//   token?: string;
//   message?: string;
//   user?: User;
// }

// // 3D Model Loader
// function Model({ url }: { url: string }) {
//   const { scene } = useGLTF(url);
//   return <primitive object={scene} scale={1.5} />;
// }

// export default function SignInPage() {
//   const router = useRouter();
//   const [form, setForm] = useState({ email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   // ✅ FIX: run preload only on client
//   useEffect(() => {
//     useGLTF.preload('/room.glb');
//   }, []);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

//       const data: LoginResponse = await res.json();

//       if (res.ok && data.token) {
//         localStorage.setItem('token', data.token);
//         localStorage.setItem('userName', data.user?.Name || 'User');
//         setSuccess('Logged in successfully!');
//         router.push('/');
//       } else {
//         setError(data.message || 'Login failed');
//       }
//     } catch (err) {
//       const errorMessage =
//         err instanceof Error ? err.message : 'Server unavailable, please try again shortly.';
//       setError(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center px-4 py-8 overflow-hidden">
//       {/* Background */}
//       <Image
//         src="/great_wave_laptop_wallpaper .svg"
//         alt="Background"
//         fill
//         className="absolute inset-0 object-cover z-0"
//         priority
//       />

//       {/* Card */}
//       <div className="relative z-10 w-full max-w-5xl min-h-[500px] flex flex-col lg:flex-row rounded-[30px] bg-white/90 backdrop-blur-sm overflow-hidden shadow-2xl">
//         {/* Form Side */}
//         <div className="w-full lg:w-1/2 px-6 sm:px-10 py-8 sm:py-12 bg-[#eef4f3]/80 flex flex-col justify-center">
//           <h2 className="text-2xl sm:text-3xl font-bold text-[#0d4c3e] mb-1">Login</h2>
//           <p className="text-sm text-gray-600 mb-8">If you are already a member, easily log in</p>

//           <form onSubmit={handleSubmit} className="space-y-5">
//             <input
//               id="email"
//               type="email"
//               placeholder="Email"
//               value={form.email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             <input
//               id="password"
//               type="password"
//               placeholder="Password"
//               value={form.password}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />

//             {loading && <p className="text-sm text-gray-600">Connecting to server...</p>}
//             {error && <p className="text-sm text-red-500">{error}</p>}
//             {success && <p className="text-sm text-green-600">{success}</p>}

//             <button
//               type="submit"
//               disabled={loading}
//               className={`w-full text-white py-3 rounded-xl font-semibold transition-all duration-500
//                 ${loading
//                   ? 'bg-gray-400 cursor-not-allowed'
//                   : 'bg-[#0d4c3e] hover:bg-[#0b3d31] shadow-[0_0_15px_#0d4c3eaa] hover:shadow-[0_0_25px_#0d4c3eff]'
//                 }`}
//             >
//               {loading ? 'Signing in...' : 'Login'}
//             </button>

//             <div className="relative flex items-center justify-center">
//               <div className="absolute h-px bg-gray-300 w-full"></div>
//               <span className="bg-[#eef4f3] px-3 text-sm text-gray-500">OR</span>
//             </div>
//           </form>

//           <div className="text-sm text-gray-600 mt-4 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
//             <span></span>
//             <div>
//               <span>Don't have an account?</span>
//               <button
//                 onClick={() => router.push('/signup')}
//                 className="ml-1 font-semibold underline hover:text-[#0d4c3e]"
//               >
//                 Sign Up
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* 3D Model Side */}
//         <div className="hidden lg:block w-1/2 relative">
//           <div className="absolute inset-0">
//             <Canvas camera={{ position: [0, 0, 5], fov: 50 }} style={{ background: '#f9f9f9' }}>
//               <ambientLight intensity={0.7} />
//               <directionalLight position={[5, 5, 5]} intensity={1} />
//               <Suspense fallback={null}>
//                 <Model url="/room.glb" />
//               </Suspense>
//               <OrbitControls
//                 autoRotate={false}
//                 autoRotateSpeed={1.5}
//                 enableZoom={false}
//                 enablePan={false}
//                 maxPolarAngle={Math.PI / 2}
//                 minPolarAngle={Math.PI / 2.5}
//                 maxAzimuthAngle={Math.PI / 2}
//                 minAzimuthAngle={-Math.PI / 2}
//               />
//             </Canvas>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
'use client';

import Image from 'next/image';
import { useState, Suspense } from 'react';
import { useRouter } from 'next/navigation';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

interface User {
  Name?: string;
  Email?: string;
}

interface LoginResponse {
  token?: string;
  message?: string;
  user?: User;
}

// 3D Model Loader
function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={1.5} />;
}

// ✅ Preload the model at the top level
useGLTF.preload('/room.glb');

export default function SignInPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

      const data: LoginResponse = await res.json();

      if (res.ok && data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userName', data.user?.Name || 'User');
        setSuccess('Logged in successfully!');
        router.push('/');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Server unavailable, please try again shortly.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-8 overflow-hidden">
      {/* Background */}
      <Image
        src="/w1.svg"
        alt="Background"
        fill
        className="absolute inset-0 object-cover z-0"
        priority
      />

      {/* Card */}
      <div className="relative z-10 w-full max-w-5xl min-h-[500px] flex flex-col lg:flex-row rounded-[30px] bg-white/90 backdrop-blur-sm overflow-hidden shadow-2xl">
        {/* Form Side */}
        <div className="w-full lg:w-1/2 px-6 sm:px-10 py-8 sm:py-12 bg-[#eef4f3]/80 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0d4c3e] mb-1">Login</h2>
          <p className="text-sm text-gray-600 mb-8">If you are already a member, easily log in</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
            />
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
            />

            {loading && <p className="text-sm text-gray-600">Connecting to server...</p>}
            {error && <p className="text-sm text-red-500">{error}</p>}
            {success && <p className="text-sm text-green-600">{success}</p>}

            <button
              type="submit"
              disabled={loading}
              className={`w-full text-white py-3 rounded-xl font-semibold transition-all duration-500
                ${
                  loading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-[#0d4c3e] hover:bg-[#0b3d31] shadow-[0_0_15px_#0d4c3eaa] hover:shadow-[0_0_25px_#0d4c3eff]'
                }`}
            >
              {loading ? 'Signing in...' : 'Login'}
            </button>

            <div className="relative flex items-center justify-center">
              <div className="absolute h-px bg-gray-300 w-full"></div>
              <span className="bg-[#eef4f3] px-3 text-sm text-gray-500">OR</span>
            </div>
          </form>

          <div className="text-sm text-gray-600 mt-4 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
            <span></span>
            <div>
              <span>Don&rsquo;t have an account?</span>
              <button
                onClick={() => router.push('/signup')}
                className="ml-1 font-semibold underline hover:text-[#0d4c3e]"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>

        {/* 3D Model Side */}
        <div className="hidden lg:block w-1/2 relative">
          <div className="absolute inset-0">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }} style={{ background: '#f9f9f9' }}>
              <ambientLight intensity={0.7} />
              <directionalLight position={[5, 5, 5]} intensity={1} />
              <Suspense fallback={null}>
                <Model url="/room.glb" />
              </Suspense>
              <OrbitControls
                autoRotate={false}
                autoRotateSpeed={1.5}
                enableZoom={false}
                enablePan={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2.5}
                maxAzimuthAngle={Math.PI / 2}
                minAzimuthAngle={-Math.PI / 2}
              />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
}
