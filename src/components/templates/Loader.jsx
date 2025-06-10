import loader from "/loader.gif"

function Loader() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black">
      <img className="h-[50%] object-cover" src={loader} alt="" />
    </div>
  )
}

export default Loader
