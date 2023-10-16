import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

if(0) {

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {count: 0}
        console.log('home constructor');
    }

    componentDidMount() {
        console.log('componentDidMount', this.state)
        console.log(this.props)
        this.setState({count: this.state.count + 1})
        this.incCount = this.incCount.bind(this);
        // Inside the constructor, we explicitly bind the myMethod method to the current instance of the component using this.myMethod = this.myMethod.bind(this);. This ensures that when myMethod is called, it has the correct this context, which refers to the component instance.
        // modern approach is to use  to use arrow functions for class methods, as arrow functions automatically bind this. Here's an example of that:
    }

    componentDidUpdate() {
        console.log('componentDidUpdate', this.state);
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate')
        return true;
    }

    componentDidCatch() {
        console.log('componentDidCatch');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    getSnapShotBeforeUpdate() {
        console.log('getSnapShotBeforeUpdate')
    }

    incCount() {
        this.setState(prevstate => {
            console.log(`prevState: ${prevstate}`)
            // console.log({count: prevstate.count})
            return {count: prevstate.count + 1}
        })
        // this.setState({count: this.state.count + 1})
        // console.log('incount')
        // this.setState({count: this.state.count + 1})
    }

    render() {
        console.log('home render')
        return (<div>
            <h1 onClick={this.incCount}>Hello World, Home!{this.state.count}</h1>
            <Link to="about">About Us</Link>
          </div>)
    }
}

}

// if(1) {

function Home(props) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('component mounted');
        setCount(count + 1)
        return () => {console.log('component unmount')}
    }, [])

    useEffect(() => {
        console.log('component updated');
        return () => {console.log('component update return')}
    })

    useEffect(() => {
        console.log('count updated');
        return () => {console.log('count update return ')}
    }, [count])

    console.log('component render')

    return (<div>
        <h1 onClick={() => {setCount(prevCount => prevCount + 1)}}>Hello World, Home{count}</h1>
        <Link to="about">About Us!</Link>
      </div>)

}
// }

export default Home;