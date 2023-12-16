//Gallery Import for thumbnails and modals. This object
//can be copy/pasted for future galleries, the
// only thing that needs to be changed is the
//  folder itself (Oceano in the current case.)
// Once a new apartment galleris have been completed,
// a new object within the galleryModules array has to be created,
// the properties are the global imports and the title of the apartment
//the title must be exactly the same as the one in the apartments array object.

const OceanoGalleryModulesThumbnails = import.meta.glob("./Oceano/*.jpeg", {
  query: { h: 200, format: "webp" },
});
const OceanoGalleryModulesModals = import.meta.glob("./Oceano/*.jpeg");

const galleryModules = [
  {
    title: "Océano",
    thumbnails: OceanoGalleryModulesThumbnails!,
    modals: OceanoGalleryModulesModals,
  },
];

export default galleryModules;
