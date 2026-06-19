import { Outlet } from "react-router-dom"


const DashBoard = () => {
    return (
        <>
            <h1>this is admin dashboard</h1>
            <Outlet />
        </>
    )
}

export default DashBoard