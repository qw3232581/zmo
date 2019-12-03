import React from 'react';
import $ from 'jquery';
import ReactHighcharts from 'react-highcharts';

class App extends React.Component {
    constructor(props) {
        console.log("constructor");
        super(props);
        this.state = {x: '', y: '', city: props.city, isLoading: true, baseUrl: 'http://2804h585v0.zicp.vip:32280'};
        // this.state = {x: '', y: '',timer: null,city: props.city,isLoading: true};
    }

    componentDidMount() {
        console.log("componentDidMount");
        // var dataSourceUrl = "http://10.58.2.168:9090/getSecondHouseNum?city=" + this.state.city;
        var dataSourceUrl = this.state.baseUrl + "/getSecondHouseNum?city=" + this.state.city;
        this.serverRequest = $.get(dataSourceUrl, function (result) {
            this.setState({
                x: result.x,
                y: result.y,
                isLoading: false
            });
        }.bind(this));

        // this.state.timer = setInterval(()=>{
        //   this.serverRequest = $.get(dataSourceUrl, function (result) {
        //     this.setState({
        //       x: result.x,
        //       y: result.y,
        //       isLoading: false
        //     });
        //   }.bind(this));
        // },1000 * 60 * 10)

    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps");
        // var dataSourceUrl = "http://10.58.2.168:9090/getSecondHouseNum?city=" + nextProps.city;
        var dataSourceUrl = this.state.baseUrl + "/getSecondHouseNum?city=" + nextProps.city;
        this.serverRequest = $.get(dataSourceUrl, function (result) {
            this.setState({
                x: result.x,
                y: result.y,
                isLoading: false
            });
        }.bind(this));

    }

    componentWillUnmount() {
        console.log('componentWillUnmount\t' + this.state.city);
        this.serverRequest.abort();
        // if(this.state.timer!= null) {
        //   clearInterval(this.state.timer);
        // }
    }

    render() {
        // console.log("render" + this.state.x);
        var config = {
            title: {
                text: '折线图'
            },
            subtitle: {
                text: '数据来源： lianjia.com'
            },
            yAxis: {
                title: {
                    text: '二手房房源数量'
                }
            },
            credits: {
                enabled: false
            },
            xAxis: {
                categories: this.state.x
            },
            series: [{
                name: '数量',
                data: this.state.y
            }]
        };

        const showRender = this.state.isLoading;
        this.state.isLoading = true;
        return (
            showRender ? <div/> : <div><ReactHighcharts config={config}/></div>
        );
    }

}

export default App;
