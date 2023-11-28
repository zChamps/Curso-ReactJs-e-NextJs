import { useEffect, useState } from 'react'

export const useFetchDELETE = () => {
   const [config, setConfig] = useState(null);
   const [method, setMethod] = useState(null);
   const [callFetch, setCallFetch] = useState(false);
   const [url, setUrl] = useState()

    
  const httpConfig = (requestData, requestMethod, url) => {
    setUrl(url)
    setConfig({
      method: requestMethod,
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });
    setMethod(requestMethod);
  };
    
  useEffect(() => {
    const httpRequest = async () => {
        try {
          if (method === 'DELETE') {
            let fetchOptions = [url, config];
  
            const res = await fetch(...fetchOptions);
  
            if (!res.ok) {
              throw new Error(`Erro na solicitação: ${res.status} - ${res.statusText}`);
            }
  
            const dados = await res.json();
  
            setCallFetch(dados);
          }
        } catch (error) {
          console.error('Erro durante a solicitação:', error.message);
          // Lidar com o erro conforme necessário
        }
      };
  
      if (url && config) {
        httpRequest();
      }
    }, [config, method, url]);

    return { httpConfig, callFetch };

}

