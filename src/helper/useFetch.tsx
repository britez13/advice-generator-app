import { useEffect, useState } from "react";

export const useFetch = (url: string) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err))
    }, [url])

    // console.log(data);
    return data;

}

