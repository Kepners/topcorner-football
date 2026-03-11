"use client";

import { useEffect, useState } from "react";
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

function getNextIndex(currentIndex: number, direction: number, totalImages: number) {
  const nextIndex = currentIndex + direction;

  if (nextIndex < 0) {
    return totalImages - 1;
  }

  if (nextIndex >= totalImages) {
    return 0;
  }

  return nextIndex;
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
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const selectedImage = images[selectedIndex] ?? images[0];

  const stepImage = (direction: number) => {
    setSelectedIndex((currentIndex) => {
      return getNextIndex(currentIndex, direction, images.length);
    });
  };

  useEffect(() => {
    if (!isLightboxOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsLightboxOpen(false);
      }

      if (images.length > 1 && event.key === "ArrowLeft") {
        setSelectedIndex((currentIndex) => getNextIndex(currentIndex, -1, images.length));
      }

      if (images.length > 1 && event.key === "ArrowRight") {
        setSelectedIndex((currentIndex) => getNextIndex(currentIndex, 1, images.length));
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [images.length, isLightboxOpen]);

  if (!selectedImage) {
    return null;
  }

  return (
    <>
      <div className="space-y-4">
        <button
          type="button"
          onClick={() => setIsLightboxOpen(true)}
          className={`group block w-full overflow-hidden text-left ${panelClassName}`}
          aria-label={`Open gallery image ${selectedIndex + 1} in fullscreen`}
        >
          <div className={`relative ${mainAspectClass}`}>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              priority={priority}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className={getImageClasses(selectedImage.fit, selectedImage.lightPanel)}
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between bg-[linear-gradient(180deg,transparent,rgba(8,10,13,0.86))] px-4 py-4 text-[0.68rem] uppercase tracking-[0.2em] text-[var(--color-cream)] opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
              <span>
                Image {selectedIndex + 1} of {images.length}
              </span>
              <span>Open gallery</span>
            </div>
          </div>
        </button>

        <div className="flex items-center justify-between gap-4 rounded-[1.1rem] border border-white/10 bg-white/5 px-4 py-3 text-[0.68rem] uppercase tracking-[0.18em] text-[var(--color-mist)]">
          <span>
            Showing {selectedIndex + 1} of {images.length}
          </span>
          <button
            type="button"
            onClick={() => setIsLightboxOpen(true)}
            className="text-[var(--color-gold)] transition hover:text-[var(--color-cream)]"
          >
            Open fullscreen
          </button>
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

      {isLightboxOpen ? (
        <div className="fixed inset-0 z-[80] bg-[rgba(8,10,13,0.92)] p-4 sm:p-6">
          <div className="mx-auto flex h-full max-w-6xl flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(10,14,19,0.94)] shadow-[0_32px_96px_rgba(0,0,0,0.46)] backdrop-blur-md">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-6">
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[var(--color-sky)]">
                  Product gallery
                </p>
                <p className="mt-1 text-sm leading-6 text-[var(--color-cream)]">
                  {selectedImage.alt}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.68rem] uppercase tracking-[0.2em] text-[var(--color-cream)] transition hover:border-white/25"
              >
                Close
              </button>
            </div>

            <div className="relative min-h-0 flex-1 px-4 py-4 sm:px-6 sm:py-6">
              <div className="relative h-full overflow-hidden rounded-[1.8rem] border border-white/10 bg-[rgba(255,255,255,0.04)]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  sizes="100vw"
                  className={getImageClasses(
                    selectedImage.fit ?? "contain",
                    selectedImage.lightPanel,
                  )}
                />
              </div>

              {images.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={() => stepImage(-1)}
                    className="absolute left-8 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-[rgba(10,14,19,0.78)] px-4 py-3 text-[0.68rem] uppercase tracking-[0.18em] text-[var(--color-cream)] transition hover:border-white/25"
                    aria-label="Show previous image"
                  >
                    Prev
                  </button>
                  <button
                    type="button"
                    onClick={() => stepImage(1)}
                    className="absolute right-8 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-[rgba(10,14,19,0.78)] px-4 py-3 text-[0.68rem] uppercase tracking-[0.18em] text-[var(--color-cream)] transition hover:border-white/25"
                    aria-label="Show next image"
                  >
                    Next
                  </button>
                </>
              ) : null}
            </div>

            {images.length > 1 ? (
              <div className="grid grid-cols-4 gap-3 border-t border-white/10 px-4 py-4 sm:grid-cols-6 sm:px-6">
                {images.map((image, index) => {
                  const isActive = index === selectedIndex;

                  return (
                    <button
                      key={`${image.src}-lightbox`}
                      type="button"
                      onClick={() => setSelectedIndex(index)}
                      className={`overflow-hidden rounded-[1rem] border transition ${
                        isActive
                          ? "border-[var(--color-gold)] shadow-[0_0_0_1px_rgba(255,196,71,0.35)]"
                          : "border-white/10 hover:border-white/25"
                      }`}
                      aria-label={`Open gallery image ${index + 1}`}
                    >
                      <div className="relative aspect-square bg-[rgba(255,255,255,0.04)]">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(min-width: 640px) 10vw, 20vw"
                          className={getImageClasses(image.fit, image.lightPanel)}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
