import { Link } from "react-router-dom";
import "./Maintenance.css"
import { SideNavData } from "./SideNavData";


function Maintenance(){

    return (
        <div className="sidenav">
            <div>
                {SideNavData.map((val, key) => {
                    return (
                        <Link to={val.link} className="sidenavdata">
                            <div id="icon">{val.icon}</div>
                            <div id="title">{val.title}</div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default Maintenance;