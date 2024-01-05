function App() {
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <section className="w-full justify-center flex py-6 md:py-12 lg:py-16">
        <div className="container px-4 md:px-6 text-center flex flex-col gap-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Summertour Azerbaijan Tours</h1>
          <p className="max-w-[600px] mx-auto text-gray-500 md:text-xl">
            Some more info about tours...
          </p>
        </div>
      </section>
      <section className="flex w-full py-6 md:py-12 lg:py-16 justify-center">
        <div className="justify-center px-4 md:px-6 gap-4 md:gap-8 flex flex-wrap">
          <a className="group" href="/">
            <div className="relative w-64 h-64 overflow-hidden rounded-lg shadow-lg">
              <img
                alt="Section 1"
                className="w-full h-full object-cover transform transition-transform group-hover:scale-105 bg-cover"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Fortress_of_Shusha.jpg/1920px-Fortress_of_Shusha.jpg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity group-hover:bg-opacity-30 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Shusha</span>
              </div>
            </div>
          </a>
          <a className="group" href="/">
            <div className="relative w-64 h-64 overflow-hidden rounded-lg shadow-lg">
              <img
                alt="Section 1"
                className="w-full h-full object-cover transform transition-transform group-hover:scale-105 bg-cover"
                src="https://sfera.az/file/articles/2023/10/17/1697528454_393465928_865237204825981_2192971245840546726_n.jpg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity group-hover:bg-opacity-30 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Suqovushan</span>
              </div>
            </div>
          </a>
          <a className="group" href="/">
            <div className="relative w-64 h-64 overflow-hidden rounded-lg shadow-lg">
              <img
                alt="Section 1"
                className="w-full h-full object-cover transform transition-transform group-hover:scale-105 bg-cover"
                src="https://placehold.co/400"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity group-hover:bg-opacity-30 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Tour 3</span>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
    </>
  )
}

export default App
