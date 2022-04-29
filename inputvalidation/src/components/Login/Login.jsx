import React, { useState} from 'react'
import axios from "axios"

const Login = () => {
    const [error, setError] = useState(false)
    const [formdata, setFormData] =  useState({username: "", password: ""})
    const [isLoading, setLoading] = useState(false)
    const [user, setUser] = useState(null)

    console.log(formdata)
    
    const handleForm = (e) => {
        setFormData({...formdata, [e.target.name]: e.target.value})
    }

    const handleSubmit =  async(e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const { data } = await axios.get("https://jsonplaceholder.typicode.com/users/2")
            setUser(data)
            setLoading(false)
        } catch (error) {
            setError(true)
            setLoading(false)
        }
    }


    return (
        <div className='container'>
            <p>{user?.name}</p>
            <form onSubmit={handleSubmit}>
                <input type="text"  placeholder="username" value={formdata.username} name='username' onChange={handleForm}/>
                <input type="password" placeholder="password" name='password' onChange={handleForm} />
                <button disabled={!formdata.username}>{isLoading ? "Please wait" : "Login"}</button>
                <span data-testid="error" style={{visibility: error ? 'visible' : 'hidden'}}>Something went wrong</span>
            </form>
        </div>
    )
}

export default Login