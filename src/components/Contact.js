const Contact = ()=>{

    return(
        <div>
             <h1 className="p-3 m-3 text-3xl font-bold">Contact us</h1>
             <input type="text" className="border border-black p-2 m-3" placeholder="name"/>
             <input type="text" className="border border-black p-2 m-3" placeholder="number"/>
             <button className="border border-black p-2 m-3 rounded bg-slate-400">Submit</button>
             
        </div>
    )
}

export default Contact;