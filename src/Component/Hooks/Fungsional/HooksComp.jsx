import React, {useState} from 'react'

const HooksComp = () =>{
    const [jumlah, setJumlah] = useState(0)

    return(
        <div>
            <h1>{jumlah}</h1>
            <button onClick={()=>setJumlah(jumlah+1)}>Tambah</button>
        </div>
    )
}

export default HooksComp