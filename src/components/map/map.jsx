import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

import {cities} from "../../const.js";

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = React.createRef();
  }

  componentDidMount() {
    const city = cities[3].coordinates;
    const {offers} = this.props;

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [27, 39]
    });

    const zoom = 12;
    const map = leaflet.map(this._mapRef.current, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    offers.map((offer) => {
      const iconMarker = icon;

      leaflet
      .marker(offer.coordinates, {icon: iconMarker})
      .addTo(map);
    });
  }

  render() {
    return (
      <div
        id="map"
        ref={this._mapRef}
        style={{height: `100%`}}
      />
    );
  }

  componentWillUnmount() {
    const map = this._mapRef.current;

    map.remove();
  }

}

Map.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default Map;
