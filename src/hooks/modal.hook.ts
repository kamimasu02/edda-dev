import { useState } from "react";

interface UseModalProps {
    itemNumber: number;
    setItemId: (id: number) => void;
}

export const useModal = ({ itemNumber, setItemId }: UseModalProps)  => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (isModalOpen) setIsModalOpen(false);
        else {
            setIsModalOpen(true);
            setItemId(itemNumber);
        }
    };

    return {
        isModalOpen,
        toggleModal,
    };
};
