// Desc: This file contains the code for the list component which will be used in resume page.
// to create the list component I used the following resources:
// https://mui.com/material-ui/react-list/
// =========================================================

// importing the list items
// =========================================================
import { frontEnd, backEnd } from '../../utils/listData';
// =========================================================

// Creating the List component
// =========================================================
const ListComponent = () => {
    return (
        <div>
            {[0].map((sectionId) => (
                <li key={`section-${sectionId}`}>
                    <ul>
                        <li>
                            <h6>{frontEnd.title}</h6>
                        </li>
                        {/* mapping  through frontEnd items which each item has three properties: name, icon, and color */}
                        {[0].map((row, index) => (
                            <div key={`row-${index}`}>
                                {frontEnd.items.map((item) => (
                                    <div key={item.name}>
                                        <div>
                                            <div>
                                                {/* <FontAwesomeIcon icon={item.icon} /> */}
                                            </div>
                                        </div>
                                        <div>{item.name}</div>
                                    </div>
                                ))}
                            </div>
                        ))}
                        <div>
                            <p>{backEnd.title}</p>
                        </div>
                        {/* mapping  through backEnd items which each item has three properties: name, icon, and color */}
                        {[0].map((row, index) => (
                            <div key={`row-${index}`}>
                                {backEnd.items.map((item) => (
                                    <div key={item.name}>
                                        <div>
                                            <div>
                                                {/* <FontAwesomeIcon icon={item.icon} /> */}
                                            </div>
                                        </div>
                                        <div>{item.name} </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </ul>
                </li>
            ))}
        </div>
    );
};
// =========================================================

// Exporting the List component
// =========================================================
export default ListComponent;
// =========================================================