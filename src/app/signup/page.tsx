//  'use client';

// import Image from 'next/image';

// export default function SignUpPage() {
//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-[#0d4c3e]">
//       {/* Background image */}
//       <Image
//         src="/blue.jpeg" // Replace with your image path
//         alt="Background"
//         layout="fill"
//         objectFit="cover"
//         className="z-0"
//         priority
//       />

//       {/* Overlay to darken image a bit */}
//       <div className="absolute inset-0 bg-[#0d4c3e]/70 z-10"></div>

//       {/* Sign up card */}
//       <div className="relative z-20 max-w-4xl w-full grid md:grid-cols-2 gap-10 bg-white/90 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm p-8 m-4">
//         {/* Optional Left Section with image */}
//         <div className="hidden md:block relative w-full h-96">
//           <Image
//             src="/blue.jpg" // Optional, or another interior image
//             alt="Design Preview"
//             layout="fill"
//             objectFit="cover"
//             className="rounded-2xl"
//           />
//         </div>

//         {/* Form section */}
//         <div className="flex flex-col justify-center space-y-6 text-[#0d4c3e]">
//           <h2 className="text-3xl font-bold text-center">Sign Up</h2>

//           <form className="space-y-5">
//             <div>
//               <label htmlFor="name" className="block mb-1 text-sm font-medium">
//                 Name
//               </label>
//               <input
//                 id="name"
//                 type="text"
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Name"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block mb-1 text-sm font-medium">
//                 Email
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Email"
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
//                 placeholder="Create Password"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full flex items-center justify-center gap-2 bg-[#0d4c3e] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#0b3d31] transition"
//             >
//               Sign up <span className="text-lg">→</span>
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';

// import Image from 'next/image';

// export default function SignUpPage() {
//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-[#0d4c3e]">
//       {/* Background image */}
//       <Image
//         src="/living-room.jpg" // Your image path
//         alt="Background"
//         layout="fill"
//         objectFit="cover"
//         className="z-0"
//         priority
//       />

//       {/* Sign up card */}
//       <div className="relative z-10 max-w-4xl w-full grid md:grid-cols-2 gap-10 bg-white/90 rounded-3xl overflow-hidden p-8 m-4">
//         {/* Optional Left Section with image */}
//         <div className="hidden md:block relative w-full h-96">
//           <Image
//             src="/living-room.jpg"
//             alt="Design Preview"
//             layout="fill"
//             objectFit="cover"
//             className="rounded-2xl"
//           />
//         </div>

//         {/* Form section */}
//         <div className="flex flex-col justify-center space-y-6 text-[#0d4c3e]">
//           <h2 className="text-3xl font-bold text-center">Sign Up</h2>

//           <form className="space-y-5">
//             <div>
//               <label htmlFor="name" className="block mb-1 text-sm font-medium">
//                 Name
//               </label>
//               <input
//                 id="name"
//                 type="text"
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Name"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block mb-1 text-sm font-medium">
//                 Email
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Email"
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
//                 placeholder="Create Password"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full flex items-center justify-center gap-2 bg-[#0d4c3e] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#0b3d31] transition"
//             >
//               Sign up <span className="text-lg">→</span>
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';

// export default function SignUpPage() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     try {
//       const res = await fetch('https://interior-desgin.onrender.com/api/v1/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name, email, password }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.message || 'Registration failed');
//       }

//       setSuccess('Account created successfully!');
//       setName('');
//       setEmail('');
//       setPassword('');
//     } catch (err: any) {
//       setError(err.message);
//     }
//   };

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

//       {/* Sign up card */}
//       <div className="relative z-10 max-w-4xl w-full grid md:grid-cols-2 gap-10 bg-white/90 rounded-3xl overflow-hidden p-8 m-4">
//         {/* Optional Left Section with image */}
//         <div className="hidden md:block relative w-full h-96">
//           <Image
//             src="/living-room.jpg"
//             alt="Design Preview"
//             layout="fill"
//             objectFit="cover"
//             className="rounded-2xl"
//           />
//         </div>

//         {/* Form section */}
//         <div className="flex flex-col justify-center space-y-6 text-[#0d4c3e]">
//           <h2 className="text-3xl font-bold text-center">Sign Up</h2>

