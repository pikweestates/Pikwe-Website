import React from "react";
import ImagePlaceholder from "../ReUsables/ImagePlaceholder";
import IMAGE from "../../public/images/plot.jpg";
import styles from "../../styles/ReUsables/gallerysection.module.scss";

const GallerySection = ({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <div className={`section ${styles.gs__section}`} ref={ref}>
      <div className={`container ${styles.gs__container}`}>
        <div className={styles.gs__content}>
          <div className={styles.gallery__box}>
            <div className={styles.gb__main}>
              <ImagePlaceholder src={IMAGE} alt="PIKWE ESTATES" />
            </div>
            <div className={styles.gb__overlay}>
              <div className={styles.gb__top}>
                <p>
                  Newly developed residential plot features clearly marked
                  sections, paved access roads, and central water
                  infrastructure, set against serene rural landscapes.
                </p>
              </div>
              <div className={styles.gb__bottom}>
                <div className={styles.thumbnail}>
                  <ImagePlaceholder src={IMAGE} import React from 'react'
                  import renderer from 'react-test-renderer'
                  import { Provider } from 'react-redux'
                  
                  import store from '~/store'
                  import { GallerySection } from '../GallerySection'
                  
                  describe('<GallerySection />', () => {
                    const defaultProps = {}
                    const wrapper = renderer.create(
                      <Provider store={store}>
                       <GallerySection {...defaultProps} />
                      </Provider>,
                    )
                  
                    test('render', () => {
                      expect(wrapper).toMatchSnapshot()
                    })
                  }) />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
