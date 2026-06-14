export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center px-6">
        <h1 className="text-6xl font-bold">
          WeAfrica Ride
        </h1>

        <p className="mt-4 text-xl text-gray-300">
          Your Ride. Your City. Your Africa.
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <a href="#download" className="px-6 py-3 bg-yellow-500 text-black rounded-lg font-semibold">
            Download App
          </a>

          <a href="#driver" className="px-6 py-3 border border-white rounded-lg">
            Become a Driver
          </a>
        </div>
      </div>
    </main>
  );
}
