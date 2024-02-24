// Desc: This is the Projects page of the website where the user
// can view the projects I have worked on.
// ===============================================================

// Importing all necessary packages
// ===============================================================
import { useState, useEffect } from 'react';
import projectsData from '../utils/projectsData';
// ===============================================================

// Creating the Projects component
// ===============================================================
const Projects = () => {

    // Creating a state to hold the projects
    const [projects, /*setProjects*/] = useState(projectsData);

    // Creating a function to add a new project for further development
    // setProjects(prevProjects => [...prevProjects, newProject]);

    return (
        <div>
            <div>
                <p> Projects</p>

                <div>
                    {projects.map((project) => (
                        <div key={project.name}>
                            <div>
                                <div>
                                    <p>{project.name}</p>
                                    <p>{project.description}</p>
                                </div>
                                <div>
                                    <button
                                        href={project.deployed}
                                    >
                                            Deployed
                                    </button>
                                    <button href={project.github}>
                                            GitHub
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))};
                </div>
            </div>
        </div>
    );
};
// ===============================================================

// Exporting the Projects component
// ===============================================================
export default Projects;
// ===============================================================