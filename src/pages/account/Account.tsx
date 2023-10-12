import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

export default function Account() {
    const isAuthenticated = useSelector((state: any) => state.user.user);

    const navigate = useNavigate()
    useEffect(() => {
        if (isAuthenticated === null) {
            navigate("/login")
        }
    }, [])

    return (
        <>
            {isAuthenticated !== null ? <Outlet /> : null}
        </>
    )
}