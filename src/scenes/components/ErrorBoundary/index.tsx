import React, {Component, ReactNode} from 'react';

interface IProps {
  children: ReactNode
}

class ErrorBoundary extends Component<IProps> {
  state = {
    hasError: false
  };

  componentDidCatch(): void {
    this.setState(() => ({
      hasError: true
    }));
  }

  render() {
    if (this.state.hasError) {
      return <h1>Ooops. That is not good</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;