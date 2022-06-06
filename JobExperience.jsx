import './jobExperience.css'

const JobExperience = () => {
    const items = [
        "Software Engineering Intern @ Amdocs: 11/2021 - present",
        "Software Development Intern @ Já Vendeu: 01/2021 - 10/2021"
    ]

    /*
            {items && items.map(items =>
                <div className="item" key={items}>
                </div>
            )}
     */

    return (
        <div className="content">
            <p>Software Engineering Intern @ Amdocs: 11/2021 - present</p>
        </div>
    );
}

export { JobExperience };