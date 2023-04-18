import React from 'react';

function Pagination({conutriesPerPage,totalCountries,paginate}) {
    const pageNumbers=[]
    for(let i=1;i<= Math.ceil(totalCountries / conutriesPerPage);i++){
        pageNumbers.push(i)
    }
    return (
        <div>
            <ul className="pagination">
                {
                    pageNumbers.map(number=>(
                        <li className="page-item" key={number}>
                            <a href="#" className="page-link" onClick={()=>paginate(number)}>
                            {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Pagination;