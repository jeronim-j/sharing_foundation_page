import React from "react";

const Pagination = ({orgPerPage, totalOrg, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalOrg / orgPerPage); i++) {
        pageNumbers.push(i);
    }


    if (pageNumbers.length === 1) {
        return null;
    } else {
        return (
            <nav>
                <ul>
                    {pageNumbers.map(number => (
                        <li key={number}>
                            <span onClick={() => paginate(number)}>{number}</span>
                        </li>
                    ))}
                </ul>
            </nav>
        )
    }
}

export default Pagination;