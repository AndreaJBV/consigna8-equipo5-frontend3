import React, { useState } from 'react'

const Form = () => {

    const [user, setUser] = useState ({
        nombre: '',
        edad: '',
        pokemon: ''
    })

    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)

    const handleSubmit = (event) =>{
        event.preventDefault()
        if(user.nombre.length < 10){
            setShow(true)
        }else setErr(true)
    }

    

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Nombre: </label>
                <input type="text" onChange={(event) => setUser({...user, nombre: event.target.value})}/>
                {err ? 'El nombre está muy largo' : null}

                <label>Edad: </label>
                <input type="text"onChange={(event) => setUser({...user, edad: event.target.value})}/>

                <label>Pokemon favorito: </label>
                <input type="text" onChange={(event) => setUser({...user, pokemon: event.target.value})}/>

                <button>Registrar</button>
            </form>

            {
                show
                ?
                <>
                    <h4>¡Usuario registrado!</h4>
                    <h4>Nombre: {user.nombre}</h4>
                    <h4>Edad: {user.edad}</h4>
                    <h4>Pokemón favorito: {user.pokemon}</h4>
                </>
                :
                null
            }

        </>
    )
}

export default Form