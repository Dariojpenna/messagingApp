import { getCSRFToken } from "./CSRFTokenService";

export const LogOutUser = async (setIsAuthenticated) => {
    const token = localStorage.getItem('authToken');
    const refresh = localStorage.getItem('refreshToken'); 
    
    try {
        
        const csrfToken =  await getCSRFToken();


        const response = await fetch('http://127.0.0.1:8000/messenger/token/logout/', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken,  
            },
            body: JSON.stringify({ refresh }),
        });

        const data = await response.json();
        
        if (response.ok) {
            setIsAuthenticated(false);
            localStorage.removeItem('authToken');
        } else {
            throw new Error(data.message || 'Authentication Failed');
        }

    } catch (error) {
        console.error(error);
    }
};
