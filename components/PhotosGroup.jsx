import Image from "next/image";

export default function PhotosGroup({ images, swaped = false }) {
  return (
    <div className="pb-4">
      {images.length === 5 ? (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <img
              src={images[0].url}
              alt="Placeholder"
              className="block w-full h-100 max-w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {images.slice(1).map((img, i) => (
              <div key={img.url}>
                <img
                  src={img.url}
                  alt="Placeholder"
                  className="block w-full h-48 max-w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div key={img.url}>
              <img
                src={img.url}
                alt="Placeholder"
                className="block w-full h-72 max-w-full object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
