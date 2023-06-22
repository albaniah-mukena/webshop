export default function Home() {
  return (
    <main className="max-w-screen-xl min-h-screen mx-auto py-10 px-6 md:px-28 space-y-8">
      <h1 className="text-3xl text-center">All Products</h1>
      <div className="grid grid-cols-2 gap-6 md:grid md:grid-cols-3 md:gap-9 text-center">
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="uppercase text-xs md:text-sm text-gray-400 tracking-wider md:tracking-wide">
              old faithful shop
            </h4>
            <h3 className="text-xl md:text-2xl">Cramer</h3>
            <p className="text-sm">Rp230.000</p>
          </div>
        </div>
      </div>
    </main>
  );
}
