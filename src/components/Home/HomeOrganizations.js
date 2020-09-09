import React, {useState} from 'react';
import HomeOrganizationsList from "./HomeOrganizationsList";
import foundationsArray from '../../data/foundations.json';
import nonGovArray from '../../data/non-gov.json';
import localArray from '../../data/local.json';

const HomeOrganizations = () => {
    const [value, setValue] = useState("foundations");
    let orgText;
    let orgList;
    if (value === "foundations") {
        orgText =
            <p className="organizations-text">
                W naszej bazie znajdziesz listę zweryfikowanych fundacji, z którymi współpracujemy.
                Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
            </p>
        orgList = <HomeOrganizationsList orgArray={foundationsArray} />
    }
    else if (value === "non-gov") {
        orgText =
            <p className="organizations-text">
                W naszej bazie znajdziesz listę zweryfikowanych organizacji pozarządowych, z którymi współpracujemy.
                Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
            </p>
        orgList = <HomeOrganizationsList orgArray={nonGovArray} />
    }
    else {
        orgText =
            <p className="organizations-text">
                W naszej bazie znajdziesz listę zweryfikowanych lokalnych zbiórek, z którymi współpracujemy.
                Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
            </p>
        orgList = <HomeOrganizationsList orgArray={localArray} />
    }

    return (
        <>
            <section className="organizations" id="organizations">
                <h2 className="organizations-header">Komu pomagamy?</h2>
                <div className="organizations-decoration"
                     style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Decoration.svg`}}/>
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
                            value="non-gov"
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
                {orgText}
                {orgList}
            </section>
        </>
    )
}

export default HomeOrganizations;