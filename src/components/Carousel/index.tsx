import styles from './styles.module.scss';

type CarouselProps = {
  width: string;
  height: number;
  wrapperWidth?: string;
  busImg: string[];
}

export function CarouselScroll({ width, height, wrapperWidth, busImg }: CarouselProps) {
  return (
    <div className={styles.itemsWrapper} style={wrapperWidth ? { width: wrapperWidth } : {}}>
      <div className={styles.items}>
      { busImg.map(image => {
        return (
          <div key={image} className={styles.item} style={{ width: width, height: height }}>
            <img src={image} alt="Onibus Alpha"/>
          </div>
        );
      }) }
      </div>
    </div>
  );
}
