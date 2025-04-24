import { useEffect } from "react";

const useTitle = (page) => {

    useEffect(() => {
        document.title = page + " - Ze Movie Project";
    }, [page]);

};

export default useTitle;
