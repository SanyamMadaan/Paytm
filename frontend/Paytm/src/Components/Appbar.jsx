export function Appbar(){
    return(
        <div className="flex justify-between mx-2 my-1 p-2">
            <h1 className="text-3xl  text-center font-bold ">Payments App</h1>
            <div className="flex mr-2">
                <span className=" text-2xl">Hello, Sanyam</span>
                <button className="ml-1 border-2-white bg-slate-100 rounded-full px-3">S</button>
            </div>
        </div>
    )
}