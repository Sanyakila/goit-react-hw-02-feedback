import PropTypes from 'prop-types';
import css from './statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <div className={css.container}>
        <p className={css.description}>
            Good: {good}</p>
        <p className={css.description}>
            Neutral: {neutral}</p>
        <p className={css.description}>
            Bad: {bad}</p>
        <p className={css.description}>
            Total: {total}</p>
        <p className={css.description}>
            Positive feedback: {positivePercentage} %</p>
    </div>
);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;

