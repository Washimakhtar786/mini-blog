export default function Hero() {
  return (
    <div className="bg-gray-100 min-h-screen">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5">
        <h1 className="text-xl font-semibold">Area</h1>

        <div className="hidden md:flex gap-6 text-sm">
          <a href="#">Benefits</a>
          <a href="#">Specifications</a>
          <a href="#">How-to</a>
          <a href="#">Contact</a>
        </div>

        <button className="bg-green-700 text-white px-4 py-2 rounded-full text-sm">
          Learn More →
        </button>
      </nav>

      {/* Hero Text */}
      <div className="text-center mt-16 px-4">
        <h1 className="text-5xl md:text-7xl font-serif font-bold">
          Browse everything.
        </h1>
      </div>

      {/* Image Section */}
      <div className="relative mt-16 flex justify-center">
        
        {/* Background box */}
        <div className="absolute w-[80%] h-[200px] bg-green-200 rounded-3xl bottom-[-50px]"></div>

        {/* Main Image */}
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="preview"
          className="relative w-[80%] rounded-3xl shadow-2xl"
        />
      </div>

    </div>
  );
}