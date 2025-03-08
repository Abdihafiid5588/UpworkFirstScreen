function Main(){
    return <div>
        <div className="bg-[#1FB603] h-[520px] w-[1230px] my-6 ml-38 rounded-lg">
        <div className="py-20 px-64">
        <h1 className="text-7xl text-white font-bold">Find the best people </h1>
        <h1 className="text-7xl ml-24 text-white font-bold">for your job </h1>
        
           <div className="bg-white h-18 w-[600px] rounded-full py-2 px-6 mt-8">
           <input className="h-12 ml-3 my-1 w-96 border-none hover:border-none" type="text" placeholder="What are you looking for?"/>
           <i class="fa-solid fa-magnifying-glass text-2xl bg-black ml-28 py-2 px-2 rounded-full text-white h-9 w-10"></i>

           <div className="flex gap-4 text-white mt-12 ml-32">
            <a href="#">looking for work?</a>
            <button className="border-1 border-white rounded-full h-10 w-36 -mt-2">Apply as a pro</button>
           </div>
           </div>
       
        </div>

        </div>

        <h1 className="ml-36 my-14 text-2xl font-bold">Browse talent by category</h1>

        <div>
           
           <div className="grid grid-cols-4 px-36 gap-10 h-52 ">
           <div className="bg-[#EFF7EC] h-12 w-64 pt-2 "><h1 className="ml-4">Development & IT</h1></div>
           <div className="bg-[#EFF7EC] h-12 w-64 pt-2 "><h1 className="ml-4">Development & IT</h1></div>
           <div className="bg-[#EFF7EC] h-12 w-64 pt-2  "><h1 className="ml-4">Development & IT</h1></div>
           <div className="bg-[#EFF7EC] h-12 w-64 pt-2  "><h1 className="ml-4">Development & IT</h1></div>
           <div className="bg-[#EFF7EC] h-12 w-64 pt-2  "><h1 className="ml-4">Development & IT</h1></div>
           <div className="bg-[#EFF7EC] h-12 w-64 pt-2 "><h1 className="ml-4">Development & IT</h1></div>
           <div className="bg-[#EFF7EC] h-12 w-64 pt-2 "><h1 className="ml-4">Development & IT</h1></div>
           <div className="bg-[#EFF7EC] h-12 w-64 pt-2 "><h1 className="ml-4">Development & IT</h1></div>
          
           </div>

        </div>
        
        
    </div>
}

export default Main;