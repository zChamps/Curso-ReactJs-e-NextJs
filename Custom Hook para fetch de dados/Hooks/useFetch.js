import { useEffect, useState } from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url)
            const dados = await res.json()

            setData(dados)
        }

        fetchData()
    }, [url])

    return { data }
}

