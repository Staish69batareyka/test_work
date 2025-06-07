import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Функция прокрутки вверх после перехода по ссылкам через Routes
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};
export default ScrollToTop