export const loginUser = async (formData)=>{
    
    const username = formData.username;
    const password = formData.password;
    

    try{
        const response = await fetch(' http://127.0.0.1:8000/messenger/token/',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({ username, password})
        });

        const data = await response.json();
        const token = data.access;
        const refresh = data.refresh
        
        if(response.ok){
            localStorage.setItem('authToken', token);
            localStorage.setItem('refreshToken', refresh)
            return token;
        }else {
            throw new Error (data.message || 'Authentication Failed');
        }
    
    }catch(error){
        console.error(error || ' login error');
    }

}


export const getToken = () =>{
    return localStorage.getItem('authToken');
}