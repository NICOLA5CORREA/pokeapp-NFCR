import { useEffect } from "react"
import './PokedexPage/styles/PokePages.css'

const PokePages = ({page, setPage}) => {
    const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
    const pageNumbers= range(page+1,page +5, 1)
    
    
  useEffect (()=>{
  }, [page])
  return (
    <div className="pages__container--wrap">
      <div className="pages__back" onClick={()=>setPage(page-1 >= 1)}>Back </div>
      <div className="pages__first" onClick={()=>setPage(0)}>pag 1</div>
        {pageNumbers.map(number => (
            <div className="page" key={number} onClick={()=>setPage(number)}>
                {number}
            </div>
          ))}
      <div className="pages__next" onClick={()=>setPage(page+1)}>Next</div>
    </div>
  )
}

export default PokePages
