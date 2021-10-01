// import React, { Component } from 'react';
// import styles from './Feedback.module.css';
// import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
// import Statistics from '../Statistics/Statistics';
// import Section from '../Section/Section';
// import Notification from '../Notification/Notification';

// class Feedback extends Component {
//   static defaultProps = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   state = {
//     good: this.props.good,
//     neutral: this.props.neutral,
//     bad: this.props.bad,
//   };

//   // options = Object.keys(this.state);

//   handleIncrement = value => {
//     this.setState(prevState => ({
//       [value]: prevState[value] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   };

//   render() {
//     return (
//       <div className={styles.container}>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={this.options}
//             onLeaveFeedback={this.handleIncrement}
//           />
//         </Section>

//         <Section title="Statistics">
//           {this.countTotalFeedback() > 0 ? (
//             <Statistics
//               values={this.state}
//               totalCount={this.countTotalFeedback()}
//               percentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification message="No feedback given" />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }

// export default Feedback;
