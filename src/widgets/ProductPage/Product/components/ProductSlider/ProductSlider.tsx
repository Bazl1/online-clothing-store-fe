"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import cn from "classnames";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/ui";

import { ProductSliderProps } from "./ProductSlider.types";

import "swiper/css";
import "swiper/css/navigation";
import styles from "./ProductSlider.module.scss";

const ProductSlider = ({ slides, ...props }: ProductSliderProps) => {
    const nextRef = useRef<HTMLButtonElement | null>(null);
    const prevRef = useRef<HTMLButtonElement | null>(null);

    return (
        <Swiper
            className={styles.slider__swiper}
            slidesPerView={1}
            spaceBetween={30}
            navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current
            }}
            modules={[Navigation]}
            {...props}
        >
            {slides?.map((slide: string, index: number) => (
                <SwiperSlide key={index} className={styles.slider__slide}>
                    <div className={styles.slider__slide_box}>
                        <Image src={slide} alt="image" fill />
                    </div>
                </SwiperSlide>
            ))}
            <Button
                ref={prevRef}
                className={cn(styles.slider__btn, styles.slider__btn_prev)}
            >
                <ChevronLeft strokeWidth={1.5} />
            </Button>
            <Button
                ref={nextRef}
                className={cn(styles.slider__btn, styles.slider__btn_next)}
            >
                <ChevronRight strokeWidth={1.5} />
            </Button>
        </Swiper>
    );
};

export default ProductSlider;
