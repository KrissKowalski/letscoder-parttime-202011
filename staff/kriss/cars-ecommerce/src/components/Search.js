import AppButton from './AppButton'
import Car from './Car'

function Search (props) {

    const handleOnSubmit = (event) => {

        event.preventDefault()

        const id = event.target.id.value
        const name = event.target.name.value
        const price = event.target.price.value

        alert(id)
        alert(name)
        alert(price)
    }

    return  
    
    
}