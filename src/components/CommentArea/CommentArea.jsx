import { useContext, useEffect} from "react"
import { Form } from "react-bootstrap"
import { APIKEY } from "../../costants/APIKEY"
import { Button } from "react-bootstrap"
import { CommentAreaContext } from "../../contexts/CommenrtAreaContext"
import { ThemeContext } from "../../contexts/ThemeContext"





const CommentArea = ({ asin }) => {

const endPointPost = "https://striveschool-api.herokuapp.com/api/comments/"

    const { formState,setFormState,setIsCommentError, setIsCommentLoading,toggleRender,render } = useContext(CommentAreaContext)
    const {isDarkMode} = useContext(ThemeContext)
    
   
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
        setIsCommentLoading(true)
        try {
            
            const response = await fetch(endPointPost , {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${APIKEY}`, 
                    "Content-Type": "application/json",
                },
                body : JSON.stringify(formState)
            })
            setIsCommentLoading(false)
            return await response.json()
            
        } catch (error) {
            setIsCommentError(true)
        }
        finally {
            setIsCommentLoading(false)
            toggleRender()
        }

        useEffect(() => {
            getComment()
        }, [render])
        
}

    return (
        <Form
            className="d-flex flex-column gap-2 mt-2"
            onSubmit={onSubmit}
           
        >
            <Form.Label
            className={`${isDarkMode ? 'text-white' 
            : 'text-black' }`}
            >Inserisci Rate</Form.Label>
            <Form.Control
                type="number"
                min={1}
                max={5}
                required={true}
                name="rate"
                onChange={handleInputChange}
                value={formState.rate}

            />
            <Form.Label
             className={`${isDarkMode ? 'text-white' 
             : 'text-black' }`}
                l>Inserisci Commento</Form.Label>
            <Form.Control
                type="text"
                required={true}
                name="comment"
                onChange={handleInputChange}
                value={formState.comment}
            />

            <Button
                className="mt-3"
                type="submit"
                variant="success"
                
            >
                Invia commento
            </Button>
        </Form>
    )
}

export default CommentArea