import { useEffect, useState } from "react"

const useVacationPackages = () => {
    const [vacationPackages, setVacationPackages] = useState([]);
    useEffect(() => {
        fetch('https://boiling-depths-33003.herokuapp.com/vacationPackages')
            .then(res => res.json())
            .then(data => setVacationPackages(data))
    }, [])
    return {
        vacationPackages
    }
}

export default useVacationPackages;