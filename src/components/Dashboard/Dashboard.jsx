import React from 'react';
import style from './Dashboard.module.css';
// all-components
import Header from './Header/Header';
import Information from './Information/Information';
import DisplayData from './Display-data/DisplayData';
import DashboardTable from './Table/DashboardTable';


function Dashboard() {
    return (
        <>
            <div className={style.container}>
                <div>
                    <Header />
                </div>

                <div>
                    <Information />
                </div>

                <div>
                    <DisplayData />
                </div>

                <div>
                    {/* <DashboardTable /> */}
                </div>
            </div>
        </>
    )
}

export default Dashboard;