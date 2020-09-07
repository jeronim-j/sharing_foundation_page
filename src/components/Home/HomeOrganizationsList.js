import React, {useState} from "react";

const HomeOrganizationsList = ({orgArray}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [orgPerPage] = useState(3);
    const indexOfLastOrg = currentPage * orgPerPage;
    const indexOfFirstOrg = indexOfLastOrg - orgPerPage;
    const currentOrg = orgArray.slice(indexOfFirstOrg, indexOfLastOrg);

    const Pagination = ({orgPerPage, totalOrg, paginate}) => {
        const pageNumbers = [];
        paginate = (pageNumber) => setCurrentPage(pageNumber);
        for (let i = 1; i <= Math.ceil(totalOrg / orgPerPage); i++) {
            pageNumbers.push(i);
        }

        return (
            <nav>
                <ul>
                    {pageNumbers.map(number => (
                        <li key={number}>
                            <span onClick={() => paginate(number)} >{number}</span>
                        </li>
                    ))}
                </ul>
            </nav>
        )
    }

    return (
        <>
            <ul className="organizations-list">
                {currentOrg.map(org => (
                    <li key={org.id} className="organizations-list-element">
                        <div className="organizations-list-element-left">
                            <span>{org.name}</span>
                            <span>Cel i misja: {org.target}</span>
                        </div>
                        <div className="organizations-list-element-right">
                            <span>{org.resources}</span>
                        </div>
                    </li>
                ))}
            </ul>
            <Pagination orgPerPage={orgPerPage} totalOrg={orgArray.length} />

        </>
    )
}

export default HomeOrganizationsList;