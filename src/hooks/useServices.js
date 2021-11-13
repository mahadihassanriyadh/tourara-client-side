import { useEffect, useState } from "react"

const useServices = () => {
    const [services, setServices] = useState([]);
    console.log(services);
    useEffect(() => {
        fetch('https://boiling-depths-33003.herokuapp.com/vacationPackages')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return {
        services
    }
}

export default useServices;