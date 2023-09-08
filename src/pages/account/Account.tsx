import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

export default function Account() {
    const authUser = useSelector((state: any) => state.user.user)
    const navigate = useNavigate()
    useEffect(() => {
        if (authUser === null || undefined) {
            navigate("/login")
        }
    })

    return (
        <>
            {authUser !== null || undefined ? <Outlet /> : null}
        </>
    )
}