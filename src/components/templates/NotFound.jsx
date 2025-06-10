import notfound from "/four.gif";


function NotFound() {
  return (
    <div className=" absolute  flex items-center justify-center bg-[rgba(0,0,0,0.8)] ">
      <img className=" object-cover" src={notfound} alt="" />
    </div>
  );
}

export default NotFound;
