import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notifications/notifications";
import Section from "./Section/section";
import Statistics from "./Statistics/statistics";


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  showFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback) {
      return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    }
    return 0;
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'left',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <Section title="Please leave feedback" >
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.showFeedback}
          />{' '}
        </Section>

        <Section title="Statistics" >
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (<Notification message="There is no feedback"></Notification>)
          }
        </Section>
      </div>
    );
  };
};

export default App;