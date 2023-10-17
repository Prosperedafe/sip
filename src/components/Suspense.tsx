import { FC } from "react";
import loadingImg from "../assets/loading-img.png";

export const Loading: FC = () => {
    return (
        <div className="loading-fallback">
            <h1>SipSavor</h1>
            <img src={loadingImg} alt="loading" />
        </div>
    )
}