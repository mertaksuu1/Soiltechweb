import { HeroSlider } from "../HeroSlider";
import slide1 from "@assets/stock_images/modern_building_exte_4d91d828.jpg";
import slide2 from "@assets/stock_images/professional_interio_31d5920b.jpg";
import slide3 from "@assets/stock_images/thermal_insulation_i_fefab6df.jpg";
import slide4 from "@assets/stock_images/modern_building_exte_32e322e8.jpg";
import slide5 from "@assets/stock_images/professional_interio_abe70ae2.jpg";
import slide6 from "@assets/stock_images/thermal_insulation_i_d9cfa691.jpg";
import slide7 from "@assets/stock_images/modern_building_exte_bdc431b9.jpg";

const images = [slide1, slide2, slide3, slide4, slide5, slide6, slide7];

export default function HeroSliderExample() {
  return (
    <HeroSlider
      images={images}
      onPrimaryAction={() => console.log("Primary action clicked")}
      onSecondaryAction={() => console.log("Secondary action clicked")}
    />
  );
}