//           <form className="space-y-5" onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="name" className="block mb-1 text-sm font-medium">Name</label>
//               <input
//                 id="name"
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Name"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
//               <input
//                 id="email"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Email"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="block mb-1 text-sm font-medium">Password</label>
//               <input
//                 id="password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Create Password"
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full flex items-center justify-center gap-2 bg-[#0d4c3e] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#0b3d31] transition"
//             >
//               Sign up <span className="text-lg">→</span>
//             </button>
//           </form>

//           {/* Feedback Messages */}
//           {error && <p className="text-red-600 text-sm text-center">{error}</p>}
//           {success && <p className="text-green-600 text-sm text-center">{success}</p>}
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';

// export default function SignUpPage() {
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     setSuccess('');

//     try {
//       const res = await fetch('/api/signup', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (!res.ok) throw new Error(data.message || 'Signup failed');
//       setSuccess('Account created successfully!');
//     } catch (err: any) {
//       setError(err.message);
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
//         layout="fill"
//         objectFit="cover"
//         className="z-0"
//         priority
//       />

//       {/* Sign up card */}
//       <div className="relative z-10 max-w-4xl w-full grid md:grid-cols-2 gap-10 bg-white/90 rounded-3xl overflow-hidden p-8 m-4">
//         <div className="hidden md:block relative w-full h-96">
//           <Image
//             src="/living-room.jpg"
//             alt="Design Preview"
//             layout="fill"
//             objectFit="cover"
//             className="rounded-2xl"
//           />
//         </div>

//         <div className="flex flex-col justify-center space-y-6 text-[#0d4c3e]">
//           <h2 className="text-3xl font-bold text-center">Sign Up</h2>

//           <form className="space-y-5" onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="name" className="block mb-1 text-sm font-medium">Name</label>
//               <input
//                 id="name"
//                 type="text"
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Name"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
//               <input
//                 id="email"
//                 type="email"
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Email"
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="block mb-1 text-sm font-medium">Password</label>
//               <input
//                 id="password"
//                 type="password"
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Create Password"
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full flex items-center justify-center gap-2 bg-[#0d4c3e] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#0b3d31] transition"
//             >
//               {loading ? 'Signing up...' : 'Sign up →'}
//             </button>
//           </form>

//           {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//           {success && <p className="text-green-600 text-sm text-center">{success}</p>}
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';

// export default function SignUpPage() {
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     if (!formData.name || !formData.email || !formData.password) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch('/api/signup', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (!res.ok) throw new Error(data.message || 'Signup failed');
//       setSuccess('Account created successfully!');
//       setFormData({ name: '', email: '', password: '' });
//     } catch (err: any) {
//       setError(err.message || 'Something went wrong.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-[#0d4c3e]">
//       {/* Background image */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="/living-room.jpg"
//           alt="Background"
//           fill
//           className="object-cover"
//           sizes="100vw"
//           priority
//         />
//       </div>

//       {/* Sign up card */}
//       <div className="relative z-10 max-w-4xl w-full grid md:grid-cols-2 gap-10 bg-white/90 rounded-3xl overflow-hidden p-8 m-4 shadow-2xl">
//         {/* Left Section */}
//         <div className="hidden md:block relative w-full h-96">
//           <Image
//             src="/living-room.jpg"
//             alt="Design Preview"
//             fill
//             className="object-cover rounded-2xl"
//             sizes="(min-width: 768px) 50vw, 100vw"
//             priority
//           />
//         </div>

//         {/* Form section */}
//         <div className="flex flex-col justify-center space-y-6 text-[#0d4c3e]">
//           <h2 className="text-3xl font-bold text-center">Sign Up</h2>

//           <form className="space-y-5" onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="name" className="block mb-1 text-sm font-medium">
//                 Name
//               </label>
//               <input
//                 id="name"
//                 type="text"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Name"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block mb-1 text-sm font-medium">
//                 Email
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Email"
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="block mb-1 text-sm font-medium">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 type="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Create Password"
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full flex items-center justify-center gap-2 bg-[#0d4c3e] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#0b3d31] transition disabled:opacity-60"
//             >
//               {loading ? 'Signing up...' : 'Sign up →'}
//             </button>
//           </form>

//           {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//           {success && <p className="text-green-600 text-sm text-center">{success}</p>}
//         </div>
//       </div>
//     </div>
//   );
// }

// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';

// export default function SignUpPage() {
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     if (!formData.name || !formData.email || !formData.password) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch('/api/signup', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (!res.ok) throw new Error(data.message || 'Signup failed');
//       setSuccess('Account created successfully!');
//       setFormData({ name: '', email: '', password: '' });
//     } catch (err: any) {
//       if (
//         err.message.includes('fetch') ||
//         err.message.includes('NetworkError') ||
//         err.message.includes('server is currently unavailable')
//       ) {
//         setError('Server is starting up or unavailable. Please try again shortly.');
//       } else {
//         setError(err.message || 'Something went wrong.');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-[#0d4c3e]">
//       {/* Background image */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="/living-room.jpg"
//           alt="Background"
//           fill
//           className="object-cover"
//           sizes="100vw"
//           priority
//         />
//       </div>

//       {/* Sign up card */}
//       <div className="relative z-10 max-w-4xl w-full grid md:grid-cols-2 gap-10 bg-white/90 rounded-3xl overflow-hidden p-8 m-4 shadow-2xl">
//         {/* Left Section */}
//         <div className="hidden md:block relative w-full h-96">
//           <Image
//             src="/living-room.jpg"
//             alt="Design Preview"
//             fill
//             className="object-cover rounded-2xl"
//             sizes="(min-width: 768px) 50vw, 100vw"
//             priority
//           />
//         </div>

//         {/* Form section */}
//         <div className="flex flex-col justify-center space-y-6 text-[#0d4c3e]">
//           <h2 className="text-3xl font-bold text-center">Sign Up</h2>

//           <form className="space-y-5" onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="name" className="block mb-1 text-sm font-medium">Name</label>
//               <input
//                 id="name"
//                 type="text"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Name"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
//               <input
//                 id="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Email"
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="block mb-1 text-sm font-medium">Password</label>
//               <input
//                 id="password"
//                 type="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Create Password"
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full flex items-center justify-center gap-2 bg-[#0d4c3e] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#0b3d31] transition disabled:opacity-60"
//             >
//               {loading ? 'Signing up...' : 'Sign up →'}
//             </button>
//           </form>

//           {loading && (
//             <p className="text-sm text-center text-gray-500">Connecting to server...</p>
//           )}
//           {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//           {success && <p className="text-green-600 text-sm text-center">{success}</p>}
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';

// export default function SignUpPage() {
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     if (!formData.name || !formData.email || !formData.password) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch('/api/signup', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (!res.ok) throw new Error(data.message || 'Signup failed');
//       setSuccess('Account created successfully!');
//       setFormData({ name: '', email: '', password: '' });
//     } catch (err: any) {
//       if (
//         err.message.includes('fetch') ||
//         err.message.includes('NetworkError') ||
//         err.message.includes('server is currently unavailable')
//       ) {
//         setError('Server is starting up or unavailable. Please try again shortly.');
//       } else {
//         setError(err.message || 'Something went wrong.');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-[#0d4c3e]">
//       {/* Background image */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="/living-room.jpg"
//           alt="Background"
//           fill
//           className="object-cover"
//           sizes="100vw"
//           priority
//         />
//       </div>

//       {/* Sign up card */}
//       <div className="relative z-10 max-w-4xl w-full grid md:grid-cols-2 gap-10 bg-white/90 rounded-3xl overflow-hidden p-8 m-4 shadow-2xl">
//         {/* Left Section */}
//         <div className="hidden md:block relative w-full h-96">
//           <Image
//             src="/living-room.jpg"
//             alt="Design Preview"
//             fill
//             className="object-cover rounded-2xl"
//             sizes="(min-width: 768px) 50vw, 100vw"
//             priority
//           />
//         </div>

//         {/* Form section */}
//         <div className="flex flex-col justify-center space-y-6 text-[#0d4c3e]">
//           <h2 className="text-3xl font-bold text-center">Sign Up</h2>

//           <form className="space-y-5" onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="name" className="block mb-1 text-sm font-medium">Name</label>
//               <input
//                 id="name"
//                 type="text"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Name"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
//               <input
//                 id="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Email"
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="block mb-1 text-sm font-medium">Password</label>
//               <input
//                 id="password"
//                 type="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Create Password"
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full flex items-center justify-center gap-2 bg-[#0d4c3e] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#0b3d31] transition disabled:opacity-60"
//             >
//               {loading ? 'Signing up...' : 'Sign up →'}
//             </button>
//           </form>

//           {loading && (
//             <p className="text-sm text-center text-gray-500">Connecting to server...</p>
//           )}
//           {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//           {success && <p className="text-green-600 text-sm text-center">{success}</p>}
//         </div>
//       </div>
//     </div>
//   );
// }
'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function SignUpPage() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!formData.name || !formData.email || !formData.password) {
      setError('Please fill in all fields.');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('http://13.48.25.101:8000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Password: formData.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || 'Signup failed');

      setSuccess('Account created successfully!');
      setFormData({ name: '', email: '', password: '' });
    } catch (err: any) {
      setError(err.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#0d4c3e]">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/4.jpg"
          alt="Background"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      {/* Sign up card */}
      <div className="relative z-10 max-w-4xl w-full grid md:grid-cols-2 gap-10 bg-white/90 rounded-3xl overflow-hidden p-8 m-4 shadow-2xl">
        {/* Left Section */}
        <div className="hidden md:block relative w-full h-96">
          <Image
            src="/5.png"
            alt="Design Preview"
            fill
            className="object-cover rounded-2xl"
            sizes="(min-width: 768px) 50vw, 100vw"
            priority
          />
        </div>

        {/* Form section */}
        <div className="flex flex-col justify-center space-y-6 text-[#0d4c3e]">
          <h2 className="text-3xl font-bold text-center">Sign Up</h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block mb-1 text-sm font-medium">Name</label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-1 text-sm font-medium">Password</label>
              <input
                id="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
                placeholder="Create Password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-[#0d4c3e] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#0b3d31] transition disabled:opacity-60"
            >
              {loading ? 'Signing up...' : 'Sign up →'}
            </button>
          </form>

          {loading && (
            <p className="text-sm text-center text-gray-500">Connecting to server...</p>
          )}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          {success && <p className="text-green-600 text-sm text-center">{success}</p>}
        </div>
      </div>
    </div>
  );
}
