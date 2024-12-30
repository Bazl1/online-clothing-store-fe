export interface ISlide {
    id: string;
    src: string;
    file?: File;
}

export interface ImageSliderProps {
    slides: ISlide[];
    onDelete: (slide: ISlide) => void;
}
