import React from "react";

const Pagination = ({orgPerPage, totalOrg, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalOrg / orgPerPage); i++) {
        pageNumbers.push(i);
    }


    if (pageNumbers.length === 1) {
        return (
            <div/>
        )
    } else {
        return (
            <nav className="pagination">
                <ul className="pagination-list">
                    {pageNumbers.map(number => (
                        <li className="pagination-list-element" key={number}>
                            <span onClick={() => paginate(number)}>{number}</span>
                        </li>
                    ))}
                </ul>
            </nav>
        )
    }
}

export default Pagination;