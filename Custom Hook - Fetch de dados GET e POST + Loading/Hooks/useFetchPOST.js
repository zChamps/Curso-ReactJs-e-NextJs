import { useEffect, useState } from 'react'

export const useFetchPOST = (url) => {
   const [config, setConfig] = useState(null);
   const [method, setMethod] = useState(null);
   const [callFetch, setCallFetch] = useState(false);

    
  const httpConfig = (requestData, requestMethod) => {
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
      if (method === 'POST') {
        let fetchOptions = [url, config];

        const res = await fetch(...fetchOptions);
        const dados = await res.json();

        setCallFetch(dados);
      }
    };

    httpRequest();
  }, [config, method, url]);

    return { httpConfig, callFetch };

}

