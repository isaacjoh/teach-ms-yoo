import React, {Component} from 'react';
import * as Animated from 'animated/lib/targets/react-dom';

export default class AnimatedRoute extends Component {
  static defaultProps = {
    enterSpringConfig: {
      friction: 6,
      tension: 16
    },
    leaveSpringConfig: {
      friction: 6,
      tension: 16
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      isRendering: props.visible,
      animation: new Animated.Value(props.visible ? 1 : 0)
    };
  }

  componentWillReceiveProps(nextProps) {
    const {enterSpringConfig, leaveSpringConfig} = this.props;
    if (!this.props.visible && nextProps.visible) {
      setTimeout(() => {
        this.setState({isRendering: true});
        Animated.spring(this.state.animation, {
          ...enterSpringConfig,
          toValue: 1
        }).start();
      }, 50);
    } else if (this.props.visible && !nextProps.visible) {
      Animated.spring(this.state.animation, {
        ...leaveSpringConfig,
        toValue: 0
      }).start(() => {
        if (!this.props.visible) {
          this.setState({isRendering: false});
        }
      });
    }
  }

  render() {
    const {children} = this.props;
    const {animation, isRendering} = this.state;

    if (!isRendering) return null;

    const style = {
      opacity: animation,
      transform: Animated.template`
        translate3d(0, ${animation.interpolate({
          inputRange: [0, 1],
          outputRange: ['20px', '0px']
        })}, 0)
      `
    };

    return (
      <Animated.div className="animated-route" style={style}>
        {children}
      </Animated.div>
    );
  }
}