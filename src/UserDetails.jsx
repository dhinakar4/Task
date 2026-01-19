import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./DetailPage.css";

export default function UserDetails() {
    const navigate = useNavigate();
    const { id } = useParams();
    const users = useSelector((state) => state.users.data);

    const user = users.find((u) => u.id === Number(id));

    if (!user) {
        return <p className="p-4">User not found</p>;
    }

    return (
        <div className="detail-page min-h-screen p-6 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            style={{ minHeight: "100vh" }}>
            <h1 className="text-3xl font-bold mb-4">
                User Details
            </h1>

            <div className="w-full md:w-1/4 p-4 md:p-6 rounded-xl border border-gray-200 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
                <p><b>Name:</b> {user.name}</p>
                <p><b>Email:</b> {user.email}</p>
                <p><b>Phone:</b> {user.phone}</p>
                <p><b>Company:</b> {user.company?.name}</p>
            </div>
            <button onClick={() =>
                navigate("/dashboard", {
                    state: { activeTab: "users" }
                })
            } className="text-white rounded-pill bg-blue-500 py-1 mt-2 px-3">back</button>

        </div>
    );
}
