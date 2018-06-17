// @flow
import { css, StyleSheet } from 'aphrodite/no-important';
import React, { Component } from 'react';
import Lightbox from 'react-images';

interface IGallery {
  heading?: string;
  subheading?: string;
  images: Array<any>;
  showThumbnails?: boolean;
  preventScroll?: boolean;
  spinner?: string;
  spinnerColor?: string;
  spinnerSize?: string;
  theme?: string;
}

interface IGalleryState {
  lightboxIsOpen: boolean;
  currentImage: number;
}

class Gallery extends Component<IGallery, IGalleryState> {
  constructor() {
    super();

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0
    };
  }

  openLightbox = (index: number, event: Event) => {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true
    });
  };

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  };

  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  };

  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  };

  gotoImage = (index: number) => {
    this.setState({
      currentImage: index
    });
  };

  handleClickImage = () => {
    if (this.state.currentImage === this.props.images.length - 1) return;

    this.gotoNext();
  };

  renderGallery = () => {
    const { images } = this.props;

    if (!images) return;

    const gallery = images.map((obj, i) => {
      return (
        <a
          href={obj.src}
          className={css(classes.thumbnail, classes[obj.orientation])}
          key={i}
          onClick={e => this.openLightbox(i, e)}>
          <img
            src={obj.thumbnail}
            className={css(classes.source)}
            alt=""
            style={{ width: 'auto', height: 'auto', maxHeight: 180 }}
          />
        </a>
      );
    });

    return <div className={css(classes.gallery)}>{gallery}</div>;
  };

  render() {
    return (
      <div className="section">
        {this.props.heading && <h2>{this.props.heading}</h2>}
        {this.props.subheading && <p>{this.props.subheading}</p>}
        {this.renderGallery()}
        <Lightbox
          currentImage={this.state.currentImage}
          images={this.props.images}
          isOpen={this.state.lightboxIsOpen}
          onClickImage={this.handleClickImage}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrevious}
          onClickThumbnail={this.gotoImage}
          onClose={this.closeLightbox}
          preventScroll={this.props.preventScroll}
          showThumbnails={this.props.showThumbnails}
          spinner={this.props.spinner}
          spinnerColor={this.props.spinnerColor}
          spinnerSize={this.props.spinnerSize}
          theme={this.props.theme}
        />
      </div>
    );
  }
}

const gutter = {
  small: 2,
  large: 4
};

const classes = StyleSheet.create({
  gallery: {
    marginRight: -gutter.small,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',

    '@media (min-width: 500px)': {
      marginRight: -gutter.large
    }
  },

  // anchor
  thumbnail: {
    boxSizing: 'border-box',
    display: 'block',
    float: 'left',
    lineHeight: 0,
    paddingRight: gutter.small,
    paddingBottom: gutter.small,
    overflow: 'hidden',

    '@media (min-width: 500px)': {
      paddingRight: gutter.large,
      paddingBottom: gutter.large
    }
  },

  // orientation
  landscape: {
    width: '30%'
  },
  square: {
    paddingBottom: 0,
    width: '40%',

    '@media (min-width: 500px)': {
      paddingBottom: 0
    }
  },

  // actual <img />
  source: {
    border: 0,
    display: 'block',
    height: 'auto',
    maxWidth: '100%',
    width: 'auto'
  }
});

export default Gallery;
