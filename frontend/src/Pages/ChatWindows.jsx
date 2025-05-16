import { useEffect } from "react";

const ChatWindows = () => {
    useEffect(() => {
        // Hacer una solicitud GET a Django para establecer la cookie CSRF
        fetch('http://127.0.0.1:8000/messenger/csrf/', {
          method: 'GET',
          credentials: 'include', // Incluir las cookies
        })
          .then(response => {
            if (response.ok) {
              console.log('CSRF Cookie set');
            } else {
              console.log('Error setting CSRF cookie');
            }
          })
          .catch(error => console.error('Error during CSRF token fetch', error));
      }, []);

    return (
        <div>
            <h1>Windows Page</h1>
        </div>
    )
}


export default ChatWindows