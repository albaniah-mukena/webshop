import Image, { ImageLoaderProps } from "next/image";

type ImageKitProps = {
  src: string,
  alt: string,
  width: number,
  height?: number
}

const imageKitLoader = ({ src, width, quality }: ImageLoaderProps) => {
  if (src[0] === "/") src = src.slice(1)

  const params = [`w-${width}`];
  if (quality) {
    params.push(`q-${quality}`);
  }

  const paramsString = params.join(",")
  var urlEndpoint = "https://ik.imagekit.io/albaniah"
  if (urlEndpoint[urlEndpoint.length - 1] === "/") urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1)

  return `${urlEndpoint}/${src}?tr=${paramsString}`
}

export const ImageKit = ({ src, alt, width, height }: ImageKitProps) => {
  return (
    <Image
      loader={imageKitLoader}
      src={src}
      alt={alt}
      width={width}
      height={height ? height : width}
    />
  );
};
