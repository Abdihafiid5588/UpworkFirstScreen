function Header(){
    return <div>
        <div className="flex justify-between h-16 border-b-2 border-gray-300 py-6 px-38 text-center">
        <div className="flex gap-12 text-left">
        <h1 className="text-[23px] -mt-1 text-[#1FB603] font-bold">Upwork</h1>
        <ul className="flex gap-8 text-[#8C8F88]">
            <li>Find Talent <span className="text-gray-400 text-[10px]">▼</span></li>
            <li>Find Work <span className="text-gray-400 text-[10px]">▼</span></li>
            <li>Why Upwork <span className="text-gray-400 text-[10px]">▼</span></li>
            <li>Enterprise</li>
        </ul>
        </div>
        <div className="flex gap-4">
        <button className="text-gray-400">Log In</button>
        <button className="bg-[#1FB603] rounded-full h-10 w-32 text-white -mt-2">Sign Up</button>
        </div>
        </div>

    </div>
}

export default Header;