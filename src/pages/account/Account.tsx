import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Account() {
    const authId = JSON.parse(localStorage.getItem("sip-auth")!)
    const navigate = useNavigate()
    useEffect(() => {
        if (authId === null || undefined) {
            navigate("/login")
        }
    })

    return (
        <>
            {authId !== null || undefined ? <Outlet /> : null}
        </>
    )
}