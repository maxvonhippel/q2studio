import React from 'react';
import moment from 'moment';

class Timer extends React.Component {

    componentDidMount() {
        this.interval = setInterval(() => {
            const diff = Date.now() - +this.props.start;
            const formattedDate = String(moment.utc(diff).format('HH:mm:ss'));
            this.elem.innerHTML = formattedDate;
        }, 900);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return (
            <span
                ref={(e) => {
                    this.elem = e;
                }}
            >
                00:00:00
            </span>
        );
    }

}

Timer.propTypes = {
    start: React.PropTypes.number
};

export default Timer;
