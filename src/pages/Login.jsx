import { useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom";



const Login = () => {

    const [formLogin, setFormLogin] = useState({})
    console.log(formLogin);
    const navigate = useNavigate()

    const handleInputLogin = (event) => {
        const { name, value } = event.target
        setFormLogin({
            ...formLogin,
            [name]: value,
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
                body: JSON.stringify(formLogin)
            })
            console.log(response);

            if (response.status === 200) {
                navigate('/home')
            }
            return await response.json()
            
        } catch (error) {
                console.log(error.message)
        }
    }

    return (
        <Container>
            <Row
                className=" d-flex justify-content-center align-items-center mt-5"
            >
                <Col
                    sm={4}
                >
                    <Form onSubmit={onSubmitLogin}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Inserisci la mail"
                            onChange={handleInputLogin}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Inserisci la password"
                            onChange={handleInputLogin}
                        />
                           
                        <button
                            type="submit"
                        >
                            Invia
                        </button>
                    </Form>
                </Col>
            </Row>

        </Container>




    )
}

export default Login