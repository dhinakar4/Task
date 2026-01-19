import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
    fetchUsersStart,
    fetchUsersSuccess,
    fetchUsersFailure,
} from "./redux/slices/usersSlice";
import {
    fetchTodosStart,
    fetchTodosSuccess,
    fetchTodosFailure,
} from "./redux/slices/todosSlice";

import Loader from "./components/Loader";
import Pagination from "./components/Pagination";
import usePrevious from "./hooks/usePrevious";
import Navbar1 from "./Navbar1";

import { CiLinkedin } from "react-icons/ci";
import { LuStickyNote } from "react-icons/lu";
import { FaRegComment } from "react-icons/fa";
import "./Dashboard.css";

import img from "../public/img1.jpg";
import img1 from "../public/img2.jpg";

export default function Dashboard() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const usersState = useSelector((state) => state.users);
    const todosState = useSelector((state) => state.todos);

    const [activeTab, setActiveTab] = useState("users");
    const [search, setSearch] = useState("");
    const prevSearch = usePrevious(search);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // fetch only once
    const fetchData = async () => {
        if (activeTab === "users" && usersState.data.length === 0) {
            dispatch(fetchUsersStart());
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users");
                dispatch(fetchUsersSuccess(await res.json()));
            } catch (e) {
                dispatch(fetchUsersFailure(e.message));
            }
        }

        if (activeTab === "todos" && todosState.data.length === 0) {
            dispatch(fetchTodosStart());
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/todos");
                dispatch(fetchTodosSuccess(await res.json()));
            } catch (e) {
                dispatch(fetchTodosFailure(e.message));
            }
        }
    };

    useEffect(() => {
        fetchData();
        setSearch("");
        setCurrentPage(1);
    }, [activeTab]);

    const loading = activeTab === "users" ? usersState.loading : todosState.loading;
    const error = activeTab === "users" ? usersState.error : todosState.error;
    const data = activeTab === "users" ? usersState.data : todosState.data;

    const filteredData = data.filter((item) =>
        activeTab === "users"
            ? item.name.toLowerCase().includes(search.toLowerCase())
            : item.title.toLowerCase().includes(search.toLowerCase())
    );

    const indexOfLast = currentPage * itemsPerPage;
    const currentData = filteredData.slice(
        indexOfLast - itemsPerPage,
        indexOfLast
    );

    const location = useLocation();
    useEffect(() => {
        if(location.state?.activeTab) {
            setActiveTab(location.state.activeTab)
        }
    },[location.state])
    return (
        <>
            <Navbar1 />

            <div className="min-h-screen bg-gray-100 dark:bg-gray-800 p-4 dashboard">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 ">

                    <aside className="w-full lg:w-1/4">
                        <div className="rounded-xl ">

                            <h4 className="text-3xl font-bold mb-1">
                                {activeTab === "users" ? "Users" : "Todos"}
                            </h4>

                            <p className="text-gray-400 mb-6">
                                {activeTab === "users"
                                    ? "List of users"
                                    : "List of todo items"}
                            </p>

                            <div className="flex w-45 flex-col gap-3">
                                <button
                                    onClick={() => setActiveTab("users")}
                                    className={`px-4 py-2 rounded-lg text-left ${activeTab === "users"
                                            ? "bg-blue-600 text-white"
                                            : "bg-gray-200 text-dark"
                                        }`}
                                >
                                    Users
                                </button>

                                <button
                                    onClick={() => setActiveTab("todos")}
                                    className={`px-4 py-2 rounded-lg text-left ${activeTab === "todos"
                                            ? "bg-blue-600 text-white"
                                            : "bg-gray-200 text-dark"
                                        }`}
                                >
                                    Todos
                                </button>
                            </div>
                        </div>
                    </aside>


                    <div className="w-px bg-gray-300 dark:bg-gray-600"></div>
                    <main className="w-full lg:w-4/4 card1">

                        {/* Search */}
                        <input
                            type="text"
                            placeholder="Search..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-75 mb-4 p-2 rounded-lg border bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
                        />

                        {prevSearch && (
                            <p className="text-sm text-gray-500 mb-3">
                                Previous search: {prevSearch}
                            </p>
                        )}

                        {loading && <Loader />}
                        {error && <p className="text-red-500">{error}</p>}

                        {/* Cards */}
                        {!loading && currentData.length > 0 && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {currentData.map((item) => (
                                    <div
                                        key={item.id}
                                        onClick={() => navigate(activeTab === "users" ? `/users/${item.id}` : `/todos/${item.id}`)}
                                        className="bg-white dark:bg-gray-900 p-4 rounded-xl
                                                   border border-gray-200 dark:border-gray-700 hover:shadow-lg transition"
                                    >
                                        {activeTab === "users" ? (
                                            <>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <img
                                                        src={img}
                                                        className="w-8 h-8 rounded-full"
                                                    />
                                                    <h4 className="font-semibold !text-gray-800 truncate">{item.name}</h4>
                                                </div>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    {item.email}
                                                </p>
                                            </>
                                        ) : (
                                            <>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <img
                                                        src={img1}
                                                        className="w-8 h-8 rounded-full"
                                                    />
                                                    <h4 className="font-semibold truncate !text-gray-800">
                                                        {item.title}
                                                    </h4>
                                                </div>
                                                <p
                                                    className={`text-sm font-medium ${item.completed
                                                            ? "text-green-600"
                                                            : "text-red-600"
                                                        }`}
                                                >
                                                    {item.completed ? "Completed" : "Pending"}
                                                </p>
                                            </>
                                        )}

                                        <hr className="my-3" />

                                        <div className="flex justify-between text-sm text-gray-500">
                                            <span className="flex items-center gap-1">
                                                <CiLinkedin className="mt-1" /> LinkedIn
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <LuStickyNote />4
                                                <FaRegComment />2
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {!loading && currentData.length === 0 && (
                            <p className="text-center text-gray-500 mt-10">
                                No results found
                            </p>
                        )}

                        {/* Pagination */}
                        <Pagination
                            currentPage={currentPage}
                            totalItems={filteredData.length}
                            itemsPerPage={itemsPerPage}
                            onPageChange={setCurrentPage}
                        />
                    </main>
                </div>
            </div>
        </>
    );
}
