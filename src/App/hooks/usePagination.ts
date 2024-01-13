import { useState } from "react";

export default  function usePagination() {
    const [visibleItems, setVisibleItems] = useState(20);
    
    function handleShowMore() {
        setVisibleItems((prev) => prev + 20);
      }

      return {visibleItems,handleShowMore}
}