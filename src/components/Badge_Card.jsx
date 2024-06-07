import { MdOutlineDeleteOutline } from "react-icons/md";
import { PiCurrencyDollarSimpleBold } from "react-icons/pi";
import { useState } from "react";

function Badge_Card(props) {
    const { el } = props;

    const [deleted, setDeleted] = useState(false);

    function handleDelete() {
        const storedBag = JSON.parse(localStorage.getItem('bag'));
        const updatedBag = storedBag.filter(item => item !== el);
        localStorage.setItem('bag', JSON.stringify(updatedBag));

        setDeleted(true);
    }

    if (deleted) {
        return null;
    }

    return (
        <div className="transition border rounded-md flex pr-10 items-center cursor-pointer hover:bg-zinc-200">
            <img src={el.img} alt="" className="w-[180px] mr-16 h-[140px] object-cover rounded-xl p-2 " />
            <h2 className="text-xl w-[350px] font-bold text-zinc-600">{el.name}</h2>
            <div className="flex items-center gap-1 w-[350px]">
                <h1 className="text-xl font-bold text-zinc-600">Color:</h1>
                <span
                    style={{
                        display: "inline-block",
                        width: "25px",
                        height: "25px",
                        backgroundColor: el.color,
                        borderRadius: "50%",
                        border: "3px solid gray",
                        marginLeft: "5px"
                    }}
                />
            </div>
            <h1 className="text-2xl font-bold text-zinc-600 flex items-center gap-1 w-[300px]">
                {el.price}
                <PiCurrencyDollarSimpleBold color="green" />
            </h1>
            <span onClick={handleDelete} className="transition p-2 rounded-xl text-red-500 hover:bg-gray-300 hover:text-red-600">
                <MdOutlineDeleteOutline className="text-2xl" />
            </span>
        </div>
    );
}

export default Badge_Card;
