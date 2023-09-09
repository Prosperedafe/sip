import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

export default function Account() {
    const isAuthenticated = useSelector((state: any) => state.user.isAuthenticated);
    const navigate = useNavigate()
    useEffect(() => {
        if (isAuthenticated === false) {
            navigate("/login")
        }
    }, [])

    return (
        <>
            {isAuthenticated === true ? <Outlet /> : null}
        </>
    )
}