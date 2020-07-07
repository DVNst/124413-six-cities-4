import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this._addMarkers = this._addMarkers.bind(this);

    this._mapRef = React.createRef();
  }

  _addMarkers(offers, offerActive) {
    let markers = [];
    offers.map((offer) => {
      const iconMarker = (offer === offerActive) ? this.iconActive : this.icon;
      markers.push(leaflet.marker(offer.coordinates, {icon: iconMarker}));
    });

    this.layerMarkers = leaflet.layerGroup(markers);
    this.map.addLayer(this.layerMarkers);
  }

  componentDidMount() {
    const {offers, offerActive, coordinates: city} = this.props;

    this.icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [27, 39]
    });

    this.iconActive = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [27, 39]
    });

    this.zoom = 12;
    this.map = leaflet.map(this._mapRef.current, {
      center: city,
      zoom: this.zoom,
      zoomControl: false,
      marker: true
    });
    this.map.setView(city, this.zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);

    this._addMarkers(offers, offerActive);
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

  componentDidUpdate() {
    const {offers, offerActive, coordinates: city} = this.props;

    this.layerMarkers.remove();
    this._addMarkers(offers, offerActive);
    this.map.setView(city, this.zoom);
  }

  componentWillUnmount() {
    const map = this._mapRef.current;

    map.remove();
  }

}

Map.propTypes = {
  coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    placeName: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    period: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    mark: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    coordinates: PropTypes.arrayOf(PropTypes.number).isRequired
  })).isRequired,
  offerActive: PropTypes.shape({
    id: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    placeName: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    period: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    mark: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    coordinates: PropTypes.arrayOf(PropTypes.number).isRequired
  }),
};

export default Map;
