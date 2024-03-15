import React from "react"

const Alert = ({open, children, onClose}: {open: boolean, children: React.ReactNode, onClose?: () => void}) => {
    if (open) {
        document.getElementsByTagName('body')[0].classList.add('overflow-y-hidden');
    } else {
        document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden') 
    }

    return(
        <dialog className={`fixed ${open ? 'block' : 'hidden'} z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4`}>
    <div className="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-md">

        <div className="flex justify-end p-2">
            <button onClick={() => {
                onClose && onClose();
                document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden')
            }} type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
            </button>
        </div>

        {/* <div className="p-6 pt-0 text-center">
            <svg className="w-20 h-20 text-red-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 className="text-xl font-normal text-gray-500 mt-5 mb-6">Are you sure you want to delete this user?</h3>
            <a href="#"  onClick="closeModal('modelConfirm')"
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2">
                Yes, I'm sure
            </a>
            <a href="#" onClick="closeModal('modelConfirm')"
                className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center"
                data-modal-toggle="delete-user-modal">
                No, cancel
            </a>
        </div> */}

        {children}

    </div>
</dialog>
    )
}

export default Alert