import ReactCardFlip from 'react-card-flip';
import React, { Component } from 'react';

class SpeakC extends Component {
    constructor() {
        super();
        this.state = {
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    render() {
        return (
            <div className='SpeakC' >

                {/* <label for="#">
					<input type="checkbox" />
					<div className='card'>
						<div className='front'> front </div>
						<div className='back'>back</div>
					</div>
				</label> */}

                <section>
                    <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                        <div className='fspeak'
                            onClick={this.handleClick}
                        >
                            <fig><img src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                width={"100%"} /></fig>
                            <h3>{this.props.name}</h3>
                        </div>
                        <div className='bspeak' onClick={this.handleClick}>
                            <h5>{this.props.role}</h5>

                        </div>
                    </ReactCardFlip>
                </section>


            </div >
        )
    }
}

export default SpeakC;