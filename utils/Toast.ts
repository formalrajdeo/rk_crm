import { toast } from 'react-toastify'

const Toast = (toastProps: toastPropsType) => {
    const { TOAST_TYPE, TOAST_MESSAGE } = toastProps;

    if (TOAST_TYPE === "SUCCESS") {
        return (
            toast.success(TOAST_MESSAGE, {
                position: toast.POSITION.TOP_RIGHT
            })
        )
    }

    if (TOAST_TYPE === "ERROR") {
        return (
            toast.error(TOAST_MESSAGE, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        )
    }

}

export default Toast