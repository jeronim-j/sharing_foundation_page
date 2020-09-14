import React, {useState} from 'react';
import HomeOrganizationsList from "./HomeOrganizationsList";
import foundationsArray from '../../data/foundations.json';
import nonGovArray from '../../data/non-gov.json';
import localArray from '../../data/local.json';
import Decoration from "../Decoration";
import HomeOrganizationsConfig from "./HomeOrganizationsConfig";

const HomeOrganizations = () => {
    const [value, setValue] = useState("foundations");
    let orgList;
    if (value === "foundations") {
        orgList = <HomeOrganizationsList orgArray={foundationsArray} />
    }
    else if (value === "nongov") {
        orgList = <HomeOrganizationsList orgArray={nonGovArray} />
    }
    else {
        orgList = <HomeOrganizationsList orgArray={localArray} />
    }

    return (
        <>
            <section className="organizations" id="organizations">
                <h2 className="organizations-header">Komu pomagamy?</h2>
                <Decoration />
                <form className="organizations-radio">
                    <label>
                        <span>Fundacjom</span>
                        <input
                            name="organizations"
                            type="radio"
                            value="foundations"
                            onChange={e => setValue(e.target.value)}
                        />
                    </label>
                    <label>
                        <span>Organizacjom pozarządowym</span>
                        <input
                            name="organizations"
                            type="radio"
                            value="nongov"
                            onChange={e => setValue(e.target.value)}
                        />
                    </label>
                    <label>
                        <span>Lokalnym zbiórkom</span>
                        <input
                            name="organizations"
                            type="radio"
                            value="local"
                            onChange={e => setValue(e.target.value)}
                        />
                    </label>
                </form>
                <p className="organizations-text">{HomeOrganizationsConfig[value]}</p>
                {orgList}
            </section>
        </>
    )
}

export default HomeOrganizations;