import React, { useState } from 'react';
import './Tooltip.css';

const Tooltip = ({ position, content, children }) => {   //children - элементы, для которых будет показываться подсказка.
    const [isVisible, setIsVisible] = useState(false); //isVisible – подсказка көрінуіне отвечает,екыншысы обновить ету состояны

    const handleMouseEnter = () => {    //бул функция мышкамен барганда чтобы курсор шакыру ушын трю деп беремыз
        setIsVisible(true);
    };

    const handleMouseLeave = () => {      //бул функция мышкамен барганда чтобы курсор шакыру ушын фолс деп беремыз
        setIsVisible(false);
    };

    return (
        <div className="tooltip-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {children}
            {isVisible && (
                <div className={`tooltip tooltip-${position}`}>
                    <div className="tooltip-arrow" />
                    {content}
                </div>
            )}
        </div>
    );
};

export default Tooltip; // Эта строка экспортирует компонент Tooltip по умолчанию из этого файла
