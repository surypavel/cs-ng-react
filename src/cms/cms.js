import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import PricingPagePreview from "./preview-templates/PricingPagePreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

const languages = ["", "_en"];

languages.forEach((lang) => {
  CMS.registerPreviewTemplate(`index${lang}`, IndexPagePreview);
  CMS.registerPreviewTemplate(`about${lang}`, AboutPagePreview);
  CMS.registerPreviewTemplate(`pricing${lang}`, PricingPagePreview);
  CMS.registerPreviewTemplate(`blog${lang}`, BlogPostPreview);
});
