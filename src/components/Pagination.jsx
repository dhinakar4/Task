export default function Pagination({
    currentPage,
    totalItems,
    itemsPerPage,
    onPageChange,
}) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    if (totalPages <= 1) return null; 

    return (
        <div className="flex justify-center items-center gap-4 mt-6">
            <button
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                className="px-3 md:px-4 py-2 bg-gray-200 text-gray-800 rounded disabled:opacity-50"
            >
                Prev
            </button>

            <span className="px-4 py-2 font-semibold">
                 {currentPage} of {totalPages}
            </span>

            <button
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                className="px-3 md:px-4 py-2 bg-gray-200 text-gray-800 rounded disabled:opacity-50"
            >
                Next
            </button>
        </div>
    );
}
