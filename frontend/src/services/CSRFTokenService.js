// csrfService.js

// Obtener el CSRF token desde las cookies
export const getCSRFToken = async () => {
    try {
        const response = await fetch('http://127.0.0.1:8000/messenger/csrf/', {
            method: 'GET',
            credentials: 'include',
        });
        const data = await response.json();
        return data.csrfToken;
    } catch (error) {
        console.error('Error al obtener el CSRF token:', error);
        return null;
    }
};


// Solicitar el CSRF token desde el backend
export const fetchCSRFToken = async () => {
    try {
        const response = await fetch('http://127.0.0.1:8000/messenger/csrf/', {
            method: 'GET',
            credentials: 'include',  // Asegura que se guarden las cookies
        });

        if (!response.ok) {
            throw new Error('Error al obtener el CSRF token');
        }

        console.log('CSRF token obtenido y almacenado en cookies');
    } catch (error) {
        console.error('CSRF fetch error:', error);
    }
};

