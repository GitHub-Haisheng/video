/**
 * Created by boli on 2017/5/18.
 */
/**
 * Created by boli on 2017/5/18.
 */
import React,{Component} from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
export default class APP extends React.Component{
    render(){
        return(
                <div className="position" key={ this.props.location.pathname}>{this.props.children}</div>        )
    }
}