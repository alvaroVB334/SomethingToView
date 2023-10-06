function App() {
  return (
    <main className="m-auto max-w-4xl h-full">
      <h1 className="text-amber-300 font-bold uppercase text-8xl">
        Something
        <span className="block text-[60px] text-center">to view</span>
      </h1>
      <section>
        <label
          htmlFor="small-input"
          className="block mb-2 text-sm font-medium text-amber-400 mt-10">
          Gimme' a <span className="text-red-500">film</span>
        </label>
        <input
          type="text"
          id="small-input"
          className="block w-full p-2 text-white border border-amber-300 rounded bg-transparent sm:text-xs focus:ring-amber-400 focus:border-amber-400"
        />
      </section>
    </main>
  );
}

export default App;
