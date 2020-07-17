import React, {PureComponent} from 'react';

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);
      this._handleOfferCardHover = this._handleOfferCardHover.bind(this);

      this.state = {
        activeItemId: null,
      };
    }

    _handleOfferCardHover(id) {
      this.setState({
        activeItemId: id,
      });
    }

    render() {
      const {activeItemId} = this.state;

      return (
        <Component
          {...this.props}
          activeItemId={activeItemId}
          onOfferCardHover={this._handleOfferCardHover}
        />
      );
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
