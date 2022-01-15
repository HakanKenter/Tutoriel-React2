import React, {Component} from 'react'
import './Clock.css'

export class Clock extends Component {

    constructor (props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }

    componentDidMount () {
        this.timer = window.setInterval(() => {
            this.state({
                date: new Date()
            })
        })
    }

    componentWillUnmount () {
        window.clearInterval(this.timer)
    }

    render() {
        return <div className='clock'>
            {this.state.date.toLocaleString()}
        </div>
    }

}