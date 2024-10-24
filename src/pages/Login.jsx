import { useState } from "react"
import { Button, Form } from "react-bootstrap"



const Login = () => {
    
    const [formLogin, setFormLogin] = useState({})
    
    const handleInputLogin = () => {
        const { name, value } = event.target
        setFormLogin({
            ...formLogin,
            [name] : value,
        })
    }

    const onSubmitLogin = async (event) => {
        event.preventDefault()
        try {
            const response = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/login`, {
                method: 'POST',
                headers: {
                    "Content-type": 'application/json'
                },
                body: JSON.stryngify(formLogin)
            })

            return await response.json()
        } catch (error) {
            
        }
    }

    return(
        <>
            <Form onSubmit={onSubmitLogin}>
                <Form.Group>
                    <Form.Label>
                        Email
                    </Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Inserisci la tua email"
                        onChange={handleInputLogin}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Password
                    </Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Inserisci la tua password"
                        onChange={handleInputLogin}
                    />
                </Form.Group>
                <Button
                    type="submit"
                >
                    Invia
                </Button>
            </Form>
          
        
        </>
    )
}

export default Login