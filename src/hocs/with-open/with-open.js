import React, {PureComponent} from 'react';

const withOpen = (Component) => {
  class WithOpen extends PureComponent {
    constructor(props) {
      super(props);
      this.handleCloseMenu = this.handleCloseMenu.bind(this);
      this.handleToggleShowMenu = this.handleToggleShowMenu.bind(this);
      this._proccesingDocumentClick = this._proccesingDocumentClick.bind(this);

      this.state = {
        opened: false,
      };
    }

    handleCloseMenu() {
      this.setState({opened: false});
    }

    handleToggleShowMenu() {
      this.setState((prevState) => ({opened: !prevState.opened}));
    }

    _proccesingDocumentClick() {
      this.setState({opened: false});
      document.removeEventListener(`click`, this._proccesingDocumentClick);
    }

    componentDidUpdate() {
      const {opened} = this.state;
      if (opened) {
        document.addEventListener(`click`, this._proccesingDocumentClick);
      }
    }

    render() {
      const {opened} = this.state;

      return (
        <Component
          {...this.props}
          opened={opened}
          onToggleShowMenu={this.handleToggleShowMenu}
          onCloseMenu={this.handleCloseMenu}
        />
      );
    }
  }

  return WithOpen;
};

export default withOpen;
