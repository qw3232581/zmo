import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import $ from "jquery";
import ReactHighcharts from "react-highcharts";

// ReactDOM.render(<App city="bj"/>, document.getElementById('root'));

    class FlavorForm extends React.Component {
        constructor(props) {
            super(props);
            // this.state = {value: 'wh',baseUrl: 'http://2804h585v0.zicp.vip:32280',json:''};
            this.state = {value: 'wh',baseUrl: 'http://2804h585v0.zicp.vip:32280',json:'',isLoading:true};
            this.handleChange = this.handleChange.bind(this);
        }
        handleChange(event) {
            this.setState({value: event.target.value,isLoading:false});
        }
        componentWillMount(){
            const dataSourceUrl = this.state.baseUrl + "/city/map";
            $.get(dataSourceUrl, function (result) {
                this.setState({
                    json: result,
                    isLoading: false
                });
            }.bind(this));
        }
        render() {

            // const json = {"ms.fang":"眉山","huzhou":"湖州","xy":"襄阳","sjz":"石家庄","xz":"徐州","hk":"海口","ganzhou":"赣州","yc":"盐城","yinchuan":"银川","quanzhou":"泉州","mianyang":"绵阳","hz":"杭州","qd":"青岛","ld.fang":"乐东","wn.fang":"万宁","yt":"烟台","bt.fang":"保亭","yw":"义乌","yy":"岳阳","qy":"清远","zb":"淄博","zh":"珠海","aq":"安庆","zj":"镇江","zs":"中山","zjk":"张家口","cz.fang":"滁州","wc.fang":"文昌","hhht":"呼和浩特","jh":"金华","zz":"郑州","bd":"保定","jl":"吉林","linyi":"临沂","jn":"济南","bh":"北海","haimen":"海门","bj":"北京","fcg":"防城港","dy.fang":"德阳","jx":"嘉兴","zhanjiang":"湛江","jy":"江阴","jz":"晋中","sh":"上海","hanzhong":"汉中","xianyang":"咸阳","kf":"开封","wuhu":"芜湖","mas":"马鞍山","sr":"上饶","cc":"长春","cd":"成都","su":"苏州","km":"昆明","sx":"绍兴","sy":"沈阳","sz":"深圳","ks":"昆山","zhangzhou":"漳州","ta":"泰安","cq":"重庆","cs":"长沙","xsbn.fang":"西双版纳","tj":"天津","cm.fang":"澄迈","lf":"廊坊","ts":"唐山","dd":"丹东","dg":"东莞","weihai":"威海","ty":"太原","dl":"大连","lz":"兰州","dali":"大理","hrb":"哈尔滨","qhd.fang":"秦皇岛","changde":"常德","jian":"吉安","huangshi":"黄石","dazhou":"达州","wzs.fang":"五指山","ls.fang":"陵水","changzhou":"常州","xinxiang":"新乡","nb":"宁波","ez":"鄂州","nc":"南昌","nj":"南京","jiujiang":"九江","nn":"南宁","zhuzhou":"株洲","nt":"南通","fs":"佛山","wf":"潍坊","wh":"武汉","leshan.fang":"乐山","fz":"福州","jiangmen":"江门","dz.fang":"儋州","liuzhou":"柳州","lg.fang":"临高","luoyang":"洛阳","baoji":"宝鸡","san":"三亚","wx":"无锡","wz":"温州","gl":"桂林","yichang":"宜昌","xa":"西安","taizhou":"台州","xc":"许昌","gy":"贵阳","liangshan":"凉山","gz":"广州","xm":"厦门","ha":"淮安","qh.fang":"琼海","hui":"惠州","hf":"合肥","nanchong":"南充"};
            let cityMap = Object.keys(this.state.json).map(key => (
                <option key={key} value={key}>{this.state.json[key]}</option>
            ));

            const showRender = this.state.isLoading;
            this.state.isLoading = true;
            return (
                showRender ? <div/> : <div>
                        <label>choose favorite city：
                            <select value={this.state.value} onChange={this.handleChange}>
                                {cityMap}
                            </select>
                        </label>
                        <div>chosen: {this.state.value}</div>
                        <div>
                        	<App city={this.state.value}/>
                        </div>
                    </div>
            )
        }
    }
    ReactDOM.render(<FlavorForm/>,document.getElementById('root'))



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
