import { AccountNav } from "../../components/AccountNav";

const EditAccount = () => {
    return (
        <section id="account__edit">
            <AccountNav />
            <section id="account__edit__edit">
                <h2>Edit Details</h2>
                <h3>Account Details</h3>
                <h4>Change Password</h4>
                <form>
                    <div>
                        <div>
                            <label htmlFor="">Previous Password</label>
                            <input type="text" placeholder="enter 8 digits characteristics" />
                        </div>
                        <div>
                            <label htmlFor="">New Password</label>
                            <input type="text" placeholder="enter 8 digits characteristics" />
                        </div>
                        <div>
                            <label htmlFor="">Confirm Password</label>
                            <input type="text" placeholder="enter 8 digits characteristics" />
                        </div>
                    </div>
                    <button>
                        Save
                    </button>
                </form>
            </section>
        </section>
    )
}

export default EditAccount;