import Image from 'next/image'
import React from 'react'
import { GrFormClose } from 'react-icons/gr'
import styles from '../styles/page.module.css'
import { MODAL_BG_IMAGE } from '@/assets/images'

const Modal = (modalProps: modalPropsType) => {
    const { setHideModal } = modalProps;

    return (
        <div
            className={styles.modal__container}
        >
            <div className="flex justify-center items-center w-full">
                <div>
                    <span className='text-xl font-bold'>Unsaved Changes</span>
                </div>
            </div>
            <div
                className={styles.modal__container_close}
            >
                <button
                    onClick={() => setHideModal(false)}
                    type="button"><span><GrFormClose fontSize={'2em'} /></span></button>
            </div>
            <div className="">
                <Image
                    src={MODAL_BG_IMAGE}
                    alt={"modal"}
                    height={300}
                    width={400}
                />
            </div>
            <div className="flex flex-col">
                <span className='text-lg font-bold'>There are Unsaved Changes</span>
                <span className='text-sm'>Are you sure you want to cancel?</span>
            </div>
            <div
                className="text-white font-bold flex w-full justify-center items-center mt-4">
                <div
                    className="pr-4"
                >
                    <input
                        onClick={() => setHideModal(false)}
                        type='text'
                        value='Cancel'
                        className={styles.modal__container_cancel}
                        readOnly
                    />
                </div>
                <div
                    className=""
                    style={{ paddingLeft: '1rem' }}
                >
                    <input
                        type='submit'
                        value='Save Changes'
                        className={styles.modal__container_save}
                        readOnly
                    />
                </div>
            </div>
        </div>
    )
}

export default Modal