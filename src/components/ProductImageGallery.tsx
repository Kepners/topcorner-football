"use client";

import { useState } from "react";
import Image from "next/image";

import type { ProductGalleryImage } from "@/content/products";

type ProductImageGalleryProps = {
  images: ProductGalleryImage[];
  priority?: boolean;
  mainAspectClass?: string;
  thumbGridClassName?: string;
  panelClassName?: string;
  showCaption?: boolean;
};

function getImageClasses(fit?: "cover" | "contain", lightPanel?: boolean) {
  if (fit === "contain") {
    return `${lightPanel ? "bg-white " : ""}object-contain p-5`;
  }

  return "object-cover";
}

export default function ProductImageGallery({
  images,
  priority = false,
  mainAspectClass = "aspect-square",
  thumbGridClassName = "grid-cols-4",
  panelClassName = "rounded-[1.7rem] border border-white/10 bg-[var(--color-panel)]",
  showCaption = false,
}: ProductImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedImage = images[selectedIndex] ?? images[0];

  if (!selectedImage) {
    return null;
  }

  return (
    <div className="space-y-4">
      <div className={`overflow-hidden ${panelClassName}`}>
        <div className={`relative ${mainAspectClass}`}>
          <Image
            src={selectedImage.src}
            alt={selectedImage.alt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className={getImageClasses(selectedImage.fit, selectedImage.lightPanel)}
          />
        </div>
      </div>

      <div className={`grid gap-3 ${thumbGridClassName}`}>
        {images.map((image, index) => {
          const isActive = index === selectedIndex;

          return (
            <button
              key={image.src}
              type="button"
              onClick={() => setSelectedIndex(index)}
              aria-label={`Show product image ${index + 1}`}
              aria-pressed={isActive}
              className={`overflow-hidden rounded-[1.1rem] border transition ${
                isActive
                  ? "border-[var(--color-gold)] shadow-[0_0_0_1px_rgba(255,196,71,0.35)]"
                  : "border-white/10 hover:border-white/25"
              }`}
            >
              <div className="relative aspect-square bg-[var(--color-panel)]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 8vw, 20vw"
                  className={getImageClasses(image.fit, image.lightPanel)}
                />
              </div>
            </button>
          );
        })}
      </div>

      {showCaption ? (
        <p className="text-sm leading-7 text-[var(--color-mist)]">{selectedImage.alt}</p>
      ) : null}
    </div>
  );
}
