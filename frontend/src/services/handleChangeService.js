export const handleChange = (e, seetState)=> {
    const {name, value} = e.target

    seetState((prevState) =>({
        ...prevState,
        [name]: value
    }))
}