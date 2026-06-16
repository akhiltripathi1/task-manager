export const API_URL = import.meta.env.VITE_API_URL;

import {toast} from "react-toastify"

// Utility function to show toast notifications
export const notify = (message, type) =>{
    
    // Call the toast method dynamically based on the type (e.g., 'success', 'error', 'info', 'warning')
    // 'message' is the text to display in the notification
    toast[type](message);
}