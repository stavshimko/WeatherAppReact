import React from 'react';
import Axios from "axios";

export default class Weather extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            city: props.city,
            weather: {}
        };

    }

    // componentDidMount() {
    //     const key = `0aaae74896b719e82dd8d6ff4fbd9cf5`;
    //     const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&appid=${key}`;
    //     // console.log(this.state.city);
    //     Axios.get(url).then((res) => {
    //         if (res.status==200){
    //             this.setState({weather: res.data})
    //             // console.log(res.data)
    //         }
    //     })
    //
    // }

    handleCity = (event) => {
        this.setState({
            city: event.target.value
        });
        // alert(this.state.city);

    }

    handleSumbit = (event) => {
        event.preventDefault();
        const key = `0aaae74896b719e82dd8d6ff4fbd9cf5`;
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&appid=${key}`;
        // console.log(this.state.city);
        Axios.get(url).then((res) => {
            if (res.status==200){
                this.setState({weather: res.data})
                // console.log(res.data)
            }
        })
    // console.log(this.state);
    }

    render() {

        const {weather} = this.state
        // const {status} = this.state
        // alert("------:"+status+":---");
        // console.log(status)
        if (weather.main) {
            return (
                <div>
                    <div className="cover">
                        <h1>Discover what's out there.</h1>

                        <form className="flex-form" >
                            <input type="text" placeholder="Check again..."  onChange={this.handleCity}></input>
                            <button type="submit" onClick={this.handleSumbit}>Search</button>
                            {/*<input type="submit">Search</input>*/}
                            {/*<input type="submit" value="Search"></input>*/}
                        </form>
                    </div>
                    <div className="down">
                        <h1>Temperature in {this.state.weather.name} is: {this.state.weather.main.temp} ˚C</h1>
                        <h2>Feels like: {this.state.weather.main.feels_like} ˚C</h2>


                    </div>
                </div>
            );
        }
    // else if ((status != '') && (status != 200)){
    //         return (
    //             <div className="cover">
    //                 <h1>Discover what's out there.</h1>
    //
    //                 <form className="flex-form" >
    //                     <input type="text" placeholder="Invalid city!"  onChange={this.handleCity}></input>
    //                     <button type="submit" onClick={this.handleSumbit}>Search</button>
    //                 </form>
    //             </div>
    //
    //         )
    //     }
       else {
            return (
                <div className="cover">
                    <h1>Discover what's out there.</h1>

                    <form className="flex-form" >
                        <input type="text" placeholder="Check your city..."  onChange={this.handleCity}></input>
                        <button type="submit" onClick={this.handleSumbit}>Search</button>
                    </form>
                </div>

            )
        }

    }
}

