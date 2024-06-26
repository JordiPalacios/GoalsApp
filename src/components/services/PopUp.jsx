export const PopUp = ({ children }) => {

    return (
        <>
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75">
                <div className="flex items-center justify-center w-full h-full">                    
                    { children }
                </div>
            </div>
        </>
    )
}