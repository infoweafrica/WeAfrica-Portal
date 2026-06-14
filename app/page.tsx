export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h1 className="text-5xl md:text-7xl font-bold">
            Your Ride.
            <br />
            Your City.
            <br />
            Your Africa.
          </h1>

          <p className="mt-6 text-xl text-gray-300 max-w-2xl">
            Fast, safe and affordable rides with WeAfrica Ride.
            Book trips, airport transfers, business rides and delivery services
            from one app.
          </p>

          <div className="flex gap-4 mt-10">
            <a
              href="#download"
              className="px-8 py-4 rounded-xl bg-yellow-500 text-black font-semibold"
            >
              Download App
            </a>

            <a
              href="#driver"
              className="px-8 py-4 rounded-xl border border-white"
            >
              Become a Driver
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center">
          Ride Options
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <div className="border rounded-2xl p-6">
            <h3 className="font-bold text-xl">Ride</h3>
            <p className="mt-2 text-gray-600">
              Everyday affordable rides.
            </p>
          </div>

          <div className="border rounded-2xl p-6">
            <h3 className="font-bold text-xl">XL</h3>
            <p className="mt-2 text-gray-600">
              Extra space for groups.
            </p>
          </div>

          <div className="border rounded-2xl p-6">
            <h3 className="font-bold text-xl">Airport</h3>
            <p className="mt-2 text-gray-600">
              Reliable airport transfers.
            </p>
          </div>

          <div className="border rounded-2xl p-6">
            <h3 className="font-bold text-xl">Delivery</h3>
            <p className="mt-2 text-gray-600">
              Fast package delivery.
            </p>
          </div>
        </div>
      </section>

      <section id="driver" className="bg-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold">
            Drive With WeAfrica
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl">
            Earn money on your schedule. Join thousands of drivers using
            WeAfrica Ride.
          </p>
        </div>
      </section>

      <section id="download" className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">
            Download WeAfrica Ride
          </h2>

          <p className="mt-4 text-gray-600">
            Available soon on iOS and Android.
          </p>
        </div>
      </section>
    </main>
  );
}
