import { useEffect, useState } from "react";

const useVacationPackages = () => {
    const [vacationPackages, setVacationPackages] = useState([]);
    useEffect(() => {
        fetch("https://tourara-server.onrender.com/vacationPackages")
            .then((res) => res.json())
            .then((data) => setVacationPackages(data));
    }, []);
    return {
        vacationPackages,
    };
};

export default useVacationPackages;
