import { useEffect, useState } from "react";

function App() {
  const [showPopUp, setShowPopUp] = useState(false);
  const handleChecked = () =>{
    setShowPopUp(true);
  }

  useEffect(() => {
    if (showPopUp) {
      const timer = setTimeout(() => {
        setShowPopUp(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showPopUp]);

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://cdn.pixabay.com/photo/2023/08/22/11/57/finance-8206242_1280.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="w-full bg-black p-10 bg-opacity-70 rounded-xl">
            <h1 className="mb-5 text-5xl font-bold text-white">Hellaww!!</h1>
            <div className="mb-2">
             { `Nanti untuk websitenya disini yaww.. semoga bisa wkwkw <3` }
            </div>
            <div className="mb-5">
             Jangan lupa di rating!!!
            </div>
            <div className="rating gap-1">
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-red-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-orange-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-lime-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-green-400"
                checked={handleChecked}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
