import React, {useState} from "react";
import Pagination from "./HomeOrganizationsListPagination";

const HomeOrganizationsList = ({orgArray}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [orgPerPage] = useState(3);
    const indexOfLastOrg = currentPage * orgPerPage;
    const indexOfFirstOrg = indexOfLastOrg - orgPerPage;
    const currentOrg = orgArray.slice(indexOfFirstOrg, indexOfLastOrg);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);


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
            <Pagination orgPerPage={orgPerPage} totalOrg={orgArray.length} paginate={paginate} />

        </>
    )
}

export default HomeOrganizationsList;