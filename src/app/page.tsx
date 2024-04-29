import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-home-background bg-no-repeat bg-cover">
      <div className="max-w-lg px-6 py-8 bg-box-color-500 shadow-xl rounded-lg">
        <h1 className="text-3xl font-semibold text-center text-black mb-4">WELCOME TO HOME PAGE</h1>
        <p className="text-lg text-center text-white-opacity-70 mb-8">Explore and discover something new.</p>
      </div>
    </div>
  );
}
