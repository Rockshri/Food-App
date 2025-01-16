import { ITEMCARDIMG_URL } from "../utils/constant";

const Itemcards = (props)=>{
         const {list} = props;
        //  console.log(list);
         
    return(
        <div>
           {list.map((c)=>(
            <div key={c?.card?.info?.id} className="p-2 my-3 border-gray-500 border-b-2 text-left flex justify-between">
               <div className="w-10/12">
                <div className="p-2">
                   <span>{c?.card?.info?.name}</span>{"  "}
                   <span className="inline-block"> ₹{c?.card?.info?.price/100 || c?.card?.info?.defaultPrice/100}</span>
                </div>
                   <p className="text-xs px-2">{c?.card?.info?.description}</p>
               </div>
                <div className="w-2/12 relative">
                    <img src={ITEMCARDIMG_URL+c?.card?.info?.imageId} className="w-fit"></img>
                    <button className="bg-green-400 shadow-lg rounded-sm shadow-slate-700 p-2 absolute top-0 left-0">ADD+</button>
                </div>
                
              
           </div>)
           )
           }
        </div>
    )
}

export default Itemcards;