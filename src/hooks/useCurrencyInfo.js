import {useState, useEffect} from 'react';

function useCurrencyInfo(from, to) {
    const [data, setData] = useState({})

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?from=${from}&to=${to}%2CGBP`,
                {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': "765f912d08msh642f0fd4dff5b29p1a8d01jsn9b823472c92d",
                        'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com',
                    },
                }
            );
            const result = await response.json();
            
             setData(result.rates || {});
        }
        fetchData();
    }, [from, to]);

    return data;
}

export default useCurrencyInfo;