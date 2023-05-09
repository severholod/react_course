import React, {useState} from 'react';
import styles from './styles.module.scss'

const Counter = () => {
    const [count, setCount] = useState<number>(0)

    const increment = () => {
        setCount((prevState) => ++prevState)
    }

    const decrement = () => {
        setCount((prevState) => --prevState)
    }

    return (
        <div className={styles.counter}>
            {count}
            <br/>
            <br/>
            <button className={styles.btn} onClick={increment}>+</button>
            <button className={styles.btn} onClick={decrement}>-</button>
        </div>
    );
};

export default Counter;