export default function Header() {
    return(
            <header className="flex flex-col justify-items-stretch">
                <nav className="flex justify-between items-baseline ">
                    <div className="flex items-baseline text-2xl py-2">
                        <span
                            className="font-bold text-gray-800"
                        >TRAVEL - AGENCIA DE VIAGENS</span>
                    </div>
                    <div className="space-x-3 mb-4">
                        <a href="#">Inicio</a>
                        <a href="#">Tour List</a>
                        <a href="#">Destinations</a>
                        <a href="#">Discounts</a>
                    </div>
                </nav>

                <div className="bg-orange-500 p-5 w-full grid grid-cols-1">
                    
                    <div className="flex flex-col items-center text-white text-center">
                        <span className="text-[2rem] titulo">Let's go now</span>
                        <span className="titulo text-[3rem]">explore and travel</span>
                        <button
                            className="mt-4 py-2 px-4 rounded-md hover:bg-blue-300 bg-green-400 font-sans max-w-60"
                        >
                            VIEW OUR TOURS
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-5 lg:flex justify-between p-5 font-poppins text-[#333]">
                    <img
                        src="/img/img header/Section/div.tour__card.svg"
                        alt="Tour Card"
                        className="w-60 h-auto "
                    />
                    <img
                        src="/img/img header/Section/div.tour__card (1).svg"
                        alt="Tour Card"
                        className="w-60 h-auto "
                    />
                    <img
                        src="/img/img header/Section/div.tour__card (2).svg"
                        alt="Tour Card"
                        className="w-60 h-auto "
                    />
                    <img
                        src="/img/img header/Section/div.tour__card (3).svg"
                        alt="Tour Card"
                        className="w-60 h-auto "
                    />
                </div>
            </header>
    )
}