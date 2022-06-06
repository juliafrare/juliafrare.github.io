import React, { useState } from "react";
import './TabsComponent.css'
import { Education, JobExperience, Activities, Projects, Skills } from "./Tabs";

const tabItems = [
    {
        id: 1,
        title: 'Education',
        content: <Education />,
    },
    {
        id: 2,
        title: 'Job Experience',
        content: <JobExperience />,
    },
    {
        id: 3,
        title: 'Activities',
        content: <Activities />,
    },
    {
        id: 4,
        title: 'Projects',
        content: <Projects />,
    },
    {
        id: 5,
        title: 'Skills',
        content: <Skills />,
    },
];

const TabsComponent = () => {
    const [active, setActive] = useState(0);
     
    return (
        <div className="wrapper">
            <div className="tabs">
                {
                    
                }
                {tabItems.map(({ id, title }) =><Tab
                    key={title}
                    title={title}
                    onItemClicked={() => setActive(id)}
                    isActive={active === id}
                    />
                )}
            </div>
            <div className="content">
                {tabItems.map(({ id, content }) => {
                    return active === id ? content : ''
                })}
            </div>
        </div>
    );
}

const Tab = ({
    icon = '',
    title = '',
    onItemClicked = () => console.error('You passed no action to the component'), isActive = false,}) => {
        return (
            <div className={isActive ? 'tabitem' : 'tabitem tabitem--inactive'} onClick={onItemClicked}>
                <i className={icon}></i>
                <p className="tabitem__title">{title}</p>
            </div>
        )
}

export default TabsComponent;