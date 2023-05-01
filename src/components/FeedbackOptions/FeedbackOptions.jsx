import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className={css.buttonContainer}>
            {options.map((option) =>(
                <button
                    type="button"
                    key={option}
                    onClick={() => onLeaveFeedback(option)}
                    className={css.feedbackButton}
                >{option}</button>
            )) }
        </div>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;