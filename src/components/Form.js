import React,{useState} from 'react'
import App from '../App'




const Form = (props) => {
    // console.log('Props', props)

    const [input, setInput] = useState({name:"", email:"", role:" "})

    const handleChanges = e => {

        setInput({
            ...input,[e.target.name]:e.target.value
        })
        console.log(input)

        // setInput({input: e.target.value })
        // console.log("input",input)

    }

    const submitForm=(e) => {
        e.preventDefault()
        props.addNewNote(input)
        setInput({name: "", email: "", role: "" })
    }
    // ...input,[e.target.name]:e.target.value
    return (
       
        <form onSubmit={submitForm}>

         <label htmlFor="title" className="name">Name:
            <input className="inputName"
            id="name"
            type="text" 
            name="name" 
            value={input.name} 
            onChange={handleChanges}
            />
         </label>
        
         <label htmlFor="role">Role:
            <input className="inputRole"
             id="role"
             type="text"
             name="role"
             value={input.role} 
             onChange={handleChanges}
             />
         </label>
         <label htmlFor="email" className="email"> Email: 
            <input  className="inputEmail"
            id="email"
            type="text"
            name="email"
            value={input.email} 
            onChange={handleChanges}
              />
         </label>
        
         <button type="submit" className="addButton">Add Member</button>
        </form>

    )

}

export default Form 