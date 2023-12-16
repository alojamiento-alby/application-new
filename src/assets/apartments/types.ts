export interface ApartmentStructure {
  id: number;
  title: string;
  description: {
    preview: string;
    detail: string;
  };
  image: {
    preview: string;
    detail: string;
    galleryIds: GalleryIds[];
  };
  services: {
    kitchen?: Services;
    laundry?: Services;
    pool?: Services;
    smoking?: Services;
    wifi?: Services;
  };
}

export interface Services {
  icon: string;
  tooltip: string;
}

export interface GalleryIds {
  id: number;
  imageModulePath: string;
  originalImage: string;
}

export interface Galleries {
  galleryImage: string[];
  galleryThumbnail: string[];
}
