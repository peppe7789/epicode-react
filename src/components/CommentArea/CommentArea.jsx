import { useContext, useState} from "react"
import { Form } from "react-bootstrap"
import { APIKEY } from "../../costants/APIKEY"
import { Button } from "react-bootstrap"
import { CommentAreaContext } from "../../contexts/CommenrtAreaContext"





const CommentArea = ({ asin }) => {

const endPointPost = "https://striveschool-api.herokuapp.com/api/comments/"

const{formState, setFormState}= useContext(CommentAreaContext)
    
   
    // prendiamo tutti i valori di input del form creando un oggetto
    const handleInputChange = (e) => {
        const parseRate = e.target.name=== "rate" ? Number(e.target.value) : e.target.value
        setFormState({
            ...formState,
            elementId: asin,
            [e.target.name]: parseRate
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(endPointPost , {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${APIKEY}`, 
                    "Content-Type": "application/json",
                },
                body : JSON.stringify(formState)
            })
            return await response.json()
            
        } catch (error) {
            console.log(error);
        }
        
}

    return (
        <Form
            className="d-flex flex-column gap-2"
        onSubmit={onSubmit}
        >
            <Form.Label>Inserisci Rate</Form.Label>
            <Form.Control
                type="number"
                min={1}
                max={5}
                required={true}
                name="rate"
                onChange={handleInputChange}
            />
            <Form.Label>Inserisci Commento</Form.Label>
            <Form.Control
                type="text"
                required={true}
                name="comment"
                onChange={handleInputChange}
            />

            <Button
                
                type="submit"
                variant="success"
            >
                Invia commento
            </Button>
        </Form>
    )
}

export default CommentArea