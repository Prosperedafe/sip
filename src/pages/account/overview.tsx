import { Link } from "react-router-dom";
import { AccountNav } from "../../components/AccountNav";
import { useSelector } from "react-redux";

const AccountOverview = () => {

    const user = useSelector((state: any) => state.user?.user)

    return (
        <section id="account__overview">
            <AccountNav />
            <section id="account__overview__overview">
                <h2>Account Overview</h2>
                <section className="flex">
                    <section className="details">
                        <h3>Account Details</h3>
                        <h4>First Name</h4>
                        <p>{user?.firstName}</p>
                        <h4>Last Name</h4>
                        <p>{user?.lastName}</p>
                        <h4>Email Address</h4>
                        <p>{user?.email}</p>
                        <h4>Phone Number</h4>
                        <p>+123 456 7890</p>
                        <div>
                            <Link to="/edit-profile">Edit</Link>
                        </div>
                    </section>
                    <section className="address">
                        <h3>Address</h3>
                        <h4>Your default shipping address</h4>
                        <p>no 120 Ajao Street, Off Ikotun, Ikeja, Lagos State</p>
                        <h4>Other Addresses</h4>
                        <p>no 55, Unity Street, off Governor’s road, Ikotun, Lagos</p>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default AccountOverview;